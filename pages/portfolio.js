import Layout from '../components/Layout';
import Link from 'next/link';
import{AnimatePresence, motion} from 'framer-motion';

const Portfolio = () => (
  <AnimatePresence>
    <Layout>
      <motion.div className="cover"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}>
      <h1>Portfolio</h1>
    <div className="portfolio">
      <div className="portfolio-list">
      <div className="item">
          <a href="https://github.com/KendraNeves/curbside">
          <img src="/static/Front page.png"  />
          <h2>Curbside</h2>
          </a>
          <p id="p1">Curbside is an application that allows users to get rid of personal items when moving, without the hassel of selling, throwing the items away or even meeting the people who wants to claim the item.</p>
          <p id="p2">Tools: MongoDB, Express, React.js, Node.js (MERN Stack)</p>
        </div>
        <div className="item">
          <a href="https://hospitality-1.herokuapp.com/">
          <img src="/static/hosppre.png"  />
          <h2>Hospitality</h2>
          </a>
          <p id="p1">Hospitality is a healthcare portal for medical professionals to add, store and update patient records in a simple way. It is also tracks current treats such as the Corona virus.</p>
          <p id="p2">Tools: HTML, JavaScript, CSS, Nodejs, Express, MySQL</p>
        </div>
        <div className="item">
          <a href="https://makiwumi.github.io/Weather-Dashboard/">
          <img src="/static/weatherpre.png"  />
          <h2>Weather Dashboard</h2>
          </a>
          <p id="p1">A dashboard that displays the weather in each city searched for.</p>
          <p id="p2">Tools: HTML, CSS, JavaScript, Bootstrap and OpenWeather API</p>
        </div>
        <div className="item">
          <a href="https://burger-galore.herokuapp.com/">
          <img src="/static/Eatpre.png"  />
          <h2>Eat-Da-Burger</h2>
          </a>
          <p id="p1">An app that allows you to add your favorite burgers and devour them!</p>
          <p id="p2">Tools: Handlebars, CSS, Nodejs, Express, MySQL</p>
        </div>
        <div className="item">
          <a href="https://makiwumi.github.io/Employee-Directory/">
          <img src="/static/emppre.png"  />
          <h2>Employee Directory</h2>
          </a>
          <p id="p1">An app that displays a list of employees by name, phone number and email.</p>
          <p id="p2">Tools: React.js, Node.js, Express, RandomUser API</p>
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
      .portfolio .item{
        padding: 20px;
        margin-bottom: 40px;
        /* background: rgb(238, 192, 192); */
      }
      /* size of square/fonts and margins around img title and description */
      img, h2, #p1, #p2 {
        max-width: 200px;
      }
      h2{
        margin: 0 0 5px 0;
        font-family: 'Spinnaker', sans-serif;
        font-size:30px;
      }

      #p1{
        font-family: 'Spinnaker', sans-serif;
        font-size:18px;
        color:#777;
      }
      #p2{
        font-family: 'Spinnaker', sans-serif;
        font-size:15px;
        color:#212121;
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
      </motion.div>
  </Layout>
  </AnimatePresence>
  
);

export default Portfolio;