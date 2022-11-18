import { DivCard } from "./styles";

interface IProps{
    quantity:number
    value:string
}


export default function CardList({quantity, value, }:IProps){

    return(
        <>
            <DivCard>
                <h4>Quantidade:{quantity}</h4>
                <h4>Valor:{value}</h4>
            </DivCard>
            
        </>
    )
}