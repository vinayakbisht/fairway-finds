export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  shortDesc: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Travel Golf Bag",
    price: 32999,
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=600&fit=crop",
    shortDesc: "Lightweight, durable travel bag with padded protection.",
    description: "Engineered for the travelling golfer, this premium travel golf bag features aerospace-grade nylon construction with reinforced padding to protect your clubs on every journey. TSA-approved locks and smooth-glide wheels make airport transit effortless.",
    features: ["Aerospace-grade nylon", "360° padded club protection", "TSA-approved locks", "Smooth-glide wheels", "Multiple accessory pockets"],
  },
  {
    id: 2,
    name: "Luxury Golf Shoes",
    price: 14999,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop",
    shortDesc: "Handcrafted leather shoes with tour-level grip.",
    description: "Hand-stitched from full-grain Italian leather, these luxury golf shoes deliver exceptional comfort and waterproof performance. The proprietary spike-less sole provides tour-level grip on any terrain while remaining street-ready.",
    features: ["Full-grain Italian leather", "Waterproof membrane", "Spike-less tour grip", "Memory foam insole", "Breathable lining"],
  },
  {
    id: 3,
    name: "Pro Rangefinder",
    price: 28500,
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=600&h=600&fit=crop",
    shortDesc: "Precision laser rangefinder with slope adjustment.",
    description: "Tournament-legal precision with slope-adjusted readings, this pro rangefinder features 7x magnification and pin-seeking technology to lock onto the flag from 400+ yards. Compact enough to fit in your pocket.",
    features: ["7x magnification", "Slope adjustment mode", "Pin-seeking technology", "400+ yard range", "Compact & lightweight"],
  },
  {
    id: 4,
    name: "Designer Golf Polo",
    price: 5999,
    image: "https://images.unsplash.com/photo-1625910513413-5fc69d80b7fc?w=600&h=600&fit=crop",
    shortDesc: "Moisture-wicking performance polo with refined styling.",
    description: "Where performance meets sophistication. This designer polo features four-way stretch fabric with advanced moisture management, UV50+ protection, and a tailored fit that transitions seamlessly from the course to the clubhouse.",
    features: ["Four-way stretch fabric", "UV50+ sun protection", "Anti-odour technology", "Tailored athletic fit", "Quick-dry material"],
  },
  {
    id: 5,
    name: "Tour Edition Golf Balls Set",
    price: 4499,
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=600&h=600&fit=crop",
    shortDesc: "12-ball premium set for maximum distance & spin.",
    description: "Designed with a multi-layer urethane core for explosive distance off the tee while maintaining exceptional greenside spin control. Each ball features alignment aids for precise putting.",
    features: ["Multi-layer urethane core", "Tour-grade spin control", "Alignment aids", "12-ball premium set", "Low drag aerodynamics"],
  },
  {
    id: 6,
    name: "Premium Leather Golf Gloves",
    price: 3299,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop",
    shortDesc: "Cabretta leather glove with superior grip & feel.",
    description: "Crafted from AAA-grade Cabretta leather, this premium glove offers an unmatched feel and consistent grip in all weather conditions. Perforated fingers enhance breathability during hot rounds.",
    features: ["AAA-grade Cabretta leather", "All-weather grip", "Perforated breathability", "Reinforced palm", "Perfect fit closure"],
  },
  {
    id: 7,
    name: "Travel Shoe Bag",
    price: 3999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    shortDesc: "Ventilated shoe bag with separate compartments.",
    description: "Keep your footwear fresh and organized with this premium travel shoe bag. Dual ventilation panels and separate compartments prevent odour build-up while the water-resistant exterior protects against spills.",
    features: ["Dual ventilation panels", "Water-resistant exterior", "Separate compartments", "YKK zippers", "Compact travel design"],
  },
  {
    id: 8,
    name: "Polarized Sports Sunglasses",
    price: 6499,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    shortDesc: "HD polarized lenses with anti-glare coating.",
    description: "Engineered for outdoor performance, these polarized sports sunglasses feature HD optics that enhance contrast on the course while eliminating glare. Lightweight titanium-alloy frame ensures all-day comfort.",
    features: ["HD polarized lenses", "Anti-glare coating", "Titanium-alloy frame", "UV400 protection", "Non-slip nose pads"],
  },
  {
    id: 9,
    name: "Elite Golf Cap",
    price: 2999,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=600&fit=crop",
    shortDesc: "Performance cap with moisture-wicking headband.",
    description: "A tour-inspired performance cap featuring an internal moisture-wicking headband, structured crown for a classic silhouette, and an adjustable strap for the perfect fit on and off the course.",
    features: ["Moisture-wicking headband", "Structured crown", "UV protection fabric", "Adjustable strap", "Embroidered logo"],
  },
  {
    id: 10,
    name: "Compact Travel Organizer Kit",
    price: 4999,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&h=600&fit=crop",
    shortDesc: "All-in-one organizer for tees, markers & accessories.",
    description: "The ultimate travel companion for the organized golfer. This compact kit holds tees, ball markers, divot tools, and small accessories in a sleek leather case that fits into any bag pocket.",
    features: ["Premium leather case", "Multiple compartments", "Magnetic closure", "Includes divot tool", "Travel-friendly size"],
  },
];

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}
