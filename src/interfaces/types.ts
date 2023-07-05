export interface Variant {
    [key: string]: string
}

export interface CartVan {
    img: string,
    title: string,
    price: string,
}

export interface Van extends CartVan {
    id: string,
    category: string,
    description: string
    hostId: string,
}

export interface HostContext {
    vanDetail: Van
}

export type KeyPair = (key: string, value: string | null) => void

export interface NavLinkClassName {
    isActive: boolean,
    isPending?: boolean
}

