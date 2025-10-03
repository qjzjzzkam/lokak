"use client";

import { useState } from "react";

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"ok"|"err">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("err");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "flex gap-2" : "grid gap-3 max-w-md"}>
      <input
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
        placeholder="Email address"
        className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm placeholder:text-neutral-500"
      />
      <button
        disabled={status==="loading"}
        className="rounded-lg bg-white text-black px-3 py-2 text-sm font-medium hover:bg-neutral-200 transition disabled:opacity-60"
      >
        {status==="loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {status==="ok" && <p className="text-xs text-emerald-400">Subscribed. Check your inbox!</p>}
      {status==="err" && <p className="text-xs text-rose-400">Please enter a valid email and try again.</p>}
    </form>
  );
}
