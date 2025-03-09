"use client";

import { TransitionLink } from "@/utils/TransitionLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(segment => segment);

  // Custom mapping for specific route names
  const breadcrumbNames: Record<string, string> = {
    dashboard: "Dashboard",
    products: "Products",
    aboutus: "About Us",
    contact: "Contact Us",
  };

  return (
    <nav aria-label="breadcrumb" className="font-poppins text-smallTextPhone md:text-h6Text ">
      <ul className="flex ">
        <li className="hover:underline text-black">
          <TransitionLink href="/" >
            Home
          </TransitionLink>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const label = breadcrumbNames[segment] || segment
            .replace(/-/g, " ") // Replace hyphens with spaces
            .split(" ") // Split into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
            .join(" "); // Join words back

          const isLast = index === pathSegments.length - 1;

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2 text-black ">/</span>
              {isLast ? (
                <span className="font-semibold">{breadcrumbNames[segment]}</span>
              ) : (
                <div className="hover:underline text-black">
                <TransitionLink  href={href}>
                  {breadcrumbNames[segment]}
                </TransitionLink>
                </div> 
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
