interface CardIncomeProps {
    price: string,
    date: string
}

const CardIncome = ({ price, date }: CardIncomeProps) => {
    return (
        <article className="w-full p-6 flex items-center justify-between rounded-md bg-white">
            <h3 className="text-2xl font-bold">{price}</h3>
            <p className="text-gray-100 text-xl font-medium">{date}</p>
        </article>
    )
}

export { CardIncome }