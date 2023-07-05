import { useOutletContext } from "react-router-dom"
import { HostContext } from "../../interfaces/types"

const HostVanPricing = () => {
    const { vanDetail }  = useOutletContext <HostContext> ()
    return <h3 className="text-black text-2xl/3 font-medium">${vanDetail?.price}00<span className="text-gray text-base">/day</span></h3>
}

export { HostVanPricing }