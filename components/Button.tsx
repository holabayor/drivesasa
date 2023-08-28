'use client';

interface ButtonProps {
  label: string;
  white?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export default function Button({
  label,
  white,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
    uppercase text-[8px] 
     font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-lg transition
     ${
       white
         ? 'bg-white border-white text-[#10255A]'
         : 'bg-[#10255A] border-[#10255A] text-white'
     }
    `}
    >
      {label}
    </button>
  );
}
