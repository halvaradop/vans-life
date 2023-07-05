import { ButtonProps } from "../interfaces/props"
import { Variant } from "../interfaces/types"


const Button = ({ className, children, color, size, onClick }: ButtonProps ) => {
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
        sm: "h-7 px-2 text-sm font-medium border rounded-[0.3rem]",
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

Button.defaultProps = {
    className: ""
}

export { Button }