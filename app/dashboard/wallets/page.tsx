'use client';
import ApllicationHeader from '@/components/dashboard/apllication-header';
import WalletCard from '@/components/dashboard/wallet-card';
import BentoWrapper from '@/components/shared/BentoWrapper';
import { Button } from '@/components/ui/Button';
import { cn, containerVariants } from '@/lib/utils';
import { CircleEllipsis, PlusIcon } from 'lucide-react';
import NG from '@/public/images/NG.png';
import UK from '@/public/images/UK.png';
import USA from '@/public/images/USA.png';
import adobeIcon from '@/public/images/adobe icon.png';
import { TableCell, TableHead, TableRow } from '@/components/ui/table';
import Image from 'next/image';
import { TableComponent } from '@/components/shared/table';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

enum status {
  deposited = 'Deposited',
}
const invoices = [
  {
    name: 'Adobe After Effect',
    date: 'Sat,20 Apr 2020',
    description: 'Adobe after Virtual Card top-up',
    amount: '$80.09',
    status: status.deposited,
    logo: adobeIcon,
  },
  {
    name: 'Adobe After Effect',
    date: 'Sat,20 Apr 2020',
    description: 'Adobe after Virtual Card top-up',
    amount: '$80.09',
    status: status.deposited,
    logo: adobeIcon,
  },
  {
    name: 'Adobe After Effect',
    date: 'Sat,20 Apr 2020',
    description: 'Adobe after Virtual Card top-up',
    amount: '$80.09',
    status: status.deposited,
    logo: adobeIcon,
  },
  {
    name: 'Adobe After Effect ',
    date: 'Sat,20 Apr 2020',
    description: 'Adobe after Virtual Card top-up',
    amount: '$80.09',
    status: status.deposited,
    logo: adobeIcon,
  },
  {
    name: 'Adobe After Effect',
    date: 'Sat,20 Apr 2020',
    description: 'Adobe after Virtual Card top-up',
    amount: '$80.09',
    status: status.deposited,
    logo: adobeIcon,
  },
];

const headers = ['Name', 'Date', 'Description', 'Amount', 'Status'];

const Page = () => {
  const wallets = [
    {
      label: 'NGN Wallet',
      logo: NG,
      balance: 245800.89,
    },
    {
      label: 'GBP Wallet',
      logo: UK,
      balance: 245800.89,
    },
    {
      label: 'USD Wallet',
      logo: USA,
      balance: 245800.89,
    },
  ];

  const THeaderData = (
    <TableRow className='border-none hover:bg-transparent'>
      {headers.map((header, index) => (
        <TableHead
          key={`${header}__${index}__key`}
          className={cn('', {
            'md:w-[25%] min-w-[150px]': index === 0,
          })}
        >
          {header}
        </TableHead>
      ))}
    </TableRow>
  );

  const TBodyData = invoices.map((tableData, index) => {
    return (
      <TableRow key={`${tableData}__${index}__key`} className='h-[46px]'>
        <TableCell className='font-medium'>
          <span className='flex items-center gap-2'>
            <Image src={tableData.logo} alt='' />
            {tableData.name}
          </span>
        </TableCell>
        <TableCell>{tableData.date}</TableCell>
        <TableCell>{tableData.description}</TableCell>
        <TableCell>{tableData.amount}</TableCell>
        <TableCell>
          <span
            className={cn(
              'rounded-[10px] text-xs leading-[14.03px] px-[3.5px] py-[3px]',
              {
                'text-status-green-text bg-status-green-bg':
                  tableData.status.toLowerCase() ===
                  status.deposited.toLowerCase(),
              }
            )}
          >
            <span>{tableData.status}</span>
          </span>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div className='bg-primary-200 min-h-[100dvh] overflow-y-hidden mb-5 '>
      <ApllicationHeader
        label='My wallets'
        desc='Manage all your wallets from here'
      />

      <motion.div
        initial='hidden'
        animate='visible'
        variants={containerVariants}
        className='mt-6 flex flex-col gap-6'
      >
        <BentoWrapper className='w-full min-h-[230px]  flex flex-col justify-between font-karla'>
          <div className='flex justify-between items-end'>
            <div className='flex flex-col gap-2'>
              <p className='text-sm leading-[20px] text-gray-200'>
                Your consolidated balance
              </p>
              <p className='font-semibold text-[23px] md:text-[28px] leading-[28.06px]'>
                ${' '}
                <CountUp
                  end={34780267.08}
                  decimalPlaces={2}
                  decimals={2}
                  decimal='.'
                  duration={2}
                />
              </p>
            </div>

            <div className='flex items-center gap-5'>
              <Button
                variant={'default'}
                className='h-[40px] px-2.5 text-[14px]'
              >
                <PlusIcon className='hidden md:block' />
                Add New Wallet
              </Button>

              <CircleEllipsis className='w-[24px] h-[24px] text-nav-active hidden md:block' />
            </div>
          </div>

          <div className='flex overflow-auto w-full gap-[24px] overflow-y-hidden'>
            {wallets.map((wallet, index) => (
              <WalletCard
                key={`${wallet}_${index}__key`}
                label={wallet.label}
                logo={wallet.logo}
                balance={wallet.balance}
              />
            ))}
          </div>
        </BentoWrapper>

        <BentoWrapper className='w-full min-h-[60dvh] md:basis-[51.8%] font-karla flex flex-col gap-5'>
          <div className='flex justify-between items-center gap-4'>
            <p className='text-white font-semibold text-[24px] leading-[28.06px]'>
              Recent Transactions
            </p>
            <Button
              variant={'ghost'}
              className='text-sm h-[28px] font-semibold leading-[20px] text-purple-200 hover:bg-transparent hover:text-purple-200'
            >
              See All
            </Button>
          </div>
          <TableComponent
            TBodyData={TBodyData}
            THeaderData={THeaderData}
            totalNoOfRows={5}
            totalNoOfCells={5}
          />
        </BentoWrapper>
      </motion.div>
    </div>
  );
};

export default Page;
