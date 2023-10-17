"use client"

import { usePathname } from 'next/navigation';

const BackgroundColor = ({children}) => {
	const pathname = usePathname();
  return (
	<div className={`pt-[32px] pb-[4.69svh] lg:pb-[40px] px-[32px] lg:p-[40px] w-full h-full ${pathname === "/about-us" ? "bg-white" : "bg-[#0F110C]"}`}>{children}</div>
  )
}

export default BackgroundColor