import { NavLink, Outlet } from "react-router-dom"
import { WidthLayout } from "../components/WidthLayout"

const HostLinks = ["Dashboard", "Income", "Vans", "Reviews"]

const Host = () => {
    return (
        <main className="w-full pt-8 bg-beige">     
            <WidthLayout className="pb-9">
                <ul className="flex items-center justify-start gap-x-4">
                    {HostLinks.map((link, key) => (
                        <li className="text-gray text-lg font-medium" key={key}>
                            <NavLink to={link.toLowerCase()} className={({ isActive }) => isActive? "text-black font-bold border-b-2 border-black" : "" }>{link}</NavLink>
                        </li>
                    ))}
                </ul>
            </WidthLayout>         
            <Outlet />   
        </main>
    )
}

export { Host }