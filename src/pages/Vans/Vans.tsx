import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Button } from "../../components/Button"
import { CardVans } from "../../components/CardVans"
import { KeyPair, Van } from "../../interfaces/types"
import { getAllVans } from "../../service/getAllVans"


const Vans = () => {
    const [loading, setLoading] = useState(false)
    const [vanList, setVanList] = useState <Array <Van>> ([])
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    useEffect(() => {
        const consumerVans = async () => {
            setLoading(true)
            setTimeout(async () => {
                const data = await getAllVans()
                setVanList(data)
                setLoading(false)
            }, 1200)
        }
        consumerVans()
    }, [])


    const filterParams = (van: Van): boolean => {
        return (!typeFilter || typeFilter === van.category)
    }

    const handleFilterParams: KeyPair = (key, value) => {
        if(value === typeFilter) return
        setSearchParams(search => {
            if(!value)  {
                search.delete(key)
            } else {
                search.set(key, value)
            }
            return search
        })
    }


    return (
        <main className="w-full min-h-main bg-beige">
            <div className="w-11/12 mx-auto pt-8 pb-20">
                <h1 className="text-3xl font-bold">Explore our van options</h1>
                <div className="mt-5 mb-16 grid grid-cols-2 gap-x-5 gap-y-3">
                    <Button className={typeFilter === "simple" ? "simple-active" : ""} children="Simple" color="orange-100" size="md" onClick={() => handleFilterParams("type", "simple" )} />
                    <Button className={typeFilter === "luxury" ? "luxury-active" : ""} children="Luxury" color="orange-100" size="md" onClick={() => handleFilterParams("type","luxury" )} />  
                    <Button className={typeFilter === "rugged" ? "rugged-active" : ""} children="Rugged" color="orange-100" size="md" onClick={() => handleFilterParams("type", "rugged" )} />
                    { typeFilter ? <Button children="Clear filters" color="gray-100" size="base2" onClick={() => handleFilterParams("type", null)} /> : null}
                </div>
                <section className="grid grid-cols-2 gap-5">
                    { !loading ? (
                        vanList.filter(filterParams).map(({ id, img, title, price, category }, key) => (
                            <CardVans key={key} index={id} img={img} title={title} price={price} textButton={category} searchParams={searchParams}  />
                        ))
                    ) : <span className="text-black text-2xl font-bold italic text-center only:col-span-2">Loading...</span> }
                </section>
            </div>
        </main>
    )
}

export { Vans }