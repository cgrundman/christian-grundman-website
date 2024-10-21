import React, { useState } from 'react';
import './TrialPage.css';
import Trial1 from '../logos/trial_1.jsx';
import PageContent from '../components/PageContent';

const TrialPage = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleToggleHighlight = () => {
    setIsHighlighted(!isHighlighted);  // Toggle the state on click
  };

  return (
    <PageContent title="Trial Page" >
        <Trial1 className={isHighlighted ? 'highlight' : ''} onClick={handleToggleHighlight} width="400" />
    </PageContent>
  );
};

export default TrialPage;