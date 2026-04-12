import React from 'react';

export interface ProductData {
  title: string;
  description: string;
  imageUrl: string;
  iconClass: string;
  badge: string;
  features: string[];
}

interface ProductCardProps {
  product: ProductData;
  onQuoteRequest: (title: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuoteRequest }) => {
  return (
    <div className="product-card rounded-2xl overflow-hidden border border-stone-200 group">
        <div className="h-64 overflow-hidden relative">
            <img 
              src={product.imageUrl} 
              alt={product.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
            <span className="absolute bottom-4 left-6 text-white font-bold flex items-center">
                <i className={`${product.iconClass} mr-2 text-brand-tan`}></i> {product.badge}
            </span>
        </div>
        <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-brown transition-colors">{product.title}</h3>
            <p className="text-stone-500 text-sm mb-6 leading-relaxed">{product.description}</p>
            <div className="space-y-3 mb-8">
                {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-stone-700 font-medium">
                        <i className="fas fa-check-circle text-brand-brown mr-2"></i> {feature}
                    </div>
                ))}
            </div>
            <button 
              onClick={() => onQuoteRequest(product.title)} 
              className="w-full py-3 bg-brand-beige border border-stone-200 text-stone-800 font-bold rounded-xl hover:bg-brand-brown hover:text-white transition-all shadow-sm">
                Request Quote
            </button>
        </div>
    </div>
  );
};

export default ProductCard;
