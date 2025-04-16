import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-10 lg:px-40 relative bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center font-semibold text-[#0E6CF3]">Get To Know More</p>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Bio */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 border-gray-100">My Journey</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Aspiring UI/UX developer with a passion for developing intuitive and user-friendly mobile and web
              applications. Proficient in front-end and mobile development technologies with a recent focus on Flutter.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I created this student portfolio to document my projects. I am also currently taking Google's UX Design
              course to enhance my skills in creating user-centered designs and experiences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Currently 22 years old and based in Laguna, Philippines. I'm constantly learning and exploring new
              technologies to improve my craft. Nice to meet you!
            </p>
          </div>

          {/* Right column - Stats */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-[#0E6CF3]/10 p-3 rounded-full">
                  <Image
                    src="/assets/education.png"
                    alt="education icon"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Education</h3>
                  <p className="text-gray-600 text-sm">University of the Philippines Los Baños</p>
                </div>
              </div>
              <p className="text-gray-600">
                B.S. Computer Science <br />
                2021 - Present
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-[#0E6CF3]/10 p-3 rounded-full">
                  <Image
                    src="/assets/experience.png"
                    alt="experience icon"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Experience</h3>
                  <p className="text-gray-600 text-sm">Looking for opportunities</p>
                </div>
              </div>
              <p className="text-gray-600">
                Open to internships and <br />
                entry-level positions
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-[#0E6CF3]/10 p-3 rounded-full">
                  <Image
                    src="/assets/experience.png"
                    alt="projects icon"
                    width={24}
                    height={24}
                    className="opacity-80"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
                  <p className="text-gray-600 text-sm">7+ completed projects</p>
                </div>
              </div>
              <p className="text-gray-600">
                Mobile apps, web applications, <br />
                and design prototypes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
