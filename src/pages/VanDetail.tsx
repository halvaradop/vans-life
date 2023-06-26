import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Button } from "../components/Button"
import { getAllVans } from "../service/getAllVans"
import { Van, Variant } from "../interfaces/types"
import arrowLeft from "../assets/arrow-left.svg"

const colorCategoryVans: Variant = {
    "simple": "orange-200",
    "rugged": "cyan-100",
    "luxury": "black-100",
}
const colorCategoryVansDefault = "orange-200"

const VanDetail = () => {

    const { id } = useParams <string> ()
    const [vanDetail, setVanList] = useState <Van | null> (null)

    useEffect(() => {
        getAllVans()
            .then(findVan)
            .then(setVanList)
    }, [id])
    

    const findVan = (array: Array <Van>): Van | null => {
        return array.find(van => van.id === id) ?? null
    }

    return (
        <main className="w-full pt-8 bg-beige">
            {vanDetail ? (
                <section className="w-11/12 mx-auto mb-20">
                    <Button className="flex items-center justify-center gap-x-3" color="black-200" size="base2">
                        <img src={arrowLeft} alt="icon arrow left" />
                        <Link to="/vans">Back to all vans</Link>
                    </Button>
                    <article className="text-black">
                        <img className="mt-10 mb-8 w-full rounded-lg" src={vanDetail.img} alt="image of a van" />
                        <Button className="pointer-events-none" children={vanDetail.category} color={colorCategoryVans[vanDetail.category] ?? colorCategoryVansDefault} size="base" />
                        <h1 className="mt-3 text-2xl font-bold">{vanDetail.title}</h1>
                        <div className="my-2 flex items-center text-lg font-bold">
                            <h3 className="">{vanDetail.price}</h3>
                            <span>/ day</span>
                        </div>
                        <p className="mb-4 text-base">{vanDetail.description}</p>
                        <Button className="w-full" color="orange-400" size="base">
                            Rent this van
                        </Button>
                    </article>
                </section>
            ) : <h2>Loading</h2>}
        </main>
    )
}

export { VanDetail }