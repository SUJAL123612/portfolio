"use client";
import { useState } from "react";

const certifications = [
  {
    name: "Full Stack Web Development",
    image: "Full_Stack_Development.jpeg",
  },
  {
    name: "HTML5 Certification",
    image: "HTML5.jpeg",
  },
  {
    name: "CSS3 Certification",
    image: "CSS3.jpeg",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section
      className="bg-black/90 w-full py-16 px-6 md:px-24"
      id="certifications"
    >
      {/* Section Title */}
      <h2
        className="text-[50px] text-white text-center underline underline-offset-8 decoration-purple-600 decoration-4 mb-16 cursor-default"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Certifications
      </h2>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl border border-white/10 overflow-hidden hover:border-purple-600 hover:shadow-lg hover:shadow-purple-600/20 transition-all duration-300 flex flex-col"
          >
            {/* Certificate Image with Hover Overlay */}
            <div className="relative group">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-52 object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-purple-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <button
                  onClick={() => setSelectedCert(cert.image)}
                  className="text-white text-base font-semibold border border-white rounded-full px-6 py-2 hover:bg-white hover:text-purple-600 transition-all duration-200 cursor-pointer"
                >
                  View Certificate ↗
                </button>
              </div>
            </div>

            {/* Certificate Name Only */}
            <div className="p-5">
              <h3
                className="text-xl text-white font-semibold text-center"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {cert.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedCert(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-purple-400 transition-colors duration-200 cursor-pointer"
            onClick={() => setSelectedCert(null)}
          >
            ✕
          </button>

          {/* Full Certificate Image */}
          <img
            src={selectedCert}
            alt="Certificate"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl shadow-purple-600/30 object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}