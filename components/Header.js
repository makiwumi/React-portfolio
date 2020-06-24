//only shown on navbar
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

const Header = () => (
  <div className="header-wrapper">
    <Logo />
    <Navbar />
    <style jsx>{`

      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Caveat&family=Homemade+Apple&family=Press+Start+2P&family=Sacramento&family=Satisfy&display=swap');
      /* navbar area rectangle */
      .header-wrapper {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
      }
      /* change the navbar rectangle when
      the browser window is 600px wide or less */
      @media (max-width: 600px) {
        .header-wrapper {
          display: block;
          text-align: center;
        }
      }
    `}</style>
  </div>
);

export default Header;