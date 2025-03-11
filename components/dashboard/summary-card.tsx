import React from 'react';
import BentoWrapper from '../shared/BentoWrapper';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import CountUp from 'react-countup';

export enum Trend {
  rise = 'rise',
  fall = 'fall',
}

interface ISummaryCardProps {
  trend: Trend;
  label: string;
  amount: number;
  percentage: number;
  currencySymbol: string;
}

const SummaryCard = (props: ISummaryCardProps) => {
  const { trend, label, amount, percentage, currencySymbol } = props;
  return (
    <BentoWrapper className='font-karla w-full  max-w-[282px] p-[16px] bg-primary-100'>
      <div className='flex items-end gap-[15px] md:gap-0 justify-between'>
        <div
          className={cn(
            'flex justify-center items-center size-10 rounded-[4px] bg-amber-400',
            {
              'bg-background-icon-income':
                label.toLowerCase() === 'Total Income'.toLowerCase(),
              'bg-background-icon-outcome':
                label.toLowerCase() === 'Total Outcome'.toLowerCase(),
            }
          )}
        >
          {label.toLowerCase() === 'Total Income'.toLowerCase() ? (
            <ArrowDownRight />
          ) : (
            <ArrowUpRight />
          )}
        </div>
        <div className='flex flex-col justify-between w-[200px] md:w-[130px]'>
          <p className='text-sm leading-[20px] text-purple-200'>{label}</p>
          <p className='font-semibold text-2xl leading-[28.06px]'>
            {currencySymbol}
            <CountUp
              end={amount}
              decimalPlaces={3}
              decimals={3}
              decimal='.'
              duration={2}
            />
            {/* {formatAmount(amount)} */}
          </p>
        </div>
        <div className=''>
          <div
            className={cn(
              'rounded-[10px] text-xs leading-[14.03px] px-[6px] py-[3px]',
              {
                'text-status-green-text bg-status-green-bg':
                  trend.toLowerCase() === Trend.rise.toLowerCase(),
                'text-status-red-text bg-status-red-bg':
                  trend.toLowerCase() === Trend.fall.toLowerCase(),
              }
            )}
          >
            <p>+{percentage}%</p>
          </div>
        </div>
      </div>
    </BentoWrapper>
  );
};

export default SummaryCard;
