import { Table, TableBody, TableHeader } from '@/components/ui/table';

interface ITableProps {
  TBodyData: React.ReactElement<HTMLTableRowElement>[];
  THeaderData: React.ReactElement<HTMLTableRowElement>;
}

export function TableComponent(props: ITableProps) {
  const { TBodyData, THeaderData } = props;
  return (
    <Table>
      <TableHeader>{THeaderData}</TableHeader>
      <TableBody>{TBodyData}</TableBody>
    </Table>
  );
}
