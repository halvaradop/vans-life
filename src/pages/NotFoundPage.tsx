import { Link } from "react-router-dom"
import { Button } from "../components/Button"
import { WidthLayout } from "../components/WidthLayout"

const NotFoundPage = () => {
    return (
        <WidthLayout className="min-h-main flex justify-center flex-col gap-y-5">
            <h1 className="text-black text-3xl font-bold">Sorry, the page yoy were looking for was not found.</h1>
            <Button color="black-100" size="base">
                <Link to="/">Return to home</Link>
            </Button>
        </WidthLayout>
    )
}

export { NotFoundPage }