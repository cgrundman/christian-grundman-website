import React, { useState } from "react";
import "./TrialPage.css";
import CVZ from "../logos/CVZ.jsx";
import CTR from "../logos/CTR.jsx";
import ECG from "../logos/ECG.jsx";
import ISP from "../logos/ISP.jsx";
import PageContent from "../components/PageContent";

const TrialPage = () => {

  const [highlighted, setHighlighted] = useState(null);

  const handleToggleHighlight = (index) => {
    // Set the clicked image's index to visible, or hide if clicked again
    setHighlighted((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <PageContent title="Trial Page">
      <CVZ
        className={highlighted === 1 ? "highlight" : ""}
        onClick={() => handleToggleHighlight(1)}
        width="100"
      />
      <CTR
        className={highlighted === 2 ? "highlight" : ""}
        onClick={() => handleToggleHighlight(2)}
        width="100"
      />
      <ECG
        className={highlighted === 3 ? "highlight" : ""}
        onClick={() => handleToggleHighlight(3)}
        width="100"
      />
      <ISP
        className={highlighted === 4 ? "highlight" : ""}
        onClick={() => handleToggleHighlight(4)}
        width="100"
      />
      {/* <Trial4
        className={highlighted === 4 ? "highlight" : ""}
        onClick={() => handleToggleHighlight(4)}
        width="200"
      /> */}
    </PageContent>
  );
};

export default TrialPage;
