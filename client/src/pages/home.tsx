import { motion } from "framer-motion";
import { ArrowRight, Menu, X, MousePointer2, Keyboard, BrainCircuit, Globe, Linkedin, Twitter, Cpu, Layers, Chrome, Clock, Wand2, ImageIcon, Mic, MessageSquare, MoreHorizontal, Plus, Type, Smile, AtSign, Send, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-hidden selection:bg-white/20">
      {/* Dark Premium Background with Noise/Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-white/10">N</div>
              <span className="font-bold text-xl tracking-tight text-white">Nexus</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">How it works</a>
              <a href="#features" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Capabilities</a>
              <a href="#changelog" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">Changelog</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-neutral-300 hover:text-white hover:bg-white/10">Log in</Button>
              <Button size="sm" className="bg-white text-black hover:bg-neutral-200 font-medium">Add to Chrome</Button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-[#0A0A0A] border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#how-it-works" className="block py-2 text-base font-medium text-neutral-300" onClick={() => setIsMenuOpen(false)}>How it works</a>
              <a href="#features" className="block py-2 text-base font-medium text-neutral-300" onClick={() => setIsMenuOpen(false)}>Capabilities</a>
              <a href="#changelog" className="block py-2 text-base font-medium text-neutral-300" onClick={() => setIsMenuOpen(false)}>Changelog</a>
              <div className="pt-4 flex flex-col gap-2">
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">Log in</Button>
                <Button className="w-full bg-white text-black hover:bg-neutral-200">Add to Chrome</Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-5xl mx-auto space-y-8 relative z-10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -z-10" />
            
            <motion.div variants={fadeIn} className="flex justify-center">
              <Badge variant="outline" className="px-4 py-1.5 rounded-full text-sm font-medium border-white/20 bg-white/5 backdrop-blur-sm text-neutral-300 hover:bg-white/10 transition-colors cursor-pointer group">
                <Chrome className="w-4 h-4 mr-2 inline" />
                Available for Chrome & Edge <ArrowRight className="ml-1 h-3 w-3 inline group-hover:translate-x-1 transition-transform" />
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] text-white">
              A new species of <br className="hidden md:block" />
              browser extension.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              You tell it what to do, it gets it done. An autonomous AI agent living in your browser that searches, clicks, fills forms, and completes entire workflows for you.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="h-14 px-10 text-lg font-medium bg-white text-black hover:bg-neutral-200 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300">
                Add to Chrome — It's Free
              </Button>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-24 relative perspective-1000 flex justify-center">
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-10 h-40" />
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-[#131314] ring-1 ring-white/5 mx-auto w-[400px] md:w-[450px] text-left"
              >
                {/* Simulated Browser Extension Popup Header */}
                <div className="h-12 bg-[#1E1E1E] border-b border-white/5 flex items-center px-4 gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[12px] text-black font-bold">N</div>
                  <span className="text-sm font-medium text-neutral-200">Nexus Agent</span>
                </div>
                
                {/* Extension Body - Gemini Replica */}
                <div className="p-6 h-[500px] flex flex-col">
                  <div className="flex justify-between items-center mb-8 text-neutral-400">
                    <div className="flex items-center gap-3">
                      <Menu className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                      <span className="text-sm font-medium text-neutral-200">Nexus</span>
                    </div>
                    <Clock className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                  </div>

                  <div className="mb-8">
                    <h2 className="text-4xl font-medium mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Hello there!</h2>
                    <h3 className="text-4xl font-medium text-neutral-500">How can I help you today?</h3>
                  </div>

                  <div className="flex gap-4 mb-8 overflow-x-hidden flex-1">
                    <div className="bg-[#1E1E1E] p-4 rounded-2xl flex-1 min-w-[150px] max-w-[160px] relative hover:bg-[#2A2A2A] transition-colors cursor-pointer group flex flex-col justify-between">
                      <p className="text-sm text-neutral-300">Create an image of an intergalactic event</p>
                      <div className="w-8 h-8 mt-4 self-end rounded-full bg-[#131314] flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                        <Wand2 className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="bg-[#1E1E1E] p-4 rounded-2xl flex-1 min-w-[150px] max-w-[160px] relative hover:bg-[#2A2A2A] transition-colors cursor-pointer group flex flex-col justify-between">
                      <p className="text-sm text-neutral-300">Plan a low-carb meal with what's available in my fridge</p>
                      <div className="w-8 h-8 mt-4 self-end rounded-full bg-[#131314] flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                        <Wand2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1E1E1E] rounded-3xl p-2 py-3 flex items-center px-4 mt-auto">
                    <input type="text" placeholder="Enter a prompt here" className="bg-transparent border-none outline-none flex-1 text-white placeholder:text-neutral-500 text-sm" />
                    <div className="flex items-center gap-4 text-neutral-400 ml-2">
                      <ImageIcon className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                      <Mic className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-[10px] text-neutral-500">Nexus may display inaccurate info, so double-check its responses.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </section>

        {/* Core Architecture Section (replacing features with species images) */}
        <section id="how-it-works" className="py-32 border-y border-white/5 relative overflow-hidden bg-black/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">Purpose-built for modern workflows</h2>
              <p className="text-xl text-neutral-400">
                Nexus sets a new standard for how you interact with the web. It's not just a wrapper; it's an intelligent runtime executing directly inside your browser.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] p-2 flex justify-center">
               <img src="/species.png" alt="Architecture" className="w-full max-w-5xl rounded-xl opacity-90" />
            </div>
          </div>
        </section>

        {/* Agent/Execution Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-neutral-300">
                <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                Local Execution
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-white">Runs where you run,<br />sees what you see.</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                As a browser extension, Nexus operates directly on the DOM. It navigates complex SPAs, handles popups, and securely manages authenticated sessions without ever sending your cookies to a remote server.
              </p>
              <ul className="space-y-6 pt-4">
                <li className="flex items-start gap-4 group">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Layers className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-white">Context Aware</h4>
                    <p className="text-neutral-400 text-sm mt-1">Understands the page structure, visible elements, and hidden state.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="h-6 w-6" />
                  </div>
                   <div>
                    <h4 className="font-medium text-lg text-white">Multi-Agent Routing</h4>
                    <p className="text-neutral-400 text-sm mt-1">Delegates complex tasks to specialized sub-agents seamlessly.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[100px]" />
              <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#0A0A0A]">
                <img src="/agents.png" alt="Agent Assignment" className="w-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Capabilities Grid */}
        <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">Interactive autonomy</h2>
            <p className="text-xl text-neutral-400">
              Just open the extension, type your command, and watch it take over the tab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[#0A0A0A] border-white/10 hover:border-white/30 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 border border-white/10">
                  <MousePointer2 className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-medium text-white">Precision Clicking</CardTitle>
                <CardDescription className="text-neutral-400">Navigates dropdowns and dynamic menus.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  Nexus maps the entire visual interface and uses coordinate-based clicking to interact with elements exactly like a human would.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0A0A0A] border-white/10 hover:border-white/30 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 border border-white/10">
                  <Keyboard className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-medium text-white">Smart Form Filling</CardTitle>
                <CardDescription className="text-neutral-400">Reads inputs, writes contextually.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  Whether applying for jobs or filling CRM data, it understands what each field requires and drafts perfect responses on the fly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#0A0A0A] border-white/10 hover:border-white/30 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 border border-white/10">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-medium text-white">Self-Healing</CardTitle>
                <CardDescription className="text-neutral-400">Adapts to UI changes automatically.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  If a website updates its design, Nexus doesn't break. It visually analyzes the new layout and finds the new path to success.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Integration / Pulse Section */}
        <section className="py-24 border-y border-white/5 bg-black/40">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 relative rounded-2xl border border-white/10 overflow-hidden p-2 bg-[#0A0A0A]">
                  <img src="/dashboard-pulse.png" alt="Analytics" className="w-full rounded-xl opacity-90" />
                </div>
                <div className="order-1 md:order-2 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Monitor all executions</h3>
                  <p className="text-lg text-neutral-400 leading-relaxed">
                    While Nexus runs locally in your extension, you can track its success rate, cycle times, and execution logs from your central hub. Perfect for managing fleets of automated tasks.
                  </p>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full h-12 px-6">Explore Analytics</Button>
                </div>
             </div>
           </div>
        </section>
        
        {/* Feedback Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
               <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Take action anywhere</h3>
               <p className="text-lg text-neutral-400 leading-relaxed">
                 Trigger workflows directly from your team's conversations. Nexus integrates into your workflows, turning casual requests into automated background tasks.
               </p>
             </div>
             <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#1A1D21] shadow-2xl flex justify-center w-full max-w-md mx-auto">
                <div className="w-full text-left flex flex-col">
                  {/* Header */}
                  <div className="h-12 border-b border-white/5 flex items-center px-4 gap-3 text-neutral-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm font-medium text-neutral-300">Thread in #feedback</span>
                    <MoreHorizontal className="w-4 h-4 ml-auto" />
                  </div>
                  
                  {/* Body */}
                  <div className="p-5 space-y-6 flex-1">
                    <div className="flex gap-3">
                      <Avatar className="w-8 h-8 rounded-md shrink-0 border border-white/10">
                        <AvatarImage src="https://i.pravatar.cc/150?img=47" />
                        <AvatarFallback>L</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-sm text-neutral-200">lena</span>
                          <span className="text-xs text-neutral-500">10:15 AM</span>
                        </div>
                        <p className="text-neutral-300 text-sm mt-1 leading-relaxed">Anyone else noticing the iOS app feels slow to open if you haven't used it in a bit?</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Avatar className="w-8 h-8 rounded-md shrink-0 border border-white/10">
                        <AvatarImage src="https://i.pravatar.cc/150?img=11" />
                        <AvatarFallback>D</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-sm text-neutral-200">didier</span>
                          <span className="text-xs text-neutral-500">10:15 AM</span>
                        </div>
                        <p className="text-neutral-300 text-sm mt-1 leading-relaxed">Yea, we're still blocking initial render on a full vehicle_state sync every time...</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Avatar className="w-8 h-8 rounded-md shrink-0 border border-white/10">
                        <AvatarImage src="https://i.pravatar.cc/150?img=33" />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-sm text-neutral-200">andreas</span>
                          <span className="text-xs text-neutral-500">10:15 AM</span>
                        </div>
                        <p className="text-neutral-300 text-sm mt-1 leading-relaxed">Feels like we could render sooner and load the rest in the background. Probably also worth tracking startup timing so we know how often this happens!</p>
                      </div>
                    </div>

                    {/* Input area */}
                    <div className="mt-6 bg-[#222529] border border-white/10 rounded-xl p-3 pb-2 shadow-inner">
                      <div className="flex items-center gap-2 mb-6">
                        <span className="bg-[#3A3B5B] text-[#9EA1E5] text-sm px-1.5 py-0.5 rounded font-medium">@Nexus</span>
                        <span className="text-sm text-neutral-200">send an email to andreas to track startup timing</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-neutral-500">
                        <div className="flex gap-3">
                          <Plus className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                          <Type className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                          <Smile className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                          <AtSign className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                        </div>
                        <div className="bg-[#4834D4] text-white py-1 px-2 rounded-md cursor-pointer hover:bg-[#523DE0] transition-colors flex items-center gap-1 shadow-sm">
                          <Send className="w-4 h-4 px-0.5" />
                          <div className="w-[1px] h-4 bg-white/20 mx-0.5"></div>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Changelog Section (Using Changelog Image) */}
        <section id="changelog" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Shipping at the speed of thought</h2>
          </div>
          <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-[#0A0A0A] p-2 max-w-5xl mx-auto">
            <img src="/changelog.png" alt="Changelog" className="w-full rounded-xl opacity-90" />
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-24 px-4 text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto bg-white text-black rounded-3xl p-12 md:p-24 relative overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.1)]">
             <div className="relative z-10 space-y-8">
               <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Ready to reclaim your time?</h2>
               <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                 Install the Nexus Chrome extension today and delegate your most repetitive browser tasks to AI.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                 <Button size="lg" className="h-14 px-8 text-lg font-medium bg-black text-white hover:bg-neutral-800 rounded-full shadow-xl transition-all">
                   <Chrome className="w-5 h-5 mr-2" /> Add to Chrome
                 </Button>
               </div>
             </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="col-span-2 md:col-span-1 pr-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black font-bold text-xs">N</div>
                <span className="font-medium text-lg tracking-tight text-white">Nexus</span>
              </div>
              <p className="text-sm text-neutral-500 max-w-xs leading-relaxed mb-6">
                The autonomous AI browser extension.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-6 text-white text-sm">Product</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-white transition-colors">Download Extension</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Capabilities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6 text-white text-sm">Resources</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Prompt Library</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-6 text-white text-sm">Legal</h4>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8 border-white/5" />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
            <p>© 2026 Nexus AI Inc.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <span className="flex items-center gap-2"><Globe className="w-3 h-3" /> English (US)</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
