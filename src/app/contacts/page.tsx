const contacts = [
  {
    label: "Email",
    display: "sujal758@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=sujal758@gmail.com",
    icon: "email_icon.png",
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/sujal-chalke",
    link: "https://www.linkedin.com/in/sujal-chalke-b23923244/",
    icon: "linkedin_icon.png",
  },
  {
    label: "GitHub",
    display: "github.com/SUJAL123612",
    link: "https://github.com/SUJAL123612",
    icon: "github_icon.png",
  },
];

export default function Contacts() {
  return (
    <section
      className="bg-black/90 w-full py-16 px-6 md:px-24"
      id="contact"
    >
      {/* Section Title */}
      <h2
        className="text-[50px] text-white text-center underline underline-offset-8 decoration-purple-600 decoration-4 mb-4 cursor-default"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Contact
      </h2>

      {/* Subtitle */}
      <p
        className="text-white/50 text-center text-lg mb-16 cursor-default"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
      </p>

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-gray-900 rounded-xl border border-white/10 p-8 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/20 transition-all duration-300 group"
          >
            {/* Icon */}
            <img
              src={contact.icon}
              alt={contact.label}
              className="w-14 h-14 mb-4 object-contain transition-transform duration-300 group-hover:scale-110"
            />

            {/* Label */}
            <p
              className="text-xl text-white font-semibold mb-2 cursor-default"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {contact.label}
            </p>

            {/* Display Link */}
            <p
              className="text-white/50 text-sm text-center group-hover:text-purple-400 transition-colors duration-300 break-all"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              {contact.display}
            </p>
          </a>
        ))}
      </div>

      {/* Footer */}
      <p
        className="text-white/20 text-center text-sm mt-16 cursor-default"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        {/* © 2025 Sujal Chalke. All rights reserved. */}
      </p>
    </section>
  );
}