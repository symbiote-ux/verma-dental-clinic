'use client';

import { useState } from 'react';

const actualServices = [
  'Acrylic Partial Denture',
  'BPS Dentures Fixing',
  'Crowns and Bridges Fixing',
  'Artificial Teeth',
  'Cast Partial Denture',
  'Conscious Sedation',
  'Conservative Dentistry',
  'Cosmetic/ Aesthetic Dentistry',
  'Complete/Partial Dentures Fixing',
  'Impaction / Impacted Tooth Extraction',
  'Endo Surgery Or Apicoectomy',
  'Endosurgery',
  'Tooth Extraction',
  'Dental Fillings',
  'Fixed Partial Denture (FPD)',
  'Flexible Partial/Complete Denture',
  'Forensic Odontology',
  'Gum Disease Treatment/ Surgery',
  'Flap Surgery',
  'Dental Implant Fixing',
  'Inlays and Onlays',
  'Invisible/Clear Braces',
  'Laminates',
  'Laser Gum Surgery',
  'Laser Surgery',
  'Periodontal Flap Surgery',
  'Post and Core',
  'RCT - Root Canal Treatment',
  'Scaling / Polishing',
  'Dental Sealant',
  'Smile Design',
  'Teeth Whitening',
  'Teeth Reshaping',
  'Tooth Coloured Fillings',
  'Veneers / Laminates',
  'Dental Braces Fixing',
  'Wedding Smile Planner',
  'Presurgical Orthodontics',
];

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className="mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 mt-20">
        Our Services
      </h2>
      <div
        className={`grid grid-cols-2 gap-4 max-w-6xl mx-auto md:grid-cols-3 lg:grid-cols-4 overflow-hidden transition-all duration-500 ease-in-out ${
          showAll ? 'max-h-full' : 'max-h-screen'
        }`}
      >
        {actualServices.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center text-center text-sm font-medium text-gray-800 hover:bg-gray-50"
          >
            {service}
          </div>
        ))}
      </div>
      {/* View More / View Less Button */}
      <div className="text-center mt-8">
        <button
          className="text-white bg-[#18A2BB] px-4 py-2 rounded-lg hover:bg-white  hover:text-[#18A2BB] focus:outline-none focus:ring-2 focus:ring-[#18A2BB]"
          onClick={toggleShowAll}
        >
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
