'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User, ShoppingCart, Bell } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/Button";
import Image from 'next/image';

const links = [
  { name: 'الرئيسية', href: '/' },
  { name: 'المتجر', href: '/store' },
  { name: 'الوظائف', href: '/jobs' },
  { name: 'التدريب', href: '/training' },
  { name: 'المجتمع', href: '/community' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
        
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 10 }}
              className="bg-primary text-white p-2 rounded-lg transition-all duration-300 group-hover:bg-primary/90"
            >
              <Image
                src="/logo-icon.png"
                alt="NursLink Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </motion.div>
            
            <motion.div className="hidden sm:flex flex-col">
              <span className="text-xl font-bold text-primary group-hover:text-primary/80">
                Nurs
              </span>
              <span className="text-xs font-medium text-gray-600 group-hover:text-gray-800">
                Link
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-2 py-1 font-medium ${
                pathname === link.href ? 'text-primary' : 'text-gray-600 hover:text-primary'
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary">
            <Bell className="h-5 w-5" />
            <span className="sr-only">الإشعارات</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">عربة التسوق</span>
          </Button>
          <Button variant="outline" className="gap-2">
            <User className="h-4 w-4" />
            تسجيل الدخول
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="قائمة التنقل"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t"
            >
              <div className="flex flex-col px-4 py-3 space-y-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-3 py-2 rounded-md font-medium ${
                      pathname === link.href 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile Actions */}
                <div className="flex flex-col gap-2 pt-4 border-t mt-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <User className="h-4 w-4" />
                    تسجيل الدخول
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    العربة
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}