import { useNavigate, useLocation } from "react-router";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
    fallbackPath?: string;
    className?: string;
    onClick?: () => void; // Custom handler
}

export default function BackButton({
    fallbackPath = '/',
    className,
    onClick
}: BackButtonProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBackClick = () => {
        // If custom onClick is provided, use it
        if (onClick) {
            onClick();
            return;
        }

        // Check if we came from within the app (more reliable than window.history.length)
        if (location.key !== 'default') {
            navigate(-1);
        } else {
            // Fallback to specified path or home page
            navigate(fallbackPath);
        }
    };

    return (
        <Button 
            variant="ghost" 
            size="icon" 
            className={className}
            onClick={handleBackClick}
            aria-label="Go back"
        >
            <ArrowLeft className="size-5" />
        </Button>
    );
}