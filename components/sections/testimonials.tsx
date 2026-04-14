"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "AgentFlow completely transformed our support ops. Tier 1 tickets are now resolved instantly, and our team only handles complex queries. It's like having 10 extra support engineers.",
    author: "Sarah Jenkins",
    role: "VP of Support, TechCorp",
    avatar: "SJ"
  },
  {
    quote: "The visual builder is incredible. We connected Salesforce, Slack, and our internal DB in hours, not weeks. Our sales team's productivity skyrocketed by 300%.",
    author: "David Chen",
    role: "Head of RevOps, ScaleUp",
    avatar: "DC"
  },
  {
    quote: "Finally, an AI tool that actually executes work rather than just generating text. The predictability and guardrails are exactly what enterprise teams need.",
    author: "Elena Rodriguez",
    role: "CTO, FinFlow",
    avatar: "ER"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Trusted by the best teams
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. See how companies are transforming their operations with AgentFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg mb-8">"{testimonial.quote}"</blockquote>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
