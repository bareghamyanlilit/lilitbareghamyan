"use client";

import { useState } from "react";

export function Contact() {
  // Քո բնօրինակ state-երը
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Քո բնօրինակ handleChange ֆունկցիան
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  // Քո բնօրինակ validate ֆունկցիան
  const validate = () => {
    const newErrors = {
      name: form.name.trim() === "",
      email: !/\S+@\S+\.\S+/.test(form.email),
      message: form.message.trim() === "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  // Քո բնօրինակ handleSubmit ֆունկցիան, որը կապվում է քո բեքենդին
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("Ուղարկվում է...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Հաղորդագրությունը հաջողությամբ ուղարկվեց");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Տեղի ունեցավ սխալ, խնդրում ենք փորձել կրկին");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Սերվերի հետ կապի խնդիր");
    }
  };

  // Քո դինամիկ դասերը՝ հարմարեցված նոր գունային գամմային
  const inputClasses = (error: boolean, value: string) =>
    `w-full px-4 py-3 text-sm rounded-lg outline-none transition border duration-200
    ${
      error
        ? "border-red-600 focus:border-red-600 focus:ring-2 focus:ring-red-200"
        : value
        ? "border-green-600 focus:border-green-600 focus:ring-2 focus:ring-green-100"
        : "border-gray-200 focus:border-[#580000] focus:ring-2 focus:ring-[#580000]/10"
    }`;

  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-950">Հետադարձ Կապ</h2>
        <div className="w-12 h-1 bg-[#580000] mx-auto mt-3 mb-16"></div>

        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Ձախ կողմ՝ Կոնտակտային տվյալներ */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-gray-950">Կապնվեք ինձ հետ</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Պատրաստ եմ քննարկել նոր նախագծեր, համագործակցություններ կամ աշխատանքային առաջարկներ։
            </p>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <span className="text-[#580000]">📍</span>
                <span>Հայաստան, Երևան / Վաղարշապատ</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#580000]">📞</span>
                <a href="tel:+37477760204" className="hover:text-[#580000] transition-colors">
                  +374 77 76 02 04
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#580000]">✉️</span>
                <a href="mailto:baregamyanlilit36@gmail.com" className="hover:text-[#580000] transition-colors">
                  baregamyanlilit36@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Աջ կողմ՝ Կապի Ֆորմա (Քո ֆունկցիոնալ տրամաբանությամբ) */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Անուն
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ձեր անունը"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses(errors.name, form.name)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Էլ. հասցե
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses(errors.email, form.email)}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                  Հաղորդագրություն
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Գրեք Ձեր հաղորդագրությունը այստեղ... (Հեռախոսահամարը ցանկալի է)"
                  value={form.message}
                  onChange={handleChange}
                  className={inputClasses(errors.message, form.message)}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#580000] text-white font-semibold rounded-lg hover:bg-[#400000] transition-all text-sm shadow-lg shadow-[#580000]/10 hover:scale-[1.01]"
              >
                Ուղարկել Հաղորդագրությունը
              </button>
            </form>

            {/* Կարգավիճակի (Status) պատասխանը */}
            {status && (
              <p className="text-center mt-4 text-gray-800 text-sm font-medium animate-pulse">
                {status}
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}