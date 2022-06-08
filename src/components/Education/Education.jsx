import React from 'react'

const Education = ({ data, children }) => {
	return (
		<div>
			<h3>{children}</h3>
			<h4>{data.university}</h4>
			<h5>{data.faculty}</h5>
			<h5>
				<span>{data.date}</span>
				<span>{data.country}</span>
			</h5>
		</div>
	)
}

export default Education
