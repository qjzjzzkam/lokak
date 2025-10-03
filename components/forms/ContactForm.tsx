"use client";

import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({
    name: "", org: "", email: "", phone: "", type: "General", heard: "", message: ""
  });
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"err">("idle");

  function update<K extends keyof typeof state>(k: K, v: string) {
    setState((s) => ({ ...s, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!state.name || !state.email || !state.message) return setStatus("err");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) setState({ name:"", org:"", email:"", phone:"", type:"General", heard:"", message:"" });
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-black/40 p-6 grid gap-4">
      <h2 className="text-xl font-semibold">Send Us a Message</h2>

      <input className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Full Name *"
        value={state.name} onChange={(e)=>update("name", e.target.value)} required />
      <input className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Organization"
        value={state.org} onChange={(e)=>update("org", e.target.value)} />
      <input type="email" className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Email Address *"
        value={state.email} onChange={(e)=>update("email", e.target.value)} required />
      <input className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Phone Number"
        value={state.phone} onChange={(e)=>update("phone", e.target.value)} />
      <select className="bg-black/40 border border-white/10 rounded-lg px-3 py-2"
        value={state.type} onChange={(e)=>update("type", e.target.value)}>
        {["General", "Sponsorship", "Media", "Hackathon", "Speaking Opportunity", "Other"].map((x)=>(
          <option key={x} value={x}>{x}</option>
        ))}
      </select>
      <textarea rows={5} className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Message *"
        value={state.message} onChange={(e)=>update("message", e.target.value)} required />
      <select className="bg-black/40 border border-white/10 rounded-lg px-3 py-2"
        value={state.heard} onChange={(e)=>update("heard", e.target.value)}>
        <option value="">How did you hear about us?</option>
        {["Social Media","News","Friend/Colleague","Other"].map((x)=>(
          <option key={x} value={x}>{x}</option>
        ))}
      </select>

      <button
        disabled={status==="loading"}
        className="mt-2 rounded-xl bg-white text-black px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition disabled:opacity-60"
        type="submit"
      >
        {status==="loading" ? "Submitting…" : "Submit"}
      </button>

      <p className="text-xs text-neutral-400">
        Your information will be handled according to our Privacy Policy. We&apos;ll respond within 48 business hours.
      </p>

      {status==="ok" && <p className="text-sm text-emerald-400">Thanks! We’ll get back to you soon.</p>}
      {status==="err" && <p className="text-sm text-rose-400">Please check required fields and try again.</p>}
    </form>
  );
}
