
// Section Component
export const Section = ({ title, id, children }) => (
    <section id={id} className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        {children}
    </section>
);

// SubSection Component
export const SubSection = ({ title, children }) => (
    <div className="mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">{title}</h3>
        {children}
    </div>
);

// SubSectionList Component
export const SubSectionList = ({ title, items }) => (
    <div className="mb-2">
        <h4 className="text-md font-semibold text-gray-600">{title}</h4>
        <ul className="list-disc ml-6">
            {items.map((item, index) => (
                <li key={index} className="text-gray-500">{item}</li>
            ))}
        </ul>
    </div>
);
