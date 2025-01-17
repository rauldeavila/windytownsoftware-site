"use client";

import { useState } from "react";
import GradientText from "./GradientText";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12">
      <h2 className="text-5xl font-bold mb-12 text-center retro-text">
        <GradientText>Contact</GradientText>
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto retro-card p-8">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-xl retro-text">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-lg retro-input"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-xl retro-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-lg retro-input"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-xl retro-text">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 text-lg retro-input"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 text-xl retro-button retro-text"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
