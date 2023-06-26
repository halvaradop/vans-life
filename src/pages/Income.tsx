import { CardIncome } from "../components/CardIncome"
import { WidthLayout } from "../components/WidthLayout"

const transactions = [
    { price: "$720", date: "1/12/22" },
    { price: "$560", date: "1/12/22" },
    { price: "$980", date: "1/12/22" },
]

const Income = () => {
    return (
        <div className="w-full bg-beige">
            <WidthLayout>
                <div>
                    <h1 className="text-4xl font-bold">Income</h1>
                    <p className="my-6 text-gray text-base">last <span className="font-medium border-b border-gray">30 days</span></p>
                    <h2 className="text-5xl font-black">$2,260</h2>
                </div>
                <section>
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Your transactions (3)</h2>
                        <p className="my-6 text-gray text-base">Last <span className="font-medium border-b border-gray">30 days</span></p>
                    </div>
                    <section className="flex items-center flex-col gap-y-5">
                        { transactions.length > 0? (
                            transactions.map(({ price, date }, key) => (
                                <CardIncome key={key} price={price} date={date} />
                            ))
                        ) : <h2>Empty</h2> }
                    </section>
                </section>
            </WidthLayout>
        </div>
    )
}

export { Income }