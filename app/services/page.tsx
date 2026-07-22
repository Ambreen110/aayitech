import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/services/Services";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* <main className="bg-black text-white pt-20"> */}
        <Services />
      {/* </main> */}

    </>
  );
}