import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Approach from "@/components/sections/approach/Approach";

export default function approach() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white pt-20">
        <Approach />
      </main>

      <Footer />
    </>
  );
}