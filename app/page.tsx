import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <Hero />
      </main>
    </>
  );
}