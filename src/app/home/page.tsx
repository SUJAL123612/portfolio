export default function Home() {
  return (
    <>
      <div className="bg-black/90  border-transparent border-[1px] w-full h-[500px] flex">
        <div className="">
          <p className="text-[60px] font-sans text-white ml-[100px] mt-[20px] w-90" style={{ fontFamily: "'Poppins', sans-serif" }}>Hello I&apos;m Sujal Chalke</p>
          <p className="text-[17px] font-sans text-white ml-[100px] mt-[10px] w-[550px] text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>I&apos;m a Full-Stack Developer with skills in HTML, CSS, JavaScript,Python and React. I like building web applications that combine simplicity, performance, and great user experience.I’ve learned both front-end and back-end development, which allows me to create complete web solutions through my personal projects.I’m passionate about improving my skills and building applications that solve real-world problems.</p>
          <p className="text-[20px] rounded-full font-sans text-gray-300 ml-[100px] mt-[20px] cursor-pointer bg-purple-500 hover:bg-purple-600 hover:text-white w-60 pr-5 pl-5 pt-2 pb-2">DOWNLOAD RESUME</p>
        </div>
        {/* <div className="w-70 h-70 rounded-full overflow-hidden border-4 border-purple-600 mt-[50px] ml-[180px]"> */}
          <img src="profile1.png" alt="profile" className="w-[550px] h-[450px] object-contain mt-[10px]"/>
        {/* </div> */}
      </div>
    </>
  );
}
