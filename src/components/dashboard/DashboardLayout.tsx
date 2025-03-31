import { ReactNode } from "react";
import Link from "next/link";
import { Home, Settings, Users, BarChart } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
          <div className="flex items-center flex-shrink-0 px-4">
            <span className="text-xl font-bold text-brand-600">
              SaaS<span className="text-gray-700">Template</span>
            </span>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center px-2 py-2 text-sm font-medium rounded-md bg-brand-50 text-brand-600">
                <Home className="mr-3 h-5 w-5 text-brand-500" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/analytics"
                className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <BarChart className="mr-3 h-5 w-5 text-gray-400" />
                Analytics
              </Link>
              <Link
                href="/dashboard/users"
                className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <Users className="mr-3 h-5 w-5 text-gray-400" />
                Team
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <Settings className="mr-3 h-5 w-5 text-gray-400" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="w-full">
          <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
            <div className="flex-1 flex px-4 sm:px-6">
              <div className="flex-1 flex items-center">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
              </div>
              <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
                <div className="relative flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
