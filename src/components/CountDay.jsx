import { useState, useEffect } from 'react';

const CountDay = () => {
  const [timeElapsed, setTimeElapsed] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const startDate = new Date('2022-02-27T00:00:00');

    const updateCountdown = () => {
      const currentDate = new Date();
      let timeDifference = currentDate - startDate;
      
      const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365.25));
      timeDifference -= years * (1000 * 60 * 60 * 24 * 365.25);
      
      const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44));
      timeDifference -= months * (1000 * 60 * 60 * 24 * 30.44);
      
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      setTimeElapsed({ years, months, days });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="count-day" className="count-day section-boxed">
      <div className="container">
        <div className="section-title">
          <h2>
            Sunday, 27th <span className="main-color">February</span> 2022
          </h2>
        </div>
        <div id="count" className="count">
          <div className="count-block years">
            <div id="years">{timeElapsed.years}</div>
            <span className="count-label">year</span>
          </div>
          <div className="count-block months">
            <div id="months">{timeElapsed.months}</div>
            <span className="count-label">month</span>
          </div>
          <div className="count-block days">
            <div id="days">{timeElapsed.days}</div>
            <span className="count-label">day</span>
          </div>
        </div>
        <br />
        <br />
        <p className="description">
          Hí hí nhanh ha. Vậy là gần 4 năm mình iu nhau rùi hí hí. Chúc Bun sinh nhật thật
          vui vẻ, hạnh phúc, và luôn bên Mun nhớ &lt;3 chụttt
        </p>
      </div>
    </section>
  );
};

export default CountDay;
