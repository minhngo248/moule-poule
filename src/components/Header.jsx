import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    // Initialize one-page navigation
    if (window.$ && window.$.fn.onePageNav) {
      window.$('#mainNav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing'
      });
    }

    // Initialize scroll-to-fixed
    if (window.$ && window.$.fn.scrollToFixed) {
      window.$('#header_wrapper').scrollToFixed();
    }
  }, []);

  return (
    <header id="header_wrapper">
      <div className="container-fluid">
        <div className="header_box">
          <nav className="navbar navbar-inverse" role="navigation">
            <div className="navbar-header">
              <button
                type="button"
                id="nav-toggle"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#main-nav"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="main-nav" className="collapse navbar-collapse navStyle">
              <ul className="nav navbar-nav" id="mainNav">
                <li className="active">
                  <a href="#carousel" className="scroll-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#aboutUs" className="scroll-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#Portfolio" className="scroll-link">
                    Ảnh
                  </a>
                </li>
                <li>
                  <a href="#experience" className="scroll-link">
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
