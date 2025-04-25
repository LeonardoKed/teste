import React from 'react';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.png';
import img3 from './assets/img3.jpeg';

// ...importe as imagens que quiser

const HomePage = () => {
  const images = [img1, img2, img3 /* ... até 12 */];

  const cards = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    title: `Card ${index + 1}`,
    description: 'Descrição do card aqui.',
    image: images[index % images.length], // repete se tiver menos de 12 imagens
  }));

  return (
    <main className="main-content">
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} className="card-img" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
