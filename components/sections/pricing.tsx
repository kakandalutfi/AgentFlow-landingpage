"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with AI automation.",
    price: "$49",
    period: "/mo",
    features: [
      "Up to 3 Active Agents",
      "1,000 tasks per month",
      "Standard Integrations (Slack, Email)",
      "Community Support",
    ],
    popular: false,
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    description: "For growing companies that need powerful workflows.",
    price: "$199",
    period: "/mo",
    features: [
      "Up to 15 Active Agents",
      "10,000 tasks per month",
      "All Premium Integrations",
      "Visual Canvas Builder",
      "Priority Email Support",
    ],
    popular: true,
    buttonVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description: "Advanced security and custom deployments for large teams.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited Agents",
      "Unlimited tasks",
      "Custom Integrations",
      "Dedicated Customer Success",
      "SSO & Advanced Security",
    ],
    popular: false,
    buttonVariant: "outline" as const,
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/50 border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Start for free, scale when you need to. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "rounded-3xl p-8 flex flex-col border bg-card relative",
                plan.popular && "border-primary shadow-lg scale-105 z-10"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant={plan.buttonVariant} className="w-full h-12">
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
