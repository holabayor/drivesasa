import { car, cart, hands } from '@/public/images';

export const navLinks = [
  {
    id: 1,
    name: 'home',
    link: '/',
  },
  {
    id: 2,
    name: 'marketplace',
    link: '/marketplace',
  },
  {
    id: 3,
    name: 'services',
    link: '/services',
  },
  {
    id: 4,
    name: 'blog',
    link: '/blog',
  },
  {
    id: 5,
    name: 'contact',
    link: '/contact',
  },
];

export const heroCards = [
  {
    id: 1,
    icon: hands,
    heading: 'Expert advisory',
    text: 'Get expert advisory from the moment you purchase your car. Consultation on vehicle choice, insurance options, financing and tracking',
    button: { label: 'book appointment', white: false },
    white: false,
  },
  {
    id: 2,
    icon: car,
    heading: 'Vehicle services',
    text: 'Hundreds of automotive service providers on our platform. Request well vetted service, upgrades and modification, repairs, among others.',
    btn: 'browse service',
    bg: 'red',
    white: false,
  },
  {
    id: 3,
    icon: cart,
    heading: 'drivesasa marketplace',
    text: 'Browse thousands of products ranging from cars, spare parts and accessories. Our vendors are thoroughly verified to ensure integrity and quality.',
    btn: 'go to marketplace',
    white: false,
  },
];

export const advisoryCards = [
  {
    id: 1,
    heading: 'Vehicle choice',
    text: 'Discover Your Dream Car with DrivesasaDrivesasa simplifies car hunting. Our expert team considers your preferences and budget, presenting tailored options. Transparent transactions, test drives, and personalized service ensure your satisfaction. From sedan to SUV, we’re your guide to finding the perfect car effortlessly. Your dream car journey starts here.',
    btn: 'book appointment',
  },
  {
    id: 2,
    heading: 'financing options',
    text: 'At Drivesasa, we understand the importance of flexible financing. Whether it’s through hire purchase or leasing, we provide various options to suit your budget. Our aim is to ensure your dream car is within reach, making your car-buying experience seamless and stress-free.',
    btn: 'book appointment',
  },
  {
    id: 3,
    heading: 'tracking options',
    text: 'Drivesasa assists you in making informed choices for the most suitable car tracking solutions. Our expertise guides you towards reliable tracking options that enhance your vehicle’s security and your peace of mind. Trust us to help you find the perfect car tracker for your needs.',
    btn: 'book appointment',
  },
  {
    id: 4,
    heading: 'insurance solutions',
    text: 'Navigating insurance options can be daunting. At Drivesasa, we guide you through the insurance process, helping you find the best coverage from trusted providers. Your protection matters, and we’re here to ensure you make informed choices for a secure journey ahead.',
    btn: 'book appointment',
  },
];

export const products = [
  {
    id: 1,
    name: 'Toyota Prado Land Cruiser V8',
    price: 'Ksh 3,500,000',
    image: '/images/prado.png',
    rating: 4,
  },
  {
    id: 2,
    name: 'Land Rover Discovery',
    price: 'Ksh 3,500,000',
    image: '/images/landrover.png',
    rating: 5,
  },
  {
    id: 3,
    name: 'Range Rover Sport',
    price: 'Ksh 3,500,000',
    image: '/images/rangerover.png',
    rating: 5,
  },
  {
    id: 4,
    name: 'Toyota Fortuner',
    price: 'Ksh 3,500,000',
    image: '/images/fortuner.png',
    rating: 4,
  },
];

export const services = [
  {
    id: 1,
    name: 'Quality Auto Repair Services',
    text: "John's Auto Garage",
    image: '/images/service1.png',
    rating: 4,
    count: 12,
  },
  {
    id: 2,
    name: 'Speed Governor Installation',
    text: 'DXQ Auto Services',
    image: '/images/service2.png',
    rating: 5,
    count: 3,
  },
  {
    id: 3,
    name: 'Epic Car Seat Covers',
    text: 'Car Seat Covers Kenya',
    image: '/images/service3.png',
    rating: 4,
    count: 7,
  },
  {
    id: 4,
    name: 'Custom Mods And Body Work',
    text: 'Ridgeways Auto Services',
    image: '/images/service4.png',
    rating: 5,
    count: 9,
  },
];

export const testimonials = [
  {
    id: 1,
    date: '12th May 2021',
    heading: 'Great service',
    image: '/images/person1.png',
    text: 'I had a great experience with Drivesasa. The team was very helpful and I got my car in no time. I would recommend them to anyone looking to buy a car. I had a great experience with Drivesasa. The team was very helpful and I got my car in no time. I would recommend them to anyone looking to buy a car. I had a great experience with Drivesasa.',
  },
  {
    id: 2,
    date: '12th May 2021',
    heading: 'Great service',
    image: '/images/person2.png',
    text: 'I had a great experience with Drivesasa. The team was very helpful and I got my car in no time. I would recommend them to anyone looking to buy a car. I had a great experience with Drivesasa. The team was very helpful and I got my car in no time. I would recommend them to anyone looking to buy a car. I had a great experience with Drivesasa.',
  },
];

export const footerLinks = [
  {
    title: 'Useful Links',
    links: [
      {
        name: 'Content',
        link: 'https://www.hoobank.com/content/',
      },
      {
        name: 'How it Works',
        link: 'https://www.hoobank.com/how-it-works/',
      },
      {
        name: 'Create',
        link: 'https://www.hoobank.com/create/',
      },
      {
        name: 'Explore',
        link: 'https://www.hoobank.com/explore/',
      },
      {
        name: 'Terms & Services',
        link: 'https://www.hoobank.com/terms-and-services/',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        name: 'Help Center',
        link: 'https://www.hoobank.com/help-center/',
      },
      {
        name: 'Partners',
        link: 'https://www.hoobank.com/partners/',
      },
      {
        name: 'Suggestions',
        link: 'https://www.hoobank.com/suggestions/',
      },
      {
        name: 'Blog',
        link: 'https://www.hoobank.com/blog/',
      },
      {
        name: 'Newsletters',
        link: 'https://www.hoobank.com/newsletters/',
      },
    ],
  },
];
