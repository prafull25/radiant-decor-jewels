import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

interface HeroProps {
  onShopNow: () => void;
}

export const Hero = ({ onShopNow }: HeroProps) => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary animate-glow" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Luxury Collection 2024
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight mb-6">
            Radiant
            <span className="text-primary block animate-float">
              Elegance
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover exquisite jewelry and enchanting decorative lights that illuminate your style. 
            Crafted with precision, designed for those who appreciate the finer things in life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={onShopNow}
              className="bg-gradient-gold hover:shadow-gold transition-luxury group"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:border-primary transition-luxury"
            >
              View Catalog
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-8 mt-12">
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Unique Designs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-float opacity-40" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-primary/30 rounded-full animate-float" 
           style={{ animationDelay: '4s' }} />
    </section>
  );
};