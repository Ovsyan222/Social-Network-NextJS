import type { IMenuItem } from "./menu.data";
import Link from "next/link";

interface Props {
    menuItem: IMenuItem
    isActive: boolean
}

export function MenuItem({menuItem, isActive} : Props) {
    return (
        <Link className={isActive ? 'text-white' : 'text-white/80'} href={menuItem.href}>
            {menuItem.name}
        </Link>
    )
}