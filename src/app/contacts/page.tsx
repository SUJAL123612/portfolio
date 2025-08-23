export default function Contacts() {
  return (
    <>
      <div className="bg-purple-600 border border-transparent w-full h-[220px]">
        <h2
          className="text-2xl font-sans text-white cursor-default underline underline-offset-7 decoration-[#ffd700] decoration-4 ml-[580px]"
          id="contact">
          CONTACT
        </h2>
        <div className="ml-[80px] mt-7">
          <div className="flex items-center mb-5">
            {/* Email Icon */}
            <img src="email_icon.png" alt="Email" className="w-8 h-8 mr-3" />
            <p className="text-2xl text-white font-sans cursor-pointer mr-3">Email <span className="ml-1">:-</span></p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sujal758@gmail.com" target="_blank" className="text-2xl text-white font-sans cursor-pointer hover:text-gray-200">
              myemail@gmail.com
            </a>
          </div>

          <div className="flex items-center mb-5">
            {/* LinkedIn Icon */}
            <img src="linkedin_icon.png" alt="LinkedIn" className="w-8 h-8 mr-3" />
            <p className="text-2xl text-white font-sans cursor-pointer mr-3">LinkedIn <span className="ml-1">:-</span></p>
            <a href="https://www.linkedin.com/in/sujal-chalke-b23923244/" target="_blank" className="text-2xl text-white font-sans cursor-pointer hover:text-gray-200">
              linkedin.com/username
            </a>
          </div>

          <div className="flex items-center">
            {/* GitHub Icon */}
            <img src="github_icon.png" alt="GitHub" className="w-8 h-8 mr-3" />
            <p className="text-2xl text-white font-sans cursor-pointer mr-3">Github <span className="ml-1">:-</span></p>
            <a href="https://github.com/SUJAL123612" target="_blank" className="text-2xl text-white font-sans cursor-pointer hover:text-gray-200">
              github.com/username
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
