import { Container, Row, Col } from "react-bootstrap";
import header from '../assets/img/header-img.svg';
import {useState, useEffect} from 'react';
import TrackVisibility from "react-on-screen";
import "animate.css";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Desarrollador Web", "Desarrollador FullStack", "Desarrollador de Software"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text, delta])

    const tick = () => {
        let l = loopNum % toRotate.length;
        let fullText = toRotate[l];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({IsVisible})  => 
                            <div className={IsVisible ? "animated_animated animate_fadeIn" : ""}>
                            <span className="tagline">
                                Bienvenido a mi portafolio
                            </span>
                            <h1>{`Hola, soy Juan Aranda `}<span className="wrap">{text}</span></h1>
                            <p>Soy un analista y desarrollador de software en etapa lectiva en 
                                el Servicio Nacional de Aprendizaje (SENA)</p>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={header} alt="Banner" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;