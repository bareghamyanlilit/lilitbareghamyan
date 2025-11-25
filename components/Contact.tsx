"use client";

import { useState } from "react";
import Image from "next/image";

export function Contact() {
  const socials = [
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
      name: "instagram",
      link: "https://www.instagram.com/lilit.bareghamyan",
    },
    {
      path: "/contact/facebook.png",
      name: "Facebook",
      link: "https://www.facebook.com/lilit.baregamyan.2025",
    },
  ];
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      console.log(res);
      if (res.ok) {
        setStatus("✅ Message sent successfully");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ An error occurred, please try again");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server connection problem");
    }
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">
        <div className="text-white flex flex-col gap-10">
          <h1 className="text-6xl font-light">Contact us</h1>

          <div className="bg-[#5f5f5f] flex items-center gap-4 p-6 rounded-xl text-xl text-white">
            <span className="text-red-950 text-3xl">✉️</span>
            <a href="mailto:baregamyanlilit36.gmail con">

           baregamyanlilit36@gmail.com
            </a>
          </div>

          <div className="bg-[#5f5f5f] flex items-center gap-4 p-6 rounded-xl text-xl text-white">
            <span className="text-red-950 text-3xl">📞</span>
            <a href="tel:+37477760204">

            077-76-02-04
            </a>
          </div>

          <div className="flex gap-6 mt-4">
            {socials.map((item) => (
              <a key={item.name} href={item.link}>
                <div className="w-16 h-16 bg-[#5f5f5f] rounded-xl flex items-center justify-center hover:scale-110 transition">
                  <Image
                    src={item.path}
                    width={30}
                    height={30}
                    alt={item.name}
                    className="rounded-full"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl px-10 py-12 shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="border-b border-black p-3 text-lg outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="border-b border-black p-3 text-lg outline-none"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="border border-black p-4 text-lg rounded-lg resize-none"
            />

            <button className="cursor-pointer bg-red-950 text-white py-4 rounded-lg text-xl hover:bg-red-950 transition">
              Send Message
            </button>
          </form>

          {status && (
            <p className="text-center mt-4 text-black text-lg">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
}
