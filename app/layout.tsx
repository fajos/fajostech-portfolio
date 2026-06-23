import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import FloatingWhatsApp from './components/FloatingWhatsApp'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fajostech | Premium Mobile & Web Development Agency',
  description: 'Expert mobile app development, high-performance web applications, and seamless digital deployment. Transform your ideas into scalable tech solutions with FajosTech.',
  keywords: [
    'Mobile App Development',
    'Web Development',
    'Next.js Specialist',
    'React Native Apps',
    'Fajostech',
    'Software Engineering',
    'Digital Transformation',
    'Tech Agency Nigeria',
    'UI/UX Design'
  ],
  authors: [{ name: 'FajosTech' }],
  openGraph: {
    title: 'Fajostech | Premium Mobile & Web Development Agency',
    description: 'Building the future of digital solutions. Expert Mobile and Web development services.',
    url: 'https://fajostech.com',
    siteName: 'FajosTech',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'FajosTech Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fajostech.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fajostech | Premium Mobile & Web Development Agency',
    description: 'Transform your ideas into scalable tech solutions with FajosTech.',
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&h=630&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'FajosTech',
    image: 'https://fajostech.com/logo.png',
    '@id': 'https://fajostech.com',
    url: 'https://fajostech.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.5244,
      longitude: 3.3792,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://twitter.com/fajostech',
      'https://linkedin.com/company/fajostech'
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <CustomCursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
