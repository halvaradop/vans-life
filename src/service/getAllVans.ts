import json from "../utils/data.json"
import { Van } from "../interfaces/types"

const getAllVans = async (): Promise <Array<Van>> => {
    return json.map(({ title, description, category, hostId, id, img, price }) => ({
        title, 
        description, 
        category, 
        id, 
        img, 
        price: String(price), 
        hostId
    }))
}

export { getAllVans }