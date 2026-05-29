export default function Home() {
  return (
    <>
      <div className="bg-black/90  border-transparent border-[1px] w-full h-[500px] flex">
        <div className="">
          <p className="text-[60px] font-sans text-white ml-[100px] mt-[20px] w-90" style={{ fontFamily: "'Poppins', sans-serif" }}>Hello I&apos;m Sujal Chalke</p>
          <p className="text-[17px] font-sans text-white ml-[100px] mt-[10px] w-[550px] text-justify" style={{ fontFamily: "'Poppins', sans-serif" }}>I&apos;m a Full-Stack Developer with skills in HTML, CSS, JavaScript, React.js, Next.js, Node.js, and SQL. I enjoy building web applications that combine simplicity, performance, and great user experience. Through hands-on experience in personal and client-based projects, I've developed both front-end and back-end expertise, allowing me to create complete web solutions from concept to deployment. I'm passionate about writing clean, maintainable code and continuously improving my skills by working on real-world applications and modern web technologies.</p>
          <p className="text-[20px] rounded-full font-sans text-gray-300 ml-[100px] mt-[20px] cursor-pointer bg-purple-500 hover:bg-purple-600 hover:text-white w-60 pr-5 pl-5 pt-2 pb-2">DOWNLOAD RESUME</p>
        </div>
        {/* <div className="w-70 h-70 rounded-full overflow-hidden border-4 border-purple-600 mt-[50px] ml-[180px]"> */}
          <img src="profile.jpg" alt="profile" className="w-[550px] h-[450px] object-contain mt-[10px]"/>
        {/* </div> */}
      </div>
    </>
  );
}
