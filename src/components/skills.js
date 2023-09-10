export default function Skills({skills}){
    let skill1 = skills[0]
    let skill2 = skills[1]
    let skill3 = skills[2]
    return(
        <>
        <h2>Skills</h2>
        <ul>
            <li>{skill1}</li>
            <li>{skill2}</li>
            <li>{skill3}</li>
        </ul>
        </>
    )
}