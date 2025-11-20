import { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

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

      // Click "All" by default
      window.$('#all').click();
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
            <li>
              <a id="all" href="#" data-filter="*" className="active">
                <h5>All</h5>
              </a>
            </li>
            <li>
              <a id="first-active" className="" href="#" data-filter=".normal">
                <h5>Ảnh thường ngày</h5>
              </a>
            </li>
            <li>
              <a className="" href="#" data-filter=".porto">
                <h5>Porto 23</h5>
              </a>
            </li>
            <li>
              <a className="" href="#" data-filter=".geneve">
                <h5>Genève 23</h5>
              </a>
            </li>
            <li>
              <a className="" href="#" data-filter=".azur">
                <h5>Côte d'Azur 22</h5>
              </a>
            </li>
            <li>
              <a className="" href="#" data-filter=".normandie">
                <h5>Normandie 22</h5>
              </a>
            </li>
            <li>
              <a className="" href="#" data-filter=".heheimg">
                <h5>Hí hí</h5>
              </a>
            </li>
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
              className={`portfolio-item one-four ${item.category} isotope-item effect-oscar`}
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
