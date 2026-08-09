import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/about/About";

export default function AboutPage() {
  return (
    <>
      <Navbar />
<main className="bg-black text-white pt-20">
        <About />
          
</main>
    </>
  );
}