const skills = [
  {
    category: "Web Technologies",
    items: [
      { name: "HTML", icon: "html_icon.png" },
      { name: "CSS", icon: "css_icon.png" },
      { name: "JavaScript", icon: "js_icon.png" },
      { name: "React JS", icon: "Reactjs_icon.png" },
      { name: "Next JS", icon: "nextjs_icon.png" },
      { name: "Tailwind CSS", icon: "Tailwind_icon.png" },
      { name: "Bootstrap", icon: "Bootstrap_icon.png" },
      { name: "WordPress", icon: "wordpress_icon.png" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node JS", icon: "Node.js_icon.png" },
      { name: "MySQL", icon: "mysql_icon.png" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "git_icon.png" },
      { name: "GitHub", icon: "github_icon.png" },
      { name: "VS Code", icon: "vs_icon.png" },
      { name: "Postman", icon: "postman_icon.png" },
      { name: "PgAdmin4", icon: "postgre_icon.png" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "js_icon.png" },
      { name: "TypeScript", icon: "TypeScript_icon.png" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      className="bg-black/90 w-full py-16 px-6 md:px-24"
      id="skills"
    >
      {/* Section Title */}
      <h2
        className="text-[50px] text-white text-center underline underline-offset-8 decoration-purple-600 decoration-4 mb-16 cursor-default"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="border border-white/20 rounded-xl p-6 hover:border-purple-600 transition-all duration-300"
          >
            {/* Category Title */}
            <p
              className="text-xl text-white font-semibold text-center mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {skillGroup.category}
            </p>

            {/* Skill Items */}
            <div className="flex flex-wrap justify-center gap-3">
              {skillGroup.items.map((skill, sIndex) => (
                <div
                  key={sIndex}
                  className="flex items-center gap-2 text-white rounded-full border border-white/30 px-4 py-2 text-base shadow-md hover:shadow-purple-600 hover:border-purple-500 transition-all duration-300 cursor-default"
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-5 h-5 object-contain"
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}