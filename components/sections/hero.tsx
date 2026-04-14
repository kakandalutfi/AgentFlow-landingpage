"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity, Zap, CheckCircle2, Layout, Bot, Users, Settings } from "lucide-react";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-6 bg-background shadow-sm space-x-2"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Introducing AgentFlow 2.0</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            Build AI Agents That Work While You Sleep
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Automate your entire workflow with autonomous AI agents. Connect your tools, define your goals, and let our agents handle the repetitive work so your team can focus on what matters.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="h-12 px-8 text-base group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
              Book a Demo
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-24 md:mt-40 w-full max-w-5xl relative z-20 perspective-1000"
          >
            {/* Ambient Back Glow */}
            <div className="absolute inset-x-0 -top-10 bottom-0 bg-gradient-to-tr from-primary/30 via-transparent to-blue-500/30 rounded-[3rem] blur-[80px] -z-10 opacity-70" />

            <div className="rounded-[2rem] border border-border/50 bg-background/60 backdrop-blur-3xl shadow-2xl overflow-hidden transform md:rotate-x-[2deg] scale-100 md:scale-[0.98] hover:rotate-x-0 hover:scale-100 transition-all duration-700 ease-out flex flex-col">
              
              {/* Header Toolbar */}
              <div className="flex items-center justify-between px-5 h-14 border-b border-border/40 bg-muted/20 shrink-0">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                </div>
                <div className="mx-auto flex shadow-sm items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 border border-border/50 text-xs font-semibold tracking-wide text-muted-foreground">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  AgentFlow Execution Dashboard
                </div>
                <div className="w-[54px]"></div>
              </div>
              
              {/* Mockup Body Content */}
              <div className="p-4 sm:p-6 md:p-8 bg-muted/10 grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
                
                {/* Left Sidebar Menu */}
                <div className="hidden lg:flex flex-col gap-6 col-span-3">
                  <div className="space-y-4">
                    <div className="h-8 w-full bg-background rounded-lg border border-border/50 flex flex-col justify-center px-3 mb-2">
                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Main Menu</div>
                    </div>
                    {/* Item 1 */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20 cursor-default">
                      <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Layout className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-foreground">Dashboard</div>
                        <div className="text-[10px] text-muted-foreground">Overview & Stats</div>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-background/40 border border-border/40 hover:border-primary/30 transition-colors cursor-pointer group">
                      <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                        <Bot className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">AI Agents</div>
                        <div className="text-[10px] text-muted-foreground">Manage Workflows</div>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-background/40 border border-border/40 hover:border-primary/30 transition-colors cursor-pointer group">
                      <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                        <Users className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">Team</div>
                        <div className="text-[10px] text-muted-foreground">Members & Roles</div>
                      </div>
                    </div>
                    {/* Item 4 */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-background/40 border border-border/40 hover:border-primary/30 transition-colors cursor-pointer group">
                      <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                        <Settings className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">Settings</div>
                        <div className="text-[10px] text-muted-foreground">Platform config</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Small Info Banner inside Sidebar */}
                  <div className="mt-auto rounded-xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20 p-4">
                    <div className="flex gap-2 items-center mb-2">
                      <Zap className="w-4 h-4 text-primary fill-primary" />
                      <span className="text-xs font-bold text-primary">System Optimum</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground">All agents are currently running at peak efficiency.</div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-1 lg:col-span-9 flex flex-col gap-6">
                  
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                    <div className="h-28 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 p-5 flex flex-col justify-between relative overflow-hidden group">
                       <span className="text-xs uppercase text-primary font-bold tracking-wider">Active Agents</span>
                       <div className="flex items-end gap-2">
                         <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">12</span>
                         <span className="text-xs text-emerald-500 font-bold mb-1">+3 today</span>
                       </div>
                       <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                    
                    <div className="h-28 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/20 p-5 flex flex-col justify-between relative overflow-hidden group">
                       <span className="text-xs uppercase text-blue-500 font-bold tracking-wider">Tasks Executed</span>
                       <div className="flex items-end gap-2">
                         <span className="text-4xl font-black text-foreground">8.4k</span>
                         <span className="text-xs text-emerald-500 font-bold mb-1">+12%</span>
                       </div>
                       <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                    
                    <div className="hidden md:flex h-28 rounded-2xl bg-background border border-border/50 p-5 flex-col justify-between relative overflow-hidden shadow-sm">
                       <span className="text-xs uppercase text-muted-foreground font-bold tracking-wider">Success Rate</span>
                       <div className="flex items-center gap-3">
                         <span className="text-4xl font-black text-foreground">99.8%</span>
                         <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                       </div>
                    </div>
                  </div>
                  
                  {/* Main Node Connection Graphic */}
                  <div className="flex-1 min-h-[220px] rounded-2xl bg-background border border-border/50 p-6 relative overflow-hidden shadow-inner flex flex-col">
                     <div className="flex justify-between items-center mb-8">
                       <div className="h-4 w-40 bg-muted rounded-md shrink-0"></div>
                       <div className="flex gap-2">
                          <div className="h-6 w-16 bg-primary/10 text-primary border border-primary/20 rounded-full flex items-center justify-center text-[10px] font-bold">Live</div>
                          <div className="h-6 w-6 bg-muted rounded-full"></div>
                       </div>
                     </div>
                     
                     {/* Artificial Node Graph using CSS */}
                     <div className="flex-1 relative w-full flex items-center justify-center py-10">
                        {/* Connecting Line */}
                        <div className="absolute inset-x-8 md:inset-x-20 h-0.5 bg-gradient-to-r from-primary/30 via-blue-500/50 to-emerald-500/30"></div>
                        
                        {/* Nodes */}
                        <div className="absolute w-full px-8 md:px-20 flex justify-between items-center">
                           <div className="relative">
                             <div className="w-12 h-12 rounded-2xl bg-background border border-primary  shadow-[0_0_20px_rgba(var(--primary),0.3)] flex items-center justify-center shrink-0 z-10 relative">
                                <Sparkles className="w-5 h-5 text-primary" />
                             </div>
                             <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-muted-foreground whitespace-nowrap">Source</span>
                           </div>

                           <div className="relative">
                             <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/50 flex items-center justify-center shrink-0 z-10 relative backdrop-blur-sm">
                                <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
                             </div>
                             <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-muted-foreground whitespace-nowrap">Processing</span>
                           </div>
                           
                           <div className="relative">
                             <div className="w-12 h-12 rounded-2xl bg-emerald-500 border border-emerald-500/50 shadow-[0_0_20px_#10b98140] flex items-center justify-center shrink-0 z-10 relative">
                                <CheckCircle2 className="w-5 h-5 text-emerald-950" />
                             </div>
                             <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-emerald-500 whitespace-nowrap">Delivered</span>
                           </div>
                        </div>
                     </div>
                  </div>

                </div>
              </div>

               {/* Shimmer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
