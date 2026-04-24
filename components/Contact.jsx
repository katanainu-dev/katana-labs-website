"use client";
import { useState } from "react";

const INTERESTS = ["Website", "CRM", "KI-Stimme", "Chatbot", "SaaS", "Apps", "3D Character", "Animation", "Marketing-Content", "Cinematic-Trailer", "Andere"];

export default function Contact() {
  const [selected, setSelected] = useState(new Set());
  const [form, setForm] = useState({ vorname: "", nachname: "", email: "", firma: "", msg: "" });

  const togglePill = (label) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const interests = [...selected].join(", ") || "—";
    window.location.href = `mailto:katanalabs@gmail.com?subject=Anfrage von ${form.vorname} ${form.nachname}&body=Interessen: ${interests}%0AE-Mail: ${form.email}%0AFirma: ${form.firma}%0A%0A${form.msg}`;
  };

  return (
    <div className="contact-bg reveal" id="contact">
      <div className="contact-inner">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-eyebrow">連 · KONTAKT</div>
            <h3>
              Erzähl uns von <br/>
              <span className="red">deinem Vorhaben.</span>
            </h3>
            <p>
              Egal ob du nur eine Frage hast oder direkt loslegen willst — wir antworten innerhalb eines
              Werktags. Garantiert.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-label">E-MAIL · 電郵</div>
                  <div className="contact-val">info@katanalabs.de</div>
                </div>
              </div>
            </div>
          </div>

          <form className="form-card" onSubmit={submit}>
            <div className="form-field">
              <label>Was interessiert dich? <span style={{opacity:.6,fontWeight:400}}>(Mehrfachauswahl möglich)</span></label>
              <div className="pill-row">
                {INTERESTS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`pill${selected.has(label) ? " active" : ""}`}
                    onClick={() => togglePill(label)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label>Vorname</label>
                <input type="text" placeholder="Max" required value={form.vorname} onChange={update("vorname")} />
              </div>
              <div className="form-field">
                <label>Nachname</label>
                <input type="text" placeholder="Mustermann" required value={form.nachname} onChange={update("nachname")} />
              </div>
            </div>
            <div className="form-field">
              <label>E-Mail</label>
              <input type="email" placeholder="max@firma.de" required value={form.email} onChange={update("email")} />
            </div>
            <div className="form-field">
              <label>Unternehmen</label>
              <input type="text" placeholder="Acme Inc." value={form.firma} onChange={update("firma")} />
            </div>
            <div className="form-field">
              <label>Erzähl uns mehr</label>
              <textarea
                placeholder="Worum geht's? Welches Problem soll gelöst werden?"
                value={form.msg}
                onChange={update("msg")}
              />
            </div>
            <div className="form-submit-wrap">
              <button type="submit" className="brush-btn">
                <svg className="brush-bg" viewBox="0 0 320 120" preserveAspectRatio="none">
                  <path
                    d="M 12,40 C 28,18 60,12 100,18 C 145,24 180,8 220,14 C 260,20 295,18 312,32 C 318,52 305,72 285,88 C 245,104 200,108 150,102 C 95,96 50,108 22,98 C 4,84 2,62 12,40 Z"
                    fill="#ed1c24"
                  />
                  <circle cx="14" cy="60" r="3" fill="#ed1c24"/>
                  <circle cx="306" cy="76" r="2.5" fill="#ed1c24"/>
                </svg>
                <span>ANFRAGE SENDEN</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
