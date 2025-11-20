import { timelineData } from '../data/timelineData';

const Timeline = () => {
  return (
    <section id="experience">
      <div className="container">
        <section id="news" className="white-bg padding-top-bottom">
          <div className="section-title">
            <h2>Dòng thời gian của Pun Mun</h2>
            <h6>Vìuuuuuuuu</h6>
          </div>
          <div className="container">
            <div className="timeline">
              {timelineData.map((yearData, yearIndex) => (
                <div key={yearIndex}>
                  <div className="date-title">
                    <span>{yearData.year}</span>
                  </div>
                  <div className="row">
                    {yearData.events.map((event, eventIndex) => (
                      <div key={eventIndex} className={`col-sm-6 news-item ${event.right ? 'right' : ''}`}>
                        <div className="news-content">
                          <div className="date">
                            <p>{event.date}</p>
                          </div>
                          <h2 className="news-title">{event.title}</h2>
                          <p>{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Timeline;
