import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Briefcase, Brain, Bot, Bell, Heart, BarChart3 } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    company: string;
    icon: string;
    color: string;
  };
  index: number;
}

const iconMap = {
  cubes: Briefcase,
  brain: Brain,
  robot: Bot,
  bell: Bell,
  heartbeat: Heart,
  "chart-line": BarChart3,
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="project-card"
    >
      <Card className="shadow-lg overflow-hidden h-full transition-shadow duration-300 hover:shadow-xl">
        <motion.div
          className={`h-48 bg-gradient-to-br from-${project.color}-500 to-${project.color}-700 flex items-center justify-center`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <IconComponent className="text-white text-6xl" size={96} />
        </motion.div>
        <CardContent className="p-6">
          <motion.h3
            className="text-xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="text-slate-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            {project.description}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className={`px-2 py-1 bg-${project.color}-100 text-${project.color}-700 rounded text-xs`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            <span className="text-sm text-slate-500">{project.company}</span>
            <motion.button
              className="text-blue-600 hover:text-blue-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
            </motion.button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
