"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Layers, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Define Objectives",
    description: "Tell AgentFlow what you want to achieve. Set parameters, guardrails, and success metrics in plain English.",
    icon: Sparkles
  },
  {
    number: "02",
    title: "Connect Data Sources",
    description: "Securely link your knowledge base, CRM, and internal tools so the agent has all the necessary context.",
    icon: Layers
  },
  {
    number: "03",
    title: "Deploy & Monitor",
    description: "Launch your agent into production. Watch it execute tasks, and intervene only when human approval is required.",
    icon: Rocket
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content & Timeline */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60">
                From idea to automated <br className="hidden lg:block"/> workflow in minutes
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Stop writing complex scripts. AgentFlow translates your business logic into autonomous execution instantly with zero code.
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-8 bottom-12 w-[2px] bg-gradient-to-b from-primary/40 via-primary/10 to-transparent hidden sm:block" />
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative pl-0 sm:pl-20 group"
                  >
                    {/* Glowing Icon Orb (Hidden on very small screens, integrated differently if needed) */}
                    <div className="hidden sm:flex absolute left-0 top-2 w-12 h-12 items-center justify-center rounded-2xl bg-background border border-border shadow-[0_0_20px_rgba(var(--primary),0.05)] group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] transition-all duration-300 z-10">
                      <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <step.icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    
                    {/* Glassmorphic Content Card */}
                    <div className="relative p-6 sm:p-8 rounded-3xl transition-all duration-300 bg-background/40 hover:bg-muted/40 hover:shadow-2xl hover:-translate-y-1 border border-border/50 hover:border-primary/20 backdrop-blur-md overflow-hidden">
                      {/* Subtle hover gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-widest">
                            Step {step.number}
                          </span>
                          {/* Show icon on mobile since the left orb is hidden */}
                          <div className="sm:hidden w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <step.icon className="w-4 h-4" />
                          </div>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed shadow-sm">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side: Visual/Mockup */}
          <div className="relative flex items-center justify-center h-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="relative w-full aspect-square lg:aspect-[4/5] max-w-md mx-auto group z-10"
              style={{ perspective: 1000 }}
            >
              {/* Outer glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-[2.5rem] transform rotate-3 scale-105 opacity-60 group-hover:rotate-6 transition-transform duration-700 blur-xl"></div>
              
              {/* Main Mockup Window */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border border-border/60 rounded-[2rem] shadow-2xl overflow-hidden transform group-hover:-translate-y-2 group-hover:border-primary/30 transition-all duration-500 flex flex-col">
                
                {/* Mockup Header Toolbar */}
                <div className="h-14 border-b border-border/50 bg-muted/30 flex items-center px-5 shrink-0">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                  </div>
                  <div className="mx-auto flex items-center gap-2 px-3 py-1 rounded-md bg-background/50 border border-border/50 text-xs font-medium text-muted-foreground">
                    <Sparkles className="w-3 h-3 text-primary" />
                    Agent Workflow
                  </div>
                  <div className="w-[54px]"></div> {/* spacer to center the title */}
                </div>
                
                {/* Image Container */}
                <div className="relative flex-grow bg-muted/10 overflow-hidden">
                  <Image 
                    src="/images/workflow-builder.png" 
                    alt="Visual Workflow Builder" 
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 scale-100 origin-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Floating Badge (Animated) */}
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-4 md:-left-12 bg-background/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-border/60 flex items-center gap-4 z-20 group-hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Sparkles className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">100% Autonomous</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Executes automatically</div>
                </div>
              </motion.div>
              
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
