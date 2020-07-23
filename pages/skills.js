import Layout from '../components/Layout';
import{AnimatePresence, motion} from 'framer-motion';

import DevIcon from "devicon-react-svg";

// import IconCss3 from 'react-devicon/css3/original-wordmark';

const Services = () => (
  <AnimatePresence>
    <Layout>
      <motion.div className="cover"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}>
        <h1>Skills</h1>
       <div className="lang">
        
        
       
        
        
       </div>
       
        
    
    <style jsx>{`

      .lang{
        color:black;
        text-align:left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding:10px;
        background: white;
        height: 100vh;
      }
      .langicon {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 50px;
        color: #212121;
      }
      
    
    `}

    </style>
      </motion.div>
    
  </Layout>
  </AnimatePresence>
  
);

export default Services;