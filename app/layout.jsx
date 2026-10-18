import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Chandirasegaran - Software Engineer Portfolio",
  description:
    "Software Engineer building scalable backend services with Java, Spring Boot, Microservices and Rust. REST APIs, distributed systems, PostgreSQL, MongoDB and AWS.",
  keywords: "software engineer, backend engineer, Java, Spring Boot, Microservices, Rust, REST API, distributed systems, PostgreSQL, AWS",
  openGraph: {
    title: "Chandirasegaran - Software Engineer Portfolio",
    description: "Software Engineer building scalable backend services with Java, Spring Boot, Microservices and Rust.",
    url: "https://chandirasegaran-portfolio.vercel.app",
    siteName: "Chandirasegaran Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chandirasegaran Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandirasegaran - Software Engineer Portfolio",
    description: "Software Engineer building scalable backend services with Java, Spring Boot, Microservices and Rust.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col overflow-x-clip">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

