import Link from 'next/link';

const Navbar = () => (
  <ul className="navbar">
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>About</a>
      </Link>
    </li>
    <li>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
    </li>
    <li>
      <Link href="/skills">
        <a>Skills</a>
      </Link>
    </li>
    <style jsx>{`

      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Caveat&family=Homemade+Apple&family=Press+Start+2P&family=Sacramento&family=Satisfy&family=Spinnaker&display=swap');
      .navbar {
        margin: 5px 0 0;
        padding: 0;
        list-style: none;
        display: flex;
      }
      
      /* links text decorations */
      .navbar li a {
        font-size: 22px;
        color: black;
        font-weight: 600;
        padding: 5px 2px;
        margin: 0 10px;
        text-decoration: none;
        font-family: 'Spinnaker', sans-serif;
      }
      /* color of the line under link when you hover */
      .navbar li a:hover {
        padding-bottom: 3px;
        border-bottom: 2px solid rgb(238, 192, 192);
      }

      /* change the navbar to auto and have that padding when
      the browser window is 600px wide or less */
      @media (max-width: 600px) {
        .navbar {
          display: block;
          margin-top: 20px;
        }
        .navbar li {
          display: inline-block;
        }
        .navbar li a {
          font-size: 18px;
        }
      }
    `}</style>
  </ul>
);

export default Navbar;

// font-family: 'Barlow Condensed', sans-serif;
// font-family: 'Caveat', cursive;
// font-family: 'Homemade Apple', cursive;
// font-family: 'Press Start 2P', cursive;
// font-family: 'Sacramento', cursive;
// font-family: 'Satisfy', cursive;
// font-family: 'Spinnaker', sans-serif;