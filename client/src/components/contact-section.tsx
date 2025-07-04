import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Code, Users, Handshake } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export default function ContactSection() {
  return (
    <section className="min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h1>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center lg:text-left">
              <motion.h2
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Let's Connect
              </motion.h2>
              <motion.p
                className="text-slate-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I'm always interested in new opportunities and exciting projects. Feel free to reach out!
              </motion.p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: portfolioData.personal.email,
                  href: `mailto:${portfolioData.personal.email}`,
                  color: "blue",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: portfolioData.personal.phone,
                  href: `tel:${portfolioData.personal.phone}`,
                  color: "green",
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  value: "Connect on LinkedIn",
                  href: portfolioData.personal.linkedin,
                  color: "blue",
                },
                {
                  icon: Github,
                  title: "GitHub",
                  value: "View my projects",
                  href: "https://github.com/rvkrishna13",
                  color: "gray",
                },
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  target={contact.title === "LinkedIn" || contact.title === "GitHub" ? "_blank" : undefined}
                  rel={contact.title === "LinkedIn" || contact.title === "GitHub" ? "noopener noreferrer" : undefined}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 bg-${contact.color}-100 rounded-full flex items-center justify-center mr-4`}>
                    <contact.icon className={`text-${contact.color}-600`} size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">{contact.title}</h4>
                    <p className="text-slate-600 text-sm">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Collaboration Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="shadow-lg h-full">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <motion.div
                  className="text-center space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="flex justify-center space-x-4 mb-6">
                    <motion.div
                      className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Code className="text-blue-600" size={32} />
                    </motion.div>
                    <motion.div
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Users className="text-green-600" size={32} />
                    </motion.div>
                    <motion.div
                      className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Handshake className="text-purple-600" size={32} />
                    </motion.div>
                  </div>
                  
                  <motion.h3
                    className="text-2xl font-bold text-slate-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    Ready to Build Something Amazing?
                  </motion.h3>
                  
                  <motion.p
                    className="text-lg text-slate-600 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    I'm actively seeking opportunities to collaborate on innovative projects, 
                    contribute to impactful solutions, and work with talented teams. 
                    Whether it's full-time roles, consulting, or open-source contributions, 
                    I'm excited to bring my expertise in full-stack development and 
                    system architecture to your next big idea.
                  </motion.p>
                  
                  <motion.div
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      ✨ Let's connect and explore how we can create something extraordinary together!
                    </p>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
