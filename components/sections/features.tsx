"use client";

import { motion } from "framer-motion";
import { BrainCircuit, GitMerge, LineChart, Zap } from "lucide-react";

const features = [
  {
    title: "Autonomous Decision Making",
    description: "Our agents analyze data, predict outcomes, and execute multi-step processes without human intervention.",
    icon: BrainCircuit,
  },
  {
    title: "Visual Workflow Builder",
    description: "Design complex agent behaviors using our intuitive drag-and-drop canvas. No coding required.",
    icon: GitMerge,
  },
  {
    title: "Seamless Integrations",
    description: "Connect to 100+ tools including Slack, Salesforce, Notion, and HubSpot with one click.",
    icon: Zap,
  },
  {
    title: "Real-time Analytics",
    description: "Monitor agent performance, ROI, and task completion rates with beautiful interactive dashboards.",
    icon: LineChart,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Intelligence that scales your business
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to build, deploy, and manage AI agents that actually understand your business context and drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-background rounded-2xl p-6 md:p-8 border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
