interface chaiCardPropType {
    n:string
    price:number
    isSpecial?:boolean
}

export function ChaiCard ({n, price, isSpecial=true}:chaiCardPropType){

    return <article>
        <h2>
            {n} {isSpecial && <span>⭐</span>}
        </h2>
        <h3>{price}</h3>
    </article>
}