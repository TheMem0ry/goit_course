import React from 'react'

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar__photo-container'>
				<img
					src='https://github.com/TheMem0ry/goit_course/blob/Master/src/styles/img/photo.png?raw=true'
					alt='Sidebar photo'
					className='sidebar__photo'
				/>
			</div>
			<div className='sidebar__info-container'>
				<h1 className='sidebar__heading'>Contacts</h1>
				<ul className='sidebar__contacts'>
					<li className='sidebar__item'>
						<a className='sidebar__link' href='#'>
							<span>c:</span>+380 95 783 47 97
						</a>
					</li>
					<li className='sidebar__item'>
						<a className='sidebar__link' href='#'>
							<span>e:</span>i.koretskyi.maksym@gmail.com
						</a>
					</li>
				</ul>
				<h1 className='sidebar__heading'>Tech Skills</h1>
				<ul className='sidebar__tech-skills'>
					<li className='sidebar__item'>HTML5</li>
					<li className='sidebar__item'>CSS3</li>
					<li className='sidebar__item'>GIT</li>
					<li className='sidebar__item'>WebPack</li>
					<li className='sidebar__item'>JavaScript</li>
					<li className='sidebar__item'>React.js</li>
					<li className='sidebar__item'>Node.js</li>
				</ul>
				<h1 className='sidebar__heading'>Soft Skills</h1>
				<ul className='sidebar__soft-skills'>
					<li className='sidebar__item'>Scrum</li>
					<li className='sidebar__item'>Agile</li>
					<li className='sidebar__item'>GDT</li>
					<li className='sidebar__item'>Teamwork</li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar
