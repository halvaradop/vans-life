import { MouseEvent } from "react"
import { CartVan, Van } from "./types";


export interface VansProps {
    
}

export interface CardListedVanProps extends CartVan {
    index: string,
    isEdit?: boolean
}

export interface CardVansProps extends CartVan {
    index: string
    searchParams: URLSearchParams,
    textButton: string,
    onClick?(id: number): void
}

export interface Componable {
    className?: string,
    children?: React.ReactNode
}

export interface ButtonProps extends Componable {
    color: string,
    size: string,
    onClick?(event: MouseEvent <HTMLButtonElement>): void
}

export interface WidthLayoutProps extends Componable {}  

export interface CardIncomeProps {
    price: string,
    date: string
}

export interface CardReviewProps {
    starts: number, 
    username: string,
    date: string,
    commentary: string
}