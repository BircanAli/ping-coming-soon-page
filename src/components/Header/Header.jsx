function Header() {
  return (
    <header>
      <figure>
        <img src="images/logo.svg" alt="ping svg logo" />
      </figure>

      <h1>
        We are launching <span>soon!</span>
      </h1>
      <p>Subscribe and get notified</p>
      <div className="input__container">
        <input
          type="text"
          placeholder="Your email address..."
          size={"40"}
          required
        />
        <button>Notify Me</button>
      </div>
    </header>
  );
}

export default Header;
