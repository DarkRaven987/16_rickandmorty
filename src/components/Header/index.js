import React, {Component} from 'react';
import './style.css';

function Header(){
	return(
		<section className="Header">
			<h1 className="Header_Title">
				the rick and morty api
			</h1>
			<div className="Header_Subtitle">
				<h2 className="HomeSubtitle">
					hey, did you ever want to hold a terry fold?
				</h2>
				<h2 className="HomeMiddleSubtitle">
					i got one right here, grab my terry flap     
				</h2>
			</div>
		</section>	
	);
}

export default Header;