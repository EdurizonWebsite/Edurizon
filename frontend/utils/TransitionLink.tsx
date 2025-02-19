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
    const router = useRouter();

    const handleTransition = async(
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    )=>{
        e.preventDefault();

        const body =document.querySelector('body');
        body?.classList.add('page-transition');

        await sleep(200);
        await router.push(href);
        await sleep(200);
        body?.classList.remove('page-transition');
    }




    return <Link onClick={handleTransition}
     href={href} {...props}> {children} </Link>
} 