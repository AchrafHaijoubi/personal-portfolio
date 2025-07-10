import {Container, Row, Col}  from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import HeaderImage from '../assets/img/header-img.svg';

export const Banner = ()=>{
    return (
        <section className='banner' id='home'>
            <Container >
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                    <span className='tagline'> Welcome to my personal portfolio</span>
                    <h1> {"Hi I'm Achraf"}<span className='wrap'> Software Engineer</span></h1>
                    <p>
                        Hello <span role="img" aria-label="waving hand">👋</span>, I’m a Software and Machine Learning Engineer currently based in Canada. Passionate about artificial intelligence, machine learning, and deep learning, I specialize in designing, building, and deploying intelligent systems that solve real-world problems using cutting-edge technologies.  
                        <br /><br />
                        Feel free to explore my portfolio to learn more about my background and the projects I’ve worked on. And don’t hesitate to reach out through the “Let’s Connect” section — I’m always open to exciting collaborations and new opportunities!
                    </p>
                    <button> Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImage} alt="" />
                    </Col>                    
                </Row>
            </Container>
        </section>
    );
}