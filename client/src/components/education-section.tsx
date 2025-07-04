import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, University, BookOpen, Award, Calendar, MapPin, Star, Trophy, School, Library } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const colorMap = {
  blue: {
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    headerColor: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
    textColor: "text-blue-600",
    badgeColor: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300"
  },
  green: {
    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    headerColor: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
    textColor: "text-green-600",
    badgeColor: "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-300"
  },
  amber: {
    bgColor: "bg-gradient-to-br from-amber-500 to-amber-600",
    headerColor: "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600",
    textColor: "text-amber-600",
    badgeColor: "bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border-amber-300"
  },
  purple: {
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    headerColor: "bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600",
    textColor: "text-purple-600",
    badgeColor: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-300"
  },
};

export default function EducationSection() {
  return (
    <section className="min-h-screen py-16">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Education
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Academic journey that laid the foundation for my technical expertise
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {portfolioData.education.map((edu, index) => {
          const colors = colorMap[edu.color as keyof typeof colorMap] || colorMap.blue;
          
          return (
            <motion.div
              key={`${edu.institution}-${edu.period}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="shadow-2xl border-0 overflow-hidden bg-white relative h-full">
                {/* Animated gradient header */}
                <motion.div 
                  className={`h-3 ${colors.headerColor}`}
                  whileHover={{ 
                    scaleY: 1.5,
                    transition: { duration: 0.3 }
                  }}
                />
                
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center mb-6">
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    >
                      <motion.h3
                        className={`text-xl font-bold ${colors.textColor} mb-2`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <motion.h4
                        className="text-lg font-semibold text-slate-800 mb-3"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        {edu.institution}
                      </motion.h4>
                    </motion.div>
                    
                    <motion.div
                      className="flex flex-wrap gap-3 mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    >
                      <motion.div 
                        className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg"
                        whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                        transition={{ duration: 0.2 }}
                      >
                        <Calendar size={16} className="text-blue-500" />
                        <span className="font-medium text-sm">{edu.period}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg"
                        whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                        transition={{ duration: 0.2 }}
                      >
                        <MapPin size={16} className="text-green-500" />
                        <span className="font-medium text-sm">{edu.location}</span>
                      </motion.div>
                    </motion.div>
                    
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2, type: "spring" }}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <div className={`w-24 h-24 ${colors.bgColor} rounded-2xl flex items-center justify-center shadow-2xl`}>
                        {index === 0 ? (
                          <GraduationCap className="text-white text-3xl" size={48} />
                        ) : (
                          <School className="text-white text-3xl" size={48} />
                        )}
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="flex-1">
                    <motion.div
                      className="space-y-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    >
                      <motion.div
                        className="flex items-center gap-2 mb-3"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={`w-8 h-8 ${colors.bgColor} rounded-lg flex items-center justify-center`}>
                          <BookOpen className="text-white" size={16} />
                        </div>
                        <h5 className="text-base font-bold text-slate-800">
                          Key Coursework
                        </h5>
                      </motion.div>
                      
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                      >
                        {edu.coursework.map((course, courseIndex) => (
                          <motion.span
                            key={course}
                            className={`px-3 py-1 ${colors.badgeColor} rounded-lg text-xs font-semibold shadow-sm`}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 + index * 0.2 + courseIndex * 0.05 }}
                            whileHover={{ 
                              scale: 1.1, 
                              y: -3,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {course}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Enhanced footer */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    className="mt-6 pt-6 border-t border-slate-200 flex justify-between items-center"
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Trophy className={`${colors.textColor}`} size={16} />
                      <span className="text-slate-700 font-semibold text-sm">
                        {index === 0 ? "Latest Degree" : "Previous Education"}
                      </span>
                    </motion.div>
                    
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Star className="text-amber-500" size={14} />
                      <span className="text-slate-600 font-medium text-xs">
                        {edu.coursework.length} Courses
                      </span>
                    </motion.div>
                  </motion.div>
                </CardContent>
                
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
