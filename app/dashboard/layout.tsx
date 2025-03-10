import Sidebar from '@/components/sidebar/Sidebar';
import SidebarContent from '@/components/sidebar/SidebarContent';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex bg-primary-200'>
      <aside className='md:block h-screen sticky top-0 bottom-0 z-50 '>
        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </aside>
      <main className='w-full pt-10 px-2 md:px-8 overflow-y-hidden'>
        {children}
      </main>
    </main>
  );
}
