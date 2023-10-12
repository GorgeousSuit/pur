"use client"

import CartIcon from '/public/assets/icons/cart.svg';
import BurgerIcon from '/public/assets/icons/burger.svg';
import All1 from '/public/assets/icons/all-closed.svg';
import All2 from '/public/assets/icons/all-opened.svg';
import BurgerMenu from './BurgerMenu';
import Link from 'next/link';
import Logo from '/public/assets/images/Logo.svg';
import LogoBlack from '/public/assets/images/Logo-black.svg';
import Filter from './Filter';

const Nav = ({props, logo}) => {
const logoColor = {logo};

    return (
        <nav className="absolute w-full h-full [&>*]:fixed">
            <button className="max-lg:hidden top-[40px] navbtn">About us</button>
            <button className="top-[86px] max-lg:hidden navbtn">Gallery</button>
            <button className="font-bold max-lg:top-[104px] lg:left-[18.82vw] top-[40px]">
                fur coats
            </button>
            <button className="font-bold  max-lg:top-[104px] left-[134px] lg:left-[26.94vw] text-[#3F3F3F] top-[40px]">
                Accessories
            </button>
            <button className="right-[34.79vw] top-[40px] max-lg:hidden text-black">
                € Eur
            </button>
            <button className="right-[31.18vw] top-[40px] max-lg:hidden text-black">
                Eng
            </button>
            <button className="bottom-[40px] max-lg:hidden navbtn">Instagram</button>
            <button className="bottom-[40px] left-[10.42vw] max-lg:hidden navbtn">
                Telegram
            </button>
            <Link href="/" className="lg:right-[40px] top-[32px] lg:top-[40px] z-[60]">
            <div className="max-lg:hidden">{logo === 'black' ? <LogoBlack /> : <Logo />}</div>
            <div className="lg:hidden"><Logo /></div>
            </Link>
            <button className="top-[98px] right-[40px] max-lg:hidden navbtn">
                BAg / 0
            </button>
            <button className="right-[84px] lg:hidden z-20">
                <CartIcon className="" />
            </button>
            <BurgerMenu />
            <button className="right-[32px] top-[101px] lg:hidden z-10">
                <Filter />
            </button>
        </nav>
    );
};

export default Nav;
