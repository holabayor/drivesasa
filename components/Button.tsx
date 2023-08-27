'use client';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export default function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
    bg-white hover:bg-gray-200 uppercase text-[8px] text-blue-900 font-semibold py-2 px-6 border rounded shadow"
    >
      {label}
    </button>
  );
}
