import { Container, Nav, Row, Col, Tab } from "react-bootstrap";
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp.png';
import teamtalks from '../assets/img/teamtalks.jpg';
import dragon from '../assets/img/dragon.jpg';
import empleados from '../assets/img/empleados.jpg';
import alineacion from '../assets/img/alineacion.jpg';
import free from '../assets/img/free.jpg';

const Projects = () => {

    const projects = [
        {
            title: "Teamtalks (En proceso)",
            description: "Plataforma educativa integral diseñada para facilitar la gestión académica y la interacción entre estudiantes y profesores.",
            imgUrl: teamtalks,
            repoUrl: "https://github.com/saebxq0711/tea.git",

        },

        {
            title: "Dragon Ball",
            description: "Index realizado con react.js",
            imgUrl: dragon,
            repoUrl: "https://github.com/saebxq0711/dragon_ball.git",


        },

        {
            title: "Empleados",
            description: "Proyecto usando el framework Laravel para registrar empleados, implementando roles para redirigir a diferentes vistas",
            imgUrl: empleados,
            repoUrl: "https://github.com/saebxq0711/empleados.git",


        },

        {
            title: "Excel CSV",
            description: "Sistema para ingresar multiples usuarios usando archivos CSV",
            imgUrl: alineacion,
            repoUrl: "https://github.com/saebxq0711/registros_excel.git",


        },

        {
            title: "Free Fire",
            description: "Juego web donde se encuentran diferentes salas para jugar y ganar puntos, ranking de niveles y juego igualado",
            imgUrl: free,
            repoUrl: "https://github.com/saebxq0711/free.git",


        },

    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Proyectos</h2>
                        <p>Aquí se encuentran mis proyectos, algunos aún se encuentran en desarrollo </p>
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
                                <Tab.Pane eventKey="second">Aquí mostraré mis futuros proyectos</Tab.Pane>
                                <Tab.Pane eventKey="third">Aquí mostraré mis futuros proyectos</Tab.Pane>
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