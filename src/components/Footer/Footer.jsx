import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <section className="icons__container">
        <button>
          <Facebook />
        </button>
        <button>
          <Twitter />
        </button>
        <button>
          <Instagram />
        </button>
      </section>

      <p>&copy; Copyright Ping. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
