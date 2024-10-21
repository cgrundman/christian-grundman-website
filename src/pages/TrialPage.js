import React, { useState } from "react";
import "./TrialPage.css";
import Trial1 from "../logos/computer_vision.jsx";
import Trial2 from "../logos/ct.jsx";
import Trial3 from "../logos/ecg.jsx";
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
      <Trial1
        className={highlighted === 1 ? "highlight" : ""}
        onClick={() => handleToggleHighlight(1)}
        width="200"
      />
      <Trial2
        className={highlighted === 2 ? "highlight" : ""}
        onClick={() => handleToggleHighlight(2)}
        width="200"
      />
      <Trial3
        className={highlighted === 3 ? "highlight" : ""}
        onClick={() => handleToggleHighlight(3)}
        width="200"
      />
    </PageContent>
  );
};

export default TrialPage;
