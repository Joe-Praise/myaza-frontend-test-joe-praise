'use client';

import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Button } from '../ui/Button';
import { ProfileMenu } from './profile-menu';
import { cn } from '@/lib/utils';
import { useNavBarStore } from '@/store';
import { ReactNode, Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useIsMobile } from '@/hooks/useIsMobile';

interface ISidebarProps {
  children: ReactNode;
}

function Sidebar(props: ISidebarProps) {
  const { children } = props;
  const { isOpen, toggleSidebar, closeSidebar } = useNavBarStore();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;
    toggleSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return (
    <section>
      {/* Overlay for mobile */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden',
          {
            'opacity-100 visible': isOpen,
            'opacity-0 invisible': !isOpen,
          }
        )}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <section
        className={cn(
          ` w-full flex flex-col shadow-md dark:shadow-gray-700 bg-primary-100 text-white transition-all md:w-[293px] md:min-w-60 md:static fixed top-0 left-0 h-screen z-50  py-3`,
          {
            'w-[293px]': isOpen,
            'w-0 min-w-0 max-w-0 md:max-w-[293px]': !isOpen,
          }
        )}
      >
        {/* Toggle Button (Only for mobile) */}
        <div className='absolute top-2 -right-[25px] z-50 md:hidden'>
          <Button variant='ghost' size='icon' onClick={toggleSidebar}>
            {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
          </Button>
        </div>

        <main
          className={cn('flex flex-col h-full overflow-hidden w-0 mx-auto', {
            'w-[237px] mx-auto': isOpen,
            'md:w-[237px] ': !isOpen,
          })}
        >
          {children}
          <section className='mt-auto'>
            <footer className='w-full font-semibold text-xs text-center'>
              <ProfileMenu />
            </footer>
          </section>
        </main>
      </section>
    </section>
    // <>
    //   {/* Overlay for mobile */}
    //   <div
    //     className={cn(
    //       'fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden',
    //       isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    //     )}
    //     onClick={closeSidebar}
    //   ></div>

    //   {/* Sidebar */}
    //   <section
    //     className={cn(
    //       `relative flex flex-col h-full shadow-md dark:shadow-gray-700 bg-primary-100 text-white transition-all`,
    //       isOpen ? 'min-w-60 w-[293px] py-3' : 'w-0 min-w-0 max-w-0',
    //       `md:relative md:min-w-60 md:w-[293px] md:py-3 md:z-auto`,
    //       `fixed top-0 left-0 h-screen z-50 md:hidden`
    //     )}
    //   >
    //     <div className='absolute top-2 -right-14 z-50'>
    //       <Button variant='ghost' size='icon' onClick={toggleSidebar}>
    //         {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
    //       </Button>
    //     </div>

    //     <main
    //       className={cn(
    //         'flex flex-col h-full overflow-hidden',
    //         isOpen && 'w-[237px] mx-auto'
    //       )}
    //     >
    //       {children}
    //       <div className='mt-auto'>
    //         <footer className='w-full font-semibold text-xs text-center'>
    //           <ProfileMenu />
    //         </footer>
    //       </div>
    //     </main>
    //   </section>
    // </>
  );
}

const SideBarWithSuspense = (props: ISidebarProps) => {
  const { children } = props;
  return (
    <Suspense>
      <Sidebar>{children}</Sidebar>
    </Suspense>
  );
};
export default SideBarWithSuspense;

// export default function Sidebar({ children }: { children: React.ReactNode }) {
//   // const { nav_bar } = useNavBarStore();
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <section
//       className={cn(
//         `relative flex flex-col h-full shadow-md dark:shadow-gray-700 bg-primary-100 text-white transition-all`,
//         {
//           ' min-w-60 w-[293px] py-3 ': isOpen,
//           'w-0 min-w-0 max-w-0 ': !isOpen,
//           // 'right-0 min-w-60 w-[293px]': nav_bar,
//         }
//       )}
//     >
//       <div className='absolute top-2 -right-[20px] z-50 '>
//         <Button variant='ghost' size='icon' onClick={toggleSidebar}>
//           {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
//         </Button>
//       </div>
//       <main
//         className={cn('flex flex-col h-full  overflow-hidden', {
//           'w-[237px] mx-auto': isOpen,
//         })}
//       >
//         {children}
//         <div className='mt-auto'>
//           <footer className=' w-full font-semibold text-xs text-center '>
//             <ProfileMenu />
//           </footer>
//         </div>
//       </main>
//     </section>
//   );
// }
