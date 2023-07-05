import { useState } from "react"
import { WidthLayout } from "../../components/WidthLayout"
import { CardReview } from "../../components/CardReview"
import start from "../../assets/star.svg"

const reviewsList = [5, 4, 3, 2, 1]

const commentary = {
    starts: 5,
    username: "Elliot",
    date: "December 1, 2022",
    commentary: "The beach bum is such as awesome van! Such as comfortable trip. We had if for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"
}

const Reviews = () => {
    const [commentarys] = useState([commentary, commentary])
    return (
        <WidthLayout>
            <div className="flex items-center gap-x-5">
                <h1 className="text-3xl font-bold">Your reviews</h1>
                <p className="text-gray text-base">last <span className="font-medium border-b border-gray">30 days</span></p>
            </div>
            <section>
                <div className="mt-5 mb-6 flex items-center gap-x-4 text-black">
                    <span className="text-2xl font-bold">5.0</span>
                    <img src={start} alt="icon start" />
                    <span className="text-base">overall rating</span>
                </div>
                <ul className="flex flex-col gap-y-3">
                    {reviewsList.map((item, key) => (
                        <li className="w-full flex items-center justify-between text-gray" key={key}>
                            <p>{item} stars</p>
                            <span className="w-4/6 h-2 rounded-md bg-gray-100"></span>
                            <h2>%</h2>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="my-5 text-black text-lg font-bold">Reviews (count)</h2> 
                <section>
                    {commentarys.map(({ starts, username, date, commentary }, key) => (
                        <CardReview key={key} starts={starts} username={username} date={date} commentary={commentary} />
                    ))}
                </section>
            </section>
        </WidthLayout>
    )
}

export { Reviews }