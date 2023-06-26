interface CardListedVanProps {
    img: string,
    title: string, 
    price: string
}


const CardListedVan = ({ img, title, price }: CardListedVanProps ) => {
    return (
        <article className="text-black text-base rounded-md bg-white">
            <figure className="flex items-center gap-x-5">
                <img src={img} alt="image of a van" />
                <figcaption className="">
                    <h3 className="text-xl font-medium">{title}</h3>
                    <span className="text-gray">{price}/day</span>
                </figcaption>
            </figure>
            <span className="font-normal">Edit</span>
        </article>
    )
}

export { CardListedVan }