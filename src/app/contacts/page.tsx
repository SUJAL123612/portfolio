export default function Contacts() {
  return (
    <>
      <div className="bg-black/90 border border-transparent w-full h-[400px] py-16 px-4">
        {/* Heading */}
        <h2  className="text-[50px] font-bold text-white text-center underline underline-offset-7 decoration-purple-600 decoration-4 mb-12"
          id="contact" style={{ fontFamily: "'Inter', sans-serif" }} >CONTACT</h2>

        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="flex flex-col items-center bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-purple-600 transition duration-300">
            <img src="email_icon.png" alt="Email" className="w-12 h-12 mb-4" />
            <p className="text-xl text-white mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>Email</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sujal758@gmail.com" target="_blank" className="text-white text-lg hover:text-purple-500 break-all"style={{ fontFamily: "'Roboto', sans-serif" }}>myemail@gmail.com</a>
          </div>

          {/* LinkedIn Card */}
          <div className="flex flex-col items-center bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-purple-600 transition duration-300">
            <img src="linkedin_icon.png" alt="LinkedIn" className="w-12 h-12 mb-4" />
            <p className="text-xl text-white mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>LinkedIn</p>
            <a href="https://www.linkedin.com/in/sujal-chalke-b23923244/" target="_blank" className="text-white text-lg hover:text-purple-500 break-all" style={{ fontFamily: "'Roboto', sans-serif" }}>linkedin.com/in/username</a>
          </div>

          {/* GitHub Card */}
          <div className="flex flex-col items-center bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-purple-600 transition duration-300">
            <img src="github_icon.png" alt="GitHub" className="w-12 h-12 mb-4" />
            <p className="text-xl text-white mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>GitHub</p>
            <a href="https://github.com/SUJAL123612" target="_blank" className="text-white text-lg hover:text-purple-500 break-all" style={{ fontFamily: "'Roboto', sans-serif" }}>github.com/username</a>
          </div>
        </div>
      </div>
    </>
  );
}
