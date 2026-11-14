export default function UtilityBar() {
  return (
    <div className="bg-charcoal-dark text-white hidden md:block border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <a
            href="tel:+254790700228"
            className="text-gray-300 hover:text-red transition-colors font-heading font-medium tracking-wide"
          >
            <span className="text-gray-400 mr-1.5 font-bold">Tel:</span>
            +254 790 700228
          </a>
          <a
            href="mailto:stevegekara04@gmail.com"
            className="text-gray-300 hover:text-red transition-colors font-heading font-medium tracking-wide"
          >
            <span className="text-gray-400 mr-1.5 font-bold">Email:</span>
            stevegekara04@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 text-gray-300">
          <span className="font-heading font-medium tracking-wide">
            Kericho County &bull; Rift Valley, Kenya
          </span>
        </div>
      </div>
    </div>
  );
}
