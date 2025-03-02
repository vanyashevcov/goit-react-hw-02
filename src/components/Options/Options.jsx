const Options = ({ btnOption, updateFeedback, totalFeedback, handleReset }) => {
  return (
    <div>
      {btnOption.map((option) => (
        <button key={option} onClick={() => updateFeedback(option)}>
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
};

export default Options;
