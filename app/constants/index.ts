import { car, cart, hands } from '@/public/images';

export const heroCards = [
  {
    id: 1,
    icon: hands,
    heading: 'Expert advisory',
    text: 'Get expert advisory from the moment you purchase your car. Consultation on vehicle choice, insurance options, financing and tracking',
    button: { label: 'book appointment', white: false },
    bg: 'blue',
  },
  {
    id: 2,
    icon: car,
    heading: 'Vehicle services',
    text: 'Hundreds of automotive service providers on our platform. Request well vetted service, upgrades and modification, repairs, among others.',
    btn: 'browse service',
    bg: 'red',
  },
  {
    id: 3,
    icon: cart,
    heading: 'drivesasa marketplace',
    text: 'Browse thousands of products ranging from cars, spare parts and accessories. Our vendors are thoroughly verified to ensure integrity and quality.',
    btn: 'go to marketplace',
    bg: 'blue',
  },
];
