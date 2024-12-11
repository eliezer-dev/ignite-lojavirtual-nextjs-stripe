import {HeaderContainer} from "@/styles/components/header";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import Carrinho from "@/components/carrinho";
import CartDetails from "@/components/cartDetails";
import Link from "next/link";
import {useData} from "@/context/DataContext";

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