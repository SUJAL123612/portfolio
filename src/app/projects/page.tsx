const projects = [
    {
      name: "Library Management System",
      image: "LMS.png",
      link: "https://library-management-system-d0nlu2eve-sujal-chalkes-projects.vercel.app/",
      description:
        "Full-stack Library Management System with role-based authentication, book inventory CRUD, automated fine calculation and member feedback system.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL"],
      badge: "Full Stack",
    },
    {
      name: "Movie Hub",
      image: "Movie-Hub.png",
      link: "https://sujal123612.github.io/Movie-Hub/",
      description:
        "Responsive React.js app to explore and search movies with component-based architecture, API integration and dynamic content rendering.",
      tech: ["React", "JavaScript", "CSS"],
      badge: "React",
    },
    {
      name: "Pokemon Battle Arena",
      image: "Pokemon.png",
      link: "https://sujal123612.github.io/Pokemon_Project/first_page",
      description:
        "Pokémon-inspired battle arena built with React featuring interactive gameplay and dynamic data from the PokeAPI.",
      tech: ["React", "JavaScript", "CSS"],
      badge: "React",
    },
    {
      name: "Weather App",
      image: "Weather.png",
      link: "https://sujal123612.github.io/Weather_APP/",
      description:
        "Responsive Weather App that fetches real-time weather data using the OpenWeatherMap API based on user input.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      badge: "API",
    },
    {
      name: "GitHub Profile Search",
      image: "Github.png",
      link: "https://sujal123612.github.io/Github_Profile_search/",
      description:
        "Interactive web app that fetches and displays GitHub user profiles and repositories by entering a username.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      badge: "API",
    },
    {
      name: "Expense Tracker",
      image: "Expense_Tracker.png",
      link: "https://sujal123612.github.io/Expense_Tracker/",
      description:
        "Web app to track income and expenses with transaction history and dynamic balance calculation.",
      tech: ["HTML", "CSS", "JavaScript"],
      badge: "JavaScript",
    },
    {
      name: "Restaurant Website",
      image: "restaurent.png",
      link: "https://sujal123612.github.io/restaurent/",
      description:
        "Modern single-page restaurant website with image slider, parallax backgrounds, food menu and responsive layout.",
      tech: ["HTML", "CSS"],
      badge: "HTML/CSS",
    },
    {
      name: "Random User API",
      image: "API.png",
      link: "https://sujal123612.github.io/Api_Random_User/",
      description:
        "Generates random user profiles using the Random User API with a responsive and interactive UI.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      badge: "API",
    },
    {
      name: "Shopping List",
      image: "Shopping_List.png",
      link: "https://sujal123612.github.io/Shopping_List/",
      description:
        "Shopping list web app with features to add, edit, delete, search and save items using localStorage.",
      tech: ["HTML", "CSS", "JavaScript"],
      badge: "JavaScript",
    },
  ];
  
  export default function Projects() {
    return (
      <section
        className="bg-black/90 w-full py-16 px-6 md:px-24"
        id="projects"
      >
        {/* Section Title */}
        <h2
          className="text-[50px] text-white text-center underline underline-offset-8 decoration-purple-600 decoration-4 mb-16 cursor-default"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Projects
        </h2>
  
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl border border-white/10 p-5 flex flex-col hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/20 transition-all duration-300"
            >
              {/* Badge */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-600/30">
                  {project.badge}
                </span>
              </div>
  
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-44 object-contain rounded-lg mb-4 transition-transform duration-500 hover:scale-105 cursor-default"
              />
  
              {/* Project Name */}
              <h3
                className="text-xl text-white font-semibold mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {project.name}
              </h3>
  
              {/* Description */}
              <p
                className="text-sm text-white/60 leading-relaxed mb-4 flex-grow"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {project.description}
              </p>
  
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
  
              {/* Show Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-center text-sm text-purple-400 border border-purple-600 rounded-full py-2 px-4 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Show Project ↗
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }