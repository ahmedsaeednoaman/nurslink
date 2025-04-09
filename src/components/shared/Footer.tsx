'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="container mx-auto py-10 px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/" className="text-2xl font-bold text-primary">
            NursLink
          </Link>
          <p className="text-sm text-gray-500 mt-2">© 2025 جميع الحقوق محفوظة.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link href="/about" className="text-gray-600 hover:text-primary text-sm transition">
            من نحن
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-primary text-sm transition">
            خدماتنا
          </Link>
          <Link href="/privacy" className="text-gray-600 hover:text-primary text-sm transition">
            سياسة الخصوصية
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary text-sm transition">
            تواصل معنا
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
