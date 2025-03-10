'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';

interface ITableProps {
  TBodyData: React.ReactElement<HTMLTableRowElement>[];
  THeaderData: React.ReactElement<HTMLTableRowElement>;
  totalNoOfCells?: number;
  totalNoOfRows?: number;
  noLoader?: boolean;
}

export function TableComponent(props: ITableProps) {
  const {
    TBodyData,
    THeaderData,
    totalNoOfCells = 4,
    totalNoOfRows = 5,
    noLoader,
  } = props;

  const [isLoading, setIsLoading] = useState(true);

  const TBodyLoadingData = [...Array(totalNoOfRows)].map((_, rowIndex) => (
    <TableRow key={`loading_row_${rowIndex}`} className='h-[46px]'>
      {[...Array(totalNoOfCells)].map((_, cellIndex) => (
        <TableCell key={`loading_cell_${cellIndex}`} className='p-2'>
          <Skeleton className='h-6 w-full bg-nav-active/50' />
        </TableCell>
      ))}
    </TableRow>
  ));

  useEffect(() => {
    if (noLoader) return;
    const delayFunc = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    delayFunc();
  }, [noLoader]);

  return (
    <Table>
      <TableHeader>{THeaderData}</TableHeader>
      <TableBody>{isLoading ? TBodyLoadingData : TBodyData}</TableBody>
    </Table>
  );
}
