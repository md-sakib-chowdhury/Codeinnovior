import { useState } from "react";

import partner1 from "./imges.png";
import partner2 from "./imges2.png";
import partner3 from "./imges3.png";
import partner4 from "./imges4.png";
import partner5 from "./imges5.png";
import partner6 from "./imges6.png";
import partner7 from "./imges7.png";
import partner8 from "./imges8.png";
import partner9 from "./imges9.png";
import partner10 from "./imges10.png";
import partner11 from "./imges11.png";
import partner12 from "./imges12.png";
import partner13 from "./imges13.png";
import partner14 from "./imges1.png";
import partner15 from "./CashApp.png";

export default function NavSection() {
  const [activeTab, setActiveTab] = useState("partners");

  const partners = [
    partner1, partner2, partner3, partner4, partner5, partner6,
    partner7, partner8, partner9, partner10, partner11,
    partner12, partner13, partner14, partner15,
  ];

  const csrPartners = [
    partner2, partner4, partner6, partner8, partner10, partner12,
    partner13, partner14, partner15,
  ];

  const i2iPartners = [
    partner1, partner3, partner5, partner7, partner9, partner11,
    partner12, partner13, partner14,
  ];

  // ===== 3 ROW GRID =====
  const renderThreeRows = (images) => (
    <div className="space-y-20">

      {/* Row 1 – 6 images (widest) */}
      <div className="mx-auto max-w-[1700px]
        grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6
        gap-x-16 lg:gap-x-24 gap-y-12 place-items-center">
        {images.slice(0, 6).map((logo, i) => (
          <img key={i} src={logo} className="h-12 sm:h-14 lg:h-16 object-contain" />
        ))}
      </div>

      {/* Row 2 – 5 images */}
      <div className="mx-auto max-w-[1400px]
        grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
        gap-x-16 lg:gap-x-24 gap-y-12 place-items-center">
        {images.slice(6, 11).map((logo, i) => (
          <img key={i} src={logo} className="h-12 sm:h-14 lg:h-16 object-contain" />
        ))}
      </div>

      {/* Row 3 – 4 images (narrowest) */}
      <div className="mx-auto max-w-[1100px]
        grid grid-cols-2 sm:grid-cols-4
        gap-x-16 lg:gap-x-24 gap-y-12 place-items-center">
        {images.slice(11, 15).map((logo, i) => (
          <img key={i} src={logo} className="h-12 sm:h-14 lg:h-16 object-contain" />
        ))}
      </div>

    </div>
  );

  return (
    <div className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="py-28 text-center px-6">
        <div className="max-w-[1800px] mx-auto">

          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border shadow-sm">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-green-600 font-medium">
              We Are Working With
            </span>
          </div>

          <h1 className="mt-10 font-extrabold text-black
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Building a Stronger Future Through Collaboration
          </h1>

          <p className="mt-10 text-gray-700 max-w-[1800px] mx-auto
            text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            We Partner With Tech Companies, Educational Institutions, Mentors,
            And Non-Profits To Create A Learning Ecosystem That Bridges Education
            And Industry.
          </p>

          <p className="mt-4 text-gray-700 max-w-[1800px] mx-auto
            text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            These Collaborations Help Us Deliver Real-World Learning,
            Placement Opportunities, And Social Impact — Together.
          </p>

        </div>
      </section>

      {/* ================= TABS ================= */}
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 lg:gap-32
          text-xl sm:text-2xl lg:text-3xl font-medium">
          {[
            { key: "partners", label: "Our Partners" },
            { key: "csr", label: "Corporate Social Responsibility" },
            { key: "i2i", label: "i2i – Intern to Industry" },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-3 transition
                ${activeTab === tab.key
                  ? "text-orange-500 border-b-4 border-orange-500"
                  : "text-gray-500 hover:text-orange-500"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <section className="py-28">
        <div className="px-6">

          {activeTab === "partners" && renderThreeRows(partners)}

          {activeTab === "csr" && (
            <>
              <h2 className="mb-16 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
                Our CSR Partners
              </h2>
              {renderThreeRows(csrPartners)}
            </>
          )}

          {activeTab === "i2i" && (
            <>
              <h2 className="mb-16 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
                Industry Partners (I2I / ITI Program)
              </h2>
              {renderThreeRows(i2iPartners)}
            </>
          )}

        </div>
      </section>
    </div>
  );
}
