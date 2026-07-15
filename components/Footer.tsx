// Սա քո տվյալների մասիվն է, որը պահում ես քո կոդում
export const socials = [
  {
    path: "/contact/linkedin.png",
    name: "Linkedin",
    link: "https://www.linkedin.com/in/lilitbareghamyan/",
  },
  {
    path: "/contact/github.png",
    name: "GitHub",
    link: "https://github.com/bareghamyanlilit",
  },
  {
    path: "/contact/instagram.png",
    name: "Instagram",
    link: "https://www.instagram.com/lilit.bareghamyan",
  },
  {
    path: "/contact/facebook.png",
    name: "Facebook",
    link: "https://www.facebook.com/lilit.baregamyan.2025",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Ձախ կողմ՝ Հեղինակային իրավունքներ */}
        <p className="text-xs text-gray-400 order-2 md:order-1">
          © {new Date().getFullYear()} Լիլիթ Բարեղամյան։ Բոլոր իրավունքները պաշտպանված են։
        </p>

        {/* Աջ կողմ՝ Սոցիալական ցանցերի սիրուն պատկերակները (Icons) */}
        <div className="flex items-center gap-6 order-1 md:order-2">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-100 hover:border-[#580000] hover:bg-[#580000]/5 transition-all duration-300"
              title={social.name}
            >
              <img
                src={social.path}
                alt={social.name}
                className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}