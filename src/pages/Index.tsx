import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductCard, Product } from "@/components/ProductCard";
import { VideoAd } from "@/components/VideoAd";
import { Footer } from "@/components/Footer";
import { CartDrawer, CartItem } from "@/components/CartDrawer";
import { products, categories } from "@/data/products";
import { toast } from "sonner";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchQuery === "" || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === "all" || product.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      toast.success(`Searching for "${query}"`);
    }
  };

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
    const product = products.find(p => p.id === productId);
    toast.success(`${product?.name} removed from cart`);
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleToggleWishlist = (productId: string) => {
    setWishlistItems(prev => {
      const isInWishlist = prev.includes(productId);
      const product = products.find(p => p.id === productId);
      
      if (isInWishlist) {
        toast.success(`${product?.name} removed from wishlist`);
        return prev.filter(id => id !== productId);
      } else {
        toast.success(`${product?.name} added to wishlist!`);
        return [...prev, productId];
      }
    });
  };

  const handleShopNow = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header 
        onSearch={handleSearch} 
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <Hero onShopNow={handleShopNow} />

      {/* Video Advertisement */}
      <VideoAd />

      {/* Products Section */}
      <section id="products" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Our Collections
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our curated selection of premium jewelry and decorative lights, 
              each piece carefully crafted to bring elegance to your life.
            </p>
          </div>

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Search Results */}
          {searchQuery && (
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} results for "{searchQuery}"
              </p>
            </div>
          )}

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onToggleWishlist={handleToggleWishlist}
                  isInWishlist={wishlistItems.includes(product.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                No products found matching your criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="text-primary hover:underline"
              >
                Clear filters and show all products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  );
};

export default Index;
