interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export function Button({ label, onClick, type = "button", className }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`mt-2 w-full
         py-2 rounded-md
          bg-[#e7b672]
           text-black
            font-semibold
             hover:bg-[#d9a85f]
              transition-colors
               ${className}`}
    >
      {label}
    </button>
  );
}
