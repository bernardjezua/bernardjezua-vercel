"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Skill {
  name: string
  icon: string
}

export function SkillsSection() {

  const progBackendSkills: Skill[] = [
    { name: "Python", icon: "https://profilinator.rishav.dev/skills-assets/python-original.svg" },
    { name: "C", icon: "https://profilinator.rishav.dev/skills-assets/c-original.svg" },
    { name: "Dart", icon: "https://profilinator.rishav.dev/skills-assets/dartlang-icon.svg" },
    { name: "Java", icon: "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg" },
    { name: "R", icon: "https://profilinator.rishav.dev/skills-assets/r.svg" },
    { name: "PHP", icon: "https://profilinator.rishav.dev/skills-assets/php-original.svg"},
    { name: "JavaScript", icon: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg" },
    { name: "TypeScript", icon: "https://profilinator.rishav.dev/skills-assets/typescript-original.svg" },
    { name: "Express.js", icon: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" },
    { name: "Node.js", icon: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" },
    { name: "Laravel", icon: "https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg"},
    { name: "Lumen", icon: "https://www.svgrepo.com/show/354019/lumen.svg"}
  ];

  const frontendWebSkills: Skill[] = [
    { name: "Git", icon: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" },
    { name: "GitLab", icon: "https://profilinator.rishav.dev/skills-assets/gitlab.svg"},
    { name: "Flutter", icon: "https://profilinator.rishav.dev/skills-assets/flutterio-icon.svg"},
    { name: "React", icon: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" },
    { name: "HTML", icon: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" },
    { name: "CSS", icon: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" },
    { name: "Next.js", icon: "https://profilinator.rishav.dev/skills-assets/nextjs.png" },
    { name: "Tailwind CSS", icon: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg" },
    { name: "Sass", icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"},
    { name: "Ant Design", icon: "https://cdn.worldvectorlogo.com/logos/ant-design-2.svg"},
    { name: "Axios", icon: "https://icon.icepanel.io/Technology/svg/Azios.svg"},
  ];

  const databaseSkills: Skill[] = [
    { name: "MySQL", icon: "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" },
    { name: "MariaDB", icon: "https://profilinator.rishav.dev/skills-assets/mariadb.png" },
    { name: "MongoDB", icon: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" },
    { name: "Google Firebase", icon: "https://profilinator.rishav.dev/skills-assets/firebase.png" },
  ];

  const designOthersSkills: Skill[] = [
    { name: "Figma", icon: "https://profilinator.rishav.dev/skills-assets/figma-icon.svg" },
    { name: "Adobe Photoshop", icon: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
    { name: "Adobe Lightroom", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg" },
    { name: "Adobe Stock", icon: "https://cdn-1.webcatalog.io/catalog/adobe-stock/adobe-stock-icon-filled-256.webp?v=1714773139376" },
    { name: "Canva", icon: "https://cdn.brandfetch.io/id9mVQlyB1/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Bash", icon: "https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg" },
    { name: "Linux", icon: "https://profilinator.rishav.dev/skills-assets/linux-original.svg" },
  ];

  const renderSkills = (skills: Skill[]) => {
    return (
      <div className="flex flex-wrap gap-4 pt-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-bern-card border border-white/5 rounded-full px-5 py-3 hover:bg-white/5 transition-colors cursor-default group"
          >
            <img src={skill.icon} alt={`${skill.name} icon`} className="w-5 h-5 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <section id="skills" className="py-32 px-8 md:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 block font-medium">
            /04 Skills
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
            TOOLS OF THE TRADE.
          </h3>
        </motion.div>

        <Tabs defaultValue="progBackend" className="w-full relative">
          <div className="mb-0 pb-4 sm:overflow-x-auto sm:scrollbar-hide">
            <TabsList className="grid grid-cols-2 gap-x-4 gap-y-4 sm:flex sm:w-max sm:gap-8 bg-transparent p-0 rounded-none h-auto w-full sm:mx-0 sm:justify-start">
              <TabsTrigger 
                value="progBackend"
                className="w-full sm:w-auto justify-center sm:justify-start rounded-none border-b-2 border-transparent data-[state=active]:border-bern-blue data-[state=active]:text-white text-white/50 data-[state=active]:bg-transparent px-2 sm:px-0 py-4 text-xs sm:text-sm md:text-base uppercase tracking-widest transition-all data-[state=active]:shadow-none"
              >
                PLs & Backend
              </TabsTrigger>
              <TabsTrigger 
                value="frontendWeb"
                className="w-full sm:w-auto justify-center sm:justify-start rounded-none border-b-2 border-transparent data-[state=active]:border-bern-blue data-[state=active]:text-white text-white/50 data-[state=active]:bg-transparent px-2 sm:px-0 py-4 text-xs sm:text-sm md:text-base uppercase tracking-widest transition-all data-[state=active]:shadow-none"
              >
                Frontend & Web
              </TabsTrigger>
              <TabsTrigger 
                value="database"
                className="w-full sm:w-auto justify-center sm:justify-start rounded-none border-b-2 border-transparent data-[state=active]:border-bern-blue data-[state=active]:text-white text-white/50 data-[state=active]:bg-transparent px-2 sm:px-0 py-4 text-xs sm:text-sm md:text-base uppercase tracking-widest transition-all data-[state=active]:shadow-none"
              >
                Database
              </TabsTrigger>
              <TabsTrigger 
                value="designOthers"
                className="w-full sm:w-auto justify-center sm:justify-start rounded-none border-b-2 border-transparent data-[state=active]:border-bern-blue data-[state=active]:text-white text-white/50 data-[state=active]:bg-transparent px-2 sm:px-0 py-4 text-xs sm:text-sm md:text-base uppercase tracking-widest transition-all data-[state=active]:shadow-none"
              >
                Design & Others
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="min-h-[150px] w-full">
            <TabsContent value="progBackend" className="mt-0 outline-none">
              {renderSkills(progBackendSkills)}
            </TabsContent>

            <TabsContent value="frontendWeb" className="mt-0 outline-none">
              {renderSkills(frontendWebSkills)}
            </TabsContent>

            <TabsContent value="database" className="mt-0 outline-none">
              {renderSkills(databaseSkills)}
            </TabsContent>

            <TabsContent value="designOthers" className="mt-0 outline-none">
              {renderSkills(designOthersSkills)}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  )
}