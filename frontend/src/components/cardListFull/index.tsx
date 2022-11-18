import { DivCard } from "./styles";

interface IProps{
    result:any
}


export default function CardListFull({result}:IProps){

    return(
        <>
            <DivCard>
                <h4>Id:{result.id}</h4>
                <h4>Cliente:{result.client_code}</h4>
                <h4>Quantidade:{result.category_product}</h4>
                <h4>Produto:{result.sku_product}</h4>
                <h4>Data:{result.date}</h4>
                <h4>Quantidade:{result.quantity}</h4>
                <h4>Valor:{result.value_billing}</h4>
            </DivCard>
            
        </>
    )
}