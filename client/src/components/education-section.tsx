import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, University } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

export default function EducationSection() {
  return (
    <section className="min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {portfolioData.education.map((edu, index) => (
          <motion.div
            key={`${edu.institution}-${edu.period}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="shadow-lg transform transition-transform duration-200">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="flex-1">
                    <motion.h3
                      className={`text-2xl font-bold text-${edu.color}-600 mb-2`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.h4
                      className="text-xl font-medium text-slate-700 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    >
                      {edu.institution}
                    </motion.h4>
                    <motion.p
                      className="text-slate-600 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    >
                      {edu.period} | {edu.location}
                    </motion.p>
                    <div className="space-y-2">
                      <motion.h5
                        className="font-medium text-slate-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                      >
                        Coursework:
                      </motion.h5>
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                      >
                        {edu.coursework.map((course, courseIndex) => (
                          <motion.span
                            key={course}
                            className={`px-3 py-1 bg-${edu.color}-100 text-${edu.color}-700 rounded-full text-sm`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 + index * 0.2 + courseIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {course}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                  <motion.div
                    className="mt-4 md:mt-0 md:ml-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    whileHover={{ rotate: 5 }}
                  >
                    <div className={`w-24 h-24 bg-${edu.color}-100 rounded-full flex items-center justify-center`}>
                      {index === 0 ? (
                        <GraduationCap className={`text-${edu.color}-600 text-3xl`} size={48} />
                      ) : (
                        <University className={`text-${edu.color}-600 text-3xl`} size={48} />
                      )}
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
