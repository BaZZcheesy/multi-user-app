import MainNav from './MainNavigation'

const Person = ({person}) => {
    const hobbies = person.hobbies.map(hob =>
        <li>{hob}</li>
    )

    return <>
        <p>Name: {person.name}</p>
        <ol>
            {hobbies}
        </ol>
    </>
}

function Demo({p1, person, fun}) {
    return <>
        <h1>Hello Chääs</h1>
        <p>Parameter empfangen: {p1} </p>
        <Person person={person} />
        <button onClick={fun}>Click Me</button>
    </>
}

export default Demo;