"use client";

import React from "react";
import { Github, Linkedin, Menu } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-toggle";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  social?: {
    github: {
      title: string;
      url: string;
    };
    linkedin: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/logo/logo-whereisbrian.svg",
    alt: "logo",
    title: "Brian Tabart - Développeur Java",
  },
  menu = [
    { title: "Projets", url: "#" },
    { title: "Lectures", url: "#" },
    { title: "Contact", url: "#" },
  ],
  social = {
    github: {
      title: "GitHub",
      url: "https://github.com/WebisBrian",
    },
    linkedin: {
      title: "LinkedIn",
      url: "https://linkedin.com/in/brian-tabart",
    },
  },
  className,
}: Navbar1Props) => {
  return (
    <section className={cn("py-4", className)}>
      <div>
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-center lg:flex">
          <div className="flex w-full items-center justify-between">
            <a href={logo.url} className="flex items-center gap-4">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>

            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href={social.github.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.github.title}
                >
                  <Github className="h-5 w-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link
                  href={social.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.linkedin.title}
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>

              <ModeToggle />
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2 mx-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            </a>

            {/* Always visible actions on mobile */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href={social.github.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.github.title}
                >
                  <Github className="h-5 w-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link
                  href={social.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.linkedin.title}
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>

              <ModeToggle />

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Open menu">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>

                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <a href={logo.url} className="flex items-center gap-2 mx-2">
                        <img
                          src={logo.src}
                          className="max-h-8 dark:invert"
                          alt={logo.alt}
                        />
                        <span className="text-lg font-semibold tracking-tighter">
                          {logo.title}
                        </span>
                      </a>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-6 p-10">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
