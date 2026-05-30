const education = [
    {
      degree: "SSC (Maharashtra State Board)",
      school: "Guru Nanak English High School",
      year: "2009 – 2019",
      score: "70.80%",
    },
    {
      degree: "HSC – Science (Maharashtra State Board)",
      school: "Vidya Prasarak Mandal's B.N. Bandodkar College of Science",
      year: "2019 – 2021",
      score: "74.17%",
    },
    {
      degree: "Bachelor of Science – Computer Science",
      school: "Mulund College of Commerce, University of Mumbai",
      year: "2021 – 2024",
      score: "7.89 CGPA",
    },
  ];
  
  export default function Education() {
    return (
      <section
        className="bg-black/90 w-full py-16 px-6 md:px-24"
        id="education"
      >
        {/* Section Title */}
        <h2
          className="text-[50px] text-white text-center underline underline-offset-8 decoration-purple-600 decoration-4 mb-16 cursor-default"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Education
        </h2>
  
        {/* Timeline */}
        <div className="relative border-l-2 border-purple-600 ml-4 md:ml-16 flex flex-col gap-10">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
  
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-600" />
  
              {/* Degree + Year */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <div className="flex items-center gap-3">
                  <img
                    src="book.png"
                    alt="Education Icon"
                    className="w-6 h-6 object-contain"
                  />
                  <h3
                    className="text-2xl text-white font-semibold cursor-default"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {edu.degree}
                  </h3>
                </div>
                <span className="text-white/60 text-base md:text-right">
                  {edu.year}
                </span>
              </div>
  
              {/* School + Score */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2 pl-9 gap-1">
                <p
                  className="text-lg text-white/50 cursor-default"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {edu.school}
                </p>
                <span className="text-base text-purple-400 font-medium">
                  {edu.score}
                </span>
              </div>
  
            </div>
          ))}
        </div>
      </section>
    );
  }