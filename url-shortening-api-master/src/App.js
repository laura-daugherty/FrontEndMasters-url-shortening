import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './app.css';
import person from "./images/illustration-working.svg"
import logo from "./images/logo.svg"

function App() {
  const [text, setText] = useState({
    text: ""
  })
  const [short, setShort] = useState("")
  const [isMenu, setIsMenu] = useState(false)
  const [response, setResponse] = useState({})

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
  };

  function displayShort() {
    if (short === "") {
      return (
        <div></div>
      )
    } else if (short !== "" && response.data) {
      return (
        <div>
          <div>
            {response.data.url}
          </div>
          <div>
            {short}
          </div>
          <button onClick={copyToClipboard(short)}>
            Copy to Clipboard
          </button>
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
      </header>
      <div>
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
        />
        <button className="shortenButt inputAndButt" type="button" onClick={() => shortenUrl(text)}>
          Shorten It!
        </button>
      </div>
      <div>
        {displayShort()}
      </div>
      <div>
        <h2>
          Advanced Statistics
        </h2>
        <p>
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
      </div>
      <div>
        <img
          src=""
          alt="chart"
        />
        <h4>
          Brand Recognition
        </h4>
        <p>
          Boost your brand recognition with each click. Generic links don’t 
          mean a thing. Branded links help instil confidence in your content.  
        </p>
      </div>

      <div>
        <img
        src=""
        alt="chart"
        />
        <h4>
          Detailed Records
        </h4>
        <p>
          Gain insights into who is clicking your links. Knowing when and where 
          people engage with your content helps inform better decisions.    
        </p>
      </div>
      <div>
        <img
        src=""
        alt="chart"
        />
        <h4>
          Fully Customizable
        </h4>
        <p>
          Improve brand awareness and content discoverability through customizable 
          links, supercharging audience engagement.    
        </p>
      </div>
      <div>
        <h2>
          Boost your links today
        </h2>
        <button className="getStarted">
          Get Started
        </button>
      </div>
      <img
      src=""
      alt=""
      />
      <h5>
        Features
      </h5>
      <ul>
        <button>Link Shortening</button>
        <button>Branded Links</button>
        <button>Analytics</button>
      </ul>

      <h5>
        Resources
      </h5>
      <ul>
        <button>Blog</button>
        <button>Developers</button>
        <button>Support</button>
      </ul>
      <h5>
        Company
      </h5>
      <ul>
        <button>About</button>
        <button>Our Team</button>
        <button>Careers</button>
        <button>Contact</button>
      </ul>
      <button>
        <img
        src=""
        alt="Facebook icon"
        />
      </button>
      <button>
        <img
        src=""
        alt="Twitter icon"
        />
      </button>
      <button>
        <img
        src=""
        alt="Pinterest icon"
        />
      </button>
      <button>
        <img
        src=""
        alt="Instagram icon"
        />
      </button>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Laura Daugherty</a>.
      </div>
    </div>
    
  )
}

export default App