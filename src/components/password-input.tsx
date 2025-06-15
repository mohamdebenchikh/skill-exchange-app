import { useState } from "react";
import { Input } from "./ui/input";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
    placeholder?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
    inputClassName?: string;
}

export default function PasswordInput({
    placeholder = "Password",
    value,
    onValueChange,
    className = "",
    inputClassName = ""
}: PasswordInputProps) {
    const [show, setShow] = useState(false);
    const [internalValue, setInternalValue] = useState("");
    const inputValue = value !== undefined ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onValueChange) {
            onValueChange(e.target.value);
        } else {
            setInternalValue(e.target.value);
        }
    };

    return (
        <div className={`relative ${className}`}>
            <Input
                type={show ? "text" : "password"}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
                className={`pr-10 ${inputClassName}`}
            />
            <button
                type="button"
                onClick={() => setShow((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
                tabIndex={-1}
            >
                {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                <span className="sr-only">{show ? "Hide password" : "Show password"}</span>
            </button>
        </div>
    );
}