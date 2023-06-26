import { Button } from "../components/Button"
import { CardVans } from "../components/CardVans"
import { Van } from "../interfaces/types"

interface VansProps {
    vanList: Array <Van>
}

const Vans = ({ vanList }: VansProps ) => {
    return (
        <main className="w-full bg-beige">
            <div className="w-11/12 mx-auto pt-8 pb-20">
                <h1 className="text-3xl font-bold">Explore our van options</h1>
                <div className="mt-5 mb-16 grid grid-cols-2 gap-x-5 gap-y-3">
                    <Button children="Simple" color="orange-100" size="md" />
                    <Button children="Luxury" color="orange-100" size="md" />
                    <Button children="Rugged" color="orange-100" size="md" />
                    <Button children="Clear filters" color="gray-100" size="base2" />
                </div>
                <section className="grid grid-cols-2 gap-5">
                    {vanList.map(({ img, title, price, category }, key) => (
                        <CardVans key={key} index={key +1} img={img} title={title} price={price} textButton={category}  />
                    ))}
                </section>
            </div>
        </main>
    )
}

export { Vans }