import React from 'react'

const ContactItem = ({ contact }) => {
	return (
		<li>
			<span>{contact.icon}</span>
			<a href={contact.href}>{contact.value}</a>
		</li>
	)
}

export default ContactItem
