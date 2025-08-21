import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="text-white bg-black/90 border border-transparent border-[1px] flex">
        <div className="mt-8">
          <p className="inline-block mr-8 mb-8 text-2xl font-sans text-white ml-[100px] cursor-default" id="#home">Sujal Chalke</p>
        </div>
        <ul className="ml-[370px] mt-8">
          <li className="inline-block mr-8 mb-8 text-2xl font-sans text-white cursor-pointer hover:text-white/70"><Link href="#home">Home</Link></li>
          <li className="inline-block mr-8 mb-8 text-2xl font-sans text-white cursor-pointer hover:text-white/70"><Link href="#skills">Skills</Link></li>
          <li className="inline-block mr-8 mb-8 text-2xl font-sans text-white cursor-pointer hover:text-white/70"><Link href="/education">Education</Link></li>          
          <li className="inline-block mr-8 mb-8 text-2xl font-sans text-white cursor-pointer hover:text-white/70"><Link href="/projects">Projects</Link></li>
          <li className="inline-block mr-8 mb-8 text-2xl font-sans text-white cursor-pointer hover:text-white/70"><Link href="/contacts">Contacts</Link></li>
        </ul>
      </nav>
    </>
  );
}
