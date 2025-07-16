import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="navbar">
          <Link href="/home">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contacts">Contacts</Link>
        </ul>
      </nav>
    </>
  );
}
