'use client'

import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import { MENU } from './menu.data'
import { MenuItem } from './Menuitem'
import { match } from 'path-to-regexp'

export function Menu() {
    const pathname = usePathname()
    const segment = useSelectedLayoutSegment()

    return (
        <nav className="flex gap-6">
            {MENU.map(menuItem => (
                <MenuItem
                    key={menuItem.name}
                    menuItem={menuItem}
                    isActive={!!match(menuItem.href)(pathname)} />
            ))}
        </nav>
    )
}