import {
  FaAddressBook,
  FaFileCode,
  FaKeyboard,
  FaRobot,
} from 'react-icons/fa6';
import { GiBookCover } from 'react-icons/gi';
import { MdEmail, MdPhone } from 'react-icons/md';
import { SiKubernetes, SiPython, SiTypescript } from 'react-icons/si';

export const FrontendTechData = [
  {
    name: 'Html5',
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
    name: 'TailwindCss',
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
    name: 'NextJs 14',
    Image: '/techs/next.png',
    width: 80,
    height: 80,
  },
  {
    name: 'SvelteKit',
    Image: '/techs/sveltekit.png',
    width: 65,
    height: 65,
  },
];

export const BackendTechData = [
  // {
  //   name: 'JavaScript',
  //   Image: '/techs/js.png',
  //   width: 65,
  //   height: 65,
  // },
  {
    name: 'NodeJs',
    Image: '/techs/node-js.png',
    width: 80,
    height: 80,
  },
  {
    name: 'MongoBb',
    Image: '/techs/mongodb.png',
    width: 40,
    height: 40,
  },
  {
    name: 'PostgreSQL',
    Image: '/techs/postgres.png',
    width: 80,
    height: 80,
  },
  {
    name: 'GraphQL',
    Image: '/techs/graphql.png',
    width: 80,
    height: 80,
  },
  // {
  //   name: 'TypeScript',
  //   Image: '/techs/ts.png',
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   name: 'Python',
  //   Image: '/techs/python.png',
  //   width: 80,
  //   height: 80,
  // },
  {
    name: 'Tensorflow',
    Image: '/techs/tensorflow.png',
    width: 80,
    height: 80,
  },
  {
    name: 'Kubernetes',
    Image: '/techs/kubernetes.png',
    width: 80,
    height: 80,
  },
  {
    name: 'Redis',
    Image: '/techs/redis.png',
    width: 150,
    height: 150,
  },
];

export const ServiceData = [
  {
    title: 'Developer / Engineer',
    icon: FaFileCode,
    description:
      'Experienced in design large scale system according to customer needs.',
  },
  {
    title: 'AI',
    icon: FaRobot,
    description:
      'Passionate about AI and posses knowledge in deep learning. Had experience to train and design model from scratch.',
    bgColor: 'bg-blue-600',
  },
  {
    title: 'Teamlead',
    icon: FaKeyboard,
    description:
      'Able to lead a team of engineers in developing application and have the ability to communitecate effectively. ',
    bgColor: 'bg-green-800',
  },
];

export const ExperienceData: {
  title: string;
  description: string;
  years: string;
  organization: { name: string };
  bgColor?: string;
  icon?: ExperienceIconNames;
}[] = [
  {
    title: 'Computer science student ',
    description:
      'A computer science student that is specialized in data science. FYP (final year project) is AI-related with title "Deep Saliency Retargeting", which is interesting and can be found in my github.',
    years: 'July 20217 - Jun 2021',
    organization: {
      name: 'Multimedia University',
    },
    bgColor: 'rgb(37 99 235)',
    icon: 'giBookCover',
  },
  {
    title: 'Part-time Software Engineer',
    description:
      'Responsible for maintening existing project and helped to develop new project from scratch. Able to optimize system calculation performance from 1 minute to 5 seconds.',
    years: 'Jan 2020 - Sept 2020',
    organization: {
      name: 'Leocode Sdn Bhd',
    },
    bgColor: 'rgb(185 28 28 / var(--tw-bg-opacity))',
    icon: 'siPython',
  },
  {
    title: 'Junior Software Engineer',
    description:
      'Involved in developing a cental management system. Provided solution for handling race issue in the inventory management system.',
    years: 'Jun 2021 - Nov 2021',
    organization: {
      name: 'Grandshopware Sdn Bhd',
    },
    icon: 'siTypeScript',
    bgColor: 'rgb(22 101 52 / var(--tw-bg-opacity))',
  },
  {
    title: 'Intermediate Software Engineer',
    description:
      'Lead a team of 4 (including me) in developing a central management system from scratch. I was responsible for discussing with client and comes out with an optimal solution to solve business problem.',
    years: 'Dec 2021 - Jun 2023',
    organization: {
      name: 'Grandshopware Sdn Bhd',
    },
    bgColor: 'rgb(22 101 52 / var(--tw-bg-opacity))',
    icon: 'siTypeScript',
  },
  {
    title: 'Software Engineer',
    description:
      'Maintain existing project. Joined a new team in developing an insurance related system from scratch. Involved in solution design and requirements elicitation.',
    years: 'July 2023 - NOW',
    organization: {
      name: 'Bjak Sdn Bhd',
    },
    bgColor: 'rgb(22 101 52 / var(--tw-bg-opacity))',
    icon: 'siKubernetes',
  },
];

export const ExperienceIconMap = {
  giBookCover: GiBookCover,
  siTypeScript: SiTypescript,
  siPython: SiPython,
  siKubernetes: SiKubernetes,
} as const;

export type ExperienceIconNames = keyof typeof ExperienceIconMap;

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
    href: 'https://drive.google.com/file/d/1N2LJP4AsG-1HxkWplf11vCEyNwK7Lri2/view', //FIXME: change this to valid cert
  },
  {
    title: 'Build Basic Generative Adversarial Networks (GANs)',
    issuer: 'Coursera',
    logoPath: '/coursera_logo.jpeg',
    href: 'https://www.coursera.org/account/accomplishments/certificate/ZRPCN3B2CLS8https://www.coursera.org/account/accomplishments/certificate/ZRPCN3B2CLS8', //FIXME: change this to valid cert
  },
  {
    title: 'Neural Networks and Deep Learning',
    issuer: 'Coursera',
    logoPath: '/coursera_logo.jpeg',
    href: 'https://www.coursera.org/account/accomplishments/certificate/NJV99Q9XUQKA ', //FIXME: change this to valid cert
  },
];
