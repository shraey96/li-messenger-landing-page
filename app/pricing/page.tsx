"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");

  const plans = {
    free: {
      name: "Free",
      price: { monthly: "$0", yearly: "$0" },
      description: "Perfect for trying out the assistant",
      features: [
        "50 AI-assisted messages/month",
        "Basic message suggestions",
        "Standard response time",
        "Email support",
        "Chrome extension",
        "1 LinkedIn account"
      ]
    },
    pro: {
      name: "Pro",
      price: { monthly: "$19", yearly: "$190" },
      description: "For power users and professionals",
      features: [
        "Unlimited AI-assisted messages",
        "Advanced message suggestions",
        "Priority response time",
        "Priority support",
        "Chrome extension",
        "Custom templates",
        "Message history & analytics",
        "Up to 3 LinkedIn accounts"
      ]
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Start with our free plan or choose a license that grows with your needs
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="inline-flex rounded-lg border p-1">
          <Button
            variant={billingInterval === "monthly" ? "default" : "ghost"}
            onClick={() => setBillingInterval("monthly")}
          >
            Monthly
          </Button>
          <Button
            variant={billingInterval === "yearly" ? "default" : "ghost"}
            onClick={() => setBillingInterval("yearly")}
          >
            Yearly
            <span className="ml-1.5 rounded-full bg-primary-foreground px-2 py-0.5 text-xs text-primary">
              Save 20%
            </span>
          </Button>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
        {Object.entries(plans).map(([key, plan]) => (
          <Card key={key} className="relative p-8">
            <div className="flex flex-col h-full">
              <div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price[billingInterval]}</span>
                  <span className="text-muted-foreground ml-2">
                    /{billingInterval === "monthly" ? "month" : "year"}
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="mt-8 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={key === "pro" ? "default" : "outline"}
                className="mt-8 w-full"
                asChild
              >
                <Link href={key === "free" ? "/get-started" : "/checkout"}>
                  {key === "free" ? "Get Started" : "Upgrade to Pro"}
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}