import Link from 'next/link';


const Logo = () => (
  <div className="logo">
    <Link href="/">
      <a>
        <img src="/static/ma_logo1.png" />
      </a>
    </Link>

    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Caveat&family=Homemade+Apple&family=Press+Start+2P&family=Sacramento&family=Satisfy&display=swap');

      /* size of the logo */
      .logo img {
        display: block;
        width:70px;
      }
      /* change the logo picture when
      the browser window is 600px wide or less */
      @media (max-width: 600px) {
        .logo {
          display: inline-block;
        }
      }
    
    `}

    </style>
  </div>
);

export default Logo;