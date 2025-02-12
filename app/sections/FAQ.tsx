"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What is DraftAI and how does it work with LinkedIn?",
    answer:
      "DraftAI is a Chrome extension that integrates directly with LinkedIn's messaging interface to help you compose more effective messages. It appears as a button next to LinkedIn's existing message actions (like the emoji button) and uses AI to either suggest contextual responses or improve your draft messages.",
  },
  {
    question: "Is my message data secure and private?",
    answer:
      "Yes, your privacy is important to us. DraftAI does not permanently store any of your messages. Only the most recent 20-30 messages from your conversation are temporarily processed through our secure backend server to generate contextually relevant responses. This helps maintain the quality and relevance of AI-generated suggestions while protecting your privacy.",
  },
  {
    question: "What are the subscription options for DraftAI?",
    answer:
      "DraftAI offers both monthly and yearly subscription plans. The yearly plan provides better value for long-term users. You can view detailed plan features and pricing by clicking on the extension icon and navigating to the Plan section in your dashboard.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 7-day refund policy from the date of purchase. If you're not satisfied with DraftAI within the first week of your subscription, you can request a full refund through our support channel.",
  },
  {
    question: "How do I access and use DraftAI's features?",
    answer:
      "Once installed, DraftAI appears as a button next to the emoji button in LinkedIn's message interface. You can either select from AI-suggested prompts based on your conversation context, or use the 'Improvise' feature to enhance a message you've drafted.",
  },
  {
    question: "Can I edit the AI-generated messages before sending?",
    answer:
      "Yes, absolutely! All AI-generated messages appear in an editor where you can review and modify them before sending. You can also click 'Rephrase' to generate different variations of the message until you're satisfied with the result.",
  },
  {
    question: "Do I need to be logged in to use DraftAI?",
    answer:
      "Yes, you need to be logged into both LinkedIn and your DraftAI account to use the extension. If you're not logged in, you'll be prompted to do so when you click the extension button.",
  },
  {
    question: "What happens if I exceed my message limit?",
    answer: `Your usage statistics are available in your dashboard https://app.draftai.io/dashboard. Premium users enjoy higher usage limits and additional features.`,
  },
  {
    question: "Can I use DraftAI on multiple devices?",
    answer:
      "Yes, you can use DraftAI on any device where you have Chrome installed and the extension added. Your subscription is tied to your account, not a specific device, so you can use it wherever you sign in.",
  },
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
          <h2 className="text-4xl font-bold gradient-text inline-block text-glow">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about DraftAI
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 max-w-3xl mx-auto px-4 sm:px-0"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} value={`item-${faq.question}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-left">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
