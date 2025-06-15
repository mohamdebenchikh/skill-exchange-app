import type { ReactNode } from "react";

export function Column({ children, className = "" }: { children?: ReactNode | null, className?: string } = { className: "" }) {
    return (
        <div className={`flex flex-col ${className}`}>{children}</div>
    )
}


export function Row({ children, className = "" }: { children?: ReactNode | null, className?: string } = { className: "" }) {
    return (
        <div className={`flex flex-row ${className}`}>{children}</div>
    )
}
