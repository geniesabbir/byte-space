export default function PartnerLogos() {
  const logos = [
    {
      id: 1,
      svg: (
        <svg viewBox="0 0 140 32" className="h-8 w-auto fill-current" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" fill="#DAE0E5" />
          <path d="M16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26" stroke="#82868E" strokeWidth="3" strokeLinecap="round" />
          <text x="38" y="21" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="15" fill="#666973">
            logoipsum
          </text>
        </svg>
      ),
    },
    {
      id: 2,
      svg: (
        <svg viewBox="0 0 140 32" className="h-8 w-auto fill-current" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 6V26M6 16H26M8.9 8.9L23.1 23.1M8.9 23.1L23.1 8.9" stroke="#82868E" strokeWidth="3" strokeLinecap="round" />
          <circle cx="16" cy="16" r="4" fill="#82868E" />
          <text x="38" y="21" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="15" fill="#666973">
            logoipsum
          </text>
        </svg>
      ),
    },
    {
      id: 3,
      svg: (
        <svg viewBox="0 0 140 32" className="h-8 w-auto fill-current" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="16,6 26,24 6,24" fill="#DAE0E5" stroke="#82868E" strokeWidth="2" strokeLinejoin="round" />
          <text x="38" y="21" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="15" fill="#666973">
            logoipsum
          </text>
        </svg>
      ),
    },
    {
      id: 4,
      svg: (
        <svg viewBox="0 0 140 32" className="h-8 w-auto fill-current" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 6C22 6 26 10 26 16C26 22 22 26 16 26C10 26 6 22 6 16C6 10 10 6 16 6Z" fill="#DAE0E5" />
          <circle cx="16" cy="16" r="6" stroke="#82868E" strokeWidth="2.5" />
          <text x="38" y="21" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="15" fill="#666973">
            logoipsum
          </text>
        </svg>
      ),
    },
    {
      id: 5,
      svg: (
        <svg viewBox="0 0 140 32" className="h-8 w-auto fill-current" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" stroke="#82868E" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="16" cy="16" r="6" fill="#82868E" />
          <text x="38" y="21" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="15" fill="#666973">
            logoipsum
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-white py-12 border-b border-[#ECEFF2]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[120px]">
        <div className="flex flex-wrap items-center justify-between gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center">
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
