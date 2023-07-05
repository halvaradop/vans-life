import start from "../assets/star.svg"
import { CardReviewProps } from "../interfaces/props"

const CardReview = ({ starts, username, date, commentary }: CardReviewProps ) => {
    const startList = new Array(starts).fill(0)
    return (
        <article className="py-7 flex items-start flex-col gap-y-4 text-black text-base border-b border-gray-100 last-of-type:border-b-0">
            <figure className="flex items-center">
                {startList.map((_, key) => <img key={key} src={start} />)}
            </figure>
            <div className="">{username} <span className="text-gray-100">{date}</span></div>
            <p className="font-medium">{commentary}</p>
        </article>
    )
}   

export { CardReview }