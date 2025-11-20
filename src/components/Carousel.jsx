import { useEffect } from 'react';

const Carousel = () => {
  useEffect(() => {
    // Initialize Bootstrap carousel
    const carousel = document.querySelector('.carousel');
    if (carousel && window.bootstrap) {
      new window.bootstrap.Carousel(carousel);
    }
  }, []);

  const slides = [
    {
      image: 'https://love-site.s3.eu-west-3.amazonaws.com/normal/IMG_9662.jpg',
      title: 'MA BUNNN',
      subtitle: 'Chụttt'
    },
    {
      image: 'https://love-site.s3.eu-west-3.amazonaws.com/porto/IMG_1056.jpg',
      title: 'HÍIIIII',
      subtitle: 'Tụt'
    },
    {
      image: 'https://love-site.s3.eu-west-3.amazonaws.com/porto/IMG_0945.jpg',
      title: 'TRÒN TRON',
      subtitle: 'Em là Bou mặt tròn, tròn tron trón tron'
    }
  ];

  return (
    <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators">
        {slides.map((_, index) => (
          <li
            key={index}
            data-target="#carousel"
            data-slide-to={index}
            className={index === 0 ? 'active' : ''}
          />
        ))}
      </ol>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={index} className={`item ${index === 0 ? 'active' : ''}`}>
            <div className="caption zoomIn wow animated">
              <h2>
                {slide.title}
                <br />
                <strong>{slide.subtitle}</strong>
              </h2>
            </div>
            <img
              className=""
              src={slide.image}
              alt=""
              style={{ width: '100%', height: 'auto', margin: 0, padding: 0 }}
            />
          </div>
        ))}
      </div>
      <a className="carousel-control left" href="#carousel" data-slide="prev">
        &lsaquo;
      </a>
      <a className="carousel-control right" href="#carousel" data-slide="next">
        &rsaquo;
      </a>
    </div>
  );
};

export default Carousel;
