import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/projects/Projects";

export default function projects() {
  return (
    <>
      <Navbar />

      {/* <main className="bg-black text-white pt-20"> */}
        <Projects/>
      {/* </main> */}

    </>
  );
}