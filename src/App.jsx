import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Europa-Park Challenge</h1>
      <div className="mb-4">
        <input
          placeholder="Teamnaam invoeren..."
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
      </div>
      <div className="text-lg font-semibold mb-2">Team: {team || "(nog geen naam)"}</div>
      <div className="text-xl mb-6">Score: {score} punten</div>

      <div className="grid gap-4">
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
            <div className="font-bold text-lg">{ch.zone}</div>
            <div className="text-sm mb-2">{ch.task}</div>
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