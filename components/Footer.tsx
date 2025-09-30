import { Separator } from "@/components/ui/separator"
import { ArrowUpRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Footer() {
    return (
        <footer className="bg-white px-6 py-6">
            <Separator className="mb-4" />
            <div className="flex items-center justify-between">
                <p className="text-sm text-orange-400 font-semibold leading-none">
                    <ArrowUpRight />
                    Start <br />
                    building <br />
                    now.
                </p>

                <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                        <AvatarImage alt="Profile avatar" src="/profile.jpg" />
                        <AvatarFallback className="text-xs">SA</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </footer>
    )
}