import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TechStack from "@/components/sections/tech-stack/TechStack";

export default function technologies() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white pt-20">
        <TechStack />
      </main>

      <Footer />
    </>
  );
}