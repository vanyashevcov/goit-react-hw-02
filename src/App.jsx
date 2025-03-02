import React from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import { useState, useEffect  } from "react";
import Notification from "./components/Notification/Notification";

const App = () => {
  const loadFeedback = () => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  };

  const [feedback, setFeedback] = useState(loadFeedback);
  
   useEffect(() => {
     if (Object.keys(feedback).length > 0) {
       localStorage.setItem("feedback", JSON.stringify(feedback));
     }
   }, [feedback]);
  
  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    const resetFeedback = Object.keys(feedback).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});

    setFeedback(resetFeedback);
  };

  const btnOption = Object.keys(feedback);

  const totalFeedback = Object.values(feedback).reduce(
    (acc, value) => acc + value,
    0
  );

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100); 

  return (
    <>
      <Description />
      <Options
        btnOption={btnOption}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      <>
        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <Feedback
            btnOption={btnOption}
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        )}
      </>
    </>
  );
};

export default App;
