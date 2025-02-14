"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MessageSquareText, Wand2, Sparkles } from "lucide-react";

import HOW_IT_WORKS_1_IMG from "@/app/images/how-it-works-1.png";
import HOW_IT_WORKS_2_IMG from "@/app/images/how-it-works-2.png";
import HOW_IT_WORKS_3_IMG from "@/app/images/how-it-works-3.png";

const steps = [
  {
    icon: MessageSquareText,
    title: "Access DraftAI",
    description:
      "Click the extension button next to LinkedIn's message actions",
    image: HOW_IT_WORKS_1_IMG,
  },
  {
    icon: Wand2,
    title: "Choose Your Mode",
    description:
      "Select Smart Prompts for suggestions or Improvise to enhance your message",
    image: HOW_IT_WORKS_2_IMG,
  },
  {
    icon: Sparkles,
    title: "Enhance & Send",
    description: "Review the AI-enhanced message and click send when ready",
    image: HOW_IT_WORKS_3_IMG,
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold gradient-text inline-block text-glow">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transform your LinkedIn messaging in three simple steps
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-xl">
            {/* <iframe
              src="https://www.youtube.com/embed/VsBwBaPa5Bg"
              title="DraftAI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
            /> */}
            <iframe
              src="https://www.youtube.com/embed/VsBwBaPa5Bg?si=cZOrFVZOWyfzq6F0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
            ></iframe>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <Card className="p-6 flex-1 hover:border-blue-500/20 transition-colors relative overflow-hidden group">
                <div className="absolute inset-0 feature-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

                {/* Step Number and Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-indigo-600/10 flex items-center justify-center">
                    <div className="gradient-bg rounded-xl p-2 text-white">
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Screenshot Container */}
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-[#1D2432] rounded-lg">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
