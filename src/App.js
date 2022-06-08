import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Vacancy from './components/Vacancy/Vacancy'
import Education from './components/Education/Education'

const aboutData = {
	name: 'Maksym Koretskyi',
	position: 'Front-End Developer',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
}

const vacanciesData = {
	firstVacancy: {
		position: 'Front-End Developer',
		company: 'Freelance',
		workDate: 'September 2019 - up to now',
		country: 'Ukraine',
		responsibilities: {
			1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			3: 'Risus commodo viverra maecenas.',
			4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		},
	},
	secondVacancy: {
		position: 'Manager',
		company: 'Roga & Kopyta New',
		workDate: 'March 2015 - October 2018',
		country: 'Ukraine',
		responsibilities: {
			1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua.',
			2: 'Quis ipsum suspendisse ultrices gravida.',
			3: 'Risus commodo viverra maecenas.',
		},
	},
	thirdVacancy: {
		position: 'Manager',
		company: 'Roga & Kopyta LLC ',
		workDate: 'June 2014 - February 2015',
		country: 'Ukraine',
		responsibilities: {
			1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			2: 'Quis ipsum suspendisse ultrices gravida.',
			3: 'Risus commodo viverra maecenas.',
		},
	},
}

const sidebarData = {
	photo: {
		src: 'https://github.com/TheMem0ry/goit_course/blob/Master/src/styles/img/photo.png?raw=true',
		alt: 'Sidebar Photo',
	},
	contactsArr: [
		{
			title: 'cell',
			icon: 'C:',
			value: '+380 95 783 47 97',
			href: 'tel:+380957834797',
		},
		{
			title: 'email',
			icon: 'E:',
			value: 'i.koretskyi.maksym@gmail.com',
			href: 'mailto:i.koretskyi.maksym@gmail.com',
		},
	],
	techSkills: [
		'HTML5',
		'CSS3',
		'GIT',
		'WebPack',
		'JavaScript',
		'Node.js',
		'React.js',
	],
	softSkills: ['Scrum', 'Agile', 'GTD', 'Teamwork'],
}

const projectsData = {
	first: {
		url: 'https://hellenglish.goit.global/',
		technology: '[ HTML5, CSS3 ]',
	},
	second: {
		url: 'https://cryptohub.goit.global/',
		technology: '[ JavaScript ]',
	},
	third: {
		url: 'https://kidslike.goit.global/',
		technology: '[ React.js, Node.js ]',
	},
}

const educationData = {
	university: 'National Mining University',
	faculty: 'Faculty of Information Technologies',
	date: 'Sep 2019 - Sep 2019',
	country: 'Ukraine',
}

function App() {
	return (
		<div className='App'>
			<Sidebar content={sidebarData}></Sidebar>
			<main style={{ backgroundColor: '#cece', width: '100%' }}>
				<About content={aboutData}></About>
				<Projects projects={projectsData}>Projects</Projects>
				<Vacancy vacancies={vacanciesData}>Work Experience</Vacancy>
				<Education data={educationData}>Education</Education>
			</main>
		</div>
	)
}

export default App
