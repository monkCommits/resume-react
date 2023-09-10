import './App.css';
import Resume from './components/resume'
import Interest from './components/interests'
import Skills from './components/skills'
import Education from './components/education';
function App() {
    let obj ={
      resume : ["MonK"],
      interest : ["football","gym","finance"],
      skills : ["HTML CSS", "Javascript", "React"],
      education : ["APS","AFS","NHCE"]
    }
  return (
    <>
    <Resume
    name = {obj.resume}
    />
    <Interest
    name ={obj.interest }/>
    <Skills
    skills ={obj.skills}
    />
    <Education/>
    </>
  );
}

export default App;
