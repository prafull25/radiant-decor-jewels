import { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const VideoAd = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Placeholder for AI-generated video ad
  // In a real implementation, this would be a video file
  const videoPlaceholder = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Experience the Magic
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch our AI-generated showcase featuring our latest collection of luxury jewelry and enchanting decorative lights.
          </p>
        </div>

        <Card className="relative overflow-hidden max-w-4xl mx-auto shadow-luxury">
          <div className="relative aspect-video bg-gradient-dark">
            {/* Video Preview/Placeholder */}
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
              style={{ backgroundImage: `url(${videoPlaceholder})` }}
            >
              <div className="absolute inset-0 bg-background/60" />
              
              {/* Play Button */}
              <Button
                size="lg"
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative z-10 bg-gradient-gold hover:shadow-gold transition-luxury rounded-full w-20 h-20 p-0"
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8 ml-1" />
                )}
              </Button>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-4 right-4 flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className="bg-background/80 hover:bg-background/90"
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* AI Generated Badge */}
            <div className="absolute top-4 left-4">
              <div className="bg-gradient-gold text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                ✨ AI Generated
              </div>
            </div>
          </div>

          {/* Video Description */}
          <div className="p-6 bg-card">
            <h3 className="font-playfair text-xl font-semibold mb-2">
              MYRRAA Collection Showcase
            </h3>
            <p className="text-muted-foreground">
              Discover the artistry behind our handcrafted jewelry and the magic of our illuminated decorative pieces. 
              Each item tells a story of elegance, craftsmanship, and timeless beauty.
            </p>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-gold hover:shadow-gold transition-luxury">
            Shop Featured Products
          </Button>
        </div>
      </div>
    </section>
  );
};