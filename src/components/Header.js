import React from 'react';
import "./header.css"
import Navs from "./nav/Navs";
import {Col, Container, Row} from "reactstrap";

const Header = () => {
    return (
        <div className="header">
            <img className="header-img-right" src="images/Ellipse.png" alt=""/>
            <img className="header-img-left" src="images/Ellipse%20(1).png" alt=""/>
            <Navs/>
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <div className='ccc-1'>
                            <h1 className='text-white   '>Разаработка сайтов <br/>
                                и мобильных приложений</h1>
                            <h6 className='text-white mt-5 ccc-18'>Помогаем бизнесу увеличить прибыль <br/>
                                с помощью digital-инструментов</h6>
                        </div>
                        <div className='ccc-3'>
                            <button className='position-relative py-3 px-4'><h5>Обсудить проект</h5></button>
                        </div>
                    </Col>
                    <Col md={6} sm={12} className="z-1">
                        <div className='ccc-2'>
                            <img src="/images/Group%20112.png" alt="" className='w-100'/>
                        </div>

                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Header;