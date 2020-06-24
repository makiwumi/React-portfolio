//shown on all pages

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = props => (
  <div className="site-wrapper">
    <Header />
    {/* renders page content that was been wrapped inside layout.js */}
    <div className="content-wrapper">{props.children}</div>

    <Footer />

    {/* global css styling for all pages */}

    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Caveat&family=Homemade+Apple&family=Press+Start+2P&family=Sacramento&family=Satisfy&display=swap');
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html{
        scroll: smooth-scroll;
      }

      body {
        margin: 0;
        font-size: 20px;
        line-height: 1.7;
        font-weight: 400;
        background: url(/static/seamless-doodle-transp.jpg);
        background-size: cover;
        color: #454545;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue',
          'Lucida Grande', sans-serif;
        text-rendering: optimizeLegibility;
      }

      a {
        color: #1b789e;
        text-decoration: none;
      }

      a:hover {
        color: #166281;
      }

      h1,
      h2,
      h3 {
        margin: 40px 0 30px;
      }

      h1 {
        font-size: 42px;
      }

      h2 {
        font-size: 36px;
      }

      p {
        margin: 0 0 10px;
      }

      img {
        max-width: 100%;
      }

      /* Layout */

      .content-wrapper {
        min-height: 600px;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Layout;