import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const CoffeeIcon: React.FC<IconProps> = ({ size = 48, color = '#795548' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18H32V32C32 36.4 28.4 40 24 40H18C13.6 40 10 36.4 10 32V18Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="3" strokeLinejoin="round" />
    <path d="M32 22H36C38.2 22 40 23.8 40 26C40 28.2 38.2 30 36 30H32" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 12C15 10 17 9 17 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M21 13C21 11 23 10 23 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M27 12C27 10 29 9 29 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M6 42H36" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const WineIcon: React.FC<IconProps> = ({ size = 48, color = '#C2185B' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10C14 10 13 22 24 25C35 22 34 10 34 10H14Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="3" strokeLinejoin="round" />
    <path d="M17 19C17 19 20 22 24 22C28 22 31 19 31 19" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M24 25V39" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M16 39H32" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M38 12C38 14 36 15 36 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="1 3" />
  </svg>
);

export const KimchiIcon: React.FC<IconProps> = ({ size = 48, color = '#E53935' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="24" cy="28" rx="16" ry="10" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="3" />
    <path d="M12 28C14 20 20 18 24 16C28 18 34 20 36 28" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M22 13C24 10 28 9 30 8" stroke="#388E3C" strokeWidth="3" strokeLinecap="round" />
    <circle cx="21" cy="24" r="1.5" fill={color} />
    <circle cx="27" cy="25" r="1.5" fill={color} />
    <circle cx="24" cy="29" r="1.5" fill={color} />
    <path d="M10 30C12 36 18 39 24 39C30 39 36 36 38 30" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const OilIcon: React.FC<IconProps> = ({ size = 48, color = '#F57C00' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8C24 8 13 22 13 30C13 36.075 17.925 41 24 41C30.075 41 35 36.075 35 30C35 22 24 8 24 8Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="3" strokeLinejoin="round" />
    <path d="M28 26C28 29.5 25.5 33 22 33" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="34" cy="14" r="2" fill={color} />
    <circle cx="12" cy="19" r="1.5" fill={color} />
  </svg>
);

export const BloodIcon: React.FC<IconProps> = ({ size = 48, color = '#B71C1C' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 7C24 7 12 21 12 30C12 36.627 17.373 42 24 42C30.627 42 36 36.627 36 30C36 21 24 7 24 7Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="3" strokeLinejoin="round" />
    <path d="M24 23V33" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M19 28H29" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

export const ChocolateIcon: React.FC<IconProps> = ({ size = 48, color = '#5D4037' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="11" y="11" width="26" height="26" rx="4" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="3" />
    <line x1="24" y1="11" x2="24" y2="37" stroke={color} strokeWidth="2.5" />
    <line x1="11" y1="24" x2="37" y2="24" stroke={color} strokeWidth="2.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" fill={color} fillOpacity="0.4" />
    <rect x="27" y="14" width="7" height="7" rx="1.5" fill={color} fillOpacity="0.4" />
    <rect x="14" y="27" width="7" height="7" rx="1.5" fill={color} fillOpacity="0.4" />
    <rect x="27" y="27" width="7" height="7" rx="1.5" fill={color} fillOpacity="0.4" />
  </svg>
);

export const InkIcon: React.FC<IconProps> = ({ size = 48, color = '#1565C0' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6L32 18L28 26L20 26L16 18L24 6Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="3" strokeLinejoin="round" />
    <line x1="24" y1="6" x2="24" y2="20" stroke={color} strokeWidth="2" />
    <circle cx="24" cy="20" r="2" fill={color} />
    <path d="M20 26L18 36H30L28 26" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="34" cy="36" r="2.5" fill={color} />
    <circle cx="38" cy="41" r="1.5" fill={color} />
  </svg>
);

export const CosmeticsIcon: React.FC<IconProps> = ({ size = 48, color = '#D81B60' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="24" width="16" height="17" rx="3" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="3" />
    <path d="M19 24V14C19 14 24 10 27 12V24" fill={color} fillOpacity="0.6" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
    <line x1="16" y1="29" x2="32" y2="29" stroke={color} strokeWidth="2" />
    <path d="M35 18C37 18 38 19 38 21" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MudIcon: React.FC<IconProps> = ({ size = 48, color = '#6D4C41' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 35C10 29 18 32 23 28C27 24 35 27 40 33C42 35 39 39 35 39H12C8.5 39 6.5 38 8 35Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="3" strokeLinejoin="round" />
    <circle cx="16" cy="22" r="3" fill={color} fillOpacity="0.5" />
    <circle cx="28" cy="18" r="4" fill={color} fillOpacity="0.6" />
    <circle cx="36" cy="22" r="2.5" fill={color} fillOpacity="0.5" />
    <circle cx="20" cy="13" r="2" fill={color} fillOpacity="0.4" />
  </svg>
);

export const SweatIcon: React.FC<IconProps> = ({ size = 48, color = '#00897B' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11L20 14C22 15 26 15 28 14L32 11L39 16L35 22L33 21V38H15V21L13 22L9 16L16 11Z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M24 23C24 23 20 27.5 20 30C20 32.2 21.8 34 24 34C26.2 34 28 32.2 28 30C28 27.5 24 23 24 23Z" fill={color} stroke={color} strokeWidth="2" />
    <path d="M38 27C38 27 36 29.5 36 31C36 32 37 33 38 33C39 33 40 32 40 31C40 29.5 38 27 38 27Z" fill={color} />
  </svg>
);

export const StainIcon: React.FC<{ id: string; color?: string; size?: number }> = ({
  id,
  color,
  size = 48
}) => {
  switch (id) {
    case 'coffee':
      return <CoffeeIcon size={size} color={color} />;
    case 'wine':
      return <WineIcon size={size} color={color} />;
    case 'kimchi':
      return <KimchiIcon size={size} color={color} />;
    case 'oil':
      return <OilIcon size={size} color={color} />;
    case 'blood':
      return <BloodIcon size={size} color={color} />;
    case 'chocolate':
      return <ChocolateIcon size={size} color={color} />;
    case 'ink':
      return <InkIcon size={size} color={color} />;
    case 'cosmetics':
      return <CosmeticsIcon size={size} color={color} />;
    case 'mud':
      return <MudIcon size={size} color={color} />;
    case 'sweat':
      return <SweatIcon size={size} color={color} />;
    default:
      return null;
  }
};
