import {Container, Col, Row } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import whats from '../assets/img/whatsapp.svg';
import git from '../assets/img/github.svg';
import linked from '../assets/img/linkedin.svg';
import envelope from '../assets/img/envelope.svg';


const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://github.com/saebxq0711"><img src={git} alt="Github" /></a>
                            <a href="https://wa.me/qr/M44K3WPTLRUPN1"><img src={whats} alt="Whatsapp" /></a>
                            <a href="https://www.linkedin.com/in/sebastian-aranda-26448535b"><img src={linked} alt="Linkedin" /></a>
                            <a href="mailto:juan.aranda12@soy.sena.edu.co"><img src={envelope} alt="Envelope" /></a>
                        </div>
                        <p>&copy;Copyright 2025. Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;