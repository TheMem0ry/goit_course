import React from 'react'

const Projects = ({ projects, children }) => {
	return (
		<div>
			<h3>{children}</h3>
			<ul>
				{Object.keys(projects).map(key => {
					return (
						<li key={projects[key].url}>
							<a href={projects[key].url}>{projects[key].url}</a>
							{projects[key].technology}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Projects
