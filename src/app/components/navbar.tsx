import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="text-white bg-black/90  border-transparent border-[1px] flex">
      <div className="mt-8 ml-[100px]">
          <img src="s.png" alt="logo" className="w-75 h-16 cursor-default" id="home" />
        </div>
        <ul className="ml-[300px] mt-8">
          <li className="inline-block mr-8 mb-8 text-xl font-sans text-white cursor-pointer hover:text-purple-500"><Link href="#home">Home</Link></li>
          <li className="inline-block mr-8 mb-8 text-xl font-sans text-white cursor-pointer hover:text-purple-500"><Link href="#skills">Skills</Link></li>
          <li className="inline-block mr-8 mb-8 text-xl font-sans text-white cursor-pointer hover:text-purple-500"><Link href="#education">Education</Link></li>          
          <li className="inline-block mr-8 mb-8 text-xl font-sans text-white cursor-pointer hover:text-purple-500"><Link href="#projects">Projects</Link></li>
          <li className="inline-block mr-8 mb-8 text-xl font-sans text-white cursor-pointer hover:text-purple-500"><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}
