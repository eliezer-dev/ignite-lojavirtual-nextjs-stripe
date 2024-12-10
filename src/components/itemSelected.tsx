import Image from "next/image";

import {ImageContainer, ItemSelectContainer, ShirtInformation} from "@/styles/components/itemSelected";
import ButtonText from "@/components/buttonText";

interface ItemSelectedProps {
    productName: string,
    productPrice: number,
    productImage: string,
    onClick?: () => void
}

export default function ItemSelected(props : ItemSelectedProps) {

    const priceFormated = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
         }).format(props.productPrice!)


    return(
        <ItemSelectContainer>
            <ImageContainer>
                <Image src={props.productImage} alt="image of item selected" width={80} height={80}  />
            </ImageContainer>

            <ShirtInformation>
                <p>{props.productName}</p>
                <p className="bold">{priceFormated}</p>
                <ButtonText title={'Remover'} onClick={props.onClick} />
            </ShirtInformation>

        </ItemSelectContainer>
    )
}