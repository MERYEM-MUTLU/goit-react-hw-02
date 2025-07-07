export default function Options({ options, onLeaveFeedback, onReset, total }) {
  return (
    <div>
      {options.map((opt) => (
        <button key={opt} onClick={() => onLeaveFeedback(opt)}>
          {opt}
        </button>
      ))}
      {total > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
