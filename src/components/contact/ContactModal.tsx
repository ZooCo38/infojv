'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useContactModal } from '@/contexts/ContactModalContext';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Icon from '@/components/ui/Icon';

/**
 * Form data interface for contact form
 */
interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}

/**
 * Form status type for loading states
 */
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * API response interface
 */
interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Form validation errors interface
 */
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Animation variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring' as const, damping: 25, stiffness: 300 }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 }
  },
};

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * ContactModal component
 * Accessible modal with contact form, animations, and focus trap
 */
export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();

  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [apiError, setApiError] = useState<string>('');

  // Refs for focus management
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  /**
   * Reset form to initial state
   */
  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '', message: '', honeypot: '' });
    setErrors({});
    setStatus('idle');
    setApiError('');
  }, []);

  /**
   * Handle modal close with form reset
   */
  const handleClose = useCallback(() => {
    closeModal();
    // Reset form after animation completes
    setTimeout(resetForm, 300);
  }, [closeModal, resetForm]);

  /**
   * Validate form fields
   */
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot (anti-spam)
    if (formData.honeypot) {
      // Silently ignore spam submission
      setStatus('success');
      return;
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setApiError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setApiError(data.error || 'Une erreur est survenue');
      }
    } catch {
      setStatus('error');
      setApiError('Impossible de contacter le serveur');
    }
  };

  /**
   * Handle input changes
   */
  const handleInputChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  /**
   * Focus trap and keyboard handling
   */
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Close on Escape
      if (e.key === 'Escape') {
        handleClose();
        return;
      }

      // Focus trap on Tab
      if (e.key === 'Tab') {
        const modal = modalRef.current;
        if (!modal) return;

        const focusableElements = modal.querySelectorAll<HTMLElement>(
          'button, input, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Focus first input when modal opens
    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleClose]);

  /**
   * Handle backdrop click
   */
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={backdropVariants}
            onClick={handleBackdropClick}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            className={cn(
              "relative w-full max-w-md bg-bg-card rounded-lg p-6 sm:p-8",
              "shadow-2xl"
            )}
            variants={modalVariants}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              className={cn(
                "absolute top-4 right-4 p-2 rounded-full",
                "text-text-secondary hover:text-text-primary",
                "hover:bg-black/5 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-accent"
              )}
              aria-label="Fermer la modale"
            >
              <Icon name="close" className="text-xl" />
            </button>

            {/* Title */}
            <h2
              id="contact-modal-title"
              className="font-poppins text-2xl font-semibold text-text-primary mb-2"
            >
              Me contacter
            </h2>

            {/* Personal message (FR30) */}
            <p className="font-poppins text-sm text-text-secondary mb-6">
              Pas de commercial, c&apos;est moi qui réponds
            </p>

            {/* Success state */}
            {status === 'success' && (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="check_circle" className="text-4xl text-accent" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-text-primary mb-2">
                  Message envoyé !
                </h3>
                <p className="font-poppins text-text-secondary mb-6">
                  Je vous répondrai dans les plus brefs délais.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className={cn(
                    "px-6 py-3 rounded-lg bg-accent text-black font-poppins font-medium",
                    "hover:bg-accent/90 transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  )}
                >
                  Fermer
                </button>
              </div>
            )}

            {/* Form */}
            {status !== 'success' && (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot field (NFR7) - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleInputChange('honeypot')}
                  className="absolute opacity-0 pointer-events-none h-0 w-0"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="space-y-4">
                  <Input
                    ref={firstInputRef}
                    label="Nom"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    error={errors.name}
                    disabled={status === 'loading'}
                    autoComplete="name"
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    error={errors.email}
                    disabled={status === 'loading'}
                    autoComplete="email"
                  />

                  <Textarea
                    label="Message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    error={errors.message}
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Error state with mailto fallback (NFR27) */}
                {status === 'error' && (
                  <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="font-poppins text-sm text-red-600 mb-2">
                      {apiError}
                    </p>
                    <p className="font-poppins text-sm text-text-secondary">
                      Vous pouvez aussi m&apos;écrire directement à{' '}
                      <a
                        href="mailto:contact@infojv.net"
                        className="text-accent hover:underline font-medium"
                      >
                        contact@infojv.net
                      </a>
                    </p>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={cn(
                    "w-full mt-6 px-6 py-3 rounded-lg font-poppins font-medium",
                    "bg-accent text-black",
                    "hover:bg-accent/90 transition-all duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "flex items-center justify-center gap-2"
                  )}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="animate-spin">
                        <Icon name="progress_activity" className="text-xl" />
                      </span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Icon name="send" className="text-xl" />
                      Envoyer
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
