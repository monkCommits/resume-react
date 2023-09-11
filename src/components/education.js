export default function Education({education}){
    return(
        <>
        <h2>Education</h2>
        <ul>
            <li>10th : {education[0]}</li>
            <li>12th : {education[1]}</li>
            <li>Undergrad : {education[2]}</li>
        </ul>
        </>
    )
}