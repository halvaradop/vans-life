import { NavLink, Outlet } from "react-router-dom"
import { WidthLayout } from "./WidthLayout"
import { NavLinkClassName } from "../interfaces/types"



const activeLink = ({ isActive }: NavLinkClassName ): string | undefined => {
    return isActive ? "text-black font-bold border-b-2 border-black" : ""
}

const HostLayout = () => {
    return (
        <main className="w-full min-h-main pt-8 pb-10 flex flex-col bg-beige">     
            <WidthLayout className="pb-9">
                <ul className="flex items-center justify-start gap-x-4">
                    <li className="text-gray text-lg font-medium">
                        <NavLink to="" className={activeLink} end>Dashboard</NavLink>
                    </li>
                    <li className="text-gray text-lg font-medium">
                        <NavLink to="income" className={activeLink}>Income</NavLink>
                    </li>
                    <li className="text-gray text-lg font-medium">
                        <NavLink to="vans" className={activeLink}>Vans</NavLink>
                    </li>
                    <li className="text-gray text-lg font-medium">
                        <NavLink to="reviews" className={activeLink}>Reviews</NavLink>
                    </li>
                </ul>
            </WidthLayout>         
            <Outlet />   
        </main>
    )
}

export { HostLayout }