import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { WidthLayout } from "../components/WidthLayout"

const Home = () => {
    return (
        <main className="w-full h-main bg-home bg-no-repeat bg-cover">
            <WidthLayout className="py-16 text-white">
                <h1 className="text-4xl font-bold">You got the travel plans, we got the travel vans.</h1>
                <p className="mt-5 mb-8 text-base">
                    Add adventure to your life by joining the #vanlife movement. Rent the perfect
                    van to make your perfect road trip.
                </p>
                <Button className="w-full" color="orange-400" size="base">
                    <Link to="/vans">Find your van</Link>
                </Button>
            </WidthLayout>
        </main>
    )
}

export { Home }