import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

// Components
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

// Toast Notifications
import { Toaster } from "sonner";

// إعداد الخطوط
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadata للموقع (اختياري هنا إذا كنت تستخدمه في ملف منفصل مثل metadata.ts)
export const metadata = {
  title: "NursLink | المنصة الرائدة للممرضين",
  description: "منصة NursLink لربط الممرضين بأفضل الفرص التدريبية والوظيفية.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}>
        
        {/* ✅ شريط التنقل */}
        <Navbar />

        {/* ✅ محتوى الصفحة الرئيسي */}
        <main className="flex-1">{children}</main>

        {/* ✅ الفوتر */}
        <Footer />

        {/* ✅ نظام الإشعارات */}
        <Toaster position="top-right" richColors />
        
      </body>
    </html>
  );
}
