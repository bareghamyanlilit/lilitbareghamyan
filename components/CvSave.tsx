export default function CV() {
  return (
    <div className="flex items-center justify-center h-screen">
      <a
        href="/FullStackJS.pdf"
        download="Lilit_Bareghamyan_CV.pdf"
        className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
      >
        Download CV PDF
      </a>
    </div>
  );
}
