'use client'
import Link from "next/link";
import {ROUTES} from "@/app/constants";
import {usePathname} from "next/navigation";

export const NavLinks = ({styles}:{styles:string}) => {
    const pathname = usePathname()
    return (
        <nav className={styles}>
            {ROUTES.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link href={item.href} key={item.title} className="relative py-6">
                        <p className={`text-xl transition-all duration-100 ease-in ${isActive ? 'font-bold text-highlight' : 'font-medium text-gray-500'}`}>{item.title}</p>
                        <span
                            className={`absolute bottom-0 left-0 right-0 bg-gradient rounded-2xl transition-all ease-in duration-200 ${
                                isActive ? 'h-[4px]' : 'h-0'
                            }`}
                        />
                        {isActive && (
                            <div
                                className='absolute bottom-0 left-0 right-0 h-2 blur-2xl bg-white opacity-80 rounded-t-3xl'/>
                        )}
                    </Link>
                );
            })}
        </nav>
    )
}