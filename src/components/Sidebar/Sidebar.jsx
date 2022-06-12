import React from 'react'
import ContactList from './contacts/ContactList'
import SoftSkillsList from './softSkills/SoftSkillsList'
import TechSkillsList from './techSkills/TechSkillsList'
import styles from './Sidebar.module.scss'

const Sidebar = ({ content }) => {
	return (
		<div className={styles.sidebar}>
			<img src={content.photo.src} alt={content.photo.alt}></img>
			<ContactList content={content}></ContactList>
			<TechSkillsList content={content}></TechSkillsList>
			<SoftSkillsList content={content}></SoftSkillsList>
		</div>
	)
}

export default Sidebar
