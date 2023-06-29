import { useState, useEffect } from "react"
import { CardListedVan } from "../../components/CardListedVan"
import { WidthLayout } from "../../components/WidthLayout"
import { Van } from "../../interfaces/types"
import { getAllVans } from "../../service/getAllVans"

const HostVans = () => {
    const [vansList, setVansList] = useState <Array <Van> > ([])
    
    useEffect(() => {
        getAllVans()
            .then(filterUserId)
            .then(setVansList)
    }, [])

    const filterUserId = (list: Array <Van> ) => list.filter(van => van.hostId === "123")

    return (
        <WidthLayout>
            <h1 className="mb-6 text-black text-3xl font-bold">Your listed vans</h1>
            <section className="flex flex-col gap-y-5">
                {vansList.length > 0? (
                    vansList.map(({ id, title, price, img }, key) => (
                        <CardListedVan key={key} index={id} img={img} title={title} price={price} />
                    ))
                ) : <span>Your List Is Empty</span>}
            </section>
        </WidthLayout>
    )
}

export { HostVans }