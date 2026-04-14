"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
              AgentFlow
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">Features</Link>
          <Link href="#how-it-works" className="transition-colors hover:text-foreground/80 text-foreground/60">How It Works</Link>
          <Link href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <ModeToggle />
          <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:block px-2">
            Sign In
          </Link>
          <Button size="sm" className="hidden sm:inline-flex">Get Started</Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              href="#features" 
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#pricing" 
              className="text-sm font-medium transition-colors hover:text-foreground/80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Link 
                href="/login" 
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link
                href="/register"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
