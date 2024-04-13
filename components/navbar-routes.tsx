" use client";

import { UserButton } from "@clerk/nextjs/app-beta";

export const NavbarRoutes = () => {
    return (
        <div className="flex gap-x-2 ml-auto" >
            <UserButton/>
        </div>
    )
}