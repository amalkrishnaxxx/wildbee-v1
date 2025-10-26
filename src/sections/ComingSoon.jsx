const ComingSoon = () => {
  return (
    <section className="entrance-message">
      {/* Sophisticated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>

      {/* Animated accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }}></div>

      <div className="h-full col-center gap-10 relative z-10">
        <img
          src="/images/hero_logo_w_color.svg"
          alt="logo"
          className="entrance-logo drop-shadow-[0_0_20px_rgba(0,0,0,0.15)]"
        />

        <div className="text-wrapper">
          <h3 className="gradient-title" style={{ letterSpacing: '0.02em' }}>
            We make brands <br /> look good <br /> online.
          </h3>
          <p className="text-center text-gray-700 mt-10 text-base md:text-lg font-light tracking-wider px-5 max-w-2xl mx-auto">
            Innovative design and strategic creativity
          </p>
        </div>

      </div>

    </section>
  )
}

export default ComingSoon