import Image from 'next/image';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
