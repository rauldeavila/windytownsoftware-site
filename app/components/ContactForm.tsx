"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = `Message from ${formData.name}`;
    const body = `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailtoLink = `mailto:rauldeavila93@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
        Get in touch
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg" style={{ borderRadius: '20px' }}>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
