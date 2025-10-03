"use client";

import { useState } from "react";

const TIERS = ["Platinum — The Architects", "Gold — The Innovators", "Silver — The Partners", "Custom Package"];

export default function SponsorInquiryForm() {
  const [state, setState] = useState({
    org: "", contact: "", email: "", phone: "", tier: TIERS[0], notes: ""
  });
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"err">("idle");

  function update<K extends keyof typeof state>(k: K, v: string) {
    setState((s) => ({ ...s, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!state.org || !state.contact || !state.email) return setStatus("err");
    setStatus("loading");
    try {
      const res = await fetch("/api/sponsors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...state, intent: "sponsor-inquiry" }),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) setState({ org:"", contact:"", email:"", phone:"", tier:TIERS[0], notes:"" });
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-black/40 p-6 grid gap-4">
      <h3 className="text-lg font-semibold">Sponsorship Inquiry</h3>

      <input className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Organization *"
        value={state.org} onChange={(e)=>update("org", e.target.value)} required />
      <input className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Primary Contact *"
        value={state.contact} onChange={(e)=>update("contact", e.target.value)} required />
      <input type="email" className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Email *"
        value={state.email} onChange={(e)=>update("email", e.target.value)} required />
      <input className="bg-black/40 border border-white/10 rounded-lg px-3 py-2" placeholder="Phone"
        value={state.phone} onChange={(e)=>update("phone", e.target.value)} />

      <select className="bg-black/40 border border-white/10 rounded-lg px-3 py-2"
        value={state.tier} onChange={(e)=>update("tier", e.target.value)}>
        {TIERS.map((t)=> <option key={t} value={t}>{t}</option>)}
      </select>

      <textarea rows={4} className="bg-black/40 border border-white/10 rounded-lg px-3 py-2"
        placeholder="Objectives / Notes"
        value={state.notes} onChange={(e)=>update("notes", e.target.value)} />

      <button
        disabled={status==="loading"}
        className="rounded-xl bg-white text-black px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition disabled:opacity-60"
      >
        {status==="loading" ? "Sending…" : "Contact Partnerships Team"}
      </button>

      {status==="ok" && <p className="text-sm text-emerald-400">Thanks! Our partnerships team will contact you.</p>}
      {status==="err" && <p className="text-sm text-rose-400">Please complete required fields and try again.</p>}
    </form>
  );
}
