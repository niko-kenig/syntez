import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './products.module.scss';
import taiga from '../../assets/images/taiga.jpg';
import termat from '../../assets/images/termat.jpeg';
import irkut from '../../assets/images/sozh.jpeg';
import shtamp from '../../assets/images/shtamp.jpg';
import voloch from '../../assets/images/volochenie.jpeg';

const Products = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    const routes = [
      '/products/taiga',
      '/products/termat',
      '/products/irkut',
      '/products/irkut-shtamp',
      '/products/irkut-volochenie'
    ];
    navigate(routes[id - 1]);
  };

  const products = [
    {
      id: 1,
      title: 'Смывка смолы "Тайга"',
      image: taiga,
      alt: 'Продукт 1',
    },
    {
      id: 2,
      title: 'Закалочная среда "Термат"',
      image: termat,
      alt: 'Продукт 2',
    },
    {
      id: 3,
      title: 'СОЖ "Иркут"',
      image: irkut,
      alt: 'Продукт 3',
    },
    {
      id: 4,
      title: 'СОЖ "Иркут-Штамповка"',
      image: shtamp,
      alt: 'Продукт 4',
    },
    {
      id: 5,
      title: 'СОЖ "Иркут-Волочение"',
      image: voloch,
      alt: 'Продукт 5',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current[index] = el;
    }
  };

  return (
    <div className={styles.productsContainer}>
      <h2>Наша Продукция</h2>
      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => addToRefs(el, index)}
            className={`${styles.productCard} ${visibleCards[index] ? styles.visible : ''}`}
            onClick={() => handleCardClick(product.id)}
            style={{ cursor: 'pointer' }}
          >
            <Card className={styles.card}>
              <div className={styles.imageContainer}>
                <img 
                  src={product.image} 
                  alt={product.alt} 
                  className={styles.productImage}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x200?text=Изображение+не+найдено';
                  }}
                />
              </div>
              <h3 className={styles.productTitle}>{product.title}</h3>
            </Card>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;
