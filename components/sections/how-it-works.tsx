"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Define Objectives",
    description: "Tell AgentFlow what you want to achieve. Set parameters, guardrails, and success metrics in plain English."
  },
  {
    number: "02",
    title: "Connect Data Sources",
    description: "Securely link your knowledge base, CRM, and internal tools so the agent has all the necessary context."
  },
  {
    number: "03",
    title: "Deploy & Monitor",
    description: "Launch your agent into production. Watch it execute tasks, and intervene only when human approval is required."
  }
];

import Image from "next/image";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              From idea to automated workflow in minutes
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Stop writing complex scripts. AgentFlow translates your business logic into autonomous execution instantly.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-muted rounded-3xl border shadow-inner relative overflow-hidden aspect-square lg:aspect-[4/5] flex items-center justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl rounded-bl-3xl"></div>
            
            <div className="relative z-10 w-full h-full p-6">
               <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-2xl border">
                 <Image 
                   src="/images/workflow-builder.png" 
                   alt="Visual Workflow Builder" 
                   fill
                   className="object-cover"
                   sizes="(max-width: 1024px) 100vw, 50vw"
                 />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
