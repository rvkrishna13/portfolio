import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Monitor, Database, Cloud, BarChart3, TestTube } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import SkillBar from "@/components/skill-bar";

export default function SkillsSection() {
  const skillCategories = [
    { key: "backend", title: "Backend", icon: Server, color: "green" },
    { key: "frontend", title: "Frontend", icon: Monitor, color: "blue" },
    { key: "databases", title: "Databases", icon: Database, color: "purple" },
    { key: "cloud", title: "Cloud & Tools", icon: Cloud, color: "orange" },
    { key: "devops", title: "CI/CD & DevOps", icon: Cloud, color: "orange" },
    { key: "monitoring", title: "Monitoring", icon: BarChart3, color: "red" },
    { key: "testing", title: "Testing", icon: TestTube, color: "teal" },
  ];

  return (
    <section id="skills" className="min-h-screen">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h1>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <motion.h3
                className="text-2xl font-bold text-blue-600 mb-6 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Code className="mr-3" size={28} />
                Programming Languages
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {portfolioData.skills.languages.slice(0, 4).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} delay={0.4 + index * 0.1} />
                  ))}
                </div>
                <div className="space-y-4">
                  {portfolioData.skills.languages.slice(4).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} delay={0.8 + index * 0.1} />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="shadow-lg h-full">
                <CardContent className="p-6">
                  <motion.h4
                    className={`text-lg font-bold text-${category.color}-600 mb-4 flex items-center`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <category.icon className="mr-2" size={20} />
                    {category.title}
                  </motion.h4>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {portfolioData.skills.categories[category.key as keyof typeof portfolioData.skills.categories]?.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className={`px-3 py-1 bg-${category.color}-100 text-${category.color}-700 rounded-full text-sm`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.9 + index * 0.1 + techIndex * 0.03 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
