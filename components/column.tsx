import {ReactNode} from 'react';
import {Box, Card} from "@mui/material";

interface RowInterface {
  children: ReactNode;
  gap?: string;
  padding?: string;
}

export const Column = ({children, gap, padding}: RowInterface) => {
  const styleColumn = {
    display: 'flex',
    flexDirection: 'column',
    gap: gap ?? '1rem',
    background: 'none',
    padding: padding ?? '0',
  };

  return (
    <Box sx={styleColumn}>
      {children}
    </Box>
  );
};