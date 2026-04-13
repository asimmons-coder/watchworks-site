import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import {
  Phone,
  Calendar,
  ArrowRightLeft,
  MessageSquare,
  Clock,
  Link as LinkIcon,
  Building2,
  Sprout,
  Stethoscope,
  Truck,
  ArrowRight,
  Mail
} from 'lucide-react'
import { Logo } from './components/Logo'
import { Counter } from './components/Counter'
import { InteractiveFlow } from './components/InteractiveFlow'
import { CapabilityCard } from './components/CapabilityCard'
import { ScrollProgress, CursorGlow } from './components/Effects'
import { GapFinderRadar } from './components/GapFinderRadar'

function BookACallButton({ className = "", variant = "primary" }: { className?: string, variant?: "primary" | "white" }) {
  const baseStyles = "relative px-10 py-5 rounded-full font-display font-bold text-lg transition-all duration-500 flex items-center gap-3 group overflow-hidden"
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-xl shadow-brand-blue/20",
    white: "bg-white text-brand-blue hover:bg-brand-light shadow-xl shadow-white/10"
  }

  return (
    <a
      href="https://calendly.com/watchworks-ai"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className={`absolute inset-0 rounded-full border-2 ${variant === 'primary' ? 'border-brand-blue' : 'border-white'}`}
      />
      <span>Book a Call</span>
      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
    </a>
  )
}

function FadeUp({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-brand-blue selection:text-white">
      <ScrollProgress />
      <CursorGlow />

      {/* Hero */}
      <section className="relative min-h-screen bg-brand-navy text-white flex flex-col pt-8 overflow-hidden">
        <nav className="container mx-auto px-6 flex justify-between items-center relative z-20">
          <Logo />
          <div className="hidden md:flex gap-10 items-center font-display text-sm font-semibold tracking-wide text-white/50 uppercase">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#what-we-build" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#who-we-serve" className="hover:text-white transition-colors">Who we serve</a>
            <BookACallButton className="scale-90" />
          </div>
        </nav>

        <div className="flex-1 flex items-center relative z-10">
          <div className="container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.95] mb-10">
                  We find the gaps. <br/>
                  <span className="text-brand-blue">We build the fix.</span> <br/>
                  It runs.
                </h1>
                <p className="text-xl md:text-2xl text-white/50 max-w-xl mb-12 leading-relaxed font-sans">
                  Watchworks AI builds custom AI systems for service businesses. We find the operational gaps costing you time and money, and we close them.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                  <BookACallButton />
                </div>
              </motion.div>

              <div className="relative mt-20 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="flex justify-center"
                >
                  <GapFinderRadar />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      </section>

      {/* Problem */}
      <section className="py-32 animate-gradient relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-5xl md:text-7xl mb-24 text-center">Sound familiar?</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { text: "Your front desk is underwater. Calls go to voicemail.", count: 237, suffix: " calls missed last month" },
              { text: "After hours, your business goes dark. Customers call your competitor.", count: 14, suffix: " hours/week spent on scheduling" },
              { text: "You're paying people to do work a machine should handle.", count: 4200, prefix: "$", suffix: "/month in missed revenue" },
              { text: "Every missed call is missed revenue.", count: 100, suffix: "% lead capture rate is the goal" }
            ].map((item, i) => (
              <div key={i}>
                <FadeUp delay={i * 0.1}>
                  <div className="bg-white/60 backdrop-blur-md p-10 rounded-[2rem] glass-border group hover:bg-white transition-all duration-500">
                    <div className="text-2xl mb-6 leading-tight font-display">
                      {item.text}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-lg transition-transform duration-300"
                    >
                      <Counter value={item.count} prefix={item.prefix} suffix={item.suffix} />
                    </motion.div>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <FadeUp>
              <h2 className="text-5xl md:text-7xl mb-8">How we work</h2>
              <p className="text-2xl text-brand-slate max-w-2xl mx-auto font-sans">
                We don't sell software. We build systems that solve specific operational problems.
              </p>
            </FadeUp>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-brand-light hidden md:block -translate-y-1/2 z-0" />
            <InteractiveFlow />
          </div>
        </div>
      </section>

      {/* What we build */}
      <section id="what-we-build" className="py-32 bg-brand-light/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <FadeUp>
              <h2 className="text-5xl md:text-7xl mb-8">AI systems that work</h2>
              <p className="text-2xl text-brand-slate max-w-2xl mx-auto font-sans">
                Custom-built infrastructure designed to handle the heavy lifting of your daily operations.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeUp delay={0.1}>
              <CapabilityCard
                title="AI Voice Agents"
                description="Every call answered in 2 rings, 24/7. Natural, intelligent conversation that handles inquiries and booking."
                icon={Phone}
                animationType="phone"
                details="Our voice agents use advanced natural language processing to understand intent, handle complex scheduling, and provide a human-like experience for your customers."
              />
            </FadeUp>
            <FadeUp delay={0.2}>
              <CapabilityCard
                title="Appointment Scheduling"
                description="Automated booking that syncs with your existing systems. No more back-and-forth emails or missed slots."
                icon={Calendar}
                animationType="calendar"
                details="We integrate directly with ServiceTitan, Housecall Pro, Jane, and more to ensure your calendar is always accurate and your team is always busy."
              />
            </FadeUp>
            <FadeUp delay={0.3}>
              <CapabilityCard
                title="Call Routing & Triage"
                description="The right calls go to the right people. The rest get handled automatically by the system."
                icon={ArrowRightLeft}
                animationType="routing"
                details="Intelligent routing ensures emergency calls reach your team immediately, while routine inquiries are handled by the AI, saving hours of manual triage."
              />
            </FadeUp>
            <FadeUp delay={0.4}>
              <CapabilityCard
                title="Follow-up Automation"
                description="No lead falls through the cracks. Automated SMS and email follow-ups that feel human."
                icon={MessageSquare}
                animationType="followup"
                details="Our follow-up systems maintain engagement with leads through personalized, timed interactions that drive conversion without manual effort."
              />
            </FadeUp>
            <FadeUp delay={0.5}>
              <CapabilityCard
                title="After-Hours Coverage"
                description="Your business never goes dark. Capture leads and book appointments while you sleep."
                icon={Clock}
                animationType="clock"
                details="24/7 availability means you never miss a weekend or late-night lead. Your AI system works when you don't, ensuring continuous growth."
              />
            </FadeUp>
            <FadeUp delay={0.6}>
              <CapabilityCard
                title="Custom Integrations"
                description="We plug into what you already use. ServiceTitan, Housecall Pro, Jane, or custom CRMs."
                icon={LinkIcon}
                animationType="integration"
                details="We don't ask you to change your tools. We build the bridges between your existing software and our AI systems for a seamless experience."
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section id="who-we-serve" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <FadeUp>
              <h2 className="text-5xl md:text-7xl mb-8">Built for service businesses</h2>
              <p className="text-2xl text-brand-slate max-w-2xl mx-auto font-sans">
                We specialize in industries where missing a call means missing a customer.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: "Property Management", icon: Building2 },
              { name: "Lawn Care & Home Services", icon: Sprout },
              { name: "Healthcare Practices", icon: Stethoscope },
              { name: "Field Service Companies", icon: Truck }
            ].map((item, i) => (
              <div key={i}>
                <FadeUp delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-24 h-24 rounded-[2rem] bg-brand-light flex items-center justify-center mb-8 text-brand-slate group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-brand-blue/20">
                      <item.icon size={48} />
                    </div>
                    <h3 className="text-xl font-display">{item.name}</h3>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 bg-brand-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
              <div className="lg:col-span-3">
                <FadeUp>
                  <h2 className="text-5xl md:text-7xl mb-10">Built by builders.</h2>
                  <p className="text-2xl text-white/50 leading-relaxed mb-10 font-sans">
                    Watchworks AI is founded by Alex Simmons, a builder who has spent the last 6 years creating technology platforms for enterprise companies.
                  </p>
                  <p className="text-2xl text-white/50 leading-relaxed font-sans">
                    We are not consultants who hand you a deck. We build the thing, test it, and make sure it works. Our goal is to make your operations run like clockwork so you can focus on growth.
                  </p>
                </FadeUp>
              </div>
              <div className="lg:col-span-2">
                <FadeUp delay={0.2}>
                  <div className="aspect-square bg-white/5 rounded-[3rem] glass-border flex items-center justify-center relative group">
                    <Logo className="scale-[2] transition-transform duration-700 group-hover:scale-[2.2]" />
                    <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 grid-pattern opacity-[0.02] pointer-events-none" />
      </section>

      {/* CTA */}
      <section className="py-40 bg-brand-navy text-white text-center relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-6xl md:text-8xl mb-12 max-w-4xl mx-auto">Ready to make your operations run?</h2>
            <div className="flex flex-col items-center gap-10">
              <BookACallButton />
              <a href="mailto:alex@watchworks.ai" className="flex items-center gap-3 text-white/40 hover:text-white transition-colors text-xl font-sans tracking-wide">
                <Mail size={24} />
                alex@watchworks.ai
              </a>
            </div>
          </FadeUp>
        </div>
        <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-navy text-white/30 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo className="scale-75 origin-left" />
            <div className="flex gap-12 text-xs uppercase tracking-[0.2em] font-bold font-display">
              <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
              <a href="#what-we-build" className="hover:text-white transition-colors">Capabilities</a>
              <a href="#who-we-serve" className="hover:text-white transition-colors">Industries</a>
            </div>
            <div className="text-sm font-sans">
              alex@watchworks.ai
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-50">
            <p>&copy; 2026 Watchworks AI, LLC. All rights reserved.</p>
            <p>We make your operations run.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
