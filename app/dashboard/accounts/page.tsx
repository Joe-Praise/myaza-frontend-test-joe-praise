import ApllicationHeader from '@/components/dashboard/apllication-header';

const Page = () => {
  return (
    <div className='bg-primary-200 min-h-[100dvh] overflow-y-hidden mb-5 '>
      <ApllicationHeader
        label='My Accounts'
        desc='Manage all your accounts from here'
      />
    </div>
  );
};

export default Page;
