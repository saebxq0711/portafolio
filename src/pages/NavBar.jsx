import { Container, Navbar, Nav } from "react-bootstrap";
import {useState, useEffect} from 'react';
import logo from '../assets/img/logo.png';
import whats from '../assets/img/whatsapp.svg';
import git from '../assets/img/github.svg';
import linked from '../assets/img/linkedin.svg';
import envelope from '../assets/img/envelope.svg';
import vida from '../assets/cv/Hoja_de_vida_Juan_Aranda.pdf';
import "animate.css";
import { BrowserRouter as Router} from "react-router-dom";



const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const OnScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', OnScroll);

        return () => window.removeEventListener('scroll', OnScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar className={scrolled ? "scrolled": ""} expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle> 
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link": "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link": "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link": "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/saebxq0711"><img src={git} alt="Github" /></a>
                            <a href="https://wa.me/qr/M44K3WPTLRUPN1"><img src={whats} alt="Whatsapp" /></a>
                            <a href="https://www.linkedin.com/in/sebastian-aranda-26448535b"><img src={linked} alt="Linkedin" /></a>
                            <a href="mailto:juan.aranda12@soy.sena.edu.co"><img src={envelope} alt="Envelope" /></a>
                        </div>
                        <a href={vida} download> 
                        <button className="vvd"><span>Descargar CV</span></button></a>
                        </span>
                        
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;

