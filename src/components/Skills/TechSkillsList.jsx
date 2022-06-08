import React from 'react'
import TechSkillItem from './TechSkillItem'

const TechSkillsList = ({ content }) => {
	return (
		<div className='techSkillsList'>
			<h1>Tech Skills</h1>
			<ul>
				{content.techSkills.map(skill => (
					<TechSkillItem skill={skill}></TechSkillItem>
				))}
			</ul>
		</div>
	)
}

export default TechSkillsList
