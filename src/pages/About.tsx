import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import aboutImage from "../assets/about.png"

const About = () => {
    return (
        <main>
            <img className="w-full" src={aboutImage} alt="image" />
            <section className="w-11/12 mx-auto my-8">
                <article className="text-base">
                    <h1 className="text-3xl/8 font-bold">Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p className="mt-7 mb-4">
                        Our mission is to enliven your road trip with the perfect travel
                        van rental. Our vans are recertified before each trip to ensure
                        your travel plans can go off without a hitch. (Hitch costs extra 😉)
                    </p>
                    <p>
                        Our team is full of vanlife enthusiasts who know firsthand the magic
                        of touring the world on 4 wheels.
                    </p>
                </article>
                <article className="mt-10 p-8 text-xl font-bold rounded-lg bg-orange">
                    <h2 className="">Your destination is waitint.</h2>
                    <h2>Your van is ready.</h2>
                    <Button className="mt-6" color="black-100" size="base">
                        <Link to="/vans">Explore our vans</Link>
                    </Button>
                </article>
            </section>
        </main>
    )
}

export { About }