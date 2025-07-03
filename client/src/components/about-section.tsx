import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, Phone, Linkedin, Github, User, Code, Rocket, GraduationCap } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export default function AboutSection() {
  const handleDownloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/api/resume'; // This would need to be implemented
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
    <section className="min-h-screen">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 rounded-2xl overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23ffffff' fill-opacity='0.1'><circle cx='30' cy='30' r='2'/></g></svg>")`,
              }}
            />
          </motion.div>
          
          <div className="relative z-10">
            <motion.div
              className="mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                <User className="text-4xl text-white" size={64} />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {portfolioData.personal.name}
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl font-light mb-6 typing-animation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {portfolioData.personal.title}
            </motion.div>
            
            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {portfolioData.personal.summary}
            </motion.p>
            
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button
                onClick={handleContact}
                className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all duration-200 transform hover:scale-105"
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                className="inline-flex items-center px-6 py-3 bg-white/20 text-white border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-200 transform hover:scale-105 backdrop-blur-sm"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {[
          { icon: Code, title: "3+ Years", subtitle: "Professional Experience", color: "blue" },
          { icon: Rocket, title: "15+ Technologies", subtitle: "Technical Expertise", color: "green" },
          { icon: GraduationCap, title: "MS CS", subtitle: "Stony Brook University", color: "amber" },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg transform transition-transform duration-200"
          >
            <div className={`w-16 h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
              <stat.icon className={`text-${stat.color}-600 text-2xl`} size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{stat.title}</h3>
            <p className="text-slate-600">{stat.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Connect With Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  target={contact.title === "LinkedIn" ? "_blank" : undefined}
                  rel={contact.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <contact.icon className={`text-${contact.color}-600 text-xl mr-4`} size={24} />
                  <div>
                    <div className="font-medium">{contact.title}</div>
                    <div className="text-sm text-slate-600">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
