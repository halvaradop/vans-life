import { WidthLayout } from "../components/WidthLayout"
import start from "../assets/star.svg"


const HostDashboard = () => {
    return (
        <>
            <section className="text-black bg-orange-100">
                <WidthLayout className="py-6">
                    <h1 className="text-4xl font-bold">Welcom!</h1>
                    <div className="mt-4 mb-6 flex items-center justify-between text-base">
                        <p className="text-gray">Income last <span className="font-medium border-b border-gray">30 days</span></p>
                        <span className="text-black font-medium">Details</span>
                    </div>
                    <h2 className="text-5xl font-black">$2,260</h2>
                </WidthLayout>
            </section>
            <section className="text-black bg-orange-300">
                <WidthLayout className="py-6 flex items-center justify-between">
                    <div className="flex gap-x-5">
                        <h3 className="text-2xl font-bold">Review score</h3>
                        <div className="flex items-center gap-x-1">
                            <img src={start} alt="icon start" />
                            <p className="font-bold">5.0<span className="font-normal">/5</span></p>
                        </div>
                    </div>
                    <span className="text-black font-medium">Details</span>
                </WidthLayout>
            </section>
            <section>
                <WidthLayout className="py-5 bg-beige">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">Your listed vans</h3>
                        <span className="text-black font-medium">View all</span>
                    </div>
                    <section className="w-ful py-20 flex items-center justify-center">
                        <h3 className="font-bold italic">Empty List</h3>
                    </section>
                </WidthLayout>
            </section>
        </>
    )
}

export { HostDashboard }