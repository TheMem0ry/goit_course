import React from 'react'

const WorkExperienceItem = () => {
	return (
		<div className='work-experience__item-wrapper'>
			<h1 className='heading work-experience__heading'>Work Experience</h1>
			<h3 className='work-experience__position'>
				Front-End Developer <span>Freelance</span>
			</h3>
			<h5 className='work-experience__date'>
				<span className='work-experience__date--time'>
					September 2019 - up to now
				</span>
				<span className='work-experience__date--place'>Country</span>
			</h5>
			<ul className='work-experience__list'>
				<li className='work-experience__list-item'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</li>
				<li className='work-experience__list-item'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</li>
				<li className='work-experience__list-item'>
					<p>Risus commodo viverra maecenas.</p>
				</li>
				<li className='work-experience__list-item'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod.
					</p>
				</li>
			</ul>
		</div>
	)
}
export default WorkExperienceItem
