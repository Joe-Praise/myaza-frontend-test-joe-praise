'use client';
import { BarChartComponent } from '@/components/charts/bar-chart';
import ApllicationHeader from '@/components/dashboard/apllication-header';
import SummaryCard, { Trend } from '@/components/dashboard/summary-card';
import CreditCardCarousel from '@/components/shared/credit-card-carousel';
import { TableComponent } from '@/components/shared/table';
import { Button } from '@/components/ui/Button';
import { TableCell, TableHead, TableRow } from '@/components/ui/table';
import { cn, containerVariants } from '@/lib/utils';
import Image from 'next/image';
import adobeIcon from '@/public/images/adobe icon.png';
import levisIcon from '@/public/images/levis icon.png';
import mcdonaldsIcon from '@/public/images/mcdonalds icon.png';
import { ActivityChart } from '@/components/charts/activity-chart';
import { motion } from 'framer-motion';
import BentoWrapper from '@/components/shared/BentoWrapper';
import CountUp from 'react-countup';

enum status {
  deposited = 'Deposited',
}
const invoices = [
  {
    name: 'Adobe After Effect',
    date: 'Sat,20 Apr 2020',
    amount: '$80.09',
    status: status.deposited,
    logo: adobeIcon,
  },
  {
    name: 'McDonald’s',
    date: 'Sat,20 Apr 2020',
    amount: '$80.09',
    status: status.deposited,
    logo: mcdonaldsIcon,
  },
  {
    name: 'Levi',
    date: 'Sat,20 Apr 2020',
    amount: '$80.09',
    status: status.deposited,
    logo: levisIcon,
  },
  {
    name: 'Adobe After Effect ',
    date: 'Sat,20 Apr 2020',
    amount: '$80.09',
    status: status.deposited,
    logo: adobeIcon,
  },
  {
    name: 'Levi',
    date: 'Sat,20 Apr 2020',
    amount: '$80.09',
    status: status.deposited,
    logo: levisIcon,
  },
];

const headers = ['Name', 'Date', 'Amount', 'Status'];

const Page = () => {
  // useCountUp({
  //   ref: 'counter',
  //   end: 1,
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 1000,
  // });
  const THeaderData = (
    <TableRow className='border-none hover:bg-transparent'>
      {headers.map((header, index) => (
        <TableHead
          key={`${header}__${index}__key`}
          className={cn('', {
            'md:w-[35%] min-w-[200px]': index === 0,
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
        label='Welcome back, Ali 👋'
        desc='Here’s what’s happening with your store today.'
      />

      <motion.div
        initial='hidden'
        animate='visible'
        variants={containerVariants}
        className='flex flex-wrap w-full gap-10 mt-10'
      >
        <div className='w-full flex flex-col min-h-[465px] gap-10 md:basis-[51.8%] p-0'>
          <div className='flex overflow-auto md:justify-center w-full gap-[24px] overflow-y-hidden'>
            <SummaryCard
              trend={Trend.rise}
              label='Total Income'
              amount={632}
              percentage={1.29}
              currencySymbol={'$'}
            />
            <SummaryCard
              trend={Trend.fall}
              label='Total Outcome'
              amount={632}
              percentage={1.29}
              currencySymbol={'$'}
            />
          </div>
          <BentoWrapper className='w-[97.7%] mx-auto h-[341px] p-1'>
            <BarChartComponent />
          </BentoWrapper>
        </div>

        <BentoWrapper className='w-full min-h-[465px] md:basis-[43.5%] flex flex-col justify-between font-karla'>
          <div className='flex flex-col gap-4'>
            <p className='text-white font-semibold text-[24px] leading-[28.06px]'>
              My Card
            </p>
            <div>
              <div className='flex flex-col justify-between'>
                <p className='text-sm leading-[20px] text-purple-200'>
                  Card Balance
                </p>
                <p className='font-semibold text-2xl leading-[28.06px]'>
                  $
                  <CountUp
                    end={15595.015}
                    decimalPlaces={3}
                    decimals={3}
                    decimal='.'
                    duration={2}
                  />
                  {/* {
                  formatAmount(15595.015)
                } */}
                </p>
              </div>
            </div>
          </div>

          <CreditCardCarousel />

          <div className='flex gap-[23px]'>
            <Button variant={'default'} className='h-10 rounded-[8px]'>
              Manage Cards
            </Button>
            <Button variant={'outline'} className='h-10 rounded-[8px] '>
              Transfer
            </Button>
          </div>
        </BentoWrapper>

        <div className='w-full  min-h-[362px] font-karla  md:basis-[51.8%] p-0  '>
          <BentoWrapper className='w-[97.7%] mx-auto flex flex-col gap-5 h-full'>
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
              totalNoOfCells={4}
            />
          </BentoWrapper>
        </div>

        <BentoWrapper className='w-full min-h-[365px] md:basis-[43.5%]'>
          <ActivityChart />
        </BentoWrapper>
      </motion.div>
    </div>
  );
};

export default Page;
