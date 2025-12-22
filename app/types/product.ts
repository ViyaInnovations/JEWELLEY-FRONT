// src/types/product.ts

export interface Product {

  slug: string;

  name: string;
  jewelleryType: JewelleryType;
  category: string;
  collection?: string;

  images: string[];


  price: number | null; 

 
  metal: MetalDetails;
  stones?: StoneDetails[];

  certified: boolean;
  certificationDetails?: string;

  shortDescription?: string;
  description?: string;


  occasion?: Occasion[];
  gender?: Gender[];

  customizable?: boolean;
  madeToOrder?: boolean;

 
  sku?: string;
  createdAt?: string;
}

/* ---------------- ENUM / UNION TYPES ---------------- */

export type JewelleryType =
  | "Ring"
  | "Necklace"
  | "Earring"
  | "Bangle"
  | "Bracelet"
  | "Pendant"
  | "Chain"
  | "Anklet"
  | "Nose Pin";

export type Occasion =
  | "Bridal"
  | "Wedding"
  | "Engagement"
  | "Festive"
  | "Daily Wear"
  | "Party Wear";

export type Gender =
  | "Women"
  | "Men"
  | "Kids";

/* ---------------- NESTED STRUCTURES ---------------- */

export interface MetalDetails {
  type: MetalType;
  purity: string;             // 22K, 18K, 950 Platinum
  weight: number;             // grams
  finish?: MetalFinish;
}

export type MetalType =
  | "Gold"
  | "Diamond"
  | "Platinum"
  | "Silver"
  | "Rose Gold";

export type MetalFinish =
  | "Glossy"
  | "Matte"
  | "Antique"
  | "Polished";

export interface StoneDetails {
  type: StoneType;
  count?: number;
  carat?: number;
  color?: string;
  clarity?: string;
}

export type StoneType =
  | "Diamond"
  | "Ruby"
  | "Emerald"
  | "Pearl"
  | "Gemstone";
