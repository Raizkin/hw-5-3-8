function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className="statistics">
      <li>
        <span>Good</span>
        <strong>{good}</strong>
      </li>
      <li>
        <span>Neutral</span>
        <strong>{neutral}</strong>
      </li>
      <li>
        <span>Bad</span>
        <strong>{bad}</strong>
      </li>
      <li>
        <span>Total</span>
        <strong>{total}</strong>
      </li>
      <li>
        <span>Positive feedback</span>
        <strong>{positivePercentage}%</strong>
      </li>
    </ul>
  );
}

export default Statistics;
