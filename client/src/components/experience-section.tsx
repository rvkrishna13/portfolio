import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { Briefcase, Brain, Code, Heart, MapPin, Calendar, TrendingUp } from "lucide-react";

const iconMap = {
  blue: Briefcase,
  green: Brain,
  amber: Code,
  purple: Heart,
};

export default function ExperienceSection() {
  return (
    <section className="min-h-screen py-12">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Professional Experience
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          A journey through innovative projects and impactful solutions
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {portfolioData.experience.map((exp, index) => {
          const IconComponent = iconMap[exp.color as keyof typeof iconMap] || Briefcase;
          
          return (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="shadow-xl border-0 overflow-hidden bg-white">
                {/* Header with company branding */}
                <div className={`h-2 bg-gradient-to-r from-${exp.color}-400 to-${exp.color}-600`} />
                
                <CardContent className="p-8">
                  {/* Company and role header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 bg-${exp.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`text-${exp.color}-600`} size={28} />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 className={`text-2xl font-bold text-${exp.color}-700 mb-1`}>
                        {exp.title}
                      </h3>
                      <h4 className="text-xl font-semibold text-slate-800 mb-3">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className={`text-${exp.color}-600`} size={20} />
                      <h5 className="text-lg font-semibold text-slate-800">
                        Key Achievements
                      </h5>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors"
                        >
                          <div className={`w-2 h-2 bg-${exp.color}-500 rounded-full mt-2 flex-shrink-0`} />
                          <p className="text-slate-700 leading-relaxed font-medium text-left">
                            {highlight}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Footer with achievement count */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    className="mt-6 pt-6 border-t border-slate-200 flex justify-between items-center"
                  >
                    <Badge 
                      variant="secondary" 
                      className={`bg-${exp.color}-50 text-${exp.color}-700 border-${exp.color}-200 text-sm`}
                    >
                      {exp.highlights.length} Key Achievements
                    </Badge>
                    <div className="text-sm text-slate-500 font-medium">
                      {index === 0 ? "Current Role" : `${portfolioData.experience.length - index} roles ago`}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
