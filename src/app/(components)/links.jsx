'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Links = () => {
    const pathame = usePathname();

    const routes = [
        {
            label: "Home",
            route: "/home"
        },
        {
            label: "Dashboard",
            route: "/dashboard"
        },
        {
            label: "Admin",
            route: "/admin"
        },
        {
            label: "Users",
            route: "/admin/users"
        }
    ]

    return (
        <>
            {
                routes.map(item => <span>
                    <Link
                        className={`${pathame === item.route ? 'active-link' : ''}`}
                        href={item.route}
                        key={item.route}>{item.label}
                    </Link>  | &nbsp;
                </span>)
            }
        </>
    )
}