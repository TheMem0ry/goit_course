import React from 'react'

const ResponsibilityList = ({ responsibilities }) => {
	return (
		<ul>
			{Object.keys(responsibilities).map(resp => {
				return <li>{responsibilities[resp]}</li>
			})}
		</ul>
	)
}

export default ResponsibilityList
