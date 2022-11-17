import {ReactNode} from 'react';
import {Card} from "@mui/material";

interface RowInterface {
  children: ReactNode;
  gap?: string;
}

export const Row = ({children, gap}: RowInterface) => {
  const styleRow = {
    display: 'flex',
    flexDirection: 'row',
    gap: gap ?? '1rem',
    backgroundColor: 'none',
  };

  return (
    <Card sx={styleRow}>
      {children}
    </Card>
  );
};