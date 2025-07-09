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
                    <h1> {'H'}<span className='wrap'> Software Engineer</span></h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio eius consequatur, esse voluptatum non quisquam nesciunt accusantium eligendi aliquid vitae officia dolorum. Placeat culpa dolorum animi nihil dicta accusantium.</p>
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