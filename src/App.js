import './App.scss'

function App() {
	return (
		<div className='App'>
			<div className='sidebar'>
				<div className='sidebar__photo-container'>
					<img
						src='/src/styles/img/photo.png'
						alt='Sidebar photo'
						className='sidebar__photo'
					/>
				</div>
				<div className='sidebar__info-container'>
					<ul className='sidebar__contacts'>
						<h1 className='sidebar__heading'>Contacts</h1>
						<li className='sidebar__link'>
							<a href='#'>
								<span>c:</span>+380 95 783 47 97
							</a>
						</li>
						<li className='sidebar__link'>
							<a href='#'>
								<span>e:</span>i.koretskyi.maksym@gmail.com
							</a>
						</li>
					</ul>
					<ul className='sidebar__tech-skills'>
						<h1 className='sidebar__heading'>Tech Skills</h1>
						<li className='sidebar__link'>
							<a href='#'>HTML5</a>
						</li>
						<li className='sidebar__link'>
							<a href='#'>CSS3</a>
						</li>
						<li className='sidebar__link'>
							<a href='#'>GIT</a>
						</li>
						<li className='sidebar__link'>
							<a href='#'>WebPack</a>
						</li>
						<li className='sidebar__link'>
							<a href='#'>JavaScript</a>
						</li>
						<li className='sidebar__link'>
							<a href='#'>React.js</a>
						</li>
						<li className='sidebar__link'>
							<a href='#'>Node.js</a>
						</li>
					</ul>
					<ul className='sidebar__soft-skills'>
						<h1 className='sidebar__heading'>Soft Skills</h1>
						<li className='sidebar__link'>
							<a href='#'>Scrum</a>
						</li>
						<li className='sidebar__link'>
							<a href='#'>Agile</a>
						</li>
						<li className='sidebar__link'>
							<a href='#'>GDT</a>
						</li>
						<li className='sidebar__link'>
							<a href='#'>Teamwork</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default App
