import { cn } from '@/lib/utils';
import BentoWrapper from '../shared/BentoWrapper';
import Image, { StaticImageData } from 'next/image';
import CountUp from 'react-countup';

interface IWalletCardProps {
  label: string;
  balance: number;
  logo: StaticImageData;
}
const WalletCard = (props: IWalletCardProps) => {
  const { balance, label, logo } = props;
  return (
    <BentoWrapper className='font-karla w-full max-w-[282px] p-[16px] border-indigo-400 border rounded-[8px]'>
      <div className='flex w-full items-start gap-[8px]'>
        <div
          className={cn(
            'flex justify-center items-center rounded-[22px] bg-white px-[8px] py-[3px]  '
          )}
        >
          <Image src={logo} alt={`${label}'s logo`} className='size-6' />
        </div>
        <div className='w-[200px] flex flex-col justify-between '>
          <p className=' leading-[24px] text-white'>{label}</p>
          <p className='font-medium text-xs leading-[20px] text-gray-200'>
            Balance:{' '}
            <CountUp
              end={balance}
              decimalPlaces={2}
              decimals={2}
              decimal='.'
              duration={2}
            />
            {/* {formatAmount(balance)} */}
          </p>
        </div>
      </div>
    </BentoWrapper>
  );
};

export default WalletCard;
