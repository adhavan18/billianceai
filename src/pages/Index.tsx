import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b border-border/40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="billianceai logo" className="w-8 h-8" />
              <span className="text-xl font-semibold">billianceai</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Product</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Company</a>
              <Button size="sm" className="rounded-full h-9 px-6" style={{ background: 'var(--gradient-chrome)' }}>
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">Introducing billianceai</span>
            </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[0.95] tracking-tight text-center">
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">ideology meets internet</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            we "just" help people
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button size="lg" className="text-base px-8 h-12 rounded-full font-medium" style={{ background: 'var(--gradient-metallic)', boxShadow: 'var(--shadow-silver)' }}>
              get slot
            </Button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl" style={{ background: 'var(--gradient-hero)', boxShadow: 'var(--shadow-glow)' }} />
            <div className="relative aspect-[4/3] rounded-2xl border border-border/30 backdrop-blur-xl bg-card/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/WhatsApp Image 2025-10-01 at 09.00.15_1bec2f54.jpg" 
                  alt="Presentation showing Real Time Tracking system"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Everything you need
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features that scale with your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "AI-First", 
                desc: "Built from the ground up with intelligence at its core"
              },
              { 
                title: "Real-time Collaboration", 
                desc: "Work together seamlessly across teams and time zones"
              },
              { 
                title: "Enterprise Ready", 
                desc: "Security and scale for organizations of any size"
              }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "2.5K", label: "Users" },
                { value: "99.9%", label: "Uptime" },
                { value: "3", label: "Countries" },
                { value: "24/7", label: "Support" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              start building today
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of teams already using billianceai to create stuff on the internet
            </p>
            <Button size="lg" className="text-base px-10 h-12 rounded-full font-medium" style={{ background: 'var(--gradient-metallic)', boxShadow: 'var(--shadow-silver)' }}>
              get slot
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="billianceai logo" className="w-6 h-6" />
              <span className="font-semibold">billianceai</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
