import React, { useState } from 'react';
import { Home, Search, Heart, User, ShoppingBag } from 'lucide-react';
import { Outlet } from 'react-router';

interface NavItem {
    id: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
}

const navItems: NavItem[] = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'favorites', icon: Heart, label: 'Favorites' },
    { id: 'shop', icon: ShoppingBag, label: 'Shop' },
    { id: 'profile', icon: User, label: 'Profile' },
];

export default function AppLayout() {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className="flex flex-col flex-1 w-full relative">
            {/* Main Content Area */}
            <main className="flex-1 w-full overflow-auto">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <nav className="sticky bottom-0 left-0 w-full bg-background border-t border-border shadow-lg">
                <div className="flex items-center h-16 justify-around px-2 ">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex flex-col items-center justify-center min-w-0 flex-1 px-1 py-2 text-xs font-medium transition-colors duration-200 ${isActive
                                        ? 'text-primary'
                                        : 'text-muted-foreground'
                                    }`}
                            >
                                <Icon
                                    className={`w-5 h-5 mb-1 ${isActive ? 'text-primary' : 'text-muted-foreground'
                                        }`}
                                />
                                <span className="truncate">
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}