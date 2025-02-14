"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { CHROME_EXTENSION_URL } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 feature-gradient -z-10" />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/30 via-blue-600/30 to-indigo-600/30 -z-10 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6">
            Craft Perfect
            <span className="gradient-text text-glow block mt-6">
              LinkedIn Messages
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-[1.6] px-4"
          >
            Enhance your LinkedIn messaging with AI-powered composition. Save
            time and improve response quality while maintaining professional
            standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <Button
              size="lg"
              className="gradient-bg text-white hover:opacity-90 transition-all duration-300 hover-lift rounded-2xl px-8 py-6 text-lg font-medium w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <Chrome className="h-5 w-5" />
              <Link href={CHROME_EXTENSION_URL} target="_blank">
                Add to Chrome
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-secondary/80 transition-all duration-300 hover-lift rounded-2xl px-8 py-6 text-lg font-medium w-full sm:w-auto"
              onClick={() => scrollToSection("#how-it-works")}
            >
              See How It Works
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
