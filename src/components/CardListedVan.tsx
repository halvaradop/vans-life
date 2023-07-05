import { Link } from "react-router-dom"
import { CardListedVanProps } from "../interfaces/props"

const CardListedVan = ({ index, img, title, price, isEdit }: CardListedVanProps ) => {
    return (
        <article className="py-3 px-4 text-black text-base rounded-md bg-white">
            <Link to={index}>
                <figure className="flex items-center gap-x-3">
                    <img className="w-16 rounded-md" src={img} alt="image of a van" />
                    <figcaption className="">
                        <h3 className="text-xl font-medium">{title}</h3>
                        <span className="text-gray">{price}/day</span>
                    </figcaption>
                </figure>
                {isEdit && <span className="font-normal">Edit</span>}
            </Link>
        </article>
    )
}

export { CardListedVan }