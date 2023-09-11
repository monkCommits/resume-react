export default function Skills({skills}){
   
    return(
        <>
        <h2>Skills</h2>
        <ul>
            
            {skills.map(value=><li>{value}</li>)}
        </ul>
        </>
    )
}