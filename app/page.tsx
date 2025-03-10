import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const Page = async () => {
  const cookieStore = await cookies();
  const email = cookieStore.get('email')?.value;
  if (!email) {
    redirect('/sign-ip');
  }
  return null;
};

export default Page;
