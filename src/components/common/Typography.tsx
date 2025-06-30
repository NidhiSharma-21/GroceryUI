import React from 'react';
import theme from '../../theme/theme';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'subtitle' | 'body' | 'caption';
  color?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const variantMap = {
  h1: 'text-3xl font-bold',
  h2: 'text-2xl font-bold',
  h3: 'text-xl font-semibold',
  subtitle: 'text-lg font-medium',
  body: 'text-base',
  caption: 'text-xs',
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = theme.colors.text,
  className = '',
  children,
  style = {},
}) => {
  const Tag =
    variant === 'h1' ? 'h1' :
    variant === 'h2' ? 'h2' :
    variant === 'h3' ? 'h3' :
    'span';
  return (
    <Tag
      className={`${variantMap[variant]} ${className}`}
      style={{ color, fontFamily: 'Roboto', ...style }}
    >
      {children}
    </Tag>
  );
};

export default Typography; 