'use client';

import Link from 'next/link';
import { doctors } from '@/components/utils/doctors';
import Image from 'next/image';

const DoctorLink = ({ doctor }) => {
    return (
        <Link href={`/about#doctor-${doctor.name}`} className="flex flex-row border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition">
            <div className="relative w-1/4 h-full">
                <Image
                    src={doctor.imageSrc}
                    alt={doctor.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                    loading="lazy"
                />
            </div>
            <div className='w-3/4 ml-4 p-4'>
                <h3 className="text-lg font-semibold">{doctor.name}</h3>
                <p className="text-sm text-gray-600">{doctor.role}</p>
                <p className="text-sm text-gray-500">{doctor.yearsOfExperience} years of experience</p>
            </div>
        </Link>
    );
};

export const AboutDoctorOverview = () => {
    return <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Meet Our Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {doctors.map((doctor, index) => (
                <DoctorLink key={index} doctor={doctor} index={index} />
            ))}
        </div>
    </div>;
};