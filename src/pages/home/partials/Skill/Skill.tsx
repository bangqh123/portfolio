import "./Skill.scss"

const Skill = () => {
    return (
        <div id="skill" className="skill">
          <h1 className='skill-title'>Skill</h1>
          <div className="skill-content">
            <div className="skill-content-language"></div>
            <div className="skill-content-tool"></div>
            <div className="skill-content-chart"></div>
          </div>
        </div>
      );
}

export default Skill;