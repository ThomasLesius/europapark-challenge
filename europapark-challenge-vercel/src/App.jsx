import { useState } from "react";

const challenges = [...Array(100)].map((_, i) => ({
  zone: "Europa-Park",
  task: `Challenge ${i + 1}: Doe iets creatiefs.`,
  points: (i % 3 + 1) * 5
}));

export default function EuropaParkChallenge() {
  const [team, setTeam] = useState("");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState([]);

  const handleComplete = (index, points) => {
    if (!completed.includes(index)) {
      setCompleted([...completed, index]);
      setScore(score + points);
    }
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center' }}>Europa-Park Challenge</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          placeholder="Teamnaam invoeren..."
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
      </div>
      <div style={{ fontWeight: 'bold' }}>Team: {team || "(nog geen naam)"}</div>
      <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Score: {score} punten</div>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {challenges.map((ch, index) => (
          <div
            key={index}
            style={{
              opacity: completed.includes(index) ? 0.5 : 1,
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '8px'
            }}
          >
            <div style={{ fontWeight: 'bold' }}>{ch.zone}</div>
            <div>{ch.task}</div>
            <button
              onClick={() => handleComplete(index, ch.points)}
              disabled={completed.includes(index)}
            >
              {completed.includes(index) ? "Voltooid" : `+${ch.points} punten`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}