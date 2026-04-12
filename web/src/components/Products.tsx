import React from 'react';
import ProductCard, { type ProductData } from './ProductCard';

interface ProductsProps {
  onOpenModal: (title: string) => void;
}

const PRODUCTS_DATA: ProductData[] = [
  {
    title: 'Corrugated Boxes',
    description: 'Heavy-duty shipping solutions designed for pumps, motors, and textile exports.',
    imageUrl: 'https://images.unsplash.com/photo-1595079676339-1534802ad6cf?auto=format&fit=crop&q=80&w=800',
    iconClass: 'fas fa-box-open',
    badge: '3, 5, 7-Ply',
    features: ['Custom Dimensions', 'High Bursting Strength']
  },
  {
    title: 'Corrugated Rolls',
    description: 'Versatile surface protection for fragile industrial components and large machinery.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    iconClass: 'fas fa-scroll',
    badge: 'Protection',
    features: ['Eco-friendly Materials', 'Shock Absorption']
  },
  {
    title: 'White Board Boxes',
    description: '210–400 GSM cartons for cosmetics, retail, and pharmaceuticals with a polished finish.',
    imageUrl: 'https://images.unsplash.com/photo-1544200175-ca6e80a7b323?auto=format&fit=crop&q=80&w=800',
    iconClass: 'fas fa-star',
    badge: 'Premium',
    features: ['Vibrant Print Quality', 'Elegant Glossy Finish']
  }
];

const Products: React.FC<ProductsProps> = ({ onOpenModal }) => {
  return (
    <section id="products" className="py-24 bg-stone-50">
        <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-20">
                <span className="text-brand-brown font-bold uppercase tracking-widest text-sm">Product Catalog</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4">Built for Durability</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
                {PRODUCTS_DATA.map((product, idx) => (
                    <ProductCard 
                      key={idx} 
                      product={product} 
                      onQuoteRequest={onOpenModal} 
                    />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Products;
