import React, { useState } from "react";
import "./TrialPage.css";
import CVZ from "../logos/CVZ.jsx";
import CTR from "../logos/CTR.jsx";
import ECG from "../logos/ECG.jsx";
import ISP from "../logos/ISP.jsx";
import LDD from "../logos/LDD.jsx";
import MLS from "../logos/MLS.jsx";
import NMR from "../logos/NMR.jsx";
import PageContent from "../components/PageContent";

const TrialPage = () => {
  const [highlighted, setHighlighted] = useState(null);

  const handleToggleHighlight = (index) => {
    // Set the clicked image's index to visible, or hide if clicked again
    setHighlighted((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <PageContent title="Trial Page">
      <div>
        <CVZ
          className={highlighted === 1 ? "highlight" : ""}
          onClick={() => handleToggleHighlight(1)}
          width="20%"
        />
        <CTR
          className={highlighted === 2 ? "highlight" : ""}
          onClick={() => handleToggleHighlight(2)}
          width="20%"
        />
        <ECG
          className={highlighted === 3 ? "highlight" : ""}
          onClick={() => handleToggleHighlight(3)}
          width="20%"
        />
        <ISP
          className={highlighted === 4 ? "highlight" : ""}
          onClick={() => handleToggleHighlight(4)}
          width="20%"
        />
      </div>
      <div>
        <LDD 
          className={highlighted === 5 ? "highlight" : ""}
          onClick={() => handleToggleHighlight(5)}
          width="20%"
        />
        <MLS 
          className={highlighted === 6 ? "highlight" : ""}
          onClick={() => handleToggleHighlight(6)}
          width="20%"
        />
        <NMR 
          className={highlighted === 7 ? "highlight" : ""}
          onClick={() => handleToggleHighlight(7)}
          width="20%"
        />
      </div>
    </PageContent>
  );
};

export default TrialPage;
