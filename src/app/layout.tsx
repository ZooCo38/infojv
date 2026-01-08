import type { Metadata } from "next";
import "./globals.css";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import ContactModal from "@/components/contact/ContactModal";

export const metadata: Metadata = {
  metadataBase: new URL('https://infojv.net'),
  title: {
    default: 'Info JV — Expert Digital pour votre Business',
    template: '%s | Info JV',
  },
  description: 'Développement web, applications mobiles et solutions IA. 20+ ans d\'expérience. Basé à Marseille.',
  keywords: ['développeur web', 'application mobile', 'flutter', 'marseille', 'site vitrine', 'IA'],
  authors: [{ name: 'Julien Villard' }],
  creator: 'Info JV',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://infojv.net',
    siteName: 'Info JV',
    title: 'Info JV — Expert Digital pour votre Business',
    description: 'Développement web, applications mobiles et solutions IA.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0"
        />
      </head>
      <body className="antialiased">
        <ContactModalProvider>
          {children}
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
