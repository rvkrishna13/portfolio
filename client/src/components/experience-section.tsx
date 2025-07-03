import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import TimelineItem from "@/components/timeline-item";

export default function ExperienceSection() {
  return (
    <section className="min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Professional Experience
      </motion.h1>

      <div className="relative">
        {/* Timeline Line */}
        <motion.div
          className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ transformOrigin: "top" }}
        />

        {/* Timeline Items */}
        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <TimelineItem
              key={`${exp.company}-${exp.period}`}
              experience={exp}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
