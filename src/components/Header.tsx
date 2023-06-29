import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="w-full bg-beige">
            <nav className="w-11/12 h-20 mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-super tracking-tighter">
                    <Link to="/"># NAVLIFE</Link>
                </h1>
                <ul className="flex gap-x-4 text-gray text-base font-medium">                
                    <li><NavLink to="/host" className={({ isActive }) => isActive ? "border-b-2 border-gray" : "" }>Host</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "border-b-2 border-gray" : "" }>About</NavLink></li>
                    <li><NavLink to="/vans" className={({ isActive }) => isActive ? "border-b-2 border-gray" : "" }>Vans</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }