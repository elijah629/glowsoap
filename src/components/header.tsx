import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export function Header() {
  return <header className="p-4 border-b-2 flex h-16 items-center justify-between">
    {/* Logo */}

    <Link href="/">
      <Image width={128} height={0} alt="Good Products" className="hidden dark:block" src="/dark/goodproducts.svg" />
      <Image width={128} height={0} alt="Good Products" className="dark:hidden block" src="/goodproducts.svg" />
    </Link>

    <div className="flex items-center gap-2">
      <NavigationMenu className="sm:block hidden">
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuLink href="/store">
              Pre-order
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/#why">
              Why?
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/#how">
              How?
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/#roadmap">
              Roadmap
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </div>

  </header >;
}
