import React, {Component} from 'react';
import "./Nav.css"
import {

    Navbar,

    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';

class Navs extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <div className="container">
                <Navbar className="py-3 navbar">
                    <NavbarBrand href="/"> <img src="images/Group%20357.png" alt=""/></NavbarBrand>
                    <img src="images/ic16-menu.svg" onClick={this.handleClick} className="nav-icon d-md-none" alt=""/>

                    <Nav className={this.state.clicked?".nav active":".nav"}>
                        <NavItem>
                            <img src="images/ic16-menu.png" className="nav-icon-black d-md-none" onClick={this.handleClick} alt=""/>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#percent" className=" text-white mx-lg-2 px-lg-2 mx-md-2 px-md-0 ">Услуги</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#work" className=" text-white mx-lg-2 px-lg-2 mx-md-2 px-md-0 ">Как мы
                                работаем</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#rezultat"
                                     className=" text-white mx-lg-2 px-lg-2 mx-md-2 px-md-0 ">Результат</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#order"
                                     className=" text-white mx-lg-2 px-lg-2 mx-md-2 px-md-0 ">Заказать</NavLink>
                        </NavItem>

                    </Nav>


                </Navbar>

            </div>
        );
    };

}

export default Navs;