const AboutUs = () => {
  return (
    <section id="aboutUs">
      <div className="about-us clearfix">
        <div className="about-us-block first-block">
          <div className="top-block">
            <div className="name">
              <h2>Pun</h2>
              <h3>Gần 18 tủi</h3>
            </div>
            <div className="photo">
              <img
                src="https://love-site.s3.eu-west-3.amazonaws.com/photo_Panh.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="bottom-block">
            <p>Mặt tròn, rất hư hihi</p>
          </div>
        </div>

        <div className="heart">
          <img src="/heart_img.png" alt="" />
        </div>

        <div className="about-us-block second-block">
          <div className="top-block">
            <div className="name">
              <h2>Mun</h2>
              <h3>17 tủi</h3>
            </div>
            <div className="photo">
              <img
                src="https://love-site.s3.eu-west-3.amazonaws.com/photo_Minh.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="bottom-block">
            <p>Mặt dài, rất là ngoannn</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
