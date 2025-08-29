import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-red-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Food Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 text-4xl animate-bounce animation-delay-1000">🍕</div>
        <div className="absolute top-40 right-32 text-3xl animate-bounce animation-delay-2000">🍔</div>
        <div className="absolute bottom-32 left-32 text-3xl animate-bounce animation-delay-3000">🍜</div>
        <div className="absolute bottom-20 right-20 text-4xl animate-bounce animation-delay-1000">🍰</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo and Brand */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl mb-6">
              <span className="text-white text-4xl font-bold">🍽️</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Ordering System
            </h1>
          </div>

          {/* Tagline */}
          <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              Delicious food delivered to your doorstep
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the finest Indian cuisine with authentic flavors, 
              fresh ingredients, and lightning-fast delivery
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              to="/menu"
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">View Menu</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              to="/admin/login"
              className="px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-full shadow-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-2 border-orange-200 hover:border-orange-300"
            >
              Admin Login
            </Link>
          </div>

          {/* Features */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your food delivered in 30 minutes or less</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Fresh ingredients and authentic recipes</p>
            </div>

            <div className="text-center group">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy Payment</h3>
              <p className="text-gray-600">Secure online payment and cash on delivery</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <p className="text-gray-600 mb-4">Trusted by thousands of customers</p>
              <div className="flex justify-center items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-700 font-semibold ml-2">4.8/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
