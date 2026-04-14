"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    category: "Customer Support",
    title: "Resolve Tier 1 & 2 tickets instantly",
    description: "Agents automatically categorize issues, fetch relevant user data, and provide personalized solutions without human intervention.",
  },
  {
    category: "Sales Operations",
    title: "Qualify leads and draft proposals",
    description: "Monitor intent signals, instantly score inbound leads, draft personalized outreach, and schedule meetings directly in your CRM.",
  },
  {
    category: "Data Engineering",
    title: "Clean, map, and structure data",
    description: "Deploy agents to continuously monitor unstructured data pipes, extract entities, map schemas, and alert on anomalies.",
  }
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 md:py-32 bg-secondary/30 border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built for enterprise workflows
          </h2>
          <p className="text-lg text-muted-foreground">
            Teams across all divisions are saving thousands of hours per week by delegating complex logic to AgentFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border rounded-2xl p-8 hover:border-primary/50 transition-colors"
            >
              <div className="text-sm font-medium text-primary mb-4">{useCase.category}</div>
              <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
