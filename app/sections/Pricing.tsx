"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check, Clock, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppLink } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out the assistant",
    features: [
      {
        text: "15 LinkedIn messages per day",
        available: true,
      },
      {
        text: "5 post replies per day (Coming Soon)",
        available: false,
        comingSoon: true,
      },
      {
        text: "2 connection requests per day (Coming Soon)",
        available: false,
        comingSoon: true,
      },
    ],
  },
  {
    name: "Pro",
    price: "$2.99",
    originalPrice: "$2.99",
    period: "month",
    description: "For power users and professionals",
    popular: true,
    limitedOffer: true,
    limitedOfferText: "First 100 users get Pro for $2.99/month!",
    features: [
      {
        text: "Unlimited LinkedIn messages",
        available: true,
      },
      {
        text: "Unlimited post replies (Coming Soon)",
        available: false,
        comingSoon: true,
      },
      {
        text: "Unlimited connection requests (Coming Soon)",
        available: false,
        comingSoon: true,
      },
    ],
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handlePricingRedirect = () => {
    const baseAppLink = getAppLink();
    window.open(`${baseAppLink}?section=pricing`, "_blank");
  };

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold gradient-text inline-block text-glow">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that works best for you
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
            <Timer className="w-4 h-4" />
            <span className="text-sm font-medium">
              Limited Time Offer: First 100 users get Pro for $2.99/month!
            </span>
          </div>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                className={`p-8 relative h-full flex flex-col ${
                  plan.popular ? "border-blue-500 border-2" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4">
                    {plan.originalPrice && (
                      <span className="text-lg line-through text-muted-foreground mr-2">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-1">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  {plan.limitedOffer && (
                    <p className="mt-2 text-sm text-blue-600 font-medium">
                      {plan.limitedOfferText}
                    </p>
                  )}
                  <p className="mt-2 text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                <ul className="mt-8 space-y-4 flex-grow">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-center space-x-3"
                    >
                      {feature.available ? (
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "gradient-bg text-white hover:opacity-90"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={handlePricingRedirect}
                  >
                    {plan.name === "Free" ? "Get Started" : "Upgrade Now"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
