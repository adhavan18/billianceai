import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-hero)' }}>
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-metallic)', boxShadow: 'var(--shadow-silver)' }}>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              BillianceAI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Features</a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
            <Button size="sm" className="rounded-full" style={{ background: 'var(--gradient-chrome)', boxShadow: 'var(--shadow-silver)' }}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 backdrop-blur-sm border border-border/50 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium">Powered by Advanced AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Brilliance Meets
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-primary to-foreground bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Transform your business with cutting-edge AI solutions. Unlock unprecedented growth, efficiency, and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button size="lg" className="text-lg px-8 rounded-full group" style={{ background: 'var(--gradient-metallic)', boxShadow: 'var(--shadow-glow)' }}>
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 rounded-full border-2 backdrop-blur-sm bg-background/20">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Lightning Fast", desc: "Process data at unprecedented speeds" },
            { icon: Shield, title: "Enterprise Security", desc: "Bank-level encryption & compliance" },
            { icon: TrendingUp, title: "Scale Infinitely", desc: "Grow without limits or constraints" }
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl backdrop-blur-lg bg-card/40 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ 
                animationDelay: `${400 + idx * 100}ms`,
                boxShadow: 'var(--shadow-silver)'
              }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: 'var(--gradient-chrome)' }}>
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Built for the Future
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to dominate your market with AI-powered solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { title: "AI-Powered Analytics", desc: "Real-time insights that drive decisions", stats: "99.9% Accuracy" },
              { title: "Seamless Integration", desc: "Connect with your existing tools instantly", stats: "200+ Integrations" },
              { title: "24/7 Support", desc: "Expert assistance whenever you need it", stats: "<2min Response" },
              { title: "Custom Solutions", desc: "Tailored AI models for your specific needs", stats: "100% Custom" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl backdrop-blur-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ boxShadow: 'var(--shadow-silver)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: 'var(--gradient-chrome)' }}>
                    {item.stats}
                  </span>
                </div>
                <p className="text-muted-foreground text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-card/60 to-card/40 border border-border/50" style={{ boxShadow: 'var(--shadow-glow)' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of companies already using BillianceAI
            </p>
            <Button size="lg" className="text-lg px-12 rounded-full" style={{ background: 'var(--gradient-metallic)', boxShadow: 'var(--shadow-silver)' }}>
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
