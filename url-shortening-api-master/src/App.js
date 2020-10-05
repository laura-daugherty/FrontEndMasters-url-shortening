import React, {useEffect, useState} from 'react';
import axios from 'axios'

function App() {
  const [text, setText] = useState({
    url: ""
  })

  const handleChange = event => {
    setText({ text:event.target.value})
  }

  function shortenUrl(text) {
    // if (text === "") {
    //   console.log("empty text", text )
    //   alert("You must enter a URL to shorten it")
    // } else {
      console.log("text", text)
      axios
        .post("https://rel.ink/api/links/", {
          "url":{text}
        })
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
    // }
  }


  return (
    <div>
      <header>
        <img
          src=""
          alt="Shortly Logo"
        />
      </header>
      <nav>
        <menu>
          <button>Features</button>
          <button>Pricing</button>
          <button>Resources</button>
        </menu>
        <menu>
          <button>Login</button>
          <button>Sign Up</button>
        </menu>
      </nav>
      <div>
        <h1>
          More than just shorter links
        </h1>
        <h3>
          Build your brand’s recognition and get detailed insights 
          on how your links are performing.
        </h3>
        <button>
          Get Started
        </button>
      </div>
      <div>
        <input
          type="text"
          onChange={handleChange}
        />
        <button type="button" onClick={() => shortenUrl(text)}>
          Shorten It!
        </button>
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
        <button>
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