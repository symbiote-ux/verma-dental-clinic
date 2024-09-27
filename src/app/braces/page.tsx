'use client';
import { Section, SubSectionList, SubSection } from '@/components/utils/section'

export default function Braces() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        A Beautiful Smile is Just One of the Benefits of Orthodontic Treatment
      </h1>
      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
        Most people agree that beautifully aligned, straight teeth look great and create a smile that gives you the confidence to look and feel your best. If your teeth are crooked, then Orthodontic Treatment may be just what you need. The benefits of straight teeth go way beyond appearance. Today, with an expanding array of Orthodontic hardware, fixing flawed teeth has become more appealing than ever. We at <span className="font-semibold text-[#18A2BB]">&quot;Dr. Verma&apos;s Dental Surgery & Braces Centre&quot;</span> offer you Metal Braces, Ceramic Braces, Self-Ligating Braces, and Aligners.
      </p>

      {/* Types of Braces Section */}
      <Section title="Various Types of Braces" id="types">
        <SubSection title="Metal Braces">
          <p>
            Metal braces are what everyone typically thinks of when they think of braces. They are metal brackets made of high-grade stainless steel that are attached to the teeth and usually held in place with elastic bands.
          </p>
          <SubSectionList title="Advantages:" items={[
            'The most cost-effective option of all tooth straightening treatments.',
            'The bands come in a variety of colors to help you express your personality.',
          ]} />
          <SubSectionList title="Disadvantages:" items={[
            'They are unattractive and can make the wearer feel less confident.',
            'They can irritate the gums.',
          ]} />
        </SubSection>

        <SubSection title="Ceramic Braces">
          <p>
            Ceramic braces are a form of conventional orthodontic appliance made up of brackets bonded to your individual teeth and an archwire that runs across them. Their fundamental difference lies in the fact that the bracket used is made out of a tooth-colored ceramic compound instead of metal.
          </p>
          <SubSectionList title="Advantages:" items={[
            'They have smaller bracket designs than traditional metal braces.',
            'They are almost invisible from a distance or in photographs.',
            'They are more comfortable than traditional metal braces.',
          ]} />
        </SubSection>

        <SubSection title="Self-Ligating Braces">
          <p>
            Self-ligating braces are one of the innovative options available at our center. They eliminate the need for ties and let the archwire move smoothly through the brackets.
          </p>
          <SubSectionList title="Benefits of Self-Ligating Braces:" items={[
            'Fewer appointments needed to apply braces or make adjustments.',
            'Increased comfort because of low-profile brackets and no ties.',
            'Efficient tooth movement for shorter treatment time.',
          ]} />
        </SubSection>
      </Section>

      {/* Aligners Section */}
      <Section title="Aligners" id="invisalign">
        <p>
          The Invisalign system is a virtually invisible treatment that uses an innovative approach to gently yet effectively straighten your teeth. Through a series of custom-made removable aligners made with unique Smart Force technology, the Invisalign system gradually and predictably moves your teeth to an ideal position.
        </p>
      </Section>
    </div>
  );
}