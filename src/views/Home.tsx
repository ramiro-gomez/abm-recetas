import React from 'react';
import {
	Carousel, Col, Container, Row,
} from 'react-bootstrap';
import Header from '../components/Header';
import HomeCard from '../components/HomeCard';
import './Home.scss';

const Home = () => (
	<>
		<Header />
		<Carousel as="section" fade indicators={false}>
			<Carousel.Item className="home-carousel__slide--1">
				<img
					className="d-block w-100 home-carousel__img"
					src="https://template63701.motopreview.com/mt-demo/63700/63701/mt-content/uploads/2017/05/mt-0975-home-slide1.jpg"
					alt="first slide"
				/>
				<Carousel.Caption>
					<Row className="g-0 w-100 h-100 align-items-center">
						<Col md={6}>
							<h3 className="home-carousel__title">
								<span className="home-carousel__title-text home-carousel__title-text--1">PIZZA</span>
								<span className="home-carousel__title-text home-carousel__title-text--2">WITH SEA FOOD</span>
							</h3>
							<a className="home-carousel__button" href="/#">ORDER ONLINE</a>
						</Col>
					</Row>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="home-carousel__slide--2">
				<img
					className="d-block w-100 home-carousel__img"
					src="https://template63701.motopreview.com/mt-demo/63700/63701/mt-content/uploads/2017/05/mt-0975-home-slide2.jpg"
					alt="second slide"
				/>
				<Carousel.Caption>
					<Row className="g-0 w-100 h-100 align-items-center">
						<Col md={6}>
							<h3 className="home-carousel__title">
								<span className="home-carousel__title-text home-carousel__title-text--1">— From Our Chef  —</span>
								<span className="home-carousel__title-text home-carousel__title-text--2">MEET THE</span>
								<span className="home-carousel__title-text home-carousel__title-text--3">LEGEND</span>
								<span className="home-carousel__title-text home-carousel__title-text--4">BURGER CALIFORN</span>
							</h3>
						</Col>
					</Row>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="home-carousel__slide--3">
				<img
					className="d-block w-100 home-carousel__img"
					src="https://template63701.motopreview.com/mt-demo/63700/63701/mt-content/uploads/2017/05/mt-0975-home-slide3.jpg"
					alt="third slide"
				/>
				<Carousel.Caption>
					<Row className="g-0 w-100 h-100 align-items-center">
						<Col md={6}>
							<h3 className="home-carousel__title">
								<span className="home-carousel__title-text home-carousel__title-text--1">HOT STUFF</span>
								<span className="home-carousel__title-text home-carousel__title-text--2">BURGER</span>
								<span className="home-carousel__title-text home-carousel__title-text--3">THE MEXICAN</span>
							</h3>
						</Col>
					</Row>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
		<Container as="section" className="py-4 py-md-5" fluid>
			<Row className="g-4">
				<Col xs={12} md={4}>
					<HomeCard
						srcImg="https://template63701.motopreview.com/mt-demo/63700/63701/mt-content/uploads/2017/05/mt-0975-home-img1.jpg"
						altImg="first card"
						cardTitle="For vegans"
						cardText="Burger + French Fries + Drink"
					/>
				</Col>
				<Col xs={12} md={4}>
					<HomeCard
						srcImg="https://template63701.motopreview.com/mt-demo/63700/63701/mt-content/uploads/2017/05/mt-0975-home-img2.jpg"
						altImg="second card"
						cardTitle="Order Online"
						cardText="Available Every Day 9:00–23:00"
					/>
				</Col>
				<Col xs={12} md={4}>
					<HomeCard
						srcImg="https://template63701.motopreview.com/mt-demo/63700/63701/mt-content/uploads/2017/05/mt-0975-home-img3.jpg"
						altImg="third card"
						cardTitle="Cakes Specials"
						cardText="Every Friday Only $0.99"
					/>
				</Col>
			</Row>
		</Container>
	</>
);

export default Home;
