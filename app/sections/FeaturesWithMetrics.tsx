"use client";

import { motion } from "framer-motion";
import {
  MessageSquareText,
  Zap,
  Clock,
  Shield,
  CheckCircle2,
  Star,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  {
    value: "70%",
    label: "Time Saved",
    description: "Average time saved on message composition",
  },
  {
    value: "2.5×",
    label: "Response Rate",
    description: "Higher response rate with AI-enhanced messages",
  },
  {
    value: "15+",
    label: "Minutes Saved",
    description: "Per day for active LinkedIn users",
  },
];

const features = [
  {
    icon: MessageSquareText,
    title: "Smart Prompts",
    description:
      "Get contextually relevant suggestions based on your conversation history",
  },
  {
    icon: Zap,
    title: "Improvise Mode",
    description:
      "Refine and enhance your messages with AI-powered improvements",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description: "Compose professional messages in seconds, not minutes",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your messages and data are always secure and private",
  },
  {
    icon: CheckCircle2,
    title: "Professional Tone",
    description: "Maintain consistent professional communication standards",
  },
  {
    icon: Star,
    title: "Seamless Integration",
    description: "Works directly within LinkedIn's messaging interface",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-8 h-full transition-all duration-500 hover-lift card-shine border-2 hover:border-blue-500/20 rounded-2xl overflow-hidden group relative backdrop-blur-sm bg-white/80">
        <div className="absolute inset-0 feature-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        <div className="rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-indigo-600/10 w-12 h-12 flex items-center justify-center">
          <div className="gradient-bg rounded-xl p-2 text-white">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <h3 className="mt-4 text-xl font-semibold group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </Card>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Section */}
        <div className="mb-24">
          <div className="grid gap-8 md:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="p-8 h-full flex flex-col justify-between hover:border-blue-500/20 transition-all duration-300 hover-lift">
                  <div className="text-center">
                    <div className="text-5xl font-bold gradient-text text-glow mb-4">
                      {metric.value}
                    </div>
                    <div className="text-xl font-semibold mb-3">
                      {metric.label}
                    </div>
                    <p className="text-muted-foreground">
                      {metric.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold gradient-text inline-block text-glow">
            Powerful Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to enhance your LinkedIn communication
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
