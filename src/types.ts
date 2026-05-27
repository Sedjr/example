export type Category = 'Tout' | 'Collections Traditionnelles' | 'Robes de Soirée' | 'Costumes';
export type TargetAudience = 'Homme' | 'Femme' | 'Enfant';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  target: TargetAudience;
  images: string[];
  description: string;
}
