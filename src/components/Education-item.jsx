import React from 'react'

const EducationItem = () => {
	return (
		<div className='education__item-wrapper'>
			<h1 className='heading education__heading'>Education</h1>
			<h3 className='education__university'>
				National University of Radioelectronics
			</h3>
			<span className='education__faculty'>Management</span>
			<h5 className='education__date'>
				<span className='education__date--time'>
					September 2009 - June 2014
				</span>
				<span className='education__date--place'>Country</span>
			</h5>
		</div>
	)
}
export default EducationItem
