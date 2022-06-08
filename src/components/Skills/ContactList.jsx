import React from 'react'
import ContactItem from './ContactItem'

const ContactList = ({ content }) => {
	return (
		<div className='contact-list'>
			<h1>Contacts</h1>
			<ul>
				{content.contactsArr.map(contact => (
					<ContactItem contact={contact}></ContactItem>
				))}
			</ul>
		</div>
	)
}

export default ContactList
