"use client";

import { useState } from "react";

type StatusInfo = {
  error: boolean;
  msg: string | null;
}

type FormStatus = {
  submitted: boolean;
  submitting: boolean;
  info: StatusInfo;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      // Try direct mailto as primary method
      const subject = `Message from ${formData.name}`;
      const body = `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
      const mailtoLink = `mailto:rauldeavila93@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      // Show success message after a slight delay to allow email client to open
      setTimeout(() => {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Message sent successfully! If your email client didn't open, please email us directly at rauldeavila93@gmail.com" }
        });
      }, 1000);
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Something went wrong. Please try again or email us directly at rauldeavila93@gmail.com" }
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  return (
    <section id="contact" className="py-12 mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
        Get in touch
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg" style={{ borderRadius: '20px' }}>
        {status.info.msg && (
          <div className={`mb-6 p-4 rounded-md ${status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {status.info.msg}
          </div>
        )}

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
            disabled={status.submitting}
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
            disabled={status.submitting}
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
            disabled={status.submitting}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status.submitting}
          className="w-full px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all disabled:opacity-70"
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>

        {status.submitted && (
          <p className="mt-4 text-sm text-center text-gray-600">
            Thank you for your message! We'll get back to you as soon as possible.
          </p>
        )}
      </form>
    </section>
  );
}
