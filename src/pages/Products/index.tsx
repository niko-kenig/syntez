import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './products.module.scss';
import taiga from '../../assets/images/products/taiga.jpg';
import termat from '../../assets/images/products/termat_.jpeg';
import irkut from '../../assets/images/products/sozh.jpeg';
import shtamp from '../../assets/images/products/shtamp.jpg';
import voloch from '../../assets/images/products/volochenie.jpeg';

const Products = () => {
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
      alt: 'Смывка смолы Тайга',
    },
    {
      id: 2,
      title: 'Закалочная среда "Термат"',
      image: termat,
      alt: 'Закалочная среда Термат',
    },
    {
      id: 3,
      title: 'СОЖ "Иркут"',
      image: irkut,
      alt: 'СОЖ Иркут',
    },
    {
      id: 4,
      title: 'СОЖ "Иркут-Штамповка"',
      image: shtamp,
      alt: 'СОЖ Иркут-Штамповка',
    },
    {
      id: 5,
      title: 'СОЖ "Иркут-Волочение"',
      image: voloch,
      alt: 'СОЖ Иркут-Волочение',
    },
  ];



  return (
    <div className={styles.productsContainer}>
      <h2>Наша Продукция</h2>
      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className={styles.productCard}
            onClick={() => handleCardClick(product.id)}
            style={{ '--delay': `${index * 0.1}s`, cursor: 'pointer' } as React.CSSProperties}
          >
            <Card className={styles.card}>
              <div className={styles.imageContainer}>
                <img 
                  src={product.image} 
                  alt={product.alt} 
                  className={styles.productImage}
                  loading="lazy"
                  width={300}
                  height={200}
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
