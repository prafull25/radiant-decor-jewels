import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  categories: Array<{ id: string; name: string; count: number }>;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={activeCategory === "all" ? "default" : "outline"}
        onClick={() => onCategoryChange("all")}
        className={`transition-luxury ${
          activeCategory === "all" 
            ? "bg-gradient-gold shadow-gold" 
            : "hover:border-primary/50"
        }`}
      >
        All Products
        <Badge variant="secondary" className="ml-2">
          {categories.reduce((sum, cat) => sum + cat.count, 0)}
        </Badge>
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className={`transition-luxury ${
            activeCategory === category.id 
              ? "bg-gradient-gold shadow-gold" 
              : "hover:border-primary/50"
          }`}
        >
          {category.name}
          <Badge variant="secondary" className="ml-2">
            {category.count}
          </Badge>
        </Button>
      ))}
    </div>
  );
};