'use client';

interface InputProps {
  type?: string;
  placeholder: string;
  disabled?: boolean;
}

export default function Input({
  type = 'text',
  placeholder,
  disabled = false,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className="border border-gray-300 rounded-md w-full px-3 py-2 mt-1 mb-5 text-sm"
    />
  );
}
