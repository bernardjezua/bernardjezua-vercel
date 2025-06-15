"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Skill {
  name: string
  icon: string
}

export function SkillsSection() {
  const frontendSkills: Skill[] = [
    { name: "React", icon: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" },
    { name: "Next.js", icon: "https://profilinator.rishav.dev/skills-assets/nextjs.png" },
    { name: "JavaScript", icon: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg" },
    { name: "TypeScript", icon: "https://profilinator.rishav.dev/skills-assets/typescript-original.svg" },
    { name: "HTML5", icon: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" },
    { name: "CSS3", icon: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" },
    { name: "Flutter", icon: "https://profilinator.rishav.dev/skills-assets/flutterio-icon.svg" },
    { name: "Tailwind CSS", icon: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" },
  ];

  const backendSkills: Skill[] = [
    { name: "Firebase", icon: "https://profilinator.rishav.dev/skills-assets/firebase.png" },
    { name: "Python", icon: "https://profilinator.rishav.dev/skills-assets/python-original.svg" },
    { name: "Node.js", icon: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" },
    { name: "Express.js", icon: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" },
    { name: "MongoDB", icon: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" },
    { name: "MySQL", icon: "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" },
    { name: "MariaDB", icon: "https://profilinator.rishav.dev/skills-assets/mariadb.png" },
    { name: "R", icon: "https://profilinator.rishav.dev/skills-assets/r.svg" },
  ];

  const miscSkills: Skill[] = [
    { name: "Dart", icon: "https://profilinator.rishav.dev/skills-assets/dartlang-icon.svg" },
    { name: "C", icon: "https://profilinator.rishav.dev/skills-assets/c-original.svg" },
    { name: "Java", icon: "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" },
    { name: "Android", icon: "https://profilinator.rishav.dev/skills-assets/android-original-wordmark.svg" },
    { name: "Bash", icon: "https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg" },
    { name: "Git", icon: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" },
    { name: "Linux", icon: "https://profilinator.rishav.dev/skills-assets/linux-original.svg" },
  ];

  const designSkills: Skill[] = [
    { name: "Figma", icon: "https://profilinator.rishav.dev/skills-assets/figma-icon.svg" },
    { name: "Photoshop", icon: "https://profilinator.rishav.dev/skills-assets/photoshop-plain.svg" },
    { name: "Canva", icon: "https://www.edigitalagency.com.au/wp-content/uploads/Canva-icon-gradient-png-900x900.png" },
  ];

  const renderSkills = (skills: Skill[]) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-gray-50 dark:bg-gray-800/50 backdrop-blur-md hover:shadow-md transition-all">
              <CardContent className="p-4 flex flex-col items-center gap-6 md:gap-8">
                <img src={skill.icon} alt={`${skill.name} icon`} className="w-12 h-12" />
                <span className="text-sm md:text-md font-semibold text-gray-800 dark:text-gray-100">
                    {skill.name}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="mb-16 md:mb-10"> {/* Added overflow handling */}
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-2xl mx-auto bg-transparent">
              <TabsTrigger 
                value="frontend"
                className="flex-1 min-w-[120px] md:min-w-0 rounded-lg border border-gray-200 dark:border-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:border-transparent transition-all py-2 px-3 text-sm md:text-base md:py-3 md:px-4"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger 
                value="backend"
                className="flex-1 min-w-[120px] md:min-w-0 rounded-lg border border-gray-200 dark:border-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:border-transparent transition-all py-2 px-3 text-sm md:text-base md:py-3 md:px-4"
              >
                Backend
              </TabsTrigger>
              <TabsTrigger 
                value="misc"
                className="flex-1 min-w-[120px] md:min-w-0 rounded-lg border border-gray-200 dark:border-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:border-transparent transition-all py-2 px-3 text-sm md:text-base md:py-3 md:px-4"
              >
                Miscellaneous
              </TabsTrigger>
              <TabsTrigger 
                value="design"
                className="flex-1 min-w-[120px] md:min-w-0 rounded-lg border border-gray-200 dark:border-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:border-transparent transition-all py-2 px-3 text-sm md:text-base md:py-3 md:px-4"
              >
                Design
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="frontend">
            {renderSkills(frontendSkills)}
          </TabsContent>

          <TabsContent value="backend">
            {renderSkills(backendSkills)}
          </TabsContent>

          <TabsContent value="misc">
            {renderSkills(miscSkills)}
          </TabsContent>

          <TabsContent value="design">
            {renderSkills(designSkills)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}