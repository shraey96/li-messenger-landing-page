"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Install Extension",
    description: "Add DraftAI to Chrome in just one click",
  },
  {
    title: "Connect LinkedIn",
    description: "Seamlessly integrate with your LinkedIn messaging",
  },
  {
    title: "Start Composing",
    description: "Use AI-powered features to craft perfect messages",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
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
            Get started with DraftAI in three simple steps
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
