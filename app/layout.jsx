import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Chandirasegaran - Software Engineer Portfolio",
  description:
    "Associate Software Engineer and a Freelancer in Puducherry, India with expertise in full-stack development, cloud computing, and DevOps. Skilled in Java, Python, Spring Boot, ReactJS, NextJS, and AWS.",
    icons: {
      icon: '/favicon.ico', // or '/favicon.png', etc.
    },
  keywords: "software engineer, full-stack developer, Java, Python, Spring Boot, ReactJS, AWS, DevOps",
  
  openGraph: {
    title: "Chandirasegaran - Software Engineer Portfolio",
    description: "Associate Software Engineer and a Freelancer with expertise in full-stack development, cloud computing, and DevOps.",
    url: "https://segar-portfolio.vercel.app/",
    siteName: "Chandirasegaran Portfolio",  
    
    
    images: [
      {
        url: "/pic.png",
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
    description: "Associate Software Engineer and Freelancer Living in Puducherry, India with expertise in full-stack development, cloud computing, and DevOps.",
    images: ["/pic.png"],
    site: "@chandirasegaran",
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
    generator: 'Segar'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/pic.png" />
        <link rel="apple-touch-icon" href="/pic.png" />
        <meta name="google-site-verification" content="DyI5782naJAFI6v7Wn0q3u0Napg4x4LEBS02gI_Z3Ic" />
<meta name="msvalidate.01" content="2E7F8AC7685078D4CC68C20B36224C00" />
      </head>
       
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'