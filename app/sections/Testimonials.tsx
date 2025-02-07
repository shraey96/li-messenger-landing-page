"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Sales Manager",
    company: "TechCorp",
    content:
      "DraftAI has transformed how I connect with prospects. The smart suggestions are spot-on!",
    avatar: "/avatars/sarah.jpg",
  },
  {
    name: "Michael Chen",
    role: "Recruiter",
    company: "TalentHub",
    content:
      "This tool has significantly improved my response rate. The AI suggestions are professional and personalized.",
    avatar: "/avatars/michael.jpg",
  },
  {
    name: "Emma Davis",
    role: "Business Development",
    company: "GrowthCo",
    content:
      "A game-changer for networking on LinkedIn. The time saved on message composition is invaluable.",
    avatar: "/avatars/emma.jpg",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold gradient-text inline-block text-glow">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of professionals who trust DraftAI
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
