"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const GetInTouch = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀");

        // ✅ FORM RESET
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message ❌");
      }
    } catch (error) {
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="bg-white rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.06)]
          grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12 items-center"
        >
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
        
              <img
                src="/images/clintImgReview.jpg"
                alt="Get in touch"
                className="w-full h-full object-cover rounded-2xl"
              />
            {/* </div> */}
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8 max-w-xl">
              Contact Jaipur Pink City Cab for reliable taxi services in Jaipur.
              Whether you need a local cab, airport transfer, or outstation taxi,
              our team is here to help you.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 rounded-xl px-5 py-4"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Your Subject"
                className="w-full border border-gray-300 rounded-xl px-5 py-4"
              />

              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write Your Message"
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="px-10 py-4 rounded-xl font-semibold
                bg-[#EFA701] text-black transition-all
                hover:bg-black hover:text-white disabled:opacity-60 cursor-pointer"
              >
                {loading ? "SENDING..." : "SEND MESSAGE →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
