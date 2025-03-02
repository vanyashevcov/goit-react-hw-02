const Feedback = ({ btnOption, feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul>
        {btnOption.map((option) => (
          <li>
            {option}: {feedback[option]}
          </li>
        ))}
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
};

export default Feedback;
