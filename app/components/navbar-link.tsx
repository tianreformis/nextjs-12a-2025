//filename navbar-link.tsx 
// under app/components
//typescrypt wajib ada type data

'use client'

import Link from "next/link";

interface NavbarLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function NavbarLink ({href,children} : NavbarLinkProps) {
    const isExternal = href.startsWith('http');
    return (
        <
            Link href={href}
            className="hover:underline hover:text-blue-500 hover:bg-amber-200"
        >
            {children}
        </Link>
    )
}