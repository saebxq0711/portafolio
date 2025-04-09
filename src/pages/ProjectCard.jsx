import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, repoUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {repoUrl && (
            <div style={{ marginTop: '10px' }}>
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Ver código
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
