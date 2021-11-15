import React from 'react';
import {
	Col, Container, Row,
} from 'react-bootstrap';
import './Footer.scss';

const Footer: React.FC = () => (
	<footer className="footer">
		<Container>
			<Row className="g-4">
				<Col xs={12} md={6}>
					<div className="footer__col1-content">
						<a href="/#">
							<img src="https://template63701.motopreview.com/mt-demo/63700/63701/mt-content/uploads/2017/05/mt-0975-logo1.png" alt="logo" />
							<h2 className="visually-hidden">Quick Food</h2>
						</a>
					</div>
				</Col>
				<Col xs={12} md={6}>
					<h2 className="footer__nav-title">OUR MENU</h2>
					<ul className="footer__nav-list list-unstyled">
						<li className="footer__nav-item">
							<a className="footer__nav-link" href="/#">BURGERS</a>
						</li>
						<li className="footer__nav-item">
							<a className="footer__nav-link" href="/#">PIZZAS</a>
						</li>
						<li className="footer__nav-item">
							<a className="footer__nav-link" href="/#">TOASTS</a>
						</li>
						<li className="footer__nav-item">
							<a className="footer__nav-link" href="/#">SALADS</a>
						</li>
						<li className="footer__nav-item">
							<a className="footer__nav-link" href="/#">DRINKS</a>
						</li>
						<li className="footer__nav-item">
							<a className="footer__nav-link" href="/#">DESSERTS</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default Footer;
