import React, { Component, Fragment } from 'react';


function CharListElement(props) {

	const {id, status, image, name, species, gender,origin, location} = props.hero;

  return (
		<article className="CharacterCard__Wrapper">
		<div data="card header" className="CharacterCard__ImgWrapper">
			<div className="card-image">
				<img src={image} alt="Davin"/>
			</div>
			<div className="CharacterCard__Title">
				<h2 className="CharacterCard__Name">{name}</h2>
				<p className="CharacterCard__Description">id: {id}</p>
			</div>
		</div>
		<div data="card info" className="CharacterCard__InfoWrapper">
			<div className="CharacterCard__TextWrapper">
				<span>STATUS</span>
				<p>{status}</p>
			</div>
			<div className="CharacterCard__TextWrapper">
				<span>SPECIES</span>
				<p>{species}</p>
			</div>
			<div className="CharacterCard__TextWrapper">
				<span>GENDER</span>
				<p>{gender}</p>
			</div>
			<div className="CharacterCard__TextWrapper">
				<span>ORIGIN</span>
				<p>{origin.name}</p>
			</div>
			<div className="CharacterCard__TextWrapper">
				<span>LAST LOCATION</span>
				<p>{location.name}</p>	
			</div>
			<div className="CharacterCard__TextWrapper">
				<a href={`/character/${id}`}>Show more</a>
			</div>
		</div>
	</article>
    );
}

export default CharListElement;
