
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

import CarouselOneImg from '../assets/carousel-1.png';
import CarouselTwoImg from '../assets/carousel-2.png';
import CarouselThreeImg from '../assets/carousel-3.png';

import CompanyOneImg from '../assets/pic-1.png'
import CompanyTwoImg from '../assets/pic-2.png'
import CompanyThreeImg from '../assets/pic-3.png'
import CompanyFourImg from '../assets/pic-4.png'
import CompanyFiveImg from '../assets/pic-5.png'
import { useNavigate } from 'react-router-dom';


export default function Home({user}){
    const navigate = useNavigate();

    const handleCTAClick = ()=> {
        if (user) {
          navigate('/products');
        } else{
            navigate('/login')
        }
    }


    return (
        <div className='home-container'>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div style={{padding:140,marginLeft:'50px'}}>
                            <h2 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h2>
                            <h2 style={{color:'#216ad9',fontWeight:700}}><i>STYLE</i></h2>
                            <h5 style={{marginBottom:20}}>Shop with latest trendy products</h5>
                            <div style={{marginBottom: 20}}>
                            <Button style={{width:200}} onClick={handleCTAClick}>Browse Products</Button>
                            </div>
                            <div>
                                <h5>Products available from : </h5>
                                <img src={CompanyOneImg} style={{height: 50}} />
                                <img src={CompanyTwoImg} style={{height: 50}} />
                                <img src={CompanyThreeImg} style={{height: 50}} />
                                <img src={CompanyFourImg} style={{height: 50}} />
                                <img src={CompanyFiveImg} style={{height: 30}} />
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <img src={CarouselOneImg}  style={{height:'80vh'}} />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div style={{padding:140,marginLeft:'50px'}}>
                        <h2 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h2>
                            <h2 style={{color:'#216ad9',fontWeight:700}}><i>STYLE</i></h2>
                            <h5 style={{marginBottom:20}}>Shop with latest trendy products</h5>
                            <div style={{marginBottom: 20}}>
                            <Button style={{width:200}}  onClick={handleCTAClick}>Browse Products</Button>
                            </div>
                            <div>
                                <h5>Products available from : </h5>
                                <img src={CompanyOneImg} style={{height: 50}} />
                                <img src={CompanyTwoImg} style={{height: 50}} />
                                <img src={CompanyThreeImg} style={{height: 50}} />
                                <img src={CompanyFourImg} style={{height: 50}} />
                                <img src={CompanyFiveImg} style={{height: 30}} />
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <img src={CarouselTwoImg}  style={{height:'80vh'}} />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                        <div style={{padding:140,marginLeft:'50px'}}>
                        <h2 style={{fontWeight:700}}><i>SHOP WITH UTMOST</i></h2>
                            <h2 style={{color:'#216ad9',fontWeight:700}}><i>DISCOUNTS</i></h2>
                            <h5 style={{marginBottom:20}}>Shop with latest trendy products</h5>
                            <div style={{marginBottom: 20}}>
                            <Button style={{width:200}}  onClick={handleCTAClick}>Browse Products</Button>
                            </div>
                            <div>
                                <h5>Products available from : </h5>
                                <img src={CompanyOneImg} style={{height: 50}} />
                                <img src={CompanyTwoImg} style={{height: 50}} />
                                <img src={CompanyThreeImg} style={{height: 50}} />
                                <img src={CompanyFourImg} style={{height: 50}} />
                                <img src={CompanyFiveImg} style={{height: 30}} />
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <img src={CarouselThreeImg} style={{height:'80vh'}}/>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}