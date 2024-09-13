import Image from 'next/image';

const doctors = [
  {
    name: 'Dr. Sudhanshu Verma',
    role: 'Senior Dentist [Managing Director]',
    yearsOfExperience: '17+ years',
    imageSrc: '/images/dr-sudhanshu-verma.jpg',
    details:
      'Dr. Sudhanshu Verma is the managing director of Dr. Vermas Dental Surgery Centre. He did graduation from V.S Dental College and hospital in the year 2007 and MDS in Orthodontics and Dentofacial Orhopaedics from Bangalore, Rajiv Gandhi University Of Health Sciences. His extensive clinical experience has involved completing treatment for over 3000 patients and is especially gifted with the art of orthodontic treatment. The specialty includes growth modulation treatment, fixed mechanotherapy (metal, ceramic, lingual and clear aligners), surgical correction of skeletal malocclusion. He also practices in rural areas to provide quality dental care to the underprivileged patients from the rural areas. Currently he is working as Assistant Professor in the Department of Orthodontics and Dentofacial Orthopaedics at UDMRI, Dehradun. To his credit he has publications in both National and International Journals and has also presented papers at various National and International Conferences. Formerly he was resident doctor at the dental department in Dr. Ram Manohar Lohia Hospital, New Delhi.',
  },
  {
    name: 'Dr. Jane Doe',
    role: 'Orthodontist',
    yearsOfExperience: 10,
    imageSrc: '/images/dr-jane-doe.jpg',
    details:
      'Dr. Jane Doe is an experienced orthodontist with a decade of experience in creating beautiful, straight smiles. She utilizes cutting-edge technology to provide the best orthodontic care for patients of all ages.',
  },
  {
    name: 'Dr. John Smith',
    role: 'Senior Dentist',
    yearsOfExperience: 15,
    imageSrc: '/images/dr-john-smith.jpg',
    details:
      'Dr. John Smith has been practicing dentistry for over 15 years. He specializes in cosmetic and restorative dentistry, helping patients achieve their dream smiles with advanced techniques and compassionate care.',
  },
  {
    name: 'Dr. Jane Doe',
    role: 'Orthodontist',
    yearsOfExperience: 10,
    imageSrc: '/images/dr-jane-doe.jpg',
    details:
      'Dr. Jane Doe is an experienced orthodontist with a decade of experience in creating beautiful, straight smiles. She utilizes cutting-edge technology to provide the best orthodontic care for patients of all ages.',
  },
];

export default function AboutUs() {
  return (
    <div id="about" className="max-w-7xl mx-auto p-4">
      {/* About Clinic Section */}
      <section className="mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          About Us
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          At{' '}
          <span className="font-semibold text-[#18A2BB]">
            Dr. Verma's Dental Surgery Center
          </span>
          , we are committed to providing the{' '}
          <span className="font-semibold text-[#18A2BB]">
            BEST dental clinic services
          </span>{' '}
          in Dehradun. From Scaling, Root Canals, and Teeth Whitening to Braces
          & Implants, we offer solutions for all your dental needs with the help
          of our{' '}
          <span className="font-semibold text-[#18A2BB]">
            outstanding super-specialty faculty
          </span>{' '}
          of qualified and friendly dentists.
          <br />
          <br />
          Dr. Verma has dedicated years to perfecting his skills and integrating
          the latest advancements in dentistry. Combined with our welcoming
          office, precise care, and a premier team, we’re honored to be Dehradun
          City’s top-rated choice for enhancing your smile. There’s a reason why
          patients choose us as their preferred dentist.
        </p>
      </section>

      {/* Doctors Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Meet Our Doctors
        </h2>

        <div className="overflow-x-auto">
          <div className="flex flex-nowrap gap-8">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col flex-shrink-0 w-80"
              >
                {/* Profile Picture */}
                <div className="relative h-48 w-full">
                  <Image
                    src={doctor.imageSrc}
                    alt={doctor.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>

                {/* Doctor Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800">
                    {doctor.name}
                  </h3>
                  <h4 className="text-md font-semibold text-gray-600 mb-2">
                    {doctor.role}
                  </h4>
                  <p className="text-gray-500 mb-4">
                    {doctor.yearsOfExperience} years of experience
                  </p>
                  <p className="text-gray-700">{doctor.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
