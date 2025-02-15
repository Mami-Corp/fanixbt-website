import React from "react"
import Image, { StaticImageData } from "next/image"
import FooterLogo from "../../public/footerLogo.svg"
import XIcon from "../../public/icons/xIcon.svg"
// import TelegramIcon from "../../public/icons/telegramIcon.svg"
import Link from "next/link"

const socialMedia = [
    { href: "https://x.com/fanixbt", icon: XIcon },
    // { href: "##", icon: TelegramIcon },
]

export default function Footer() {
    return (
        <footer className="py-10 bg-[url('../../public/footerBg.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center md:gap-0 gap-4">
            <div className='w-8/12 flex md:flex-row flex-col justify-between items-center md:gap-0 gap-3'>
                <Image src={FooterLogo} alt={""} />
                <div className='flex flex-row justify-center items-center gap-3'>
                    {socialMedia.map((social) => (
                        <LinkItem
                            key={social.href}
                            href={social.href}
                            icon={social.icon}
                        />
                    ))}
                </div>
            </div>
            <p className='font-robotoRegular'>
                Developed by{" "}
                <a className="underline" href='https://mamicorp.com' target='_blank' rel='noreferrer'>
                    Mami Corp.
                </a>
            </p>
        </footer>
    )
}

interface LinkItemProps {
    href: string
    name?: string
    icon?: StaticImageData
}

const LinkItem = ({ href, name, icon }: LinkItemProps) => {
    return (
        <Link href={href} target={icon ? "_blank" : "_self"}>
            {icon ? <Image src={icon} alt='' /> : name}
        </Link>
    )
}
