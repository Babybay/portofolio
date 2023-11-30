import profile_pic from "../../../assets/images/profile.jpg";
import {
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";
const Info = () => {
  return (
    <div className="info-card">
      <div className="profile-img">
        <img className="profile-pic" src={profile_pic} alt="Satria Beratha"/>
      </div>
      <div className="about-me">
        <h1>Putu Satria Beratha</h1>
        <br />
        <p className="profile-description">
        Hello my friend, my journey in computer science has been a dynamic exploration of the digital landscape. With a deep understanding of programming languages, data structures, and algorithms, I'm proficient in tackling complex challenges. From developing robust software solutions to optimizing system performance, I thrive on transforming intricate problems into elegant, efficient solutions. My expertise extends to machine learning, data analysis, and software development, where I constantly push the boundaries of technology.
        </p>
        <br />
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/satria-beratha-ba1098257/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="social-icon"
            href="https://github.com/Babybay"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
