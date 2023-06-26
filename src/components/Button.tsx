import { MouseEvent } from "react"
import { Variant } from "../interfaces/types"

interface Props {
    className?: string,
    children: React.ReactNode,
    color: string,
    size: string,
    onClick?(event: MouseEvent <HTMLButtonElement>): void
}

const Button = ({ className, children, color, size, onClick }: Props ) => {
    const colorVariants: Variant = {
        "gray-100": "text-gray border-gray",
        "orange-100": "text-black border-orange-100 bg-orange-100",
        "orange-200": "text-white border-orange-200 bg-orange-200",
        "orange-400": "text-white border-orange-400 bg-orange-400",
        "black-100": "text-white border-black bg-black",
        "black-200": "text-black border-black bg-transparent",
        "cyan-100": "text-white border-cyan bg-cyan"
    }
    const sizeVariant: Variant = {
        md: "h-9 px-4 text-base font-medium border rounded-lg",
        base: "h-10 px-4 text-base font-bold border rounded-lg",
        base2: "h-10 text-base font-medium underline decoration-1 decoration-gray underline-offset-2"
    }
    const classList = `${sizeVariant[size] ?? ""} ${colorVariants[color] ?? ""} ${className}`

    return (
        <button className={classList} onClick={onClick}>
            {children}
        </button>
    )
}

export { Button }