import Layout from '../components/Layout';

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <div className="about-text">
      <img src="/static/IMG_2621-Edit.jpg" />
      <p>
        I am a full-stack web developer experienced in HTML, CSS, Bootstrap, Node.js and JavaScript that specializes in front-end web development and applications. In my previous career as a Medical Laboratory Scientist, I worked with laboratory information systems. I was able to team up with programmers to design and improve workflow in the lab. I have enjoyed designing and creating websites since beginning my journey at the Johns Hopkins coding bootcamp. With my background in Art, Photography and my interest in programming, I was recently motivated to turn my passion into a career.  I’m looking forward to optimizing user experience through design with a team where I can grow, create and learn to master these skills.
      </p>
    </div>
    <style jsx>{`

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Caveat&family=Homemade+Apple&family=Press+Start+2P&family=Sacramento&family=Satisfy&display=swap');
      .about-text {
        color:black;
        text-align:left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding:10px;
        background: white;
      }
      
      img {
        float:left;
        width:250px;
        margin: 10px 30px 20px 20px;
      }
      p {
        font-size: 20px;
        font-family: 'Spinnaker', sans-serif;
      }

      @media (max-width: 600px){
        .about-text img {
          float:none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}

    </style>
  </Layout>
);

export default About;