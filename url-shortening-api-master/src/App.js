import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './app.css';
import person from "./images/illustration-working.svg"
import logo from "./images/logo.svg"
import brand from "./images/icon-brand-recognition.svg"
import records from "./images/icon-detailed-records.svg"
import customize from "./images/icon-fully-customizable.svg"
import facebook from "./images/icon-facebook.svg"
import insta from "./images/icon-instagram.svg"
import pinterest from "./images/icon-pinterest.svg"
import twitter from "./images/icon-twitter.svg"

function App() {
  const [text, setText] = useState({
    text: ""
  })
  const [short, setShort] = useState("")
  const [isMenu, setIsMenu] = useState(false)
  const [response, setResponse] = useState({})
  const [isCopied, setIsCopied] = useState(false)

  const handleChange = event => {
    setText({ text: event.target.value})
  }

  function shortenUrl(text) {
    if (text.text === "") {
      console.log("empty text", text )
      alert("You must enter a URL to shorten it")
    } else {
      const texttext = text.text
      console.log("texttext", texttext)
      axios
        .post("https://rel.ink/api/links/", {
          "url":texttext
        })
        .then((response) => {
          console.log("response", response)
          const hash = response.data.hashid;
          setShort("https://rel.ink/" + hash) 
          setResponse(response)
        }, (error) => {
          console.log("error", error);
        });
    }
  }
  
  const copyToClipboard = str => {
    //create text area
    const el = document.createElement('textarea');
    // set text area value
    el.value = str;
    //add el to the page
    document.body.appendChild(el);
    //select el
    el.select();
    //copy el
    document.execCommand('copy');
    //remove el
    document.body.removeChild(el);
    setIsCopied(!isCopied)
  };

  function displayShort() {
    if (short === "") {
      return (
        <div></div>
      )
    } else if (short !== "" && response.data && isCopied === false) {
      console.log("false")
      return (
        <div className="shortDisplayDiv">
          <div className="shortDisplayOne">
            {response.data.url}
          </div>
          <div className="shortDisplayTwo">
            <div className="short">
              {short}
            </div>
            <button className="copyButt" onClick={() => copyToClipboard(short)}>
              Copy
            </button>
          </div>
        </div>
      )
    } else if (short !== "" && response.data && isCopied === true) {
      console.log("true")
      return (
        <div className="shortDisplayDiv">
        <div className="shortDisplayOne">
          {response.data.url}
        </div>
        <div className="shortDisplayTwo">
          <div className="short">
            {short}
          </div>
          <button className="copyButtPurp" onClick={() => copyToClipboard(short)} >
            Copied!
          </button>
        </div>
      </div>
      )
    }
  }

  function displayMenu() {
    if (isMenu === false) {
      return (
        <img className="person" src={person} alt="person sitting at desk"/>
      ) 
    } else {
      return (
        <nav>
          <menu className="first_nav">
            <div className="navbutt">Features</div>
            <div className="navbutt">Pricing</div>
            <div className="navbutt">Resources</div>
          </menu>
          <menu className="second_nav">
            <div className="navbutt">Login</div>
            <div className="navbutt signup">Sign Up</div>
          </menu>
        </nav>
      )
    }
  }


  return (
    <div>
      <header>
        <img
          src={logo}
          alt="Shortly Logo"
        />
        <button className="burgerButton" onClick={() => setIsMenu(!isMenu)}>
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </button>
        <nav className="navNav">
          <menu className="first_nav navRow">
            <div className="navbutt">Features</div>
            <div className="navbutt">Pricing</div>
            <div className="navbutt">Resources</div>
          </menu>
          <menu className="second_nav navRow">
            <div className="navbutt">Login</div>
            <div className="navbutt signup">Sign Up</div>
          </menu>
        </nav>
      </header>
      <div className="displayMenu">
        {displayMenu()}
      </div>


      <div className="shorterLinks">
        <h1>
          More than just shorter links
        </h1>
        <h3>
          Build your brand’s recognition and get detailed insights 
          on how your links are performing.
        </h3>
        <button className="getStarted">
          Get Started
        </button>
      </div>
      <div className="shortenInputDiv">
        <input
          className="inputAndButt"
          type="text"
          onChange={handleChange}
          placeholder="Shorten a link here..."
        />
        <button className="shortenButt inputAndButt" type="button" onClick={() => shortenUrl(text)}>
          Shorten It!
        </button>
      </div>
      <div>
        {displayShort()}
      </div>
      <div className="infoDiv">
        <h2>
          Advanced Statistics
        </h2>
        <p>
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
      </div>
      <div className="infoBlock">
        <img
          src={brand}
          alt="chart"
          className="infoIcon"
        />
        <h4>
          Brand Recognition
        </h4>
        <p>
          Boost your brand recognition with each click. Generic links don’t 
          mean a thing. Branded links help instil confidence in your content.  
        </p>
        <div className="stripe"/>
      </div>

      <div className="infoBlock">
        <img
        src={records}
        alt="chart"
        className="infoIcon"
        />
        <h4>
          Detailed Records
        </h4>
        <p>
          Gain insights into who is clicking your links. Knowing when and where 
          people engage with your content helps inform better decisions.    
        </p>
        <div className="stripe"></div>
      </div>
      <div className="infoBlock lastBlock">
        <div className="imageCircle">
          <img
          src={customize}
          alt="chart"
          className="infoIcon"
          />
        </div>
        <h4>
          Fully Customizable
        </h4>
        <p>
          Improve brand awareness and content discoverability through customizable 
          links, supercharging audience engagement.    
        </p>
      </div>
      <div className="boostDiv">
        <h2 className="boost">
          Boost your links today
        </h2>
        <button className="getStarted">
          Get Started
        </button>
      </div>
      <div className="footerDiv">
        <h6>
          Shortly
        </h6>
        <h5>
          Features
        </h5>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
        <h5>
          Resources
        </h5>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
        <h5>
          Company
        </h5>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <div className="icons">
          <div>
            <img
            src=
            {facebook}
            alt="Facebook icon"
            />
          </div>
          <div>
            <img
            src={twitter}
            alt="Twitter icon"
            />
          </div>
          <div>
            <img
            src={pinterest}
            alt="Pinterest icon"
            />
          </div>
          <div>
            <img
            src={insta}
            alt="Instagram icon"
            />
          </div>
        </div>
        
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="lauradaughertydev.com">Laura Daugherty</a>.
        </div>
      </div>
      

    </div>
    
  )
}

export default App