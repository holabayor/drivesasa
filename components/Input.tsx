'use client';

interface InputProps {
  type?: string;
  id: string;
  placeholder: string;
  disabled?: boolean;
}

export default function Input({
  type = 'text',
  id,
  placeholder,
  disabled = false,
}: InputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        disabled={disabled}
        className="peer border border-gray-300 rounded-md w-full px-3 py-3 my-2 focus:outline-none focus:ring focus:ring-opacity-40 transition-all duration-300 ease-in-out"
      />
      <label
        htmlFor={id}
        className="ml-4 -mt-11 text-blue-600 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:-mt-8"
      >
        {placeholder}
      </label>
    </div>
  );
}
