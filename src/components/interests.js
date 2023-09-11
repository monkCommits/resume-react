export default function Interest({interest}){
    return(
        <>
        <h2>Interests</h2>
        <ul>
            {interest.map(value=><li>{value}</li>)}
        </ul>
        </>
    )
}