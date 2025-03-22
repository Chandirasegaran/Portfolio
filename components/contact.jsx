"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react';
import * as Toast from "@radix-ui/react-toast"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [open, setOpen] = useState(false) // Controls toast visibility
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const [state, handleSubmit] = useForm("mjkywvqq")

  // Reset form and show success after submission
  const showSuccess = () => {
    setIsSubmitting(false)
    setOpen(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Submit the form to Formspree
    handleSubmit(e)
    
    // Show success message after 3 seconds regardless of Formspree response
    setTimeout(() => {
      showSuccess()
    }, 3000)
  }

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

  const contactItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
      },
    }),
  }

  return (
    <section id="contact" className="section-container">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariant}
            className="lg:col-span-1"
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                  <p className="mb-6">
                    Feel free to reach out to me for any questions, opportunities, or just to say hello!
                  </p>
                </div>

                <div className="space-y-4">
                  <motion.div
                    custom={0}
                    variants={contactItemVariant}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium break-all"><a href="mailto:chandirasegaransegar@gmail.com">chandirasegaransegar@gmail.com</a></p>
                    </div>
                  </motion.div>

                  <motion.div
                    custom={2}
                    variants={contactItemVariant}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium"><a href="https://maps.app.goo.gl/u2SrimEGU3Zab9xS7" target="_blank">Pondicherry, India</a></p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariant}
            className="lg:col-span-2"
          >
            <Card className="glass-card">
              <CardContent className="p-6">
                <form onSubmit={formSubmitHandler} className="space-y-4">
                  <input type="hidden" name="_subject" value={formData.subject} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50"
                      />
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background/50"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full">
                      {isSubmitting ? (
                        <Button 
                          type="button" 
                          disabled={true} 
                          className="w-full"
                        >
                          <span className="flex items-center gap-2">
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </span>
                        </Button>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button 
                            type="submit" 
                            className="w-full"
                          >
                            <span className="flex items-center gap-2">
                              <Send className="h-4 w-4" />
                              Send Message
                            </span>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Toast.Provider swipeDirection="right" duration={5000}>
        <Toast.Root 
          open={open} 
          onOpenChange={setOpen} 
          className="bg-gray-900 text-white p-4 rounded-md shadow-lg z-50"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Toast.Title className="font-semibold text-lg mb-1">Success!</Toast.Title>
            <Toast.Description>Your message has been sent successfully!</Toast.Description>
            <Toast.Close className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-700">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Toast.Close>
          </motion.div>
        </Toast.Root>

        <Toast.Viewport className="fixed bottom-5 right-5 flex flex-col gap-2 z-50 max-w-md" />
      </Toast.Provider>
    </section>
  )
}

export default Contact