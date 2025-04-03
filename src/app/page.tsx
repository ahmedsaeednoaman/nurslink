import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/assets/logo.png" alt="NursLink Logo" width={40} height={40} />
            <span className="text-xl font-bold text-blue-600">NursLink</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" asChild><Link href="/login">Login</Link></Button>
            <Button asChild><Link href="/register">Register</Link></Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connecting <span className="text-blue-600">Nurses</span> with Healthcare Facilities
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              NursLink bridges the gap between qualified nurses and healthcare institutions across Egypt with our innovative digital platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild><Link href="/hospital/signup">I'm a Hospital</Link></Button>
              <Button size="lg" variant="outline" asChild><Link href="/nurse/signup">I'm a Nurse</Link></Button>
            </div>
          </div>
          <div className="relative aspect-video">
            <Image src="/assets/hero-image.jpg" alt="Healthcare Professionals" fill className="rounded-lg object-cover shadow-xl" priority />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
              <p className="text-gray-600">AI-powered nurse-to-job matching based on skills and location</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Easy shift management and calendar integration</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Reliable payment system with multiple options</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold mb-2">500+</div><div className="text-blue-100">Nurses Registered</div></div>
            <div><div className="text-4xl font-bold mb-2">100+</div><div className="text-blue-100">Healthcare Partners</div></div>
            <div><div className="text-4xl font-bold mb-2">95%</div><div className="text-blue-100">Match Success Rate</div></div>
            <div><div className="text-4xl font-bold mb-2">24/7</div><div className="text-blue-100">Support Available</div></div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NursLink</h3>
              <p className="text-gray-400">Bridging the nursing gap in Egypt's healthcare sector</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/legal/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/legal/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link href="/legal/cookie-policy" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                <p>123 Healthcare St.</p>
                <p>Cairo, Egypt</p>
                <p>Email: info@nurslink.com</p>
                <p>Phone: +20 100 000 0000</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 04/03/2025 05:55:54.Year NursLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
