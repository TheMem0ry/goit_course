import React from 'react'

const About = ({ content }) => {
	return (
		<div className='about'>
			<h2>{content.position}</h2>
			<h1>{content.name}</h1>
			<p>{content.description}</p>
		</div>
	)
}

export default About
