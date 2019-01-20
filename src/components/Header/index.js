import React, {Component} from 'react';
import './style.css';

function Header(props){
	return(
		<section className="Header">
			<h1 className="Header_Title">
				{props.title}
			</h1>
			<div className="Header_Subtitle">
				<h2 className="HomeSubtitle">
					{props.homeSubtitle}
				</h2>
				<h2 className="HomeMiddleSubtitle">
					{props.middleSubtitle}
				</h2>
			</div>
		</section>	
	);
}

export default Header;