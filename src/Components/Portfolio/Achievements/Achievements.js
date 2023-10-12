import { useState } from "react";
const Achievements = ({openMenu}) => {
  const [achievements] = useState([
    "on progress",
  ]);
  return (
    <div className={`portfolio-section opened-menu-${openMenu}`}>
      <div className="skills-card">
        <h1 className="achievements-heading">Achievements</h1>
        <br />
        <ul className="cert-list">
          {achievements.map((achievement) => (
            <li>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
