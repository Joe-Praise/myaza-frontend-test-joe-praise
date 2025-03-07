'use client';

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import arrowDown from '@/public/images/arrow-down-purple.png';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Button } from '../ui/Button';
import { useState } from 'react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
const chartData = [{ 'Daily payment': 70, Hobby: 20, Neutral: 10 }];

const chartConfig = {
  'daily-payment': {
    label: 'Daily payment',
    color: 'var(--chart-1)',
  },
  hobby: {
    label: 'Hobby',
    color: 'var(--chart-2)',
  },
  neutral: {
    label: 'Neutral',
    color: 'var(--radialchart-empty-state)',
  },
} satisfies ChartConfig;

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export function ActivityChart() {
  const totalVisitors = 70;

  const [, setMonth] = useState<string | null>(null);

  return (
    <Card className='flex flex-col  bg-transparent h-full border-none shadow-none p-0'>
      <CardHeader>
        <CardTitle className='flex justify-between items-center flex-wrap gap-4'>
          <p className='text-white font-semibold text-lg md:text-[24px] leading-tight'>
            Analytics
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger className='w-auto min-w-[50px] h-6 text-xs text-purple-200 flex items-center p-2 rounded-md border border-purple-200'>
              <p className='leading-tight'>Months</p>
              <Image
                src={arrowDown}
                alt='Dropdown icon'
                className='text-purple-200'
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-primary-200 text-white'>
              <DropdownMenuGroup>
                {months.map((period, index) => (
                  <DropdownMenuItem
                    key={`${period}__${index}_key`}
                    onClick={() => setMonth(period)}
                  >
                    {period}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col flex-1 items-center pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto  w-full max-w-[250px] flex justify-center items-center'
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={150}
            cx='50%'
            cy='80%'
            className=''
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle'>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className='font-karla fill-white text-[16.61px] font-bold'
                        >
                          {totalVisitors.toLocaleString() + '%'}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey='Neutral'
              fill='var(--color-neutral)'
              stackId='a'
              cornerRadius={5}
              className='stroke-transparent stroke-2'
            />
            <RadialBar
              dataKey='Daily payment'
              stackId='a'
              cornerRadius={5}
              maxBarSize={180}
              fill='var(--color-daily-payment)'
              className='stroke-transparent stroke-2'
            />
            <RadialBar
              dataKey='Hobby'
              fill='var(--color-hobby)'
              stackId='a'
              cornerRadius={5}
              className='stroke-transparent stroke-2'
            />
          </RadialBarChart>
        </ChartContainer>
        <div className='w-[80%] md:w-[69%] flex justify-between font-karla'>
          <div>
            <div className='flex items-center gap-2'>
              <div className='rounded-full size-3 bg-chart-2'></div>
              <p className='text-white  leading-[18.7px]'>
                {chartConfig['daily-payment'].label}
              </p>
            </div>
            <p className=' text-center mt-1 text-white text-[16.61px] font-medium'>
              {chartData[0]['Daily payment'] + '%'}
            </p>
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <div className='rounded-full size-3 bg-chart-1'></div>

              <p className='text-white  leading-[18.7px]'>
                {chartConfig.hobby.label}
              </p>
            </div>
            <p className=' text-center mt-1 text-white text-[16.61px] font-medium'>
              {chartData[0].Hobby + '%'}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <Button variant='outline' className='w-full mt-4'>
          See All Activity
        </Button>
      </CardFooter>
    </Card>
  );
}
