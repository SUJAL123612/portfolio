export default function Home() {
  return (
    <div className="bg-black/90 w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py-10 gap-10" id="home">
      
      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
        <p
          className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold max-w-2xl" 
          style={{ fontFamily: "'Poppins', sans-serif" }} 
        >
          Hello I&apos;m Sujal Chalke
        </p>

        <p
          className="text-white text-sm sm:text-base lg:text-lg mt-5 max-w-2xl text-justify"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          I&apos;m a Certified Full-Stack Developer with skills in HTML, CSS,
          JavaScript, React.js, Next.js, Node.js, and SQL. I enjoy
          building web applications that combine simplicity,
          performance, and great user experience. Through hands-on
          experience in personal and client-based projects, I&apos;ve
          developed both front-end and back-end expertise, allowing me
          to create complete web solutions from concept to deployment.
          I&apos;m passionate about writing clean, maintainable code and
          continuously improving my skills by working on real-world
          applications and modern web technologies.
        </p>

        <button
          className="mt-8 bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full transition duration-300"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          DOWNLOAD RESUME
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="profile.jpg"
          alt="profile"
          className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto object-contain"
        />
      </div>
    </div>
  );
}