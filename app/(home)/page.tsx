import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Advisory from '@/components/Advisory';
import Marketplace from '@/components/Marketplace';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advisory />
      <Marketplace />
    </>
  );
}
