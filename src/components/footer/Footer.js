import React from 'react';
import './footer.css'
import {Container} from "reactstrap";

const Footer = () => {
    return (
        <div className='footer'>
          <div className="bg-footer">
              <div className='container'>
                  <div className='text-white position-relative ccc-16 d-lg-flex py-lg-4 justify-content-between d-sm-block text-sm-center py-sm-2'>
                      <a href="#percent" className="d-block text-center text-decoration-none text-white">Услуги</a>
                      <a href="#work" className="d-block text-center text-decoration-none text-white">Как мы работаем</a>
                      <a href="#rezultat" className="d-block text-center text-decoration-none text-white">Результат</a>
                      <a href="#order" className="d-block text-center text-decoration-none text-white">Заказать</a>


                  </div>


              </div>
          </div>


        </div>
    );
};

export default Footer;