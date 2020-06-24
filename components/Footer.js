const Footer = () => (
  <div className="footer-wrapper">
    <div className="copyright">© {new Date().getFullYear()} Marian Akiwumi.</div>
    <style jsx>{`

      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&family=Caveat&family=Homemade+Apple&family=Press+Start+2P&family=Sacramento&family=Satisfy&display=swap');


      .footer-wrapper {
        text-align: center;
        margin-top: 20px;
        padding: 20px 30px;
        font-size:15px;
      }
      .copyright {
        margin-bottom: 10px;
      }
    `}</style>
  </div>
);

export default Footer;