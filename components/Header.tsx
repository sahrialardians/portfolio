"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpRight } from "lucide-react"

export function Header() {
    return (
        <header className="px-6 md:px-0 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                    <AvatarImage alt="Profile avatar" src="/profile.jpg" />
                    <AvatarFallback className="text-xs">SA</AvatarFallback>
                </Avatar>
            </div>
            <Button asChild className="bg-orange-400 hover:bg-orange-500">
                <Link href="#projects">
                    Start building
                    <ArrowUpRight />
                </Link>
            </Button>
        </header>
    )
}
