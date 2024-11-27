import { useState, useEffect } from "react";

import casual from "../avatars/casual.svg";
import Mountains from "../backgrounds/mountains.svg";
import PageContent from "../components/PageContent";
import content from "../content.json";
import classes from "../components/PageContent.module.css";

function AboutMePage() {
  // Extract Quote
  const quotes = content.quotes[0]["life"];

  // State to hold the chosen quote
  const [quote, setQuote] = useState('');

  // useEffect to pick a random quote
  useEffect(() => {
      setQuote(() => quotes[Math.floor(Math.random() * quotes.length)]);
  }, [quotes]);

  return (
    <PageContent>
      <div>
        <div className={classes.background}>
          <img src={Mountains} alt="mountains" />
          {/* <div className={classes.foreground}>
            <img src={casual} className={classes.avatar} alt="casual" />
            <p className={classes.quote}>"{quote}"</p>
          </div> */}
        </div>
      </div>
      <h1>About Me</h1>
      <img
        src="https://raw.githubusercontent.com/cgrundman/christian-grundman-website/refs/heads/master/src/images/travel.jpg"
        alt="travel"
        className={classes.interests}
      />
      <img
        src="https://raw.githubusercontent.com/cgrundman/christian-grundman-website/refs/heads/master/src/images/hiking.JPG"
        alt="hiking"
        className={classes.interests}
      />
      <img
        src="https://raw.githubusercontent.com/cgrundman/christian-grundman-website/refs/heads/master/src/images/beer.jpg"
        alt="beer"
        className={classes.interests}
      />
      <div className={classes.content}>
        <h2>Travel Maps</h2>
        <div>
          <h3>US National Parks</h3>
          <img
            src="https://github.com/cgrundman/travel-map-visualization/blob/main/National_Parks/nps.gif?raw=true"
            alt="NPS Gif"
            width="75%"
          />
        </div>
        <div>
          <h3>Germany Travels</h3>
          <img
            src="https://github.com/cgrundman/travel-map-visualization/blob/main/Sehenswuerdigkeiten/de.gif?raw=true"
            alt="DE Gif"
            width="50%"
          />
        </div>
      </div>
    </PageContent>
  );
}

export default AboutMePage;
