import {
  FaAddressBook,
  FaFileCode,
  FaKeyboard,
  FaRobot,
} from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';

export const TechsData = [
  {
    name: 'Html 5',
    Image: '/techs/html.png',
    width: 80,
    height: 80,
  },
  {
    name: 'Css',
    Image: '/techs/css.png',
    width: 80,
    height: 80,
  },
  {
    name: 'JavaScript',
    Image: '/techs/js.png',
    width: 65,
    height: 65,
  },
  {
    name: 'Tailwind Css',
    Image: '/techs/tailwind.png',
    width: 80,
    height: 80,
  },
  {
    name: 'React',
    Image: '/techs/react.png',
    width: 80,
    height: 80,
  },
  {
    name: 'TypeScript',
    Image: '/techs/ts.png',
    width: 80,
    height: 80,
  },
  {
    name: 'Next js 13',
    Image: '/techs/next.png',
    width: 80,
    height: 80,
  },
  {
    name: 'Node js',
    Image: '/techs/node-js.png',
    width: 80,
    height: 80,
  },
  {
    name: 'Mongo db',
    Image: '/techs/mongodb.png',
    width: 40,
    height: 40,
  },
];

export const ServiceData = [
  {
    title: 'Backend',
    icon: FaFileCode,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum faucibus ex, suscipit malesuada ipsum pellentesque ac. Proin vehicula pulvinar nulla eget maximus. Sed finibus mi.',
  },
  {
    title: 'AI',
    icon: FaRobot,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum faucibus ex, suscipit malesuada ipsum pellentesque ac. Proin vehicula pulvinar nulla eget maximus. Sed finibus mi.',
    bgColor: 'bg-blue-600',
  },
  {
    title: 'Fullstack',
    icon: FaKeyboard,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum faucibus ex, suscipit malesuada ipsum pellentesque ac. Proin vehicula pulvinar nulla eget maximus. Sed finibus mi.',
    bgColor: 'bg-green-800',
  },
];

export const ExperienceData = [
  {
    title: 'Computer science student (Specialized in Data Science)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum faucibus ex, suscipit malesuada ipsum pellentesque ac. Proin vehicula pulvinar nulla eget maximus. Sed finibus mi.',
    years: 'Jun 2020 - July 2021',
  },
  {
    title: 'Part-time Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum faucibus ex, suscipit malesuada ipsum pellentesque ac. Proin vehicula pulvinar nulla eget maximus. Sed finibus mi.',
    years: 'Jun 2020 - July 2021',
  },
  {
    title: 'Junior Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum faucibus ex, suscipit malesuada ipsum pellentesque ac. Proin vehicula pulvinar nulla eget maximus. Sed finibus mi.',
    years: 'Jun 2020 - July 2021',
  },
  {
    title: 'Intermediate Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum faucibus ex, suscipit malesuada ipsum pellentesque ac. Proin vehicula pulvinar nulla eget maximus. Sed finibus mi.',
    years: 'Jun 2020 - July 2021',
  },
];

export const ContactData = [
  {
    title: 'Address',
    description: 'Selangor, Malaysia',
    icon: FaAddressBook,
  },
  {
    title: 'Phone',
    description: '+60175817993',
    icon: MdPhone,
  },
  {
    title: 'Email',
    description: 'l_weixiang@outlook.com',
    icon: MdEmail,
  },
];

export const CertData = [
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    logoPath: '/microsoft_logo.jpeg',
    href: 'http://www.microsoft.com', //FIXME: change this to valid cert
  },
  {
    title: 'Build Basic Generative Adversarial Networks (GANs)',
    issuer: 'Coursera',
    logoPath: '/coursera_logo.jpeg',
    href: 'https://www.coursera.org', //FIXME: change this to valid cert
  },
  {
    title: 'Neural Networks and Deep Learning',
    issuer: 'Coursera',
    logoPath: '/coursera_logo.jpeg',
    href: 'https://www.coursera.org', //FIXME: change this to valid cert
  },
];
