import { Product } from "@/components/ProductCard";
import jewelrySetGold from "@/assets/jewelry-set-gold.jpg";
import jewelrySetSilver from "@/assets/jewelry-set-silver.jpg";
import lightDeer from "@/assets/light-deer.jpg";
import lightSolarSystem from "@/assets/light-solar-system.jpg";
import lightEiffelTower from "@/assets/light-eiffel-tower.jpg";
import lightDandelion from "@/assets/light-dandelion.jpg";
import lightPrincess from "@/assets/light-princess.jpg";

export const products: Product[] = [
  // Jewelry
  {
    id: "jewelry-1",
    name: "Royal Gold Necklace Set",
    price: 1199,
    originalPrice: 1499,
    image: jewelrySetGold,
    category: "jewelry",
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isOnSale: true,
  },
  {
    id: "jewelry-2",
    name: "Elegant Silver Diamond Set",
    price: 899,
    originalPrice: 1099,
    image: jewelrySetSilver,
    category: "jewelry",
    rating: 4.7,
    reviews: 89,
    isOnSale: true,
  },
  {
    id: "jewelry-3",
    name: "Vintage Pearl Collection",
    price: 1299,
    image: jewelrySetGold,
    category: "jewelry",
    rating: 4.9,
    reviews: 156,
    isNew: true,
  },
  {
    id: "jewelry-4",
    name: "Bridal Kundan Set",
    price: 1599,
    originalPrice: 1899,
    image: jewelrySetSilver,
    category: "jewelry",
    rating: 4.6,
    reviews: 203,
    isOnSale: true,
  },
  
  // Decorative Lights
  {
    id: "light-1",
    name: "Mystical Deer Crystal Light",
    price: 349,
    originalPrice: 399,
    image: lightDeer,
    category: "lights",
    rating: 4.8,
    reviews: 87,
    isNew: true,
    isOnSale: true,
  },
  {
    id: "light-2",
    name: "Solar System Galaxy Light",
    price: 399,
    image: lightSolarSystem,
    category: "lights",
    rating: 4.9,
    reviews: 142,
    isNew: true,
  },
  {
    id: "light-3",
    name: "Eiffel Tower Romance Light",
    price: 299,
    originalPrice: 349,
    image: lightEiffelTower,
    category: "lights",
    rating: 4.5,
    reviews: 76,
    isOnSale: true,
  },
  {
    id: "light-4",
    name: "Dandelion Dreams Light",
    price: 329,
    image: lightDandelion,
    category: "lights",
    rating: 4.7,
    reviews: 94,
  },
  {
    id: "light-5",
    name: "Princess Fairy Tale Light",
    price: 379,
    originalPrice: 429,
    image: lightPrincess,
    category: "lights",
    rating: 4.8,
    reviews: 118,
    isOnSale: true,
  },
  {
    id: "light-6",
    name: "Ocean Waves Crystal Light",
    price: 359,
    image: lightDeer,
    category: "lights",
    rating: 4.6,
    reviews: 68,
  },
  {
    id: "light-7",
    name: "Starry Night Galaxy Light",
    price: 389,
    image: lightSolarSystem,
    category: "lights",
    rating: 4.9,
    reviews: 156,
    isNew: true,
  },
  {
    id: "light-8",
    name: "Rose Garden Crystal Light",
    price: 339,
    originalPrice: 379,
    image: lightDandelion,
    category: "lights",
    rating: 4.7,
    reviews: 102,
    isOnSale: true,
  },
];

export const categories = [
  { id: "jewelry", name: "Jewelry", count: products.filter(p => p.category === "jewelry").length },
  { id: "lights", name: "Decorative Lights", count: products.filter(p => p.category === "lights").length },
];