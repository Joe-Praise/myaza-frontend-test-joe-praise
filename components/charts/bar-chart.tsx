'use client';
import arrowDown from '@/public/images/arrow-down-purple.png';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from '@/components/ui/chart';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useState } from 'react';
import Image from 'next/image';

const chartData = [
  { month: 'January', income: 18, outcome: 8 },
  { month: 'February', income: 15, outcome: 20 },
  { month: 'March', income: 27, outcome: 12 },
  { month: 'April', income: 13, outcome: 19 },
  { month: 'May', income: 29, outcome: 13 },
  { month: 'June', income: 24, outcome: 14 },
];

const chartConfig = {
  income: {
    label: 'Income',
    color: 'var(--chart-2)',
  },
  outcome: {
    label: 'Outcome',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig;

export interface payloadDetails {
  fill: string;
  radius: number;
  className: string;
  dataKey: string;
  name: string;
  color: string;
  value: number;
  payload: Payload;
  hide: boolean;
}

export interface Payload {
  month: string;
  income: number;
  outcome: number;
}

const dates = [
  {
    label: '2022',
    value: '2022',
  },
  {
    label: '2023',
    value: '2023',
  },
  {
    label: '2024',
    value: '2024',
  },
  {
    label: '2025',
    value: '2025',
  },
];

export function BarChartComponent() {
  const [date, setDate] = useState(dates[2].label);

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: payloadDetails[];
    label?: string;
  }) => {
    if (!active || !payload || !payload.length) return null;

    const bgColor = payload[1].color || '#4c3b72';
    console.log('payload', payload);

    return (
      <div
        className='rounded-lg p-2 text-white shadow-md'
        style={{ backgroundColor: bgColor }}
      >
        <p className='text-sm font-medium'>
          {label} {date}
        </p>
        <p className='text-base font-semibold'>
          ${payload[1].value.toLocaleString()}K
        </p>
      </div>
    );
  };

  return (
    <Card className='bg-primary-100 h-full border-none font-karla w-full'>
      <CardHeader>
        <CardTitle className='flex justify-between items-center flex-wrap gap-4'>
          <p className='text-white font-semibold text-lg md:text-[24px] leading-tight'>
            Analytics
          </p>

          <div className='flex flex-wrap gap-3 items-center'>
            <div className='flex items-center gap-2'>
              <div className='rounded-full size-3 bg-chart-2'></div>
              <p className='text-white font-bold text-sm leading-tight'>
                Income
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <div className='rounded-full size-3 bg-chart-1'></div>
              <p className='text-white font-bold text-sm leading-tight'>
                Outcome
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className='w-auto min-w-[50px] h-6 text-xs text-purple-200 flex items-center p-2 rounded-md border border-purple-200'>
                <p className='leading-tight'>{date}</p>
                <Image
                  src={arrowDown}
                  alt='Dropdown icon'
                  className='text-purple-200'
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-primary-200 text-white'>
                <DropdownMenuGroup>
                  {dates.map((period, index) => (
                    <DropdownMenuItem
                      key={`${period}__${index}_key`}
                      onClick={() => setDate(period.label)}
                    >
                      {period.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='h-full w-full'>
        <ChartContainer
          config={chartConfig}
          className='w-full h-auto min-h-[200px] max-h-[257px]'
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            className='text-purple-200'
          >
            <CartesianGrid vertical={false} strokeDasharray='4 4' />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey='income'
              width={45}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value + 'K'}
            />
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Bar
              dataKey='outcome'
              fill='var(--color-outcome)'
              radius={4}
              barSize={6.03}
            />
            <Bar
              dataKey='income'
              fill='var(--color-income)'
              radius={4}
              barSize={6.03}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
