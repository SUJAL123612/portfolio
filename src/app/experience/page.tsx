export default function Experience() {
    const experiences = [
      {
        role: "Website Developer",
        company: "SITH Pvt. Ltd.",
        duration: "Jul 2025 – Present",
        type: "Full Time",
        projects: [
          {
            name: "Propwise Realty",
            link: "https://propwiseproperties.com/",
            description: "Developed a fully responsive multi-page real estate website using WordPress with custom HTML, CSS and JavaScript — featuring property listings, filters, enquiry forms and Google Maps integration.",
            tech: ["HTML", "CSS", "JavaScript", "WordPress"],
          },
          {
            name: "Khushi Enterprises",
            link: "#",
            description: "Built a responsive business website on WordPress with custom HTML, CSS and JavaScript — including image slider, product specification tables, animated counters and Google Maps contact section.",
            tech: ["HTML", "CSS", "JavaScript", "Wordpress"],
          },
        ],
      },
      {
        role: "Website Developer Intern",
        company: "SITH Pvt. Ltd.",
        duration: "Jan 2025 – Jul 2025",
        type: "Internship",
        projects: [
          {
            name: "Gami Bianca",
            link: "#",
            description: "Developed a luxury real estate landing page on WordPress with custom HTML, CSS and JavaScript — featuring enquiry popup, floor plans, amenities gallery and smooth scroll navigation.",
            tech: ["HTML", "CSS", "JavaScript", "Wordpress"],
          },
        ],
      },
    ];
  
    return (
      <section className="bg-black/90 w-full py-16 px-6 md:px-24" id="experience">
  
        {/* Section Title */}
        <h2
          className="text-[50px] text-white text-center underline underline-offset-8 decoration-purple-600 decoration-4 mb-16 cursor-default"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Experience
        </h2>
  
        {/* Timeline */}
        <div className="relative border-l-2 border-purple-600 ml-4 md:ml-16 flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
  
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-600" />
  
              {/* Role + Company + Duration */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <div>
                  <h3
                    className="text-2xl text-white font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-purple-400 text-lg">{exp.company}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1">
                  <span className="text-white/60 text-base">{exp.duration}</span>
                  <span className="text-xs px-3 py-1 rounded-full border border-purple-600 text-purple-400">
                    {exp.type}
                  </span>
                </div>
              </div>
  
              {/* Projects */}
              <div className="flex flex-col gap-4 mt-4">
                {exp.projects.map((project, pIndex) => (
                  <div
                    key={pIndex}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-600 transition-all duration-300"
                  >
                    {/* Project Name */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-white font-semibold hover:text-purple-400 transition-colors duration-200"
                    >
                      {project.name} ↗
                    </a>
  
                    {/* Description */}
                    <p className="text-white/60 text-base mt-2 leading-relaxed">
                      {project.description}
                    </p>
  
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((t, tIndex) => (
                        <span
                          key={tIndex}
                          className="text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-600/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
  
            </div>
          ))}
        </div>
      </section>
    );
  }