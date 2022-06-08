import React from 'react'
import Responsibility from './Responsibility'

const Vacancy = ({ vacancies }) => {
	// Object.keys(vacancies).map(vacancy => {
	// 	console.log(vacancies[vacancy])
	// })

	return (
		<div>
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
						<ul className='responsibilities'>
							{Object.keys(vacancies[vacancy].responsibilities).map(
								responsibility => {
									return (
										<Responsibility
											content={vacancies[vacancy].responsibilities}
										></Responsibility>
									)
								}
							)}
						</ul>
					</div>
				)
			})}
		</div>
	)
}
export default Vacancy
