import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, Phone, Linkedin, Github, User, Code, Rocket, GraduationCap, Star, Award, Zap, Sparkles, Target, TrendingUp } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export default function AboutSection() {
  const handleDownloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/attached_assets/Venkatakrishna_Ravi_Resume_1751572661081.pdf';
    link.download = 'Venkatakrishna_Ravi_Resume.pdf';
    link.click();
  };

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen py-12">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-16 rounded-3xl overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            className="absolute inset-0 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="absolute top-8 left-8 w-16 h-16 border-2 border-white rounded-full" />
            <div className="absolute top-16 right-16 w-10 h-10 border-2 border-white rounded-full" />
            <div className="absolute bottom-16 left-16 w-12 h-12 border-2 border-white rounded-full" />
            <div className="absolute bottom-8 right-8 w-6 h-6 border-2 border-white rounded-full" />
          </motion.div>
          
          <div className="relative z-10">
            <motion.div
              className="mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            >
              <div className="w-28 h-28 bg-white/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm border-4 border-white/30">
                <User className="text-4xl text-white" size={56} />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {portfolioData.personal.name}
            </motion.h1>
            
            <motion.div
              className="text-lg md:text-xl font-light mb-6 typing-animation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Software Engineer
            </motion.div>
            
            <motion.p
              className="text-base md:text-lg max-w-3xl mx-auto opacity-90 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {portfolioData.personal.summary}
            </motion.p>
            
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleContact}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl text-base font-semibold"
                >
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleDownloadResume}
                  variant="outline"
                  className="inline-flex items-center px-6 py-3 bg-white/20 text-white border-2 border-white/40 rounded-xl hover:bg-white/30 transition-all duration-300 backdrop-blur-sm text-base font-semibold"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Stats Only */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Enhanced Stats */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Stats</h3>
            {[
              { 
                icon: Code, 
                title: "3+ Years", 
                subtitle: "Professional Experience", 
                bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
                description: "Building scalable systems"
              },
              { 
                icon: Rocket, 
                title: "15+ Technologies", 
                subtitle: "Technical Expertise", 
                bgColor: "bg-gradient-to-br from-green-500 to-green-600",
                description: "Full-stack development"
              },
              { 
                icon: GraduationCap, 
                title: "MS CS", 
                subtitle: "Stony Brook University", 
                bgColor: "bg-gradient-to-br from-amber-500 to-amber-600",
                description: "Advanced computer science"
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 border border-slate-100"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="text-white text-2xl" size={32} />
                  </motion.div>
                  
                  <div>
                    <motion.h4 
                      className="text-xl font-bold text-slate-900 mb-1"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.title}
                    </motion.h4>
                    <p className="text-base font-semibold text-slate-700 mb-1">{stat.subtitle}</p>
                    <p className="text-sm text-slate-600">{stat.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="shadow-2xl border-0 overflow-hidden h-full">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2" />
            <CardContent className="p-8 h-full flex flex-col">
              <motion.h2 
                className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Connect With Me
              </motion.h2>
              
              <div className="flex-1 space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: portfolioData.personal.email,
                    href: `mailto:${portfolioData.personal.email}`,
                    bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
                    description: "Send me a message"
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: portfolioData.personal.phone,
                    href: `tel:${portfolioData.personal.phone}`,
                    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
                    description: "Call me directly"
                  },
                  {
                    icon: Linkedin,
                    title: "LinkedIn",
                    value: "Connect on LinkedIn",
                    href: portfolioData.personal.linkedin,
                    bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
                    description: "Professional network"
                  },
                  {
                    icon: Github,
                    title: "GitHub",
                    value: "github.com/rvkrishna13",
                    href: "https://github.com/rvkrishna13",
                    bgColor: "bg-gradient-to-br from-slate-700 to-slate-800",
                    description: "View my projects"
                  },
                ].map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.href}
                    target={contact.title === "LinkedIn" || contact.title === "GitHub" ? "_blank" : undefined}
                    rel={contact.title === "LinkedIn" || contact.title === "GitHub" ? "noopener noreferrer" : undefined}
                    className="group relative p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl hover:from-slate-100 hover:to-slate-200 transition-all duration-300 border border-slate-200 hover:border-slate-300"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex items-center">
                      <motion.div
                        className={`w-16 h-16 ${contact.bgColor} rounded-xl flex items-center justify-center mr-6 shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <contact.icon className="text-white text-2xl" size={32} />
                      </motion.div>
                      
                      <div>
                        <div className="text-lg font-bold text-slate-900 mb-1">{contact.title}</div>
                        <div className="text-slate-700 mb-1">{contact.title === "GitHub" ? "View my projects" : contact.value}</div>
                        <div className="text-sm text-slate-500">{contact.description}</div>
                      </div>
                    </div>
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
