import React from 'react'
import SoftSkillItem from './SoftSkillItem'

const SoftSkillsList = ({ content }) => {
	return (
		<div className='softSkillsList'>
			<h1>Soft Skills</h1>
			<ul>
				{content.softSkills.map(skill => (
					<SoftSkillItem skill={skill} />
				))}
			</ul>
		</div>
	)
}

export default SoftSkillsList
