import React, { useState } from 'react'

function Message({ role, content }: { role: string; content: string }) {
  const mine = role === 'user'
  return (
    <div className={'text-sm ' + (mine ? 'text-right' : 'text-left')}>
      <div className={(mine ? 'bg-indigo-600/20' : 'bg-white/5') + ' inline-block px-3 py-2 rounded-2xl border border-white/10 max-w-[85%] whitespace-pre-wrap'}>
        {content}
      </div>
    </div>
  )
}

function MiniLocalAnswer(q: string) {
  // very tiny demo logic (full RAG is in the ZIP)
  const lower = q.toLowerCase()
  if (lower.includes('roi')) return 'ROI formula: ((Added Revenue - Cost) / Cost) * 100. Try: revenue 50m, gain 20%, cost 5m → ROI ≈ 100%+'
  if (lower.includes('use-case') || lower.includes('use case')) return 'Popular use-cases: WhatsApp sales agents, lead scoring, demand forecasting, support automation, invoice processing.'
  if (lower.includes('roadmap') || lower.includes('poc')) return 'Roadmap: Discover → Design → Deliver (6–8 week PoC) → Scale. I can outline steps if you share goals and data sources.'
  return 'I can help with AI strategy, use‑cases, ROI, agents, and compliance. Ask me about your industry and goals.'
}

export default function ChatPreview() {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hi! I\'m the Viberz Agentic Consulting AI assistant. Ask me about AI in business, automation, ROI, governance, or our consulting approach.' }]);

  function send(text: string) {
    if (!text.trim()) return;
    const next = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setTimeout(() => {
      const reply = MiniLocalAnswer(text);
      setMessages(m => [...m, { role: 'assistant', content: reply }]);
    }, 300);
  }

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 grid place-items-center">
      <div className="w-[22rem] sm:w-[26rem] h-[32rem] bg-slate-900 rounded-2xl shadow-xl border border-white/10 overflow-hidden flex flex-col">
        <header className="px-4 py-3 bg-slate-800/70 border-b border-white/10 flex items-center justify-between">
          <div className="font-semibold text-sm">💬 Viberz Agentic — AI Assistant</div>
          <button onClick={() => setOpen(!open)} className="rounded-lg px-2 py-1 hover:bg-white/10">{open ? 'Hide' : 'Show'}</button>
        </header>
        {open && (
          <>
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
              {messages.map((m, i) => <Message key={i} role={m.role} content={m.content} />)}
            </div>
            <footer className="border-t border-white/10 p-2">
              <div className="flex gap-2 flex-wrap px-1 pb-2">
                {['What AI use-cases fit retail?', 'How to calculate AI ROI?', 'Outline a 6–8 week PoC'].map((p, i) => (
                  <button key={i} onClick={() => send(p)} className="text-[11px] rounded-full px-2 py-1 bg-slate-800 hover:bg-slate-700 border border-white/10">{p}</button>
                ))}
              </div>
              <div className="flex items-end gap-2">
                <textarea 
                  rows={2} 
                  value={input} 
                  onChange={e => setInput(e.target.value)} 
                  onKeyDown={e => { 
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault(); 
                      send(input);
                    } 
                  }} 
                  placeholder="Ask about ROI, use‑cases, roadmaps…" 
                  className="flex-1 bg-slate-800 rounded-xl px-3 py-2 text-sm outline-none border border-transparent focus:border-slate-600" 
                />
                <button onClick={() => send(input)} className="rounded-xl px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:opacity-95">Send</button>
              </div>
            </footer>
          </>
        )}
      </div>
    </div>
  );
}