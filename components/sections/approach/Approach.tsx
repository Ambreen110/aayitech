"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Timeline from "./Timeline";

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10rem] top-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-[-10rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06),transparent_70%)]" />
      </div>

      <div className="container relative mx-auto px-6">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="mb-6 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
            My Development Process
          </span>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
            From
            <span className="text-cyan-400"> Idea </span>
            to
            <span className="text-cyan-400"> Scalable Solution</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Every successful project follows a structured process.
            My approach focuses on understanding your business,
            planning the right architecture,
            building reliable systems,
            integrating automation,
            and continuously improving after launch.
          </p>
        </motion.div>

        {/* Why Process Matters */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-20 max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl"
        >
          <div className="grid gap-10 lg:grid-cols-2">

            <div>
              <h2 className="mb-5 text-3xl font-bold text-white">
                Why Every Project Follows a Process
              </h2>

              <p className="leading-8 text-zinc-400">
                Great software isn't created by chance.
                A structured workflow reduces risks,
                improves communication,
                keeps development organized,
                and ensures that every decision supports your business objectives.
              </p>
            </div>

            <div className="grid gap-4">

              {[
                "Clear project planning",
                "Transparent communication",
                "Scalable architecture",
                "Quality assurance",
                "Business-focused solutions",
                "Long-term maintainability",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                  <span className="text-zinc-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </motion.div>

        {/* Timeline */}

        <div className="mt-24">
          <Timeline />
        </div>

        {/* Closing CTA */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-24 max-w-5xl rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 p-12 text-center backdrop-blur-xl"
        >
          <h2 className="text-4xl font-bold text-white">
            A Process Built Around Your Success
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-zinc-400">
            Whether you're building a modern website,
            implementing a CRM,
            automating business workflows,
            or integrating AI into your operations,
            every project follows a proven methodology designed
            to deliver reliable and measurable results.
          </p>

          <button
            className="
              mt-10
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-8
              py-4
              font-medium
              text-cyan-300
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-500/20
              hover:text-white
            "
          >
            Let's Build Your Next Project

            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}