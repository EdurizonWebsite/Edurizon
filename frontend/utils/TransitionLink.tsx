"use client"
import React, { ReactNode, useEffect } from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router";

interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
}

export const TransitionLink = ({ href, children,...props }:TransitionLinkProps)=>{
    const router = useRouter();

    const handleClick = () => {
        const body = document.querySelector("body");
        body?.classList.add("page-transition");
      };

    useEffect(() => {
        const handlePageLoaded = () => {
            setTimeout(() => {
                document.body?.classList.remove("page-transition");
            }, 300);
        };

        // Run once for direct loads and refreshes.
        handlePageLoaded();

        router.events.on("routeChangeComplete", handlePageLoaded);
        router.events.on("routeChangeError", handlePageLoaded);

        return () => {
            router.events.off("routeChangeComplete", handlePageLoaded);
            router.events.off("routeChangeError", handlePageLoaded);
        };
    }, [router.events]);





    return <Link className="dark:text-white dark:hover:text-orange-400 transition-colors duration-300 ease-in-out" onClick={handleClick}
     href={href} {...props}> {children} </Link>
} 