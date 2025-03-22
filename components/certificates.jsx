"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certificates = [
  "Java Course - Mastering the Fundamentals on Scaler Topics",
  "Programming for Everybody (Getting Started with Python)",
  "C for Everyone: Programming Fundamentals",
  "Flutter Bootcamp",
  "Javascript For Beginners Complete Course",
  "Getting Started with Git and GitHub",
  "Introduction to Web Development with HTML, CSS, JavaScript",
  "IoT and its Application",
  "Introduction to Microsoft Excel",
  "Mobile Debugging and Troubleshooting",
]

const awards = [
  {
    title: "Merit Scholarship",
    organization: "Pondicherry University",
    description:
      "Secured First Rank in two consecutive semesters, earning a scholarship of ₹10,000 each semester. Awarded additional scholarships of ₹7,500 and ₹5,000 in subsequent semesters for academic excellence.",
  },
]

const Certificates = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  const listItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
      },
    }),
  }

  return (
    <section id="certificates" className="section-container">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          Certificates & Awards
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariant}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Certificates</h3>
                <ul className="space-y-2">
                  {certificates.map((certificate, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={listItemVariant}
                      className="flex items-center gap-2"
                    >
                      <motion.div className="h-2 w-2 rounded-full bg-primary" whileHover={{ scale: 1.5 }}></motion.div>
                      <span>{certificate}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariant}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Awards</h3>
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                        <Award className="h-5 w-5 text-primary" />
                      </motion.div>
                      <h4 className="font-bold">{award.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
                    <p>{award.description}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Certificates

