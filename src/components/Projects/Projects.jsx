import React from 'react'

const Projects = ({ projects }) => {
	return (
		<div>
			<h1>Projects</h1>
			<ul>
				{Object.keys(projects).map(key => {
					return (
						<li>
							<a>{projects[key].url}</a>
							{projects[key].technology}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Projects
