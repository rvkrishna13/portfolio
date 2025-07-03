import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import TimelineItem from "@/components/timeline-item";

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

      <div className="relative max-w-6xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{ transformOrigin: "top" }}
        />

        {/* Timeline Items */}
        <div className="space-y-20">
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
