import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface EntitiesGridCardProps {
  children: ReactNode;
  to: string;
}

export const EntitiesGridCard = ({ children, to }: EntitiesGridCardProps) => {
  return (
    <Link to={to}>
      <div className='p-2 bg-amber-100 size-36'>{children}</div>
    </Link>
  );
};
