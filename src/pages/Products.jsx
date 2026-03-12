import multiGrainAttaImg from '../images/Atta-Multi-Grain.png';
import bajraAttaImg from '../images/Bajra.png';
import chakkiAttaImg from '../images/Chakki-atta.png';
import jowarImg from '../images/Jowar.png';
import kuttuImg from '../images/Kuttu.png';
import maidaImg from '../images/Maida.png';
import makkaImg from '../images/Makka.png';
import missaAttaImg from '../images/Missa-Atta.png';
import multiMilletsImg from '../images/Multi-Millets.png';
import murmuraImg from '../images/MURMURA.png';
import pohaImg from '../images/Poha.png';
import ragiImg from '../images/Ragi.png';
import roastedDaliyaImg from '../images/Roasted-Daliya.png';
import sattuImg from '../images/Sattu.png';
import suziImg from '../images/Suzi.png';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Atta & Whole Grains', 'Healthy Cereals', 'Superfoods'];

const products = [
{
id:1,
name:'Multi Grain Atta',
category:'Healthy Cereals',
description:'Nutritious multi grain flour',
size:'1 kg',
image:multiGrainAttaImg
},

{
id:2,
name:'Bajra Atta',
category:'Superfoods',
description:'Pearl millet flour rich in fiber',
size:'800 gm',
image:bajraAttaImg
},

{
id:3,
name:'Chakki Fresh Atta',
category:'Atta & Whole Grains',
description:'Stone ground MP wheat flour',
size:'5 kg | 10 kg | 50 kg',
image:chakkiAttaImg
},

{
id:4,
name:'Jowar Atta',
category:'Superfoods',
description:'Healthy gluten-free sorghum flour',
size:'800 gm',
image:jowarImg
},

{
id:5,
name:'Kuttu Atta',
category:'Superfoods',
description:'Premium buckwheat flour',
size:'400 gm',
image:kuttuImg
},

{
id:6,
name:'Maida',
category:'Atta & Whole Grains',
description:'Fine refined wheat flour',
size:'500 gm | 1 kg',
image:maidaImg
},

{
id:7,
name:'Makka Atta',
category:'Superfoods',
description:'Stone-ground maize flour',
size:'800 gm',
image:makkaImg
},

{
id:8,
name:'Missa Atta',
category:'Healthy Cereals',
description:'Nutritious traditional flour blend',
size:'1 kg',
image:missaAttaImg
},

{
id:9,
name:'Multi Millets Atta',
category:'Superfoods',
description:'Power packed millet blend',
size:'400 gm',
image:multiMilletsImg
},

{
id:10,
name:'Murmura',
category:'Healthy Cereals',
description:'Crispy puffed rice',
size:'400 gm',
image:murmuraImg
},

{
id:11,
name:'Poha',
category:'Healthy Cereals',
description:'Light flattened rice',
size:'500 gm | 1 kg',
image:pohaImg
},

{
id:12,
name:'Ragi Atta',
category:'Superfoods',
description:'Calcium rich finger millet',
size:'800 gm',
image:ragiImg
},

{
id:13,
name:'Roasted Daliya',
category:'Healthy Cereals',
description:'Roasted broken wheat',
size:'400 gm',
image:roastedDaliyaImg
},

{
id:14,
name:'Sattu',
category:'Superfoods',
description:'Protein rich roasted gram flour',
size:'400 gm',
image:sattuImg
},

{
id:15,
name:'Sooji',
category:'Atta & Whole Grains',
description:'Premium semolina',
size:'500 gm | 1 kg',
image:suziImg
}
]

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EFE6]/30 to-[#FDFBF7] py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-[#052e16]" data-testid="products-hero-heading">
              Our Products
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#6B5D52]">
              Discover our curated selection of premium groceries, sourced from the finest farms across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Category Filter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium text-base transition-all ${
                    selectedCategory === category
                      ? 'bg-[#14532D] text-white shadow-lg shadow-[#14532D]/30'
                      : 'bg-white text-[#14532D] hover:bg-[#F5EFE6] border border-[#F5EFE6] hover:shadow-md'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(20,83,45,0.15)] transition-all duration-500 group"
                data-testid={`product-card-${product.id}`}
              >
                    <div className="w-full h-72 bg-white p-6 flex items-center justify-center">
                    <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={product.image}
                    alt={product.name}
                    className="max-h-full object-contain"
                    />
                  </div>
                <div className="p-6 space-y-3">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    className="text-xs font-medium tracking-wider uppercase text-[#14532D]/80 bg-[#F5EFE6] px-3 py-1 rounded-full inline-block"
                  >
                    {product.category}
                  </motion.div>
                  <h3 className="font-heading text-2xl font-medium text-[#052e16]">
                    {product.name}
                  </h3>
                  <p className="text-base leading-relaxed text-[#6B5D52]">
                    {product.description}
                  </p>
                  <p className="text-sm text-[#6B5D52]">
                     Size: {product.size}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No products message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[#6B5D52]">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;