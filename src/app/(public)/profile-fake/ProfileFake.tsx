'use client'

import { PAGES } from "@/config/pages.config"
import { useRouter} from "next/navigation"

export function ProfileFake() {
    const router = useRouter()
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Profile fake</h1>
            <button className="cursor cursor-pointer" onClick={() => router.push(PAGES.HOME)}>Go to home</button>
        </div>
    )
}
