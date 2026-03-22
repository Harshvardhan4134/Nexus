import { motion } from "framer-motion";
import { ArrowRight, Check, Menu, X, Star, MousePointer2, Keyboard, BrainCircuit, Bot, Globe, Zap, Shield, TerminalSquare, Facebook, Linkedin, Instagram, Twitter, Workflow, Cpu, Layers } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="min-h-screen bg-transparent text-foreground font-sans overflow-x-hidden selection:bg-primary/20">
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">N</div>
              <span className="font-bold text-xl tracking-tight">Nexus</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How it works</a>
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Capabilities</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
              <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">Log in</Button>
              <Button size="sm" className="shadow-lg shadow-primary/20">Get Started</Button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
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
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#how-it-works" className="block py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>How it works</a>
              <a href="#features" className="block py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Capabilities</a>
              <a href="#pricing" className="block py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <div className="pt-4 flex flex-col gap-2">
                <Button variant="outline" className="w-full">Log in</Button>
                <Button className="w-full">Get Started</Button>
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
            className="max-w-4xl mx-auto space-y-8 relative z-10"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
            
            <motion.div variants={fadeIn} className="flex justify-center">
              <Badge variant="secondary" className="px-4 py-1.5 rounded-full text-sm font-medium border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm hover:bg-secondary/80 transition-colors cursor-pointer group">
                v2.0 is live — Now with multi-tab support <ArrowRight className="ml-1 h-3 w-3 inline group-hover:translate-x-1 transition-transform" />
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-black tracking-tight leading-[1.05] text-black">
              You tell it what to do, <br className="hidden md:block" />
              it gets it done.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Normal AI tells you what to do. Nexus actually does it for you. An autonomous browser agent that searches, clicks, fills forms, and completes workflows.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="h-14 px-10 text-lg font-bold bg-black text-white hover:bg-black/90 rounded-2xl shadow-2xl shadow-black/10 transition-all duration-300">Try Nexus Free</Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold rounded-2xl border-2 border-black/5 bg-white hover:bg-black/5 transition-all">See it in action</Button>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-16 relative perspective-1000">
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 h-32" />
              <motion.div 
                whileHover={{ y: -5, rotateX: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-xl border border-border shadow-2xl overflow-hidden bg-card/50 backdrop-blur-sm ring-1 ring-white/10 mx-auto max-w-5xl"
              >
                <img 
                  src="/hero-dashboard.png" 
                  alt="Nexus Automation Dashboard" 
                  className="w-full h-auto object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 pb-8">
              <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest text-[10px]">Trusted to automate over 1M+ tasks daily</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="font-bold text-xl flex items-center gap-2 select-none pointer-events-none"><Globe className="w-6 h-6" /> WebFlow</div>
                <div className="font-bold text-xl flex items-center gap-2 select-none pointer-events-none"><Zap className="w-6 h-6" /> AutoShift</div>
                <div className="font-bold text-xl flex items-center gap-2 select-none pointer-events-none"><Shield className="w-6 h-6" /> DataSecure</div>
                <div className="font-bold text-xl flex items-center gap-2 select-none pointer-events-none"><TerminalSquare className="w-6 h-6" /> Scriptify</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* How it Works / Cross Device Section */}
        <section id="how-it-works" className="py-32 bg-secondary/30 border-y border-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-background/50 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-medium shadow-sm">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  Autonomous Execution
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Automate anything,<br />on any website.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether it's booking a flight, applying for 100 jobs on LinkedIn, or researching competitors, Nexus navigates complex websites and executes multi-step processes automatically.
                </p>
                <ul className="space-y-6 pt-4">
                  <li className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <Layers className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Handles Complex UI</h4>
                      <p className="text-muted-foreground text-sm mt-1">Navigates dropdowns, popups, and dynamic React/Vue single-page apps.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="h-6 w-6" />
                    </div>
                     <div>
                      <h4 className="font-semibold text-lg">Human-like Interaction</h4>
                      <p className="text-muted-foreground text-sm mt-1">Mimics human typing speeds, mouse movements, and reading patterns.</p>
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
                <div className="absolute -inset-10 bg-gradient-to-r from-primary/20 to-neutral-500/20 rounded-full blur-3xl opacity-60" />
                <div className="relative grid grid-cols-2 gap-6 items-center">
                  <div className="space-y-6 transform translate-y-12">
                     <img src="/mobile-app.png" alt="Task Queue" className="rounded-3xl shadow-2xl border border-border/50 hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" />
                  </div>
                  <div className="space-y-6">
                    <img src="/web-app.png" alt="Execution Log" className="rounded-2xl shadow-2xl border border-border/50 object-cover h-64 w-full hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0" />
                    <div className="bg-card p-6 rounded-2xl border border-border shadow-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-medium text-sm">Agent Status: Active</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-muted rounded-full w-full overflow-hidden">
                          <div className="h-full bg-primary w-3/4 rounded-full" />
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Filling application form...</span>
                          <span>75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">Built for autonomy, <br />powered by intelligence</h2>
            <p className="text-xl text-muted-foreground">
              Nexus doesn't just read the internet; it interacts with it exactly like you do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <MousePointer2 className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl">Web Navigation</CardTitle>
                <CardDescription>Clicks, scrolls, and explores.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Nexus uses visual recognition to find and click buttons, links, and menus, even if the underlying website code changes completely.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Keyboard className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl">Form Filling</CardTitle>
                <CardDescription>Data entry on autopilot.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Provide Nexus with your details or a spreadsheet of data, and it will systematically fill out complex, multi-page forms with perfect accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <BrainCircuit className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl">Intelligent Decisions</CardTitle>
                <CardDescription>Adapts to errors and changes.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  If a website throws an error or a product is out of stock, Nexus doesn't crash. It reads the screen, assesses options, and pivots its strategy.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-secondary/30 rounded-3xl p-10 border border-border hover:border-primary/30 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-4">Connects with everything</h3>
                <p className="text-muted-foreground mb-8">Trigger browser workflows from your existing stack via API or Zapier.</p>
                <div className="grid grid-cols-4 gap-4">
                  {[1,2,3,4,5,6,7,8].map((i) => (
                    <div key={i} className="aspect-square bg-background rounded-xl border border-border flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <div className="w-10 h-10 bg-muted/50 rounded-lg animate-pulse" />
                    </div>
                  ))}
                </div>
             </div>
             <div className="bg-primary text-primary-foreground rounded-3xl p-10 border border-border relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Record and Replay</h3>
                  <p className="text-primary-foreground/80 mb-8 max-w-md leading-relaxed">
                    Don't want to explain it? Just record yourself doing the task once. Nexus will learn the steps and repeat them infinitely at scale.
                  </p>
                  <Button variant="secondary" className="font-semibold shadow-lg">View Capabilities</Button>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:translate-x-1/3 group-hover:translate-y-1/3 transition-transform duration-700">
                  <Workflow className="w-80 h-80" />
                </div>
             </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-muted/20 border-y border-border overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Loved by productivity hackers<br />and busy professionals.</h2>
          </div>
          
          <div className="relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex animate-marquee gap-6 min-w-full pb-8">
              {[...Array(10)].map((_, i) => (
                <Card key={i} className="w-[400px] flex-shrink-0 border-border/50 bg-background shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="pt-8 px-8 pb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/150?img=${(i % 5) + 30}`} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-sm">Alex Chen</p>
                        <p className="text-xs text-muted-foreground">Operations @ GrowthCo</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">"Nexus literally does the work of three interns. I told it to scrape competitive pricing daily from 5 sites and format it in Google Sheets. Flawless execution."</p>
                    <div className="flex gap-1 text-black mt-6">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Scale your output,<br />not your headcount</h2>
            <p className="text-xl text-muted-foreground">Pay for what Nexus actually accomplishes for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Free Plan */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold">Starter</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight">
                  Free
                </div>
                <CardDescription className="mt-2 text-base">Perfect for personal automation.</CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> 50 automated tasks / mo</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> 1 concurrent agent</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Standard execution speed</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Web dashboard access</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-11 text-base font-semibold" variant="outline">Try Free</Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-primary shadow-2xl bg-primary/5 relative overflow-hidden transform md:-translate-y-6 z-10">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-black to-neutral-600" />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-primary">Pro Automator</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight">
                  $49<span className="text-lg font-normal text-muted-foreground ml-1">/mo</span>
                </div>
                <CardDescription className="mt-2 text-base text-primary/80">For power users and small teams.</CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> 1,000 automated tasks / mo</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> 5 concurrent agents</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Priority execution speed</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Zapier & API access</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Vision-based error recovery</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-11 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30" size="lg">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold">Scale</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight">
                  Custom
                </div>
                <CardDescription className="mt-2 text-base">High-volume enterprise workflows.</CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Unlimited tasks</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> 100+ concurrent agents</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Dedicated IP proxies</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> SLA & 24/7 Support</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-11 text-base font-semibold" variant="outline">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Blog Teaser */}
        <section id="blog" className="py-24 bg-muted/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Learn to automate <br />your digital life</h2>
                <p className="text-muted-foreground">Guides, use-cases, and prompt engineering tips.</p>
              </div>
              <Button variant="ghost" className="hidden md:flex group">View all posts <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group cursor-pointer">
                <div className="aspect-[16/9] bg-muted rounded-2xl mb-6 overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <img src="/blog-strategy.png" alt="Blog Strategy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Use Case</Badge>
                  <span className="text-xs text-muted-foreground">• 5 min read</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">How to automate your entire job search</h3>
                <p className="text-muted-foreground leading-relaxed">Learn how to configure Nexus to find relevant roles, answer custom questionnaires, and submit 100+ tailored applications daily.</p>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-[16/9] bg-muted rounded-2xl mb-6 overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <img src="/blog-tools.png" alt="Blog Tools" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Productivity</Badge>
                  <span className="text-xs text-muted-foreground">• 3 min read</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">10 boring tasks you should delegate to AI today</h3>
                <p className="text-muted-foreground leading-relaxed">From booking doctor appointments to scraping competitor prices, discover the most popular browser workflows our users automate.</p>
              </div>
            </div>
            
            <div className="md:hidden mt-8">
              <Button variant="outline" className="w-full">View all posts</Button>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto bg-black text-white rounded-[2rem] p-12 md:p-24 relative overflow-hidden shadow-2xl border border-neutral-800">
             <div className="relative z-10 space-y-8">
               <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to reclaim your time?</h2>
               <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                 Join thousands of users who trust Nexus to handle their repetitive internet tasks securely and autonomously.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                 <Button size="lg" className="h-14 px-8 text-lg font-bold bg-white text-black hover:bg-neutral-200 shadow-lg hover:shadow-xl transition-all">Start your free trial</Button>
               </div>
               <p className="text-sm opacity-60 text-neutral-400">No credit card required. Cancel anytime.</p>
             </div>
             
             {/* Abstract Shapes */}
             <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
        </section>

        {/* Main Footer */}
        <footer className="bg-background border-t border-border pt-20 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="col-span-2 md:col-span-1 pr-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold shadow-lg">N</div>
                <span className="font-bold text-xl tracking-tight">Nexus</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-6">
                The autonomous AI browser agent. You tell it what to do, it gets it done.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-foreground">Product</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Capabilities</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Extension</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API & Zapier</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-foreground">Resources</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Prompt Library</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">System Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-foreground">Legal</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Data Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Acceptable Use</a></li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2026 Nexus AI Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> English (US)</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
