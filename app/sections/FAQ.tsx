'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does LinkedIn Message Assistant work?",
    answer: "LinkedIn Message Assistant uses advanced AI to analyze conversation context and suggest appropriate responses. It integrates directly with LinkedIn's messaging interface, providing smart prompts and message improvements while maintaining a professional tone."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take privacy seriously. All message data is encrypted, and we don't store any personal conversations. The extension operates locally in your browser, and our AI processing follows strict security protocols."
  },
  {
    question: "Can I customize the AI suggestions?",
    answer: "Absolutely! You can adjust the tone, length, and style of suggestions. The AI learns from your preferences over time, making increasingly personalized recommendations."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a free plan that includes basic features. You can upgrade to our Pro plan anytime to access advanced features and unlimited message assistance."
  }
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold gradient-text inline-block text-glow">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about LinkedIn Message Assistant
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}