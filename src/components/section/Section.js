import React, {useState} from 'react';
import './section.css'
import {Card, CardBody, Col, Container, Row} from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Section = () => {
    const [action, setAction] = useState("")
    const [send, setSend] = useState("")

    return (
        <div className='section' id="percent">

            <div className='text-center text-white pt-5'>
                <h1>Услуги</h1>
            </div>

            <Container>
                <Row>
                    <Col md={12} className="d-lg-none d-sm-block">
                        <Carousel>
                            <div>

                                    <Card className='section-card text-start'>

                                        <div className='mt-4 py-3 px-5'>
                                            <h1 className='text-white'>Разработка <br/>
                                                сайтов</h1>
                                            <button className='btn btn-light rounded-pill w-50 mt-3'><h4> Заказать</h4>
                                            </button>
                                        </div>
                                    </Card>

                            </div>
                            <div>

                                    <Card className='section-card text-start'>

                                        <div className='mt-4 py-3 px-5'>
                                            <h1 className='text-white'>
                                                Мобильные приложения<br/></h1>
                                            <button className='btn btn-light rounded-pill w-50 mt-3    '><h4> Подробнее</h4>
                                            </button>
                                        </div>
                                    </Card>

                            </div>
                            <div>

                                    <Card className='section-card text-start'>

                                        <div className='mt-4 py-3 px-5'>
                                            <h1 className='text-white'>Маркетинг продвижение <br/></h1>
                                            <button className='btn btn-light rounded-pill w-50 mt-3    '><h4> Подробнее</h4>
                                            </button>
                                        </div>
                                    </Card>

                            </div>
                            <div>

                                    <Card className='section-card text-start'>

                                        <div className='mt-4 py-3 px-5'>
                                            <h1 className='text-white'>SMM-
                                                продвижение <br/></h1>
                                            <button className='btn btn-light rounded-pill w-50 mt-3    '><h4> Подробнее</h4>
                                            </button>
                                        </div>
                                    </Card>

                            </div>
                            <div>

                                    <Card className='section-card text-start'>

                                        <div className='mt-4 py-3 px-5'>
                                            <h1 className='text-white'>SEO -
                                                оптимизация <br/></h1>
                                            <button className='btn btn-light rounded-pill w-50 mt-3    '><h4> Подробнее</h4>
                                            </button>
                                        </div>
                                    </Card>

                            </div>
                            <div>

                                    <Card className='section-card text-start'>

                                        <div className='mt-4 py-3 px-5'>
                                            <h1 className='text-white'>Брендинг и
                                                айдентика
                                                <br/></h1>
                                            <button className='btn btn-light rounded-pill w-50 mt-3    '><h4> Подробнее</h4>
                                            </button>
                                        </div>
                                    </Card>

                            </div>

                        </Carousel>
                    </Col>
                </Row>

                <Row className='mt-5 d-lg-flex d-sm-none section-head' >
                    <Col md={4}>
                        <Card className='section-card'>

                            <div className='mt-4'>
                                <h1 className='text-white'>Разработка <br/>
                                    сайтов</h1>
                                <button className='btn btn-light rounded-pill w-50 mt-3'><h4> Заказать</h4>
                                </button>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='section-card'>

                            <div className='mt-4'>
                                <h1 className='text-white'>
                                    Мобильные приложения<br/></h1>
                                <button className='btn btn-light rounded-pill w-50 mt-3    '><h4> Подробнее</h4>
                                </button>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='section-card'>

                            <div className='mt-4'>
                                <h1 className='text-white'>Маркетинг продвижение <br/></h1>
                                <button className='btn btn-light rounded-pill w-50 mt-3    '><h4> Подробнее</h4>
                                </button>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='section-card'>

                            <div className='mt-4'>
                                <h1 className='text-white'>SMM-
                                    продвижение <br/></h1>
                                <button className='btn btn-light rounded-pill w-50 mt-3    '><h4> Подробнее</h4>
                                </button>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='section-card'>

                            <div className='mt-4'>
                                <h1 className='text-white'>SEO -
                                    оптимизация <br/></h1>
                                <button className='btn btn-light rounded-pill w-50 mt-3    '><h4> Подробнее</h4>
                                </button>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='section-card'>

                            <div className='mt-4'>
                                <h1 className='text-white'>Брендинг и
                                    айдентика
                                    <br/></h1>
                                <button className='btn btn-light rounded-pill w-50 mt-3    '><h4> Подробнее</h4>
                                </button>
                            </div>
                        </Card>
                    </Col>

                </Row>
                <div id="work" className='text-center text-white  z-2 position-relative ccc-13'>
                    <h1>Как мы работаем </h1>
                </div>
                <Row className='section-row pb-5'>
                    <Col md={6} className='mt-5'>
                        <div className='d-flex'>
                            <img src="/images/Group%20113.png" alt="" className='section-work-img'/>
                            <p className='section-work-text'>Исследование ниши <br/>
                                и стратегия развития</p>
                        </div>
                    </Col>
                    <Col md={6} className='mt-5'>
                        <div className='d-flex'>
                            <img src="/images/Group%20114.png" alt="" className='section-work-img'/>
                            <p className='section-work-text'>Прототипирование UI | UX <br/>
                                дизайна для продукта</p>
                        </div>
                    </Col>
                    <Col md={6} className='mt-5'>
                        <div className='d-flex'>
                            <img src="/images/Group%20115.png" alt="" className='section-work-img'/>
                            <p className='section-work-text'>Анализ конкурентов <br/>
                                и юзабилити тесты</p>
                        </div>
                    </Col>
                    <Col md={6} className='mt-5'>
                        <div className='d-flex'>
                            <img src="/images/Group%20119.png" alt="" className='section-work-img'/>
                            <p className='section-work-text'>Разработка <br/>
                                и верстка</p>
                        </div>
                    </Col>
                    <Col md={6} className='mt-5'>
                        <div className='d-flex'>
                            <img src="/images/Group%20118.png" alt="" className='section-work-img'/>
                            <p className='section-work-text'>Семантическая структура <br/>
                                и оптимизация</p>
                        </div>
                    </Col>
                    <Col md={6} className='mt-5'>
                        <div className='d-flex'>
                            <img src="/images/Group%20120.png" alt="" className='section-work-img'/>
                            <p className='section-work-text'>Финальное тестирование <br/>
                                и запуск продукта</p>
                        </div>
                    </Col>


                </Row>
                <div id="rezultat" className='ccc-14'>
                    <h1>Что даст вашему бизнесу</h1>
                </div>
                <div className=' ccc-15'>
                    <h1>внедрение Digital-инструментов</h1>
                </div>
                <Row className='mt-5'>
                    <Col md={4}>
                        <div className='ccc-7 '>
                            <img src="/images/image%20634.png" alt="" className='ccc-8 '/>
                            <h2 className='text-white'>Автоматизация <br/>
                                бизнес-процессов</h2>

                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='ccc-7 '>
                            <img src="/images/image%20634.png" alt="" className='ccc-8 '/>
                            <h2 className='text-white'>Привлечение <br/>
                                новых клиентов</h2>

                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='ccc-7 '>
                            <img src="/images/image%20634.png" alt="" className='ccc-8 '/>
                            <h2 className='text-white'>Увеличение <br/>
                                прибыли</h2>

                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='ccc-7 '>
                            <img src="/images/image%20634.png" alt="" className='ccc-8 '/>
                            <h2 className='text-white'>Ускорение <br/> принятия решений</h2>

                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='ccc-7 '>
                            <img src="/images/image%20634.png" alt="" className='ccc-8 '/>
                            <h2 className='text-white'>Рост <br/>
                                эффективности</h2>

                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='ccc-7 '>
                            <img src="/images/image%20634.png" alt="" className='ccc-8 '/>
                            <h2 className='text-white'>Повышение <br/>
                                лояльности</h2>

                        </div>
                    </Col>

                </Row>
                <Row id="order" className='ccc-9 '>
                    <Col md={7} sm={12}>
                        <h1 className='text-white ccc-17'>Сколько стоят услуги</h1>
                        <p className='ccc-11'>Цена рассчитывается индивидуально <br/>
                            в зависимости отсложности, объема <br/>
                            и сроков работы. <br/>
                            <br/>
                            Разработчик оценивает временные затраты <br/>
                            по проекту, а аналитики устанавливают <br/>
                            стоимость продукта.</p>
                    </Col>
                    <Col md={5} sm={12} className='p-0'>
                        <Card className=" regstr-card">
                            {action === "login" ?
                                <div className="regster-input">
                                    {send==="send"?
                                        <div>
                                            <div className="text-center my-2">
                                                <img className="success-img" src="images/Success.png" alt=""/>
                                            </div>
                                            <h3 className="text-white px-4">Cпасибо
                                                за вашу заявку!</h3>
                                            <p className="text-white px-4 mb-5">Наш менеджер cкоро
                                                свяжется с вами</p>
                                            <button type="submit" className="btn btn-light w-100 rounded-pill text-success mt-5 py-3">Отправить</button>
                                        </div>:
                                        <div>
                                            <form action="#" method="post">
                                                <input type="text" className="form-control rounded-pill mt-3 py-3"
                                                       placeholder="Ваше имя" required/>
                                                <input type="number" className="form-control rounded-pill mt-3 py-3"
                                                       placeholder="номер телефона" required/>
                                                <button type="submit" className="btn btn-light w-100 rounded-pill send-button py-3"onClick={() => {
                                                    setSend("send")
                                                }}>Отправить</button>
                                            </form>
                                        </div>
                                    }

                                </div>
                                : <div>
                                    <h3 className="text-white">
                                        Получить
                                        бесплатную
                                        консультацию</h3>
                                    <p className="text-white">В рамках консультации уточним необходимую информацию
                                        для анализа вашего проекта</p>
                                    <button className="btn btn-light w-100 rounded-pill accept-button " onClick={() => {
                                        setAction("login")
                                    }}>Получить
                                    </button>
                                </div>}



                        </Card>
                    </Col>
                </Row>

            </Container>


        </div>
    );
};

export default Section;