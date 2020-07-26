import Layout from '../components/Layout';
import{AnimatePresence, motion} from 'framer-motion';
// import { MDBIcon } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, fab, faGithub} from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab, faGithub, faLinkedin);
// import DevIcon from "devicon-react-svg";

const devIconStyle = {
  width: "120px",
};

const Skills = () => (
  <AnimatePresence>
    <Layout>
      <motion.div className="cover"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}>
      <h1>Skills</h1>
      <div className="lang">
      
      <div className="icons">
        <FontAwesomeIcon icon={["fab","html5"]} style={devIconStyle} />
        {/* <FontAwesomeIcon fab icon="css3-alt" style={devIconStyle} />
        <FontAwesomeIcon fab icon="js-square" style={devIconStyle}/>
        <FontAwesomeIcon fab icon="react" style={devIconStyle}/>
        <FontAwesomeIcon fab icon="bootstrap" style={devIconStyle}/>
        <FontAwesomeIcon fab icon="github" style={devIconStyle}/>
        <FontAwesomeIcon fab icon="adobe" style={devIconStyle}/>
        <FontAwesomeIcon fab icon="git-alt" style={devIconStyle}/>
        <FontAwesomeIcon fab icon="node" style={devIconStyle}/> */}
        
        {/* <DevIcon icon="html5" style={devIconStyle}/>
        <DevIcon icon="css3" style={devIconStyle}/>
        <DevIcon icon="javascript" style={devIconStyle}/>
        <DevIcon icon="jquery" style={devIconStyle}/>
        <DevIcon icon="mysql" style={devIconStyle}/>
        <DevIcon icon="mongodb" style={devIconStyle}/>
        <DevIcon icon="bootstrap" style={devIconStyle}/>
        <DevIcon icon="react" style={devIconStyle}/>
        <DevIcon icon="nodejs" style={devIconStyle}/>
        <DevIcon icon="github_badge" style={devIconStyle}/>
        <DevIcon icon="git" style={devIconStyle}/>
        <DevIcon icon="photoshop" style={devIconStyle}/> */}
        
      </div>
        
      
        
        
      </div>
       
        
      
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Caveat&family=Homemade+Apple&family=Press+Start+2P&family=Sacramento&family=Satisfy&display=swap');
      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css');
      
      /* .cover {
        position: relative;
        min-height: 600px;
        background: url(/static/seamless-doodle-transp.jpg);
        background-size: cover;
      } */
      .lang {
        color:black;
        text-align:left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding:10px;
        background: white;
      }
      .lang .icons{
        padding: 50px;
        margin-bottom: 40px;
        justify-content: space-between;
        font-size:100px;
      }
      
    
    `}

    </style>
      
    </motion.div>
  </Layout>
  </AnimatePresence>
  
);

export default Skills;