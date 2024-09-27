import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const DropdownMenu = ({ item }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            className="relative"
            ref={dropdownRef}
        >
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-[#1D1D1D] hover:text-[#18A2BB] font-semibold transition duration-300 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
            >
                {item.title}
                <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${dropdownOpen ? 'transform rotate-180' : ''
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>
            {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                    <ul className="py-1">
                        {item.subGroup.map((subItem) => (
                            <li key={subItem.route}>
                                <Link
                                    href={subItem.route}
                                    className="block px-4 py-2 text-[#1D1D1D] hover:text-[#18A2BB] hover:bg-[#FFF7F0] transition duration-300"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    {subItem.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


export const MobileDropdownMenu = ({ item, setMenuOpen }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <li className="w-full">
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex justify-between items-center w-full text-white font-semibold text-lg px-4 py-2 hover:bg-[#FFF7F0] hover:text-[#1D1D1D] transition duration-300 focus:outline-none"
            >
                {item.title}
                <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${dropdownOpen ? 'transform rotate-180' : ''
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>
            {dropdownOpen && (
                <ul className="bg-[#18A2BB]">
                    {item.subGroup.map((subItem) => (
                        <li key={subItem.route}>
                            <Link
                                href={subItem.route}
                                className="block w-full text-white font-semibold text-lg px-8 py-2 hover:bg-[#FFF7F0] hover:text-[#1D1D1D] transition duration-300"
                                onClick={() => {
                                    setMenuOpen(false);
                                    setDropdownOpen(false);
                                }}
                            >
                                {subItem.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};
