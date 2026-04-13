import { type ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
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
  Mail,
  Menu,
  X,
  PhoneOff,
  Moon,
  DollarSign,
  Target,
  CheckCircle2,
  Wrench,
  Users
} from 'lucide-react'
import { Logo } from './components/Logo'
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

function MobileNav({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-brand-navy/95 backdrop-blur-xl border-t border-white/10 z-50"
        >
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            <a href="#how-it-works" onClick={onClose} className="text-lg font-display font-semibold text-white/70 hover:text-white transition-colors">How it works</a>
            <a href="#what-we-build" onClick={onClose} className="text-lg font-display font-semibold text-white/70 hover:text-white transition-colors">Capabilities</a>
            <a href="#who-we-serve" onClick={onClose} className="text-lg font-display font-semibold text-white/70 hover:text-white transition-colors">Who we serve</a>
            <div className="pt-4 border-t border-white/10">
              <BookACallButton className="w-full justify-center" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

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
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden text-white/70 hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileNavOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
        </nav>

        <div className="flex-1 flex items-center relative z-10">
          <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 md:mb-10">
                  We find the gaps. <br/>
                  <span className="text-brand-blue">We build the fix.</span> <br/>
                  It runs.
                </h1>
                <p className="text-lg md:text-2xl text-white/50 max-w-xl mb-10 md:mb-12 leading-relaxed font-sans">
                  Watchworks AI builds custom AI systems for service businesses. We find the operational gaps costing you time and money, and we close them.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                  <BookACallButton />
                </div>
              </motion.div>

              {/* Radar on desktop, badge on mobile */}
              <div className="relative hidden lg:block">
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
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-7xl mb-6 text-center">Sound familiar?</h2>
            <p className="text-xl text-brand-slate text-center max-w-2xl mx-auto mb-12 md:mb-16 font-sans">
              These are the gaps we close. Every day, for businesses just like yours.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: PhoneOff,
                text: "How many calls went to voicemail last week?",
                stat: "The average service business misses 30%+ of inbound calls.",
                accent: "border-l-red-500"
              },
              {
                icon: Moon,
                text: "What happens when someone calls after 5pm?",
                stat: "40% of service calls come outside business hours.",
                accent: "border-l-amber-500"
              },
              {
                icon: DollarSign,
                text: "What does a missed call actually cost you?",
                stat: "One missed call can mean $500-$2,000 in lost revenue.",
                accent: "border-l-brand-blue"
              },
              {
                icon: Target,
                text: "Are you capturing every lead that contacts you?",
                stat: "Most businesses capture less than half their inbound leads.",
                accent: "border-l-brand-green"
              }
            ].map((item, i) => (
              <div key={i}>
                <FadeUp delay={i * 0.1}>
                  <div className={`bg-white p-8 rounded-2xl border border-brand-light border-l-4 ${item.accent} hover:shadow-lg transition-all duration-300`}>
                    <item.icon size={28} className="text-brand-slate/40 mb-4" />
                    <h3 className="text-xl font-display mb-4 leading-tight">
                      {item.text}
                    </h3>
                    <p className="text-sm text-brand-slate leading-relaxed font-sans">
                      {item.stat}
                    </p>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-brand-light/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <FadeUp>
              <h2 className="text-4xl md:text-7xl mb-8">How we work</h2>
              <p className="text-xl md:text-2xl text-brand-slate max-w-2xl mx-auto font-sans">
                We don't sell software. We build systems that solve specific operational problems.
              </p>
            </FadeUp>
          </div>

          <div className="relative">
            <InteractiveFlow />
          </div>
        </div>
      </section>

      {/* What we build */}
      <section id="what-we-build" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <FadeUp>
              <h2 className="text-4xl md:text-7xl mb-8">AI systems that work</h2>
              <p className="text-xl md:text-2xl text-brand-slate max-w-2xl mx-auto font-sans">
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
                defaultOpen
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
      <section id="who-we-serve" className="py-16 md:py-24 bg-brand-light/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <FadeUp>
              <h2 className="text-4xl md:text-7xl mb-8">Built for service businesses</h2>
              <p className="text-xl md:text-2xl text-brand-slate max-w-2xl mx-auto font-sans">
                We specialize in industries where missing a call means missing a customer.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Property Management", desc: "Tenant inquiries, maintenance requests, leasing calls.", icon: Building2 },
              { name: "Lawn Care & Home Services", desc: "Seasonal booking, route scheduling, customer follow-ups.", icon: Sprout },
              { name: "Healthcare Practices", desc: "Patient scheduling, after-hours triage, appointment reminders.", icon: Stethoscope },
              { name: "Field Service Companies", desc: "Dispatch coordination, service requests, job scheduling.", icon: Truck }
            ].map((item, i) => (
              <div key={i}>
                <FadeUp delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center group p-8 rounded-2xl bg-white border border-brand-light hover:border-brand-blue/20 transition-all duration-500 hover:shadow-lg">
                    <div className="w-20 h-20 rounded-2xl bg-brand-light flex items-center justify-center mb-6 text-brand-slate group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-brand-blue/20">
                      <item.icon size={36} />
                    </div>
                    <h3 className="text-lg font-display mb-2">{item.name}</h3>
                    <p className="text-sm text-brand-slate font-sans leading-relaxed">{item.desc}</p>
                  </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-3">
                <FadeUp>
                  <h2 className="text-4xl md:text-7xl mb-10">Built by builders.</h2>
                  <p className="text-xl md:text-2xl text-white/50 leading-relaxed mb-8 font-sans">
                    Watchworks AI is founded by Alex Simmons. Six years building technology platforms for Fortune 500 companies. Now building AI systems for the businesses that actually run your city.
                  </p>
                  <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-sans">
                    We are not consultants who hand you a deck. We build the thing, test it, and make sure it works. If it breaks, we fix it. Our goal is to make your operations run like clockwork so you can focus on growth.
                  </p>
                </FadeUp>
              </div>
              <div className="lg:col-span-2">
                <FadeUp delay={0.2}>
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-sm font-display font-bold uppercase tracking-widest text-brand-blue mb-4">Currently building for</h4>
                      <ul className="space-y-3 font-sans text-white/60">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-brand-blue mt-0.5 shrink-0" />
                          <span>A 60-year-old lawn care company automating 10,000+ seasonal calls</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-brand-blue mt-0.5 shrink-0" />
                          <span>A top-10 commercial real estate firm with 200+ managed properties</span>
                        </li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <Wrench size={20} className="text-brand-blue mx-auto mb-2" />
                        <div className="text-2xl font-display font-bold">6+</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 font-display">Years building</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <Building2 size={20} className="text-brand-blue mx-auto mb-2" />
                        <div className="text-2xl font-display font-bold">F500</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 font-display">Clients served</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                        <Users size={20} className="text-brand-blue mx-auto mb-2" />
                        <div className="text-2xl font-display font-bold">10K+</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40 font-display">Users on platform</div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 grid-pattern opacity-[0.02] pointer-events-none" />
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-5xl md:text-8xl mb-6 max-w-4xl mx-auto">Ready to make your operations run?</h2>
            <p className="text-xl text-white/40 mb-12 font-sans">
              We take on 2-3 engagements at a time. Let's talk about whether we're the right fit.
            </p>
            <div className="flex flex-col items-center gap-10">
              <BookACallButton />
              <a href="mailto:alex@watchworks.ai" className="flex items-center gap-3 text-white/40 hover:text-white transition-colors text-lg font-sans tracking-wide">
                <Mail size={20} />
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
