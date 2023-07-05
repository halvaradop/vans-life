import { useOutletContext } from "react-router-dom"
import { HostContext } from "../../interfaces/types"


const HostVanInformation = () => {
    const { vanDetail: { title, category, description } } = useOutletContext <HostContext> ()
    return (
        <>
            <h3 className="my-4 text-sm font-bold">Name: <span className="font-medium">{title}</span></h3>
            <h3 className="my-4 text-sm font-bold">Category: <span className="font-medium">{category}</span></h3>
            <h3 className="my-4 text-sm font-bold">Description: <span className="font-medium">{description}</span></h3>
            <h3 className="my-4 text-sm font-bold">Visibility: <span className="font-medium">Public</span></h3>
        </>
    )
}

export { HostVanInformation }