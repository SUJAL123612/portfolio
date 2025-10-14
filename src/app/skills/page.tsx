export default function Skills() {
  return (
    <>
      <div className="bg-black/90 border border-transparent w-full h-[700px]">
        <h2 className="text-[50px] font-sans text-white cursor-default underline underline-offset-7 decoration-purple-600 decoration-4 text-center"
          id="skills"   style={{ fontFamily: "'Inter', sans-serif;" }}>SKILLS</h2>

        <div className="border border-transparent mt-[30px] w-full h-[500px] flex justify-center">
          {/* Frontend Box */}
          {/* <div className="rounded-lg border border-white mt-[30px] w-[600px] h-[250px] ml-[60px] p-4"> */}
          <div className="rounded-lg border border-white mt-[30px] w-[600px] h-[250px] ml-[30px] p-4">
            <p className="text-2xl text-white font-sans cursor-default text-center mb-4">
              FRONTEND
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
              <div className="col-span-3 flex justify-center">
                <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-8 py-2 space-x-2 text-lg">
                  <img src="Bootstrap_icon.png" alt="Bootstrap Icon" className="w-6 h-6" />
                  <span>Bootstrap</span>
                </p>
              </div>
            </div>
          </div>

          {/* Backend Box
          <div className="rounded-lg border border-white mt-[30px] w-[450px] h-[250px] ml-[70px]">
            <p className="text-2xl text-white cursor-default font-sans text-center mt-2">
              Backend
            </p>
            <div className="grid grid-cols-3 gap-4">
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg ml-5">
                <img src="mysql_icon.png" alt="Mysql Icon" className="w-6 h-6" />
                <span>MYSQL</span>
              </p>
            </div>
          </div> */}
        </div>
        <div className="border border-transparent -mt-[210px] w-full  flex">
          {/* Tools Box */}
          <div className="rounded-lg border border-white mt-[30px] w-[430px] h-[190px] ml-[190px] p-4">
            <p className="text-2xl text-white font-sans cursor-default text-center mb-4">
              TOOLS
            </p>
            <div className="grid grid-cols-2 gap-4">
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg ml-5 w-40">
                <img src="git_icon.png" alt="Mysql Icon" className="w-6 h-6" />
                <span>Git</span>
              </p>
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg ml-3 w-40">
                <img src="github_icon.png" alt="Mysql Icon" className="w-6 h-6" />
                <span>Github</span>
              </p>
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg ml-5 w-40">
                <img src="vs_icon.png" alt="Mysql Icon" className="w-6 h-6" />
                <span>VS Code</span>
              </p>
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg ml-3 w-40">
                <img src="postman_icon.png" alt="Mysql Icon" className="w-6 h-6" />
                <span>Postman</span>
              </p>
            </div>
          </div>
          {/* Languages Box */}
          <div className="rounded-lg border border-white mt-[30px] w-[430px] h-[190px] ml-[60px] p-4">
            <p className="text-2xl text-white font-sans cursor-default text-center mb-4">
              LANGUAGES
            </p>
            <div className="grid grid-cols-2 gap-4">
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-6 py-2 space-x-2 text-lg ml-3 w-43">
                <img src="js_icon.png" alt="JS Icon" className="w-6 h-6" />
                <span>JavaScript</span>
              </p>
              <p className="flex items-center text-white font-sans cursor-default rounded-full border border-white px-4 py-2 space-x-2 text-lg ml-2 w-43">
                <img src="TypeScript_icon.png" alt="React Icon" className="w-6 h-6" />
                <span>TypeScript</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
