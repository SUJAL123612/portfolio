import Navbar from "../components/navbar";

export default function Skills() {
  return (
    <>
      <div className="bg-black/90 border border-transparent w-full h-[500px]">
        <h2
          className="text-2xl font-sans text-white cursor-default underline underline-offset-7 decoration-purple-600 decoration-4 ml-[550px]"
          id="#skills"
        >
          SKILLS
        </h2>

        <div className="border border-yellow-600 mt-[30px] w-full h-[500px] flex">
          {/* Frontend Box */}
          <div className="rounded-lg border border-white mt-[30px] w-[600px] h-[250px] ml-[60px] p-4">
            <p className="text-2xl text-white font-sans cursor-default text-center mb-4">
              Frontend
            </p>
            <div className="grid grid-cols-3 gap-4">
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg">
                <img src="html_icon.png" alt="HTML Icon" className="w-6 h-6" />
                <span>HTML</span>
              </p>
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg">
                <img src="css_icon.png" alt="CSS Icon" className="w-6 h-6" />
                <span>CSS</span>
              </p>
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg">
                <img src="js_icon.png" alt="JS Icon" className="w-6 h-6" />
                <span>JavaScript</span>
              </p>
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg">
                <img src="Reactjs_icon.png" alt="React Icon" className="w-6 h-6" />
                <span>React-JS</span>
              </p>
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg">
                <img src="Tailwind_icon.png" alt="Tailwind Icon" className="w-6 h-6" />
                <span>Tailwind-CSS</span>
              </p>
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg">
                <img src="Gsap_icon.png" alt="GSAP Icon" className="w-6 h-6" />
                <span>GSAP</span>
              </p>
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg">
                <img src="Bootstrap_icon.png" alt="Bootstrap Icon" className="w-6 h-6" />
                <span>Bootstrap</span>
              </p>
            </div>
          </div>

          {/* Backend Box */}
          <div className="rounded-lg border border-white mt-[30px] w-[450px] h-[250px] ml-[70px]">
            <p className="text-2xl text-white cursor-default font-sans text-center mt-2">
              Backend
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
