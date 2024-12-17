import {HeaderContainer} from "./styles";
import Link from "next/link";

import logoImg from "@/assets/logo.svg"
import Image from "next/image";
import Carrinho from "@/app/components/carrinho/carrinho";

export default function Header () {

    return (
        <HeaderContainer>
            <Link href={'/'}>
               <Image src={logoImg} width={400} alt=""/>
            </Link>
            <Carrinho/>
        </HeaderContainer>
    )
}