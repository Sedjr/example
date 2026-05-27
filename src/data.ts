import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Robe de Soirée Ébène',
    price: 450000,
    category: 'Robes de Soirée',
    target: 'Femme',
    images: [
      'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Une somptueuse robe noire conçue avec un drapé asymétrique, parfaite pour les galas et événements prestigieux. Finitions main en soie naturelle.'
  },
  {
    id: '2',
    name: 'Costume Croisé Saphir',
    price: 320000,
    category: 'Costumes',
    target: 'Homme',
    images: [
      'https://images.unsplash.com/photo-1594938298596-70f594f62b0e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Costume sur-mesure aux lignes épurées et structurées, taillé dans une laine froide premium pour une silhouette résolument moderne.'
  },
  {
    id: '3',
    name: 'Tunique Royale Brodée',
    price: 180000,
    category: 'Collections Traditionnelles',
    target: 'Femme',
    images: [
      'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1490268579075-ce7dcafec153?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Une interprétation contemporaine de la tenue traditionnelle avec des broderies fines en fil d\'or sur un coton luxueux.'
  },
  {
    id: '4',
    name: 'Robe Princesse Ivoire',
    price: 120000,
    category: 'Robes de Soirée',
    target: 'Enfant',
    images: [
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1622384918731-f2f114c000bd?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Une délicate robe pour enfant, incrustée de motifs subtils, idéale pour les cérémonies et mariages.'
  },
  {
    id: '5',
    name: 'Robe Minimaliste Plissée',
    price: 280000,
    category: 'Robes de Soirée',
    target: 'Femme',
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'La quintessence de l\'élégance discrète. Un tombé parfait et un plissé au millimètre pour une allure avant-gardiste.'
  },
  {
    id: '6',
    name: 'Manteau d\'Hiver Cendré',
    price: 550000,
    category: 'Collections Traditionnelles',
    target: 'Homme',
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Manteau long fusionnant des techniques de tissage ancestrales avec des coupes asymétriques très actuelles.'
  },
  {
    id: '7',
    name: 'Smoking Velours Noir',
    price: 390000,
    category: 'Costumes',
    target: 'Homme',
    images: [
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Pour l\'homme qui n\'a pas peur de s\'affirmer. Un velours d\'une profondeur absolue, rehaussé d\'un col satin.'
  },
  {
    id: '8',
    name: 'Petit Complet Lin',
    price: 950000,
    category: 'Costumes',
    target: 'Enfant',
    images: [
      'https://images.unsplash.com/photo-1471286174890-9c1122cd79fc?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'L\'élégance dès le plus jeune âge. Un ensemble en lin respirant et stylisé pour les grands jours.'
  }
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-BJ', { style: 'currency', currency: 'XOF' }).format(price).replace('XOF', 'FCFA');
};
