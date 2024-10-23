"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"


export function Navigation() {

  return (
    <NavigationMenu dir="rtl" className="border rounded-lg h-[42px] px-2 shadow-sm">
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <a href="/">
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-[35px]`}>
              الأسعار
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/" >
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-[35px]`}>
              تواصل معنا
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem dir="rtl" className="">
          <NavigationMenuTrigger className="h-[35px] px-1 ">الحلول</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3 m-0">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">حلولنا المتكاملة</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      اكتشف كيف يمكن لحلولنا أن تساعد عملك على النمو والازدهار.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border border-gray-200"
                    href="#"
                  >
                    <div className="text-sm font-medium leading-none">الحل الأول</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      وصف مختصر للحل الأول وكيف يمكنه مساعدة العملاء.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border border-gray-200"
                    href="#"
                  >
                    <div className="text-sm font-medium leading-none">الحل الثاني</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      شرح موجز للحل الثاني وفوائده للشركات.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border border-gray-200"
                    href="#"
                  >
                    <div className="text-sm font-medium leading-none">الحل الثالث</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      نظرة عامة على الحل الثالث وكيف يمكنه تحسين أداء الأعمال.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <a href="/" >
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} h-[35px] px-1`}>
              تعرف علينا
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-[35px] px-1">
                <MoreHorizontal className="h-3 w-3" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
              <DropdownMenuItem>الإعدادات</DropdownMenuItem>
              <DropdownMenuItem>تسجيل الخروج</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
