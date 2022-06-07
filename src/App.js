import './App.scss'
import EducationItem from './components/Education-item'
import GeneralInfo from './components/General-info'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'
import WorkExperienceItem from './components/Work-exp-item'

function App() {
	return (
		<div className='App'>
			<Sidebar></Sidebar>
			<main className='main-content'>
				<GeneralInfo></GeneralInfo>
				<Projects></Projects>
				<WorkExperienceItem></WorkExperienceItem>
				<EducationItem></EducationItem>
			</main>
		</div>
	)
}

export default App
