'use client';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function Input({
  id,
  label,
  type,
  placeholder,
  disabled,
}: InputProps) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className="border border-gray-300 rounded-md w-full px-3 py-2 mt-1 mb-5 text-sm"
    />
  );
}
