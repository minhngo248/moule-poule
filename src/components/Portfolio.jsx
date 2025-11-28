import { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

// Filter configuration
const filters = [
  { id: 'normal2025', label: 'Ảnh thường ngày', dataFilter: '.normal2025', isDefault: true },
  { id: 'rotterdam2025', label: 'Rotterdam 25', dataFilter: '.rotterdam2025', isDefault: false },
  { id: 'switzerland2025', label: 'Switzerland 25', dataFilter: '.switzerland2025', isDefault: false },
  { id: 'avray2025', label: 'Avray 25', dataFilter: '.avray2025', isDefault: false },
  { id: 'azur2025', label: 'Azur 25', dataFilter: '.azur2025', isDefault: false },
  { id: 'heheimg2025', label: 'Hí hí', dataFilter: '.heheimg2025', isDefault: false },
  { id: 'archived', label: 'Archived', dataFilter: '.archived', isDefault: false }
];

const Portfolio = () => {
  useEffect(() => {
    // Initialize Isotope
    if (window.$ && window.$.fn.isotope) {
      const container = window.$('#portfolio_wrapper');
      
      container.isotope({
        animationEngine: 'best-available',
        animationOptions: {
          duration: 200,
          queue: false
        },
        layoutMode: 'fitRows'
      });

      window.$('#filters a').click(function() {
        window.$('#filters a').removeClass('active');
        window.$(this).addClass('active');
        const selector = window.$(this).attr('data-filter');
        container.isotope({ filter: selector });
        return false;
      });

      // Activate default filter
      const defaultFilter = filters.find(f => f.isDefault);
      if (defaultFilter) {
        window.$(`#${defaultFilter.id}`).click();
      }
    }

    // Initialize Fancybox
    if (window.$ && window.$.fn.fancybox) {
      window.$('.fancybox').fancybox();
    }
  }, []);

  return (
    <section id="Portfolio" className="content">
      <div className="container portfolio_title">
        <div className="section-title">
          <h2>Ảnh của Pun và Mun</h2>
          <h6>Hé hé Poule xem hết nhớ :3</h6>
        </div>
      </div>

      <div className="portfolio-top"></div>

      <div className="portfolio">
        <div id="filters" className="sixteen columns">
          <ul className="clearfix">
            {filters.map((filter) => (
              <li key={filter.id}>
                <a
                  id={filter.id}
                  href="#"
                  data-filter={filter.dataFilter}
                  className={filter.isDefault ? 'active' : ''}
                >
                  <h5>{filter.label}</h5>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="isotope fadeInLeft animated wow grid"
          style={{ position: 'relative', overflow: 'hidden', height: '480px' }}
          id="portfolio_wrapper"
        >
          {portfolioData.map((item, index) => (
            <figure
              key={index}
              style={{
                position: 'absolute',
                left: '0px',
                top: '0px',
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)',
                width: '337px',
                opacity: 1
              }}
              className={`portfolio-item one-four ${item.category} ${item.archived ? 'archived' : ''} isotope-item effect-oscar`}
            >
              <a href={item.image} className="fancybox" title={`${item.title} ${item.subtitle}`}>
                <div className="portfolio_img">
                  <img src={item.image} alt="Portfolio" />
                </div>
                <figcaption>
                  <div>
                    <h2>
                      {item.title} <span>{item.subtitle}</span>
                    </h2>
                  </div>
                </figcaption>
              </a>
            </figure>
          ))}
        </div>
      </div>

      <div className="portfolio_btm"></div>

      <div id="project_container">
        <div className="clear"></div>
        <div id="project_data"></div>
      </div>
    </section>
  );
};

export default Portfolio;
