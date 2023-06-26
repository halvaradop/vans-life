interface WidthLayoutProps {
    className?: string,
    children: React.ReactNode
}   

const WidthLayout = ({ className, children }: WidthLayoutProps) => {
    return (
        <section className={`w-11/12 mx-auto ${className}`}>
            {children}
        </section>
    )
}

WidthLayout.defaultProps = {
    className: ""
}

export { WidthLayout }