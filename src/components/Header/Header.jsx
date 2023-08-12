import { useState } from "react";

function Header() {
  const [input, setInput] = useState([]);
  const [isValid, setIsValid] = useState(true);

  function validateEmail(email) {
    let inputEmail = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    console.log(inputEmail);

    if (!inputEmail) {
      setIsValid(false), setInput(email);
    } else {
      setIsValid(true);
      console.log("here");
    }
  }

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
          onChange={(e) => {
            validateEmail(e.target.value);
          }}
          className={!input || !isValid ? "alert" : ""}
          type="email"
          placeholder="Your email address..."
          // size={"40"}
          required
        />
        {!input || !isValid ? (
          <p className="alert__message">Please provide a valid email address</p>
        ) : (
          ""
        )}
        <button type="submit">Notify Me</button>
      </div>
    </header>
  );
}

export default Header;
