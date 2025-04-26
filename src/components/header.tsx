import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

// Navigation items data structure
const navigationItems = [
  {
    label: "PRE-ORDER",
    href: "/store",
  },
  {
    label: "Why?",
    href: "/#why",
  },
  {
    label: "How?",
    href: "/#how",
  },
  {
    label: "Roadmap",
    href: "/#roadmap",
  },
]

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b p-4 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image width={128} height={32} priority alt="Good Products" className="hidden dark:block" src="/dark/goodproducts.svg" />
        <Image width={128} height={32} priority alt="Good Products" className="dark:hidden block" src="/goodproducts.svg" />
      </Link>

      <div className="flex items-center gap-4">
        <NavigationMenu className="hidden sm:block">
          <NavigationMenuList className="gap-1">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink href={item.href}>
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </div>
    </header>
  )
}

