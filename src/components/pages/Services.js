import Image from 'next/image';
import ServicesSection from '../overview/services-overview';

const generalDentistry = '/logo/general-dentistry.png';
const restorativeDentistry = '/logo/restorative-dentistry.png';
const cosmeticDentistry = '/logo/cosmetic-dentistry.png';
const specialisedCare = '/logo/specialised-care.png';
const orthodontics = '/logo/orthodontics.png';
const intraOralScanner = '/images/photo-vaccum-pump-1.png';

const keyFeatures = [
  {
    icon: generalDentistry,
    title: 'General Dentistry',
    description:
      'Offering a range of treatments including teeth cleaning, tooth extractions, dental fillings, scaling/polishing, and sealants to keep your smile healthy and strong.',
  },
  {
    icon: restorativeDentistry,
    title: 'Restorative Dentistry',
    description:
      'Whether you need crowns, bridges, dentures, or root canal treatment, we provide expert care to restore the function and aesthetics of your teeth.',
  },
  {
    icon: cosmeticDentistry,
    title: 'Cosmetic Dentistry',
    description:
      'Enhance the appearance of your smile with our cosmetic treatments, including veneers, teeth whitening, and smile design services.',
  },
  {
    icon: specialisedCare,
    title: 'Specialized Care',
    description:
      'Receive advanced dental treatments such as laser surgery, gum disease treatment, and implants, provided by specialists who focus on your unique needs.',
  },
  {
    icon: orthodontics,
    title: 'Orthodontics',
    description:
      'Straighten your teeth and improve alignment with our orthodontic treatments, or prepare for surgery with presurgical orthodontics.',
  },
  {
    icon: intraOralScanner,
    title: 'Advanced Services with Digital Dentistry',
    description:
      'We are equipped with the latest INTRA ORAL SCANNER from Denstply Sirona which function by projecting structured light which is recorded as individual Images and a 3D model is generated.',
  },
];

export default function Services() {
  return (
    <div id="services" className="min-h-screen p-6 md:p-12 bg-gray-100">
      {/* Heading and Paragraph */}
      <section className="text-center max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Dr. Verma’s Dental Surgery & Braces Centre
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          We believe every patient deserves exceptional dental care and address
          every concern with our full attention and expertise. Combined with our
          welcoming office, precision care, and premier team, we’re proud to be
          Dehradun City’s top-rated choice for improving your smile.
        </p>
      </section>

      {/* Key Features */}
      <section className="grid grid-cols-1  gap-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-wrap justify-center gap-6">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="w-full md:w-[300px] lg:w-[350px] h-[400px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                >
                  {/* Image Section - 40% height */}
                  <div className="relative h-2/5 bg-gray-200">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      layout="fill"
                      objectFit="contain"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Content Section - 60% height */}
                  <div className="flex-grow p-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ServicesSection />
    </div>
  );
}
