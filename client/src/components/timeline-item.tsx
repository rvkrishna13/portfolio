import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Brain, Code, Heart } from "lucide-react";

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

  return (
    <motion.div
      className="timeline-item relative"
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Left side content (desktop) */}
        <div className={`flex-1 ${isLeft ? "md:text-right md:pr-8" : "md:pr-8"} mb-4 md:mb-0`}>
          {(isLeft || window.innerWidth < 768) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className={`text-xl font-bold text-${experience.color}-600`}>{experience.title}</h3>
                  <h4 className="text-lg font-medium text-slate-700">{experience.company}</h4>
                  <p className="text-slate-600 mb-4">
                    {experience.period} | {experience.location}
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {experience.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.3 + i * 0.1 }}
                      >
                        • {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Timeline dot */}
        <motion.div
          className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 shadow-lg flex items-center justify-center z-10"
          style={{ borderColor: `var(--portfolio-${experience.color})` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 + index * 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          <IconComponent className={`text-${experience.color}-600 text-sm`} size={16} />
        </motion.div>

        {/* Right side content (desktop) */}
        <div className={`flex-1 ${!isLeft ? "md:pl-8" : "md:pl-8"} mb-4 md:mb-0`}>
          {(!isLeft && window.innerWidth >= 768) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className={`text-xl font-bold text-${experience.color}-600`}>{experience.title}</h3>
                  <h4 className="text-lg font-medium text-slate-700">{experience.company}</h4>
                  <p className="text-slate-600 mb-4">
                    {experience.period} | {experience.location}
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {experience.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.3 + i * 0.1 }}
                      >
                        • {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
