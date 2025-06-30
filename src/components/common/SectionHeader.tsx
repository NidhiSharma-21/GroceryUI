import React from 'react';
import Button from './Button';
import Typography from './Typography';

interface SectionHeaderProps {
  title: string;
  onSeeAll: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, onSeeAll }) => {
  return (
    <div className="flex items-center justify-between px-6 mt-4 mb-2">
      <Typography variant="h3" className="" >{title}</Typography>
      <span
        className="text-sm text-green-600 font-medium focus:outline-none cursor-pointer"
        style={{ fontFamily: 'Roboto' }}
        onClick={onSeeAll}
      >
        See All
      </span>
    </div>
  );
};

export default SectionHeader; 