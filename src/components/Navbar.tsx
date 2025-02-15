"use client"
import React, { useState } from "react"
import NavbarBG from "../../public/navbarBg.svg"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import XIcon from "../../public/icons/xIcon.svg"
// import TelegramIcon from "../../public/icons/telegramIcon.svg"
import useMediaQuery from "../../hooks/useMediaQuery"
import Logo from "../../public/navbarLogo.svg"
import MenuIcon from "../../public/icons/menuIcon.png"
import CloseIcon from "../../public/icons/close.png"

const links = [
    // { href: "/dexscreener", name: "Dexscreener" },
    // { href: "/gallery", name: "Gallery" },
    { href: "https://x.com/fanixbt", name: "Talk To Me" },
]

const socialMedia = [
    { href: "https://x.com/fanixbt", icon: XIcon }
    // { href: "##", icon: TelegramIcon },
]

export default function Navbar() {
    const isDesktop = useMediaQuery("(min-width: 1024px)")
    const [open, setOpen] = useState(false)

    return (
        <>
            {isDesktop ? (
                <>
                    <div className='w-full flex flex-col justify-center items-center fixed top-0 z-50 text-white'>
                        <div className='bg-[#1E1F27] absolute top-0 w-full 2xl:h-4'></div>
                        <Image src={NavbarBG} alt='navbar background' />
                        <div className='absolute flex flex-row justify-around items-center gap-3 w-full'>
                            <div className='mt-5'>
                                <Image src={Logo} alt='logo' />
                            </div>
                            <div className='flex flex-row justify-center items-center gap-8'>
                                {links.map((link) => (
                                    <LinkItem
                                        key={link.name}
                                        href={link.href}
                                        name={link.name}
                                    />
                                ))}
                            </div>
                            <div className='flex flex-row justify-center items-center gap-3 mt-5'>
                                {socialMedia.map((social) => (
                                    <LinkItem
                                        key={social.href}
                                        href={social.href}
                                        icon={social.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='w-full bg-[#1E1F27] flex flex-row justify-between items-center py-5 fixed top-0 z-50'>
                        <div className='ml-5'>
                            <Image src={Logo} alt='logo' />
                        </div>
                        <div className='mr-5'>
                            <button onClick={() => setOpen(!open)}>
                                <Image
                                    src={open ? CloseIcon : MenuIcon}
                                    alt='menu'
                                />
                            </button>
                        </div>
                    </div>
                    <div
                        className={`${
                            open ? "block" : "hidden"
                        } w-full h-72 bg-[#1E1F27] fixed z-50 top-24 rounded-b-2xl flex flex-col justify-start items-center`}>
                        <div className='flex flex-col justify-center items-center gap-3 mt-16 text-white'>
                            {links.map((link) => (
                                <LinkItem
                                    key={link.name}
                                    href={link.href}
                                    name={link.name}
                                />
                            ))}
                        </div>
                        <div className='flex flex-row justify-center items-center gap-3 mt-10'>
                            {socialMedia.map((social) => (
                                <LinkItem
                                    key={social.href}
                                    href={social.href}
                                    icon={social.icon}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

interface LinkItemProps {
    href: string
    name?: string
    icon?: StaticImageData
}

const LinkItem = ({ href, name, icon }: LinkItemProps) => {
    return (
        <Link
            href={href}
            target={icon ? "_blank" : "_self"}
            className='font-robotoMedium'>
            {icon ? <Image src={icon} alt='' /> : name}
        </Link>
    )
}
