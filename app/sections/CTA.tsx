'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold gradient-text inline-block text-glow">Ready to Transform Your LinkedIn Messaging?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who are already using LinkedIn Message Assistant to improve their networking and communication.
          </p>
          <div className="mt-8">
            <Button size="lg" className="gradient-bg text-white hover:opacity-90 transition-all duration-300 hover-lift rounded-2xl px-8 py-6 text-lg font-medium">
              Get Started Free
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}