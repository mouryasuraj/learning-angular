
import type {PropsWithChildren, ReactNode} from 'react'


interface CardProps extends PropsWithChildren {
    title:string,
    footer?:ReactNode
}


export const Card = ({title, children, footer}:CardProps) =>{
    return <div>
        <h1>{title}</h1>
        <span>{footer}</span>
        <span>{children}</span>
    </div>
}