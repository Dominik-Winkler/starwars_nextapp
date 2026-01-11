import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Star Wars App",
  description: "Star Wars Showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NavigationMenu>
            <NavigationMenuList className="flex ">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link className="nav-menu-link" href="/people">
                    <Button variant={"ghost"}>People</Button>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link className="nav-menu-link" href="/planets">
                    <Button variant={"ghost"}>Planets</Button>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link className="nav-menu-link" href="/films">
                    <Button variant={"ghost"}>Films</Button>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link className="nav-menu-link" href="/species">
                    <Button variant={"ghost"}>Species</Button>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link className="nav-menu-link" href="/vehicles">
                    <Button variant={"ghost"}>Vehicles</Button>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link className="nav-menu-link" href="/starships">
                    <Button variant={"ghost"}>Starships</Button>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
