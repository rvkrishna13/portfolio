import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Brain, Code, Heart, MapPin, Calendar, ChevronRight } from "lucide-react";

interface TimelineItemProps {
  experience: {
    title: string;
    company: string;
    location: string;
    period: string;
    highlights: string[];
    color: string;
  };
  index: number;
  isLeft: boolean;
}

const iconMap = {
  blue: Briefcase,
  green: Brain,
  amber: Code,
  purple: Heart,
};

export default function TimelineItem({ experience, index, isLeft }: TimelineItemProps) {
  const IconComponent = iconMap[experience.color as keyof typeof iconMap] || Briefcase;

  const ExperienceCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="relative"
    >
      <Card className="shadow-xl border-0 bg-gradient-to-br from-white via-white to-gray-50 overflow-hidden">
        {/* Color accent bar */}
        <div className={`h-2 bg-gradient-to-r from-${experience.color}-400 to-${experience.color}-600`} />
        
        <CardContent className="p-8">
          {/* Header section */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-12 h-12 bg-${experience.color}-100 rounded-xl flex items-center justify-center`}>
                  <IconComponent className={`text-${experience.color}-600`} size={24} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold text-${experience.color}-700 leading-tight`}>
                    {experience.title}
                  </h3>
                  <h4 className="text-xl font-semibold text-slate-800">
                    {experience.company}
                  </h4>
                </div>
              </div>
              
              {/* Meta info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar size={16} />
                  <span className="font-medium">{experience.period}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={16} />
                  <span className="font-medium">{experience.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements section */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
              <span className={`w-2 h-2 bg-${experience.color}-500 rounded-full`}></span>
              Key Achievements
            </h5>
            <div className="grid gap-3">
              {experience.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.2 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white/80 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <ChevronRight className={`text-${experience.color}-500 mt-0.5 flex-shrink-0`} size={16} />
                  <p className="text-slate-700 leading-relaxed text-sm font-medium">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech badges or additional info could go here */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
            className="mt-6 pt-6 border-t border-slate-100"
          >
            <Badge 
              variant="secondary" 
              className={`bg-${experience.color}-50 text-${experience.color}-700 border-${experience.color}-200`}
            >
              {experience.highlights.length} Key Achievements
            </Badge>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <motion.div
      className="timeline-item relative"
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Mobile: Always show content */}
        <div className="block md:hidden w-full mb-8">
          <ExperienceCard />
        </div>

        {/* Desktop: Left side content */}
        <div className={`hidden md:block flex-1 ${isLeft ? "md:text-right md:pr-12" : "md:pr-12"} mb-4 md:mb-0`}>
          {isLeft && <ExperienceCard />}
        </div>

        {/* Timeline dot */}
        <motion.div
          className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 shadow-xl flex items-center justify-center z-10"
          style={{ borderColor: `hsl(var(--${experience.color}-500))` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <IconComponent className={`text-${experience.color}-600`} size={20} />
        </motion.div>

        {/* Desktop: Right side content */}
        <div className={`hidden md:block flex-1 ${!isLeft ? "md:pl-12" : "md:pl-12"} mb-4 md:mb-0`}>
          {!isLeft && <ExperienceCard />}
        </div>
      </div>
    </motion.div>
  );
}
