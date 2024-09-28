'use client';
import { ProductPhotoCollage } from '@/components/overview/ProductPhotoCollage';
import { Section } from '@/components/utils/section';

export default function Braces() {
  const images = [
    '/images/photo1.jpg',
    '/images/photo4.jpg',
    '/images/photo5.jpg',
    '/images/photo6.jpg',
    '/images/photo7.jpg',
    '/images/photo8.jpg',
    '/images/photo9.jpg',
    '/images/photo18.jpg',
    '/images/photo19.jpg',
    '/images/photo20.jpg',
    '/images/photo21.jpg',
    '/images/photo22.jpg',
    '/images/photo-last.jpg',
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 mt-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        A Beautiful Smile is Just One of the Benefits of Orthodontic Treatment
      </h1>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
        Most people agree that beautifully aligned, straight teeth look great
        and create a smile that gives you the confidence to look and feel your
        best. If your teeth are crooked, then Orthodontic Treatment may be just
        what you need. The benefits of straight teeth go way beyond appearance.
        Today, with an expanding array of Orthodontic hardware, fixing flawed
        teeth has become more appealing than ever. We at{' '}
        <span className="font-semibold text-[#18A2BB]">
          &quot;Dr. Verma&apos;s Dental Surgery & Braces Centre&quot;
        </span>{' '}
        offer you Metal Braces, Ceramic Braces, Self-Ligating Braces, and
        Aligners.
      </p>

      {/* Types of Braces Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Various Types of Braces
        </h2>

        {/* Grid Container for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Metal Braces Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Metal Braces</h3>
            <p className="mb-4">
              Metal braces are what everyone typically thinks of when they think
              of braces. They are metal brackets made of high-grade stainless
              steel that are attached to the teeth and usually held in place
              with elastic bands.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold">Advantages:</h4>
              <ul className="list-disc list-inside">
                <li>
                  The most cost-effective option of all tooth straightening
                  treatments.
                </li>
                <li>
                  The bands come in a variety of colors to help you express your
                  personality.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Disadvantages:</h4>
              <ul className="list-disc list-inside">
                <li>
                  They are unattractive and can make the wearer feel less
                  confident.
                </li>
                <li>They can irritate the gums.</li>
              </ul>
            </div>
          </div>

          {/* Ceramic Braces Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Ceramic Braces</h3>
            <p className="mb-4">
              Ceramic braces are a form of conventional orthodontic appliance
              made up of brackets bonded to your individual teeth and an
              archwire that runs across them. The bracket used is made out of a
              tooth-colored ceramic compound.
            </p>
            <div>
              <h4 className="font-semibold">Advantages:</h4>
              <ul className="list-disc list-inside">
                <li>
                  They have smaller bracket designs than traditional metal
                  braces.
                </li>
                <li>
                  They are almost invisible from a distance or in photographs.
                </li>
                <li>
                  They are more comfortable than traditional metal braces.
                </li>
              </ul>
            </div>
          </div>

          {/* Self-Ligating Braces Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Self-Ligating Braces</h3>
            <p className="mb-4">
              Self-ligating braces are one of the innovative options available
              at our center. They eliminate the need for ties and let the
              archwire move smoothly through the brackets.
            </p>
            <div>
              <h4 className="font-semibold">Benefits:</h4>
              <ul className="list-disc list-inside">
                <li>
                  Fewer appointments needed to apply braces or make adjustments.
                </li>
                <li>
                  Increased comfort because of low-profile brackets and no ties.
                </li>
                <li>Efficient tooth movement for shorter treatment time.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Aligners Section */}
      <Section title="Invisible Aligners" id="invisalign">
        <p>
          The Invisalign system is a virtually invisible treatment that uses an
          innovative approach to gently yet effectively straighten your teeth.
          Through a series of custom-made removable aligners made with unique
          Smart Force technology, the Invisalign system gradually and
          predictably moves your teeth to an ideal position.
        </p>
        <ProductPhotoCollage images={images} />
      </Section>
    </div>
  );
}
