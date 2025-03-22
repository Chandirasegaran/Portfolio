"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const socialVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    }),
  }

  return (
    <motion.footer
      className="py-8 border-t border-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="text-xl font-bold text-primary">
              Chandirasegaran
            </Link>
            <p className="text-sm text-muted-foreground mt-1">Associate Software Engineer</p>
          </motion.div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <motion.a
              custom={0}
              variants={socialVariant}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/chandirasegaran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              custom={1}
              variants={socialVariant}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/chandirasegaran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              custom={2}
              variants={socialVariant}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:chandirasegaransegar@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>

          <motion.div
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            © {currentYear} Chandirasegaran. All rights reserved.
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

