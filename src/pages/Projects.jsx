import { Container, Nav, Row, Col, Tab } from "react-bootstrap";
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp.png';
import teamtalks from '../assets/img/teamtalks.jpg';
import dragon from '../assets/img/dragon.jpg';
import empleados from '../assets/img/empleados.jpg';
import alineacion from '../assets/img/alineacion.jpg';

const Projects = () => {

    const projects = [
        {
            title: "Teamtalks (En proceso)",
            description: "Plataforma educativa integral diseñada para facilitar la gestión académica y la interacción entre estudiantes y profesores.",
            imgUrl: teamtalks,

        },

        {
            title: "Dragon Ball",
            description: "Index realizado con react.js",
            imgUrl: dragon,

        },

        {
            title: "Empleados",
            description: "Proyecto usando el framework Laravel para registrar empleados, implementando roles para redirigir a diferentes vistas",
            imgUrl: empleados,

        },

        {
            title: "Excel CSV",
            description: "Sistema para ingresar multiples usuarios usando archivos CSV",
            imgUrl: alineacion,

        },

    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Aquí se encuentran algunos de mis proyectos, algunos aún se encuentran en desarrollo </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Primera pestaña</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Segunda pestaña</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tercera pestaña</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Aquí se encontrarán futuros proyectos</Tab.Pane>
                                <Tab.Pane eventKey="third">Aquí se encontrarán futuros proyectos</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}



export default Projects;