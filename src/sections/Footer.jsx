const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/Matheshs777",
    hoverClass: "hover:border-neutral-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
    icon: (
      <svg className="w-7 h-7 fill-white group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Gmail",
    link: "mailto:matheshs777@gmail.com",
    hoverClass: "hover:border-neutral-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
    icon: (
      <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24">
        {/* Blue Left Leg */}
        <path fill="#4285F4" d="M2.25 18.75v-9.375l4.5 3.375v8.25H3.75A1.5 1.5 0 0 1 2.25 18.75Z" />
        {/* Green Right Leg */}
        <path fill="#34A853" d="M21.75 18.75v-9.375l-4.5 3.375v8.25h3A1.5 1.5 0 0 0 21.75 18.75Z" />
        {/* Yellow Top-Right Fold */}
        <path fill="#FBBC04" d="M21.75 9.375V5.25A1.5 1.5 0 0 0 19.33 4.2L17.25 5.75v7z" />
        {/* Dark Red Top-Left Fold (This was the missing piece!) */}
        <path fill="#C5221F" d="M2.25 9.375V5.25A1.5 1.5 0 0 1 4.67 4.2L6.75 5.75v7z" />
        {/* Red Center Arch */}
        <path fill="#EA4335" d="M6.75 12.75 12 16.5l5.25-3.75v-7L12 9.5l-5.25-3.75z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 pt-8 pb-10 c-space bg-[#232323]/50 backdrop-blur-md">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
        
        {/* Links */}
        <div className="flex gap-2 text-neutral-300 text-xs sm:text-sm">
          <a href="/portfolio_terms.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="/privacy_policy.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
            Privacy Policy
          </a>
        </div>

        {/* Larger, Animated Social Buttons */}
        <div className="flex items-center justify-center gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              className={`group flex items-center justify-center w-14 h-14 rounded-full border border-white/15 bg-[#232323] hover:-translate-y-2 hover:scale-110 active:scale-95 transition-all duration-300 ease-out shadow-md ${social.hoverClass}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-neutral-300 text-xs sm:text-sm text-center">
          © {new Date().getFullYear()} Abdul Karim Kamal S. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;