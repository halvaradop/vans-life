import { CardIncome } from "../../components/CardIncome"
import { WidthLayout } from "../../components/WidthLayout"

const transactions = [
    { price: "$720", date: "1/12/22" },
    { price: "$560", date: "1/12/22" },
    { price: "$980", date: "1/12/22" },
]

const Income = () => {
    return (
        <WidthLayout>
            <div>
                <h1 className="text-4xl font-bold">Income</h1>
                <p className="my-6 text-gray text-base">last <span className="font-medium border-b border-gray">30 days</span></p>
                <h2 className="text-5xl font-black">$2,260</h2>
            </div>
            <section>
                <div className="mt-6 mb-7 flex flex-col gap-y-2">
                    <h2 className="text-2xl font-bold">Your transactions ({ transactions.length })</h2>
                    <p className="text-gray text-base">Last <span className="font-medium border-b border-gray">30 days</span></p>
                </div>
                <section className="flex items-center flex-col gap-y-5">
                    {transactions.length > 0? (
                        transactions.map(({ price, date }, key) => (
                            <CardIncome key={key} price={price} date={date} />
                        ))
                    ) : <h2>Empty</h2> }
                </section>
            </section>
        </WidthLayout>
    )
}

export { Income }