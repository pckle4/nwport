import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ansh Shah - Full Stack Developer | Personal Portfolio',
  description: 'Ansh Shah - Full Stack Developer Portfolio. Personal portfolio showcasing web development projects and skills. Not affiliated with any third-party brands.',
  authors: [{ name: 'Ansh Shah' }],
  creator: 'Ansh Shah',
  publisher: 'nowhile.com',
  robots: 'index, follow',
  classification: 'Personal Portfolio Website',
  category: 'Technology, Web Development, Portfolio',
  openGraph: {
    type: 'website',
    siteName: 'Ansh Shah Portfolio',
    title: 'Ansh Shah - Full Stack Developer',
    description: 'Personal portfolio website of Ansh Shah, Full Stack Developer. Educational and demonstration purposes only.',
    url: 'https://nowhile.com',
  },
  twitter: {
    card: 'summary',
    title: 'Ansh Shah - Full Stack Developer Portfolio',
    description: 'Personal portfolio showcasing web development skills. Not affiliated with any third-party services.',
  },
  other: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} overflow-x-hidden`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storageKey = "portfolio-theme";
                  var theme = localStorage.getItem(storageKey);
                  var supportDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  var element = document.documentElement;
                  var isDark = theme === "dark" || (theme === "system" && supportDarkMode) || (!theme && supportDarkMode);
                  if (isDark) {
                    element.classList.add("dark");
                  } else {
                    element.classList.remove("dark");
                  }
                } catch (e) {
                  console.error("Critical theme restoration failed", e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        <div className="aurora-bg" aria-hidden="true" />
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
