import { useOutletContext } from "react-router-dom"
import { HostContext } from "../../interfaces/types"

const HostVanPhotos = () => {
    const { vanDetail: { img } }  = useOutletContext <HostContext> ()
    return <img className="w-1/3 aspect-square rounded-md" src={img} alt="Image of a van" />
}

export { HostVanPhotos }