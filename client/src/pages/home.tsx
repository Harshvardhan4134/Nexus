import { motion } from "framer-motion";
import { ArrowRight, Check, Menu, X, Star, Calendar, CreditCard, Layout, BarChart3, Users, Clock, Globe, Zap, Shield, Smartphone, Laptop, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
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
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">D</div>
              <span className="font-bold text-xl tracking-tight">Dreelio</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
              <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
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
              <a href="#features" className="block py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#pricing" className="block py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</a>
              <a href="#testimonials" className="block py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
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
                v2.0 is live — See what's new <ArrowRight className="ml-1 h-3 w-3 inline group-hover:translate-x-1 transition-transform" />
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Run your freelance <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/60">
                business like a pro
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              All-in-one platform for managing clients, projects, and payments without the chaos. From first contract to final invoice, we've got your back.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="h-12 px-8 text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">Try Dreelio Free</Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base hover:bg-secondary/50">See Features</Button>
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
                  alt="Dreelio Dashboard" 
                  className="w-full h-auto object-cover rounded-xl"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-12 pb-8">
              <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest text-[10px]">Trusted by 7,000+ top startups & freelancers</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simple SVG logos placeholders */}
                <div className="font-bold text-xl flex items-center gap-2 select-none pointer-events-none"><Globe className="w-6 h-6" /> ACME Corp</div>
                <div className="font-bold text-xl flex items-center gap-2 select-none pointer-events-none"><Zap className="w-6 h-6" /> Bolt Shift</div>
                <div className="font-bold text-xl flex items-center gap-2 select-none pointer-events-none"><Shield className="w-6 h-6" /> SecureFlow</div>
                <div className="font-bold text-xl flex items-center gap-2 select-none pointer-events-none"><Layout className="w-6 h-6" /> Designify</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Cross Device Section */}
        <section className="py-32 bg-secondary/30 border-y border-border relative overflow-hidden">
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
                  Seamless Sync
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Work from anywhere,<br />stay in sync.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're on the go with our mobile app or deep in work on the desktop, 
                  your data is always up to date. Switch devices instantly without missing a beat.
                </p>
                <ul className="space-y-6 pt-4">
                  <li className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Native iOS & Android Apps</h4>
                      <p className="text-muted-foreground text-sm mt-1">Full feature parity on mobile devices.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <Laptop className="h-6 w-6" />
                    </div>
                     <div>
                      <h4 className="font-semibold text-lg">Powerful Web Dashboard</h4>
                      <p className="text-muted-foreground text-sm mt-1">Keyboard shortcuts, dark mode, and more.</p>
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
                <div className="absolute -inset-10 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-60" />
                <div className="relative grid grid-cols-2 gap-6 items-center">
                  <div className="space-y-6 transform translate-y-12">
                     <img src="/mobile-app.png" alt="Mobile App" className="rounded-3xl shadow-2xl border border-border/50 hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="space-y-6">
                    <img src="/web-app.png" alt="Web App" className="rounded-2xl shadow-2xl border border-border/50 object-cover h-64 w-full hover:scale-105 transition-transform duration-500" />
                    <div className="bg-card p-6 rounded-2xl border border-border shadow-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="font-medium text-sm">System Status: Operational</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-muted rounded-full w-full overflow-hidden">
                          <div className="h-full bg-primary w-3/4 rounded-full" />
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Syncing...</span>
                          <span>98%</span>
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">Built for freelancers, <br />powered by simplicity</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to manage your creative business, minus the fluff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Layout className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl">Project Management</CardTitle>
                <CardDescription>Keep every project moving forward.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Plan, assign, and deliver your work - all in one place. With smart task tracking, deadlines, and real-time progress.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <CreditCard className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl">Financial Tracking</CardTitle>
                <CardDescription>Track income, get paid, stress less.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Create branded invoices, log expenses, and keep tabs on your earnings. Automated and tax-friendly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Users className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl">Client CRM</CardTitle>
                <CardDescription>Manage relationships like a pro.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Keep all client details, contracts, and communication in one secure place. Never lose track of a lead again.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-secondary/30 rounded-3xl p-10 border border-border hover:border-primary/30 transition-colors duration-300">
                <h3 className="text-2xl font-bold mb-4">Integrates seamlessly</h3>
                <p className="text-muted-foreground mb-8">Connect with the tools you already use every day.</p>
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
                  <h3 className="text-2xl font-bold mb-4">Customizable Workflows</h3>
                  <p className="text-primary-foreground/80 mb-8 max-w-md leading-relaxed">
                    Adapt Dreelio to your specific needs. From Kanban boards to List views, work the way you want.
                  </p>
                  <Button variant="secondary" className="font-semibold shadow-lg">Explore Features</Button>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:translate-x-1/3 group-hover:translate-y-1/3 transition-transform duration-700">
                  <Layout className="w-80 h-80" />
                </div>
             </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-muted/20 border-y border-border overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Loved by designers,<br />developers, and creators.</h2>
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
                        <AvatarImage src={`https://i.pravatar.cc/150?img=${(i % 5) + 10}`} />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-sm">Sarah Jenkins</p>
                        <p className="text-xs text-muted-foreground">Product Designer @ Stripe</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">"Dreelio has completely transformed how I manage my freelance business. It's clean, fast, and actually enjoyable to use."</p>
                    <div className="flex gap-1 text-yellow-500 mt-6">
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Simple plans for <br />serious work</h2>
            <p className="text-xl text-muted-foreground">Start for free, upgrade when you need more power.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Free Plan */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight">
                  Free
                </div>
                <CardDescription className="mt-2 text-base">For solo use with light needs.</CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Unlimited projects</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> 3 active clients</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Basic time tracking</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Mobile app access</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-11 text-base font-semibold" variant="outline">Try Free</Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-primary shadow-2xl bg-primary/5 relative overflow-hidden transform md:-translate-y-6 z-10">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-purple-600" />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-primary">Premium</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight">
                  $19<span className="text-lg font-normal text-muted-foreground ml-1">/mo</span>
                </div>
                <CardDescription className="mt-2 text-base text-primary/80">Everything you need to grow.</CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Unlimited clients</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Advanced invoicing</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Expense tracking</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Client portal</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Priority support</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-11 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30" size="lg">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold tracking-tight">
                  Custom
                </div>
                <CardDescription className="mt-2 text-base">For large teams and agencies.</CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Everything in Premium</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Custom integrations</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> Dedicated account manager</li>
                  <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-primary flex-shrink-0" /> SLA & Security</li>
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
                <h2 className="text-3xl font-bold tracking-tight mb-4">Ideas to level-up your <br />freelance game</h2>
                <p className="text-muted-foreground">Latest articles, guides, and tips.</p>
              </div>
              <Button variant="ghost" className="hidden md:flex group">View all posts <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group cursor-pointer">
                <div className="aspect-[16/9] bg-muted rounded-2xl mb-6 overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <img src="/blog-strategy.png" alt="Blog Strategy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Strategy</Badge>
                  <span className="text-xs text-muted-foreground">• 5 min read</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">How to start a 100k creative agency in 2026</h3>
                <p className="text-muted-foreground leading-relaxed">Learn how to kickstart your journey into agency ownership with our comprehensive guide covering everything from pricing to hiring.</p>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-[16/9] bg-muted rounded-2xl mb-6 overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <img src="/blog-tools.png" alt="Blog Tools" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Productivity</Badge>
                  <span className="text-xs text-muted-foreground">• 3 min read</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Top 10 digital tools for freelancers</h3>
                <p className="text-muted-foreground leading-relaxed">The essential tech stack you need to manage your business efficiently, automate tasks, and reclaim your time.</p>
              </div>
            </div>
            
            <div className="md:hidden mt-8">
              <Button variant="outline" className="w-full">View all posts</Button>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-[2rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
             <div className="relative z-10 space-y-8">
               <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to get organized?</h2>
               <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                 Join 7,000+ freelancers who trust Dreelio to run their business without the headaches.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                 <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold text-primary shadow-lg hover:shadow-xl transition-shadow">Start your free trial</Button>
               </div>
               <p className="text-sm opacity-60">No credit card required. Cancel anytime.</p>
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
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20">D</div>
                <span className="font-bold text-xl tracking-tight">Dreelio</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-6">
                The all-in-one platform for freelancers to manage clients, projects, and payments. Built with ❤️ for creators.
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
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Download App</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-foreground">Resources</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-foreground">Legal</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2026 Dreelio Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> English (US)</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
