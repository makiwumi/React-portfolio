import Layout from '../components/Layout';
import Link from 'next/link';


const Portfolio = () => (
  <Layout>
    <h1>Portfolio</h1>
    <div className="portfolio">
      <div className="portfolio-list">
      <div className="item">
          <a href="https://hospitality-1.herokuapp.com/">
          <img src="/static/hosppre.png"  />
          </a>
          <h2>Hospitality</h2>
          <p>an app fdajslfda</p>
        </div>
        <div className="item">
          <a href="https://makiwumi.github.io/Weather-Dashboard/">
          <img src="/static/weatherpre.png"  />
          </a>
          <h2>Hospitality</h2>
          <p>an app fdajslfda</p>
        </div>
        <div className="item">
          <a href="https://burger-galore.herokuapp.com/">
          <img src="/static/Eatpre.png"  />
          </a>
          <h2>Hospitality</h2>
          <p>an app fdajslfda</p>
        </div>
        <div className="item">
          <a href="https://makiwumi.github.io/Employee-Directory/">
          <img src="/static/emppre.png"  />
          </a>
          <h2>Hospitality</h2>
          <p>an app fdajslfda</p>
        </div>
        <div className="item">
          <a href="https://hospitality-1.herokuapp.com/">
          <img src="/static/comingpre.png"  />
          </a>
          <h2>Hospitality</h2>
          <p>an app fdajslfda</p>
        </div>
        <div className="item">
          <a href="https://hospitality-1.herokuapp.com/">
          <img src="/static/comingpre.png"  />
          </a>
          <h2>Hospitality</h2>
          <p>an app fdajslfda</p>
        </div>
      </div>
    </div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Caveat&family=Homemade+Apple&family=Press+Start+2P&family=Sacramento&family=Satisfy&family=Spinnaker&display=swap');
      /* background that holds the page */
      .portfolio {
        max-width:1000px;
        margin: 0 auto;
        
      }
      /* container that holds the list of photos */
      .portfolio-list {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background:white;

      }
      /* spacing around the square */
      .portfolio .item {
        padding: 20px;
        margin-bottom: 40px;
        /* background: rgb(238, 192, 192); */
      }
      /* size of square/fonts and margins around img title and description */
      img{
        max-width: 200px;
      }
      h2{
        margin: 0 0 5px 0;
        font-family: 'Spinnaker', sans-serif;
      }

      p{
        font-family: 'Spinnaker', sans-serif;
        font-size:18px;
        color:#777;
      }

      /* change the portfolio item width to auto and have that padding when
      the browser window is 600px wide or less */
      @media (max-width: 600px) {
        .portfolio .item {
          width: auto;
          padding:10px 20px;
        }
      }
    `}

    </style>
  </Layout>
);

export default Portfolio;