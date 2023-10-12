import Education from "./Education"
import Info from "./Info"
import { Tooltip as ReactTooltip } from 'react-tooltip';

const About = ({openMenu}) => {
  return (
    <div className={`portfolio-section opened-menu-${openMenu}`}>
      <Info />
      <Education />
      <ReactTooltip place="bottom" className="tooltip" />
    </div>
  );
};

export default About;
