export const ExperienceCard = ({ details }) => {
  return (
    <div className="experience-card">
      <h6>{details.title}</h6>
      <div className="experience-duration">{details.date}</div>
         <ul>
          {details.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
  );
}
