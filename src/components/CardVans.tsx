import { Link } from "react-router-dom"
import { Button } from "./Button"
import { Variant } from "../interfaces/types"

interface CardVansProps {
    index: number,
    img: string,
    title: string,
    price: string,
    textButton: string,
    onClick?(id: number): void
}

const colorCategoryVans: Variant = {
    "simple": "orange-200",
    "rugged": "cyan-100",
    "luxury": "black-100",
}
const colorCategoryVansDefault = "orange-200"


const CardVans = ({ index, img, title, price, textButton  }: CardVansProps ) => {
    return (
        <article>
            <Link to={`/vans/${index}`}>
                <figure>
                    <img className="w-full aspect-square rounded-md" src={img} alt="picture of a vans" />
                    <figcaption className="flex flex-col items-start text-xl text-black">
                        <h2 className="mt-2 mb-3 font-bold line-clamp-1">{title}</h2>
                        <div className="mb-3 leading-4">
                            <h3 className="font-bold">{price}</h3>
                            <span className="text-gray text-sm">/ day</span>
                        </div>
                    </figcaption>
                </figure>
                <Button children={textButton} color={colorCategoryVans[textButton] ?? colorCategoryVansDefault} size="md"/>            
            </Link>
        </article>
    )
}

export { CardVans }