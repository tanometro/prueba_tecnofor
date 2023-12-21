import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TaskProvider } from '@/context/TaskContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tecnofor-TODO-APP',
  description: 'A great todo-app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  )
};