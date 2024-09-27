export const menuItems = [
    { title: 'Home', route: '/' },
    { title: 'About', route: '/about' },
    { title: 'Services', route: '/services' },
    {
        title: 'Braces',
        route: '/braces',
        subGroup: [
            { title: 'Types of Braces', route: '/braces#types' },
            { title: 'Invisalign', route: '/braces#invisalign' }
        ]
    },
    { title: 'Reviews', route: '/reviews' },
    { title: 'Contact', route: '/contact' },
];