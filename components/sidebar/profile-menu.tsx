import {
  CreditCard,
  Keyboard,
  LogOut,
  Settings,
  User,
  Users,
} from 'lucide-react';
import arrowDown from '@/public/images/arrow-down.png';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/Button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Image from 'next/image';
import { destroyCookie } from 'nookies';
import { routes } from '@/navigation';

export function ProfileMenu() {
  const handleLogOut = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve('Success!');
        }, 1000);
      });
      destroyCookie(null, 'email');
    } catch {
    } finally {
      window.location.replace(routes.signIn.path);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='bg-transparent justify-start items-center focus:border focus:outline-none max-w-[237px] w-full'>
          <div className='flex gap-3 w-full'>
            <div className=''>
              <Avatar>
                <AvatarImage
                  src={'../../public/images/user-avi.png'}
                  alt='logged in user display picture'
                />
                <AvatarFallback className='bg-nav-active text-primary-100 font-bold'>
                  AR
                </AvatarFallback>
              </Avatar>
            </div>
            <div className='w-full flex items-center justify-between'>
              <div className='flex flex-col items-start justify-center  text-white'>
                <p className='font-bold text-[18px] leading-[18.7px] font-karla'>
                  Ali Riaz
                </p>
                <p className=' leading-[16.37px] text-[14px] font-karla'>
                  Ali Riaz
                </p>
              </div>
              <div>
                <Image
                  src={arrowDown}
                  alt='arrow down icon representing the presence of a menu or drop down'
                />
              </div>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users />
            <span>Team</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogOut}>
          <LogOut />

          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
