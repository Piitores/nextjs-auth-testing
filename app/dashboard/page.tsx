'use client'

import { useState } from 'react'
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  CalendarIcon, 
  CogIcon,
  MenuIcon,
  XIcon,
  BellIcon,
  UserCircleIcon
} from '@heroicons/react/outline'

const stats = [
  { name: 'Total Users', stat: '71,897', icon: UserGroupIcon, change: '+12%', changeType: 'increase' },
  { name: 'Avg. Session', stat: '58.16%', icon: ChartBarIcon, change: '+4.75%', changeType: 'increase' },
  { name: 'Active Projects', stat: '24', icon: CalendarIcon, change: '-2', changeType: 'decrease' },
]

const navigation = [
  { name: 'Dashboard', href: '#', icon: ChartBarIcon, current: true },
  { name: 'Team', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Projects', href: '#', icon: CalendarIcon, current: false },
  { name: 'Settings', href: '#', icon: CogIcon, current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className={classNames(
        sidebarOpen ? 'block' : 'hidden',
        'fixed inset-0 z-40 lg:hidden'
      )}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-gray-800">
          <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
            <img className="h-8 w-auto" src="/logo.png" alt="Your Company" />
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                  )}
                >
                  <item.icon className="mr-3 h-6 w-6 flex-shrink-0" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
          <div className="flex h-16 flex-shrink-0 items-center bg-gray-900 px-4">
            <img className="h-8 w-auto" src="/logo.png" alt="Your Company" />
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                  )}
                >
                  <item.icon className="mr-3 h-6 w-6 flex-shrink-0" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col lg:pl-64">
        {/* Top header */}
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1">
              <h1 className="text-2xl font-semibold text-gray-900 my-auto">Dashboard</h1>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">Open user menu</span>
                    <UserCircleIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <main className="flex-1 pb-8">
          <div className="mt-8">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-lg font-medium leading-6 text-gray-900">Overview</h2>
              <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card stats */}
                {stats.map((item) => (
                  <div
                    key={item.name}
                    className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
                  >
                    <dt>
                      <div className="absolute rounded-md bg-indigo-500 p-3">
                        <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                    </dt>
                    <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                      <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                      <p
                        className={classNames(
                          item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                          'ml-2 flex items-baseline text-sm font-semibold'
                        )}
                      >
                        {item.change}
                      </p>
                    </dd>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity list */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-8">
              <h2 className="text-lg font-medium leading-6 text-gray-900">Recent Activity</h2>
              <div className="mt-2 overflow-hidden rounded-lg bg-white shadow">
                <ul role="list" className="divide-y divide-gray-200">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <UserCircleIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900">
                            User completed action {item}
                          </p>
                          <p className="truncate text-sm text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Completed
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}