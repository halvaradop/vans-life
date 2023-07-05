import { useState, useEffect } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import { WidthLayout } from "../../components/WidthLayout"
import { Button } from "../../components/Button"
import { Van, Variant } from "../../interfaces/types"
import { getAllVans } from "../../service/getAllVans"
import arrowLeft from "../../assets/arrow-left.svg"

const colorCategoryVans: Variant = {
    "simple": "orange-200",
    "rugged": "cyan-100",
    "luxury": "black-100",
}
const colorCategoryVansDefault = "orange-200"


const HostVanDetail = () => {

    const { id } = useParams <string> ()
    const [vanDetail, setVanDetail] = useState <Van | null> (null)

    useEffect(() => {
        getAllVans()
            .then(filter)
            .then(setVanDetail)
    }, [])

    const filter = (list: Array <Van> ): Van | null => list.find(van => van.id === id) ?? null

    if(!vanDetail) return <h1>Loading ...</h1>

    return (
        <WidthLayout>
            <Button className="flex items-center justify-center gap-x-3" color="black-200" size="base2">
                <img src={arrowLeft} alt="icon arrow left" />
                <Link to=".." relative="path">Back to all vans</Link>
            </Button>
            <section className="w-full p-4 rounded-lg bg-white">
                <article className="flex items-center gap-x-5">
                    <img className="w-2/6 rounded-md" src={vanDetail.img} alt="picture of a van" />
                    <div className="flex flex-col items-start text-black">
                        <Button className="w-auto" children={vanDetail?.category} color={colorCategoryVans[vanDetail.category] ?? colorCategoryVansDefault} size="sm" />
                        <h1 className="text-xl font-bold">{vanDetail?.title}</h1>
                        <p className="text-lg font-bold">${vanDetail?.price}/<span className="text-base font-medium">day</span></p>
                    </div>
                </article>               
                <nav>
                    <ul className="mt-4 mb-5 flex items-center justify-start gap-x-5">
                        <li><NavLink to="." className={({ isActive }) => isActive ? "border-b-2 border-gray" : "" } end>Details</NavLink></li>
                        <li><NavLink to="pricing" className={({ isActive }) => isActive ? "border-b-2 border-gray" : "" }>Pricing</NavLink></li>
                        <li><NavLink to="photos" className={({ isActive }) => isActive ? "border-b-2 border-gray" : "" }>Photos</NavLink></li>
                    </ul>    
                </nav>          
                <Outlet context={{ vanDetail }}/>  
            </section>
        </WidthLayout>
    )
}


export { HostVanDetail }