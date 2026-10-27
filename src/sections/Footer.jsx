const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/abdul-karim-kamal-s",
    hoverClass: "hover:border-neutral-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
    icon: (
      <svg className="w-7 h-7 fill-white group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdul-karim-kamal-s-4524352a0/",
    hoverClass: "hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]",
    icon: (
      <svg className="w-7 h-7 fill-[#0A66C2] group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V8.99h3.56v11.46ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.43c.98 0 1.79-.77 1.79-1.73V1.73C24 .77 23.19 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://www.instagram.com/s_abdul_.14_/?hl=en",
    hoverClass: "hover:border-pink-400 hover:shadow-[0_0_25px_rgba(244,114,182,0.3)]",
    icon: (
      <svg className="w-7 h-7 fill-[#E4405F] group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "WhatsApp",
    link: "https://wa.me/919345288125",
    hoverClass: "hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]",
    icon: (
      <svg className="w-7 h-7 fill-[#25D366] group-hover:scale-110 transition-transform duration-300 ease-out" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .14 5.34.14 11.92c0 2.1.55 4.15 1.6 5.95L.05 24l6.28-1.64a11.96 11.96 0 0 0 5.73 1.46h.01c6.57 0 11.93-5.35 11.93-11.93 0-3.18-1.24-6.17-3.48-8.41Zm-8.45 18.32h-.01a9.95 9.95 0 0 1-5.07-1.39l-.36-.21-3.73.98 1-3.64-.24-.37a9.9 9.9 0 0 1-1.52-5.25c0-5.47 4.46-9.92 9.94-9.92a9.87 9.87 0 0 1 7.03 2.91 9.87 9.87 0 0 1 2.91 7.04c0 5.48-4.46 9.93-9.95 9.93Zm5.45-7.44c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Gmail",
    link: "mailto:abdulkarimkamal@gmail.com",
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
