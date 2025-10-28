interface InputProps {
    type?: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full p-2 rounded-md bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none ${className}`}
    />
  );
}