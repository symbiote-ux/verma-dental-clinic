import Image from 'next/image';

const doctors = [
  {
    name: 'Dr. Sudhanshu Verma',
    role: 'Senior Dentist [Managing Director]',
    yearsOfExperience: '17+ years',
    imageSrc: '/images/dr.jpeg',
    details:
      'Dr. Sudhanshu Verma is the managing director of Dr. Vermas Dental Surgery Centre. He did graduation from V.S Dental College and hospital in the year 2007 and MDS in Orthodontics and Dentofacial Orhopaedics from Bangalore, Rajiv Gandhi University Of Health Sciences. His extensive clinical experience has involved completing treatment for over 3000 patients and is especially gifted with the art of orthodontic treatment. The specialty includes growth modulation treatment, fixed mechanotherapy (metal, ceramic, lingual and clear aligners), surgical correction of skeletal malocclusion. He also practices in rural areas to provide quality dental care to the underprivileged patients from the rural areas. Currently he is working as Assistant Professor in the Department of Orthodontics and Dentofacial Orthopaedics at UDMRI, Dehradun. To his credit he has publications in both National and International Journals and has also presented papers at various National and International Conferences. Formerly he was resident doctor at the dental department in Dr. Ram Manohar Lohia Hospital, New Delhi.',
  },
  {
    name: 'Dr. Nitin Sethi',
    role: 'Prosthodontics',
    yearsOfExperience: 12,
    imageSrc: '/images/dr.jpeg',
    details:
      'Dr. Nitin Sethi graduated from well known Govt Dental college, Amritsar and hospital and subsequently completed his MDS in the branch of Prosthodontics from Govt Dental College, Ahemadabad and was formerly resident at PGI, Chandigarh. He is passionate towards prosthodontic skills and is successfully practicing since 12 years. The speciality includes Crowns, Bridges, Complete dentures, Full mouth Rehabilitation, Oral Implantoloy and Smile designing, Maxillofacial Prosthodontics. He is currently working as a Professor at Himachal Dental College.',
  },
  {
    name: 'Dr. Simika Verma',
    role: 'Endodontics',
    yearsOfExperience: 12,
    imageSrc: '/images/dr1.jpeg',
    details:
      'Dr. Simika Verma graduated in the year 2012 from VS Dental College, Bangalore and subsequently did her Post Graduate certificate course from the prestigious Maulana Azad Dental College, New Delhi in Endodontics.She has carried out over 2000 root canal procedures and excels in various esthetic procedures like bleaching & whitening of teeth, Ceramic Crowns. Formerly She was resident doctor at the dental department in Dr. Ram Manohar Lohia Hospital, New Delhi.',
  },
  {
    name: 'Dr. Anshdeep Singh',
    role: 'Dental Surgeon, Endodontist',
    yearsOfExperience: 15,
    imageSrc: '/images/dr.jpeg',
    details:
      'Dr. Anshdeep Singh is a Dental Surgeon and Endodontist in Dehradun. Dehradun and has an experience of 15 years in these fields. Dr. Anshdeep Singh practices at Vermas Dental Surgery & Braces Centre in Dehradun, Dehradun. He completed BDS from Sree Balaji Dental College & Hospital in 2009 and MDS-Conservative Dentistry & Endodontics from Teerthanker Mahaveer Dental College Research Centre in 2013. He is a member of Indian Dental Association, Indian Association of Conservative Dentistry and Endodontics (IACDE) and Indian Endodontic Society',
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
