function SkillList({ skill ,skillIcon}) {
    return (
      <span>
        <img src={skillIcon} width='80px' height='80%' alt="Checkmark icon" />
        <p>{skill}</p>
      </span>
    );
  }
  
  export default SkillList;
  