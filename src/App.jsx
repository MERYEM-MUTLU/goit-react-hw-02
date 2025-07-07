import { useState, useEffect } from "react";
import Section from "./components/Section/Section";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const getInitialFeedback = () => {
  const saved = localStorage.getItem("feedback");
  return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total
    ? Math.round((feedback.good / total) * 100)
    : 0;

  return (
    <div className="container">
      <h1>Sip Happens Café</h1>
      <Section title="Please leave your feedback about our service by selecting one of the options below.">
        <Options
          options={Object.keys(feedback)}
          onLeaveFeedback={updateFeedback}
          onReset={resetFeedback}
          total={total}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Feedback
            {...feedback}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </Section>
    </div>
  );
}
