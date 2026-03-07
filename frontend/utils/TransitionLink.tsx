"use client"
import React, { ReactNode } from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router";

interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
}

function sleep(ms:number){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

export const TransitionLink = ({ href, children,...props }:TransitionLinkProps)=>{
    // const router = useRouter();

    const handleClick = () => {
        const body = document.querySelector("body");
        body?.classList.add("page-transition");
    
        setTimeout(() => {
          body?.classList.remove("page-transition");
        }, 400);
      };




    return <Link className="dark:text-white dark:hover:text-orange-400 transition-colors duration-300 ease-in-out" onClick={handleClick}
     href={href} {...props}> {children} </Link>
} 