export const projects = [
  {
    id: 'doccure',
    name: 'DocCure',
    subtitle: 'Doctor–Patient Appointment Management Platform',
    description:
      'A full-stack healthcare appointment platform featuring patient, doctor and admin workflows, doctor availability, appointment booking, and Stripe test-payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
    live: 'https://doccure-ecru.vercel.app/',
    repositories: [
      { label: 'Frontend', href: 'https://github.com/zeeshan92git/doc-frontend' },
      { label: 'Backend', href: 'https://github.com/zeeshan92git/Doccure' },
      { label: 'Admin', href: 'https://github.com/zeeshan92git/doc-admin' },
    ],
  },
  {
    id: 'jewels-for-joy',
    name: 'Jewels For Joy',
    subtitle: 'Full-Stack Jewelry E-Commerce Platform',
    description:
      'A Next.js e-commerce application featuring product and category management, customer authentication, shopping cart, order tracking, and admin management workflows.',
    technologies: ['Next.js', 'React', 'MongoDB', 'NextAuth', 'Tailwind CSS'],
    live: 'https://jewels-for-joy.vercel.app/',
    liveStatus: 'Currently returns 404',
    repositories: [],
    sourceStatus: 'Private repository',
  },
]
