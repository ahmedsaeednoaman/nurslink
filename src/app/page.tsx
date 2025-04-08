'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import "../styles/globals.css";

export default function HomePage() {
  return (
    <main className="bg-background text-text-primary font-inter">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-24 text-center px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            منصة <span className="text-accent">NursLink</span> لربط التمريض الذكي
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-accent"
          >
            وظائف • تدريب • مجتمع • متجر — كل ما تحتاجه في مكان واحد
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link href="/auth/register">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-full shadow-md hover:bg-gray-100 transition text-lg">
                ابدأ الآن
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white text-center px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              لماذا NursLink؟
            </h2>
            <p className="text-gray-600 text-lg">
              نساعدك على النمو المهني وربطك بالفرص الأفضل
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "فرص عمل موثوقة", desc: "نربطك بأفضل المستشفيات والمؤسسات الصحية في مصر والخليج.", icon: "🩺" },
              { title: "مجتمع تفاعلي", desc: "انضم إلى مجتمع ممرضين يدعم بعضه بالمعرفة والخبرة.", icon: "🤝" },
              { title: "تدريب احترافي", desc: "احصل على دورات معتمدة تطور من مهاراتك الطبية.", icon: "🎓" },
              { title: "دعم قانوني", desc: "احصل على استشارات تحميك وتحفظ حقوقك كممرض.", icon: "⚖️" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-accent text-primary rounded-2xl p-6 shadow hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Join Community */}
      <section className="py-20 bg-primary text-white text-center px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            جاهز تنضم لأكبر مجتمع تمريضي في مصر؟
          </h2>
          <p className="text-lg">
            سجل كممرض أو كمؤسسة وابدأ استخدام المنصة الآن!
          </p>
          <Link href="/auth/register-nurse">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition text-lg shadow">
              سجل كممرض الآن
            </button>
          </Link>
        </div>
      </section>

      {/* Posts & Publications Section */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-3xl font-bold mb-12 text-primary">
          المنشورات والمؤلفات
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "📘 دليل أساسيات التمريض الحديث", desc: "محتوى عملي يساعدك على فهم الرعاية الصحية." },
            { title: "📝 اجتياز اختبارات التصنيف المهني", desc: "أهم النصائح للتفوق في اختبارات التمريض." },
            { title: "📚 قواعد السلامة المهنية للممرضين", desc: "طرق حماية الممرض قانونياً وأخلاقياً." }
          ].map((post, idx) => (
            <div key={idx} className="bg-accent rounded-2xl shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-text-secondary">{post.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/posts">
            <button className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-secondary transition text-lg shadow">
              استكشف كل المنشورات
            </button>
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-accent text-center px-6">
        <h2 className="text-3xl font-bold mb-12 text-primary">
          إحصائيات المنصة
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { label: "ممرض/ممرضة مسجلين", value: "27,000+" },
            { label: "وظيفة متاحة", value: "1,200+" },
            { label: "ساعات تدريبية مكتملة", value: "9,500+" },
            { label: "مستخدم نشط", value: "15,000+" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Legal Support Section */}
      <section className="py-20 bg-white text-center px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-primary">
            استشارات قانونية للممرضين
          </h2>

          <p className="text-lg text-text-secondary mb-10">
            احمِ مسارك المهني بمصادر قانونية موثوقة.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "ما حقوق الممرض أثناء العمل في القطاع الخاص؟",
              "كيف أحمي نفسي قانونياً أثناء المهنة؟",
              "هل أرفض وردية إضافية دون إنذار؟",
              "ما الإجراءات القانونية إذا تعرضت لمشكلة في العمل؟"
            ].map((q, idx) => (
              <div key={idx} className="bg-accent text-primary rounded-2xl p-6 shadow hover:shadow-md transition text-sm">
                {q}
              </div>
            ))}
          </div>

          <Link href="/legal-support">
            <button className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-secondary transition text-lg shadow">
              الاستشارات القانونية
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white text-center px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              آراء عملائنا
            </h2>
            <p className="text-gray-600 text-lg">
              ماذا يقولون عن تجربتهم مع منصة NursLink
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "أحمد محمد",
                role: "ممرض أول - مستشفى السلام",
                content: "المنصة ساعدتني في الحصول على فرصة عمل ممتازة في وقت قياسي، شكرًا لكم!",
                image: "/testimonials/1.jpg"
              },
              {
                name: "مريم خالد",
                role: "ممرضة أطفال - عيادات الشرق",
                content: "المجتمع التفاعلي ساعدني في حل مشكلة عملية واجهتها مع مريض.",
                image: "/testimonials/2.jpg"
              },
              {
                name: "علي سعيد",
                role: "مدير تمريض - دار الرعاية",
                content: "وفرت علينا وقت وجهد في إيجاد كوادر تمريضية مؤهلة بمعايير عالية.",
                image: "/testimonials/3.jpg"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-md transition-all text-right"
              >
                <div className="flex items-center justify-end gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-secondary to-primary text-white text-center px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-relaxed">
            مستقبل التمريض يبدأ من هنا
          </h2>
          <p className="text-lg text-accent">
            انضم إلى NursLink وساهم في تطوير مهنة التمريض في الوطن العربي
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link href="/auth/register-nurse">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition text-lg shadow">
                سجل كممرض
              </button>
            </Link>
            <Link href="/auth/register-hospital">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition text-lg shadow">
                سجل كمؤسسة طبية
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
