import styles from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={styles.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positivePercentage}%</li>
    </ul>
  );
}
