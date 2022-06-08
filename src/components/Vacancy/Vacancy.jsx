import React from 'react'
import ResponsibilityList from './ResponsibilityList'

const Vacancy = ({ vacancies, children }) => {
	// Object.keys(vacancies).map(vacancy => {
	// 	console.log(vacancies[vacancy])
	// })

	return (
		<div>
			<h3>{children}</h3>

			{Object.keys(vacancies).map(vacancy => {
				return (
					<div className='vacancy'>
						<h4 className='position'>
							{vacancies[vacancy].position}
							<span className='company'>{vacancies[vacancy].company}</span>
						</h4>
						<h5 className='work-date'>
							<span>{vacancies[vacancy].workDate}</span>
							<span>{vacancies[vacancy].country}</span>
						</h5>
						<ResponsibilityList
							responsibilities={vacancies[vacancy].responsibilities}
						></ResponsibilityList>
					</div>
				)
			})}
		</div>
	)
}
export default Vacancy
