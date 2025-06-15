import AppHeader from "@/components/app-header";
import { Column } from "@/components/view";
import { Outlet, useLocation } from "react-router";

export default function AuthLayout() {
    const location = useLocation();


    const getPageTitle = () => {
        switch (location.pathname) {
            case '/sign-up':
                return 'Sign Up';
            case '/sign-in':
                return 'Sign In';
            case '/forgot-password':
                return 'Forgot Password';
            case '/verify-email':
                return 'Verify Email';
            case '/reset-password':
                return 'Reset Password';
            default:
                return 'Authentication';
        }
    };

    return (
        <Column className="flex-1 justify-center items-center">
            <AppHeader title={getPageTitle()} />
            <Column className="space-y-6 flex-1 w-full justify-center items-center p-4">
                <Outlet />
            </Column>
        </Column>
    );
}