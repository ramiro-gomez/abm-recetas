import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, Nav, Navbar } from 'react-bootstrap';
import './Header.scss';

const Header: React.FC = () => (
	<header className="py-3 sticky-top bg-white">
		<Navbar className="container" expand="md">
			<Navbar.Brand href="/#">
				<img src="https://template63701.motopreview.com/mt-demo/63700/63701/mt-content/uploads/2017/05/mt-0975-logo.png" alt="logo" />
				<h1 className="visually-hidden">Quick Food</h1>
			</Navbar.Brand>
			<Navbar.Toggle className="text-black border-0 shadow-none" aria-controls="basic-navbar-nav">
				<FontAwesomeIcon icon={faBars} size="lg" />
			</Navbar.Toggle>
			<Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
				<Nav as="ul" className="header__nav-list">
					<Dropdown as="li" className="header__nav-item">
						<Dropdown.Toggle as="button" className="header__nav-link header__nav-link--dropdown">MENU</Dropdown.Toggle>
						<Dropdown.Menu as="ul" className="header__dropdown-list">
							<li><a href="/#" className="header__dropdown-link">ITEM</a></li>
							<li><a href="/#" className="header__dropdown-link">ITEM</a></li>
							<li><a href="/#" className="header__dropdown-link">ITEM</a></li>
						</Dropdown.Menu>
					</Dropdown>
					<li className="header__nav-item"><Nav.Link className="header__nav-link" href="/#">BLOG</Nav.Link></li>
					<li className="header__nav-item"><Nav.Link className="header__nav-link" href="/#">CONTACTS</Nav.Link></li>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</header>
);

export default Header;
