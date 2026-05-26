function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="feedback-options">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className="feedback-options__button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackOptions;
