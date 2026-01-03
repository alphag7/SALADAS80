
export interface SaladRecipe {
  name: string;
  ingredients: string[];
  instructions: string;
  benefits: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
