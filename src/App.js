import './App.css';
import Resume from './components/resume'
import Interest from './components/interests'
import Skills from './components/skills'
import Education from './components/education';
function App() {
    let obj ={
      resume : ["MonK"],
      interest : ["football","gym","finance"],
      skills : ["JS","React","CSS"],
      education : ["APS","AFS","NHCE"],
    }
  return (
    <>
    
    {obj.resume.length!==0?<Resume name={obj.resume}></Resume>:null}
    
    {obj.interest.length!==0?<Interest interest ={obj.interest}></Interest>:null}
    {obj.skills.length!==0?<Skills skills={obj.skills}/>: null }
    <Education
    education={obj.education}
    />

    </>
  );
}

export default App;
