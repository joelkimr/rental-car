import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { MenuIcon } from "../ui/menu";
import { UserCircleIcon } from "../ui/user-circle";
// import { Button } from "../ui/button";

export function UserMenuButton() {
  return (
    <div className="-m-3">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button>
              <div className="flex items-center justify-center text-neutral-800">
                <MenuIcon className="mr-1.5 size-4 shrink-0" />
                <UserCircleIcon className="size-6 shrink-0 md:size-7 xl:size-[30px]" />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-40 sm:w-48 lg:w-52"
            collisionPadding={20}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem className="p-0">
                <span className="w-full [&_button]:w-full [&_button]:px-2 [&_button]:py-[6px] [&_button]:text-left">
                  <SignUpButton />
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <span className="w-full [&_button]:w-full [&_button]:px-2 [&_button]:py-[6px] [&_button]:text-left">
                  <SignInButton />
                </span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="p-0">
                <Link href="/" className="w-full px-2 py-[6px]">
                  Help Center
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SignedOut>
    </div>
  );
}
