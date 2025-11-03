import { Product } from "@/types/product";
import headphonesImg from "@/assets/headphones.jpg";
import smartwatchImg from "@/assets/smartwatch.jpg";
import backpackImg from "@/assets/backpack.jpg";
import sneakersImg from "@/assets/sneakers.jpg";
import speakerImg from "@/assets/speaker.jpg";
import sunglassesImg from "@/assets/sunglasses.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "Experience immersive sound quality with our premium wireless headphones featuring active noise cancellation.",
    image: headphonesImg,
    category: "Audio",
    features: [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Premium sound quality",
      "Comfortable design",
      "Bluetooth 5.0"
    ],
    inStock: true
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 399.99,
    description: "Track your fitness goals with precision using our advanced smartwatch with health monitoring features.",
    image: smartwatchImg,
    category: "Wearables",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "7-day battery life",
      "Sleep tracking"
    ],
    inStock: true
  },
  {
    id: 3,
    name: "Leather Travel Backpack",
    price: 189.99,
    description: "Sophisticated leather backpack perfect for professionals and travelers who value style and functionality.",
    image: backpackImg,
    category: "Accessories",
    features: [
      "Genuine leather",
      "Laptop compartment",
      "Multiple pockets",
      "Water resistant",
      "Ergonomic design"
    ],
    inStock: true
  },
  {
    id: 4,
    name: "Minimalist Sneakers",
    price: 129.99,
    description: "Clean and versatile sneakers that complement any outfit with supreme comfort and timeless design.",
    image: sneakersImg,
    category: "Footwear",
    features: [
      "Premium materials",
      "All-day comfort",
      "Versatile design",
      "Durable construction",
      "Eco-friendly"
    ],
    inStock: false
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    price: 149.99,
    description: "Powerful portable speaker delivering rich, room-filling sound wherever you go.",
    image: speakerImg,
    category: "Audio",
    features: [
      "360° sound",
      "12-hour battery",
      "Waterproof IPX7",
      "Compact design",
      "Deep bass"
    ],
    inStock: true
  },
  {
    id: 6,
    name: "Designer Sunglasses",
    price: 249.99,
    description: "Stylish sunglasses offering 100% UV protection with a sophisticated frame design.",
    image: sunglassesImg,
    category: "Accessories",
    features: [
      "UV400 protection",
      "Polarized lenses",
      "Lightweight frame",
      "Scratch resistant",
      "Premium case included"
    ],
    inStock: true
  }
];
