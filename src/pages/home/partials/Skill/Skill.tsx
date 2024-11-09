import "./Skill.scss"
import SkillItem from "./SkillItem/SkillItem";

const Skill = () => {
    return (
        <div id="skill" className="skill">
          <h1 className='skill-title'>Skill</h1>
          <div className="skill-content">
            <div className="skill-content-technical">
              <h2>Technical skills</h2>
              <div className="content-technical-group">
                <SkillItem title="Programmings" description="HTML, CSS, JavaScript, TypeScript, ReactJS"/>
                <SkillItem title="Databases" description="MongoDB, MySQL, SQLServer" />
                <SkillItem title="Librarys" description="Bootstrap, Tailwind, Ant Design, React"/>
                <SkillItem title="Tools" description="VSCode, Git, PostMan, Figma, Vercel" />
              </div>
            </div>
            <div className="skill-content-soft">
              <h2>Soft skills</h2>
              <div className="content-soft-group">
                <SkillItem title="Team Work"/>
                <SkillItem title="Communication"/>
                <SkillItem title="Problem-Solving" />
              </div>
            </div>
          </div>
        </div>
      );
}

export default Skill;