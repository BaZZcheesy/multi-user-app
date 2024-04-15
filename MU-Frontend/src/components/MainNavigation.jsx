import { Link } from 'react-router-dom'

const NavMenu = () => {

    return (
        <>
            <nav id="main-nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavMenu;