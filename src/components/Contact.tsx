export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors px-4"
    >
      <div className="w-full max-w-4xl  text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Get in Touch
        </h2>

        <p className="text-slate-600 dark:text-slate 400 mb-12">
          Have a project, idea, or just want to say hi? let's talk.
        </p>

        <div className= "bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 max-w-xl mx-auto">

      <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="https://formspree.io/f/xeekwpnz"
          className="space-y-6"
        >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-3 border rounded-lg border-slate-300 dark:border-slate-600 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          requiredS
        />
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
    </form>
         
        </div>
      </div>
    </section>
  );
}
