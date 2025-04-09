import { Container, Row, Col } from "react-bootstrap";
import perfil from '../assets/img/perfil.png';
import { useState, useEffect, useCallback } from 'react';
import TrackVisibility from "react-on-screen";
import "animate.css";

// ✅ Mover fuera del componente
const toRotate = ["Desarrollador Web", "Desarrollador FullStack", "Desarrollador de Software"];

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bienvenido a mi portafolio</span>
                  <h1>{`Hola, soy Juan Aranda `}<span className="wrap">{text}</span></h1>
                  <p>Soy un analista y desarrollador de software en etapa lectiva en el Servicio Nacional de Aprendizaje (SENA)</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="perfil" src={perfil} alt="Banner" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
