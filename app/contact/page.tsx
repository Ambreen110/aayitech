import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/contact/Contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* <main className="bg-black text-white pt-20"> */}
        <Contact />
      {/* </main> */}

    </>
  );
}