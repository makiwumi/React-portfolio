import Layout from '../components/Layout';
import{AnimatePresence, motion} from 'framer-motion';
import { MDBIcon } from "mdbreact";
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
        <MDBIcon fab icon="html5" style={devIconStyle} />
        <MDBIcon fab icon="css3-alt" style={devIconStyle} />
        <MDBIcon fab icon="js-square" style={devIconStyle}/>
        <MDBIcon fab icon="react" style={devIconStyle}/>
        <MDBIcon fab icon="bootstrap" style={devIconStyle}/>
        <MDBIcon fab icon="github" style={devIconStyle}/>
        <MDBIcon fab icon="adobe" style={devIconStyle}/>
        <MDBIcon fab icon="git-alt" style={devIconStyle}/>
        <MDBIcon fab icon="node" style={devIconStyle}/>
        
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
       
        
      </motion.div>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Caveat&family=Homemade+Apple&family=Press+Start+2P&family=Sacramento&family=Satisfy&display=swap');
      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css');
      .cover {
        position: relative;
        min-height: 600px;
        /* background: url(/static/seamless-doodle-transp.jpg);
        background-size: cover; */
      }
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
      
    
  </Layout>
  </AnimatePresence>
  
);

export default Skills;
