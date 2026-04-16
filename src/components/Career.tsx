import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>AICTE (Google for Developers Program)</h5>
              </div>
              <h3>Jan–Mar 2025</h3>
            </div>
            <p>
              Proficient in Artificial Intelligence and Machine Learning through
              Google for Developers program. Hands-on experience in TensorFlow,
              building and training ML models for real-world applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>AICTE (Alteryx)</h5>
              </div>
              <h3>Oct–Dec 2024</h3>
            </div>
            <p>
              Proficient in data manipulation, modeling, and transformation using
              Alteryx. Skilled in creating automated workflows, optimizing data
              processes, and generating insights for decision-making.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Central Coalfields Limited · Ranchi</h5>
              </div>
              <h3>May–Jun 2024</h3>
            </div>
            <p>
              Designed and developed a responsive web application using HTML, CSS,
              JavaScript, and PHP to host and manage two quizzes. Implemented
              dynamic user interface elements, client-server communication, and
              real-time data handling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
