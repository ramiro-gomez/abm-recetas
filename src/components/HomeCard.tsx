import React from 'react';
import { Card } from 'react-bootstrap';
import './HomeCard.scss';

interface Props {
	srcImg: string,
	altImg: string,
	cardTitle: string,
	cardText: string,
}

const HomeCard: React.FC<Props> = ({
	srcImg, altImg, cardTitle, cardText,
}) => (
	<Card className="border-0">
		<Card.Img className="home-card__img" src={srcImg} alt={altImg} />
		<Card.ImgOverlay className="text-white d-flex align-items-end justify-content-center">
			<a href="/#" className="text-white">
				<h3 className="home-card__title">{cardTitle}</h3>
				<p className="home-card__text">{cardText}</p>
			</a>
		</Card.ImgOverlay>
	</Card>
);

export default HomeCard;
