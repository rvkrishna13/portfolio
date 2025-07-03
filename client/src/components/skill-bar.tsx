import { motion } from "framer-motion";

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
  };
  delay?: number;
}

export default function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-slate-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <motion.div
          className="bg-blue-500 h-3 rounded-full skill-bar"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 2, delay: delay + 0.2, ease: "easeInOut" }}
          style={{ "--skill-width": `${skill.level}%` } as React.CSSProperties}
        />
      </div>
    </motion.div>
  );
}
