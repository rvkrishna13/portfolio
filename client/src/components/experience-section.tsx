import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { Briefcase, Brain, Code, Heart, MapPin, Calendar, TrendingUp, Star, Award, Zap, ExternalLink, Building2, Users, Cpu, Database } from "lucide-react";

const iconMap = {
  blue: Building2,
  green: Cpu,
  amber: Database,
  purple: Users,
};

const colorMap = {
  blue: {
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    headerColor: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
    badgeColor: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300"
  },
  green: {
    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    headerColor: "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
    badgeColor: "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-300"
  },
  amber: {
    bgColor: "bg-gradient-to-br from-amber-500 to-amber-600",
    headerColor: "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600",
    badgeColor: "bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border-amber-300"
  },
  purple: {
    bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
    headerColor: "bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600",
    badgeColor: "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-300"
  },
};

export default function ExperienceSection() {
  return (
    <section className="min-h-screen py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Professional Experience
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A journey through innovative projects and impactful solutions that shaped my career
        </motion.p>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-8">
        {portfolioData.experience.map((exp, index) => {
          const IconComponent = iconMap[exp.color as keyof typeof iconMap] || Building2;
          const colors = colorMap[exp.color as keyof typeof colorMap] || colorMap.blue;
          
          return (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="shadow-2xl border-0 overflow-hidden bg-white relative">
                {/* Animated gradient header */}
                <motion.div 
                  className={`h-3 ${colors.headerColor}`}
                  whileHover={{ 
                    scaleY: 1.5,
                    transition: { duration: 0.3 }
                  }}
                />
                
                <CardContent className="p-6">
                  {/* Company and role header */}
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div 
                      className={`w-16 h-16 ${colors.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <IconComponent className="text-white text-2xl" size={28} />
                    </motion.div>
                    
                    <div className="flex-1 text-left">
                      <motion.h3 
                        className={`text-xl font-bold text-${exp.color}-700 mb-2`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.h4 
                        className="text-lg font-semibold text-slate-800 mb-3"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        {exp.company}
                      </motion.h4>
                      
                      <div className="flex flex-wrap gap-4 text-slate-600">
                        <motion.div 
                          className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg"
                          whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                          transition={{ duration: 0.2 }}
                        >
                          <Calendar size={16} className="text-blue-500" />
                          <span className="font-medium text-sm">{exp.period}</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg"
                          whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                          transition={{ duration: 0.2 }}
                        >
                          <MapPin size={16} className="text-green-500" />
                          <span className="font-medium text-sm">{exp.location}</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center gap-3 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    >
                      <div className={`w-8 h-8 ${colors.bgColor} rounded-lg flex items-center justify-center`}>
                        <TrendingUp className="text-white" size={16} />
                      </div>
                      <h5 className="text-base font-bold text-slate-800">
                        Key Achievements
                      </h5>
                    </motion.div>
                    
                    <div className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.2 + i * 0.1 }}
                          whileHover={{ 
                            scale: 1.02,
                            x: 10,
                            transition: { duration: 0.2 }
                          }}
                          className="group/item relative flex items-start gap-4 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
                        >
                          <motion.div 
                            className={`w-2 h-2 ${colors.bgColor} rounded-full mt-2 flex-shrink-0`}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <p className="text-slate-700 leading-relaxed font-medium text-sm">
                            {highlight}
                          </p>
                          
                          {/* Hover effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1 }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced footer */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    className="mt-6 pt-6 border-t border-slate-200 flex justify-between items-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className={`${colors.badgeColor} text-xs font-semibold px-3 py-1`}
                      >
                        <Star size={12} className="mr-1" />
                        {exp.highlights.length} Key Achievements
                      </Badge>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center gap-2 text-xs text-slate-500 font-semibold"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {index === 0 ? (
                        <>
                          <Award className="text-amber-500" size={14} />
                          Current Role
                        </>
                      ) : (
                        <>
                          <Zap className="text-blue-500" size={14} />
                          {portfolioData.experience.length - index} roles ago
                        </>
                      )}
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
