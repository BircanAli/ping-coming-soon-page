import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <section className="icons__container">
        <button aria-label="icon">
          <Facebook />
        </button>
        <button aria-label="icon">
          <Twitter />
        </button>
        <button aria-label="icon">
          <Instagram />
        </button>
      </section>

      <p>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
