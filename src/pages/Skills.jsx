import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import php from '../assets/img/php.png';
import visual from '../assets/img/visual.png';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import laravel from '../assets/img/laravel.png';
import sql from '../assets/img/sql.png';
import colorSharp from '../assets/img/color-sharp.png';
import git from '../assets/img/git.png';
import boot from '../assets/img/boot.png';


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Habilidades y herramientas
                            </h2>
                            <p>Estas son algunas de mis habilidades y herramientas que uso como programador, 
                                estoy en proceso de aprender nuevas tecnologías, por ejemplo React.js(Framework), JavaScript y Python.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={php} alt="" />
                                    <h5>PHP</h5>
                                </div>

                                <div className="item">
                                    <img src={sql} alt="" />
                                    <h5>Bases de datos SQL</h5>
                                </div>

                                <div className="item">
                                    <img src={laravel} alt="" />
                                    <h5>Framework Laravel</h5>
                                </div>

                                <div className="item">
                                    <img src={visual} alt="" />
                                    <h5>Visual Studio Code</h5>
                                </div>

                                <div className="item">
                                    <img src={boot} alt="" />
                                    <h5>Bootstrap</h5>
                                </div>

                                <div className="item">
                                    <img src={git} alt="" />
                                    <h5>Git</h5>
                                </div>


                                <div className="item">
                                    <img src={html} alt="" />
                                    <h5>HTML</h5>
                                </div>

                                <div className="item">
                                    <img src={css} alt="" />
                                    <h5>CSS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}

export default Skills;