import { FormEvent, useState } from 'react';
import { CheckCircle2, PhoneCall, Send, UsersRound } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const registrationWebhookUrl =
  import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL?.trim() ||
  import.meta.env.VITE_REGISTRATION_WEBHOOK_URL?.trim() ||
  '';

const targetGoogleSheetUrl = 'https://docs.google.com/spreadsheets/d/10RDWOQmqecXrCx1MyFTaB4dS0FaYj4kp4AbzfU89QGk/edit?gid=0#gid=0';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

export function RegistrationInfo() {
  const shouldReduceMotion = useReducedMotion();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameValue = fullName.trim();
    const phoneValue = phone.trim();
    const departmentValue = department.trim();

    if (!nameValue || !phoneValue || !departmentValue) {
      setSubmitState('error');
      window.alert('Vui lòng điền đầy đủ Họ & tên, Số điện thoại và Nhóm.');
      return;
    }

    const confirmed = window.confirm('Bạn có chắc chắn muốn gửi thông tin đăng ký?');
    if (!confirmed) {
      setSubmitState('idle');
      return;
    }

    if (!registrationWebhookUrl) {
      setSubmitState('error');
      window.alert('Chưa cấu hình cổng gửi Google Sheet. Sheet đích đã gắn trong source, nhưng cần tạo Google Apps Script Web App và đặt biến VITE_GOOGLE_SHEET_WEBHOOK_URL trên Vercel.');
      return;
    }

    setSubmitState('sending');

    const formData = new URLSearchParams({
      fullName: nameValue,
      phone: phoneValue,
      department: departmentValue,
      source: window.location.href,
      sheetUrl: targetGoogleSheetUrl,
      submittedAt: new Date().toISOString()
    });

    try {
      await fetch(registrationWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      setSubmitState('success');
      setFullName('');
      setPhone('');
      setDepartment('');
      window.alert('Bạn đã gửi thông tin đăng ký thành công!');
    } catch {
      setSubmitState('error');
      window.alert('Chưa gửi được, vui lòng gửi lại.');
    }
  };

  return (
    <section id="registration" className="relative overflow-hidden bg-[#f3f1ec] py-14 sm:py-16 lg:py-20">
      <div className="container-x">
        <motion.div
          className="registration-box mx-auto max-w-5xl"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <form
            className="registration-inner rounded-[2rem] border border-orange-100 bg-white/90 px-5 py-9 text-center shadow-[0_22px_70px_rgba(15,23,42,0.08)] backdrop-blur sm:px-8 lg:px-12"
            onSubmit={handleSubmit}
          >
            <h2 className="mx-auto max-w-2xl text-[clamp(1.45rem,3.2vw,2.15rem)] font-black uppercase leading-tight tracking-[-0.02em] text-brand-orange">
              Đăng ký tham gia<br className="hidden sm:block" /> Xuân Cầu's Got Talent
            </h2>

            <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
              <label className="registration-input-pill group inline-flex min-h-[52px] items-center justify-between rounded-xl bg-slate-50 px-4 text-left text-sm font-semibold text-slate-500 shadow-[0_8px_24px_rgba(15,23,42,0.05)] ring-1 ring-slate-100 transition focus-within:bg-white focus-within:ring-orange-200">
                <span className="sr-only">Họ và tên</span>
                <input
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent font-bold text-slate-800 outline-none placeholder:text-slate-400"
                  placeholder="Họ & tên"
                  autoComplete="name"
                  required
                />
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-orange text-white shadow-orange">
                  <Send className="size-4" aria-hidden="true" />
                </span>
              </label>

              <label className="registration-input-pill group inline-flex min-h-[52px] items-center justify-between rounded-xl bg-slate-50 px-4 text-left text-sm font-semibold text-slate-500 shadow-[0_8px_24px_rgba(15,23,42,0.05)] ring-1 ring-slate-100 transition focus-within:bg-white focus-within:ring-orange-200">
                <span className="sr-only">Số điện thoại</span>
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent font-bold text-slate-800 outline-none placeholder:text-slate-400"
                  placeholder="Số điện thoại"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                />
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-orange text-white shadow-orange">
                  <PhoneCall className="size-4" aria-hidden="true" />
                </span>
              </label>

              <label className="registration-input-pill group inline-flex min-h-[52px] items-center justify-between rounded-xl bg-slate-50 px-4 text-left text-sm font-semibold text-slate-500 shadow-[0_8px_24px_rgba(15,23,42,0.05)] ring-1 ring-slate-100 transition focus-within:bg-white focus-within:ring-orange-200">
                <span className="sr-only">Nhóm</span>
                <input
                  value={department}
                  onChange={(event) => setDepartment(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent font-bold text-slate-800 outline-none placeholder:text-slate-400"
                  placeholder="Nhóm"
                  autoComplete="organization"
                  required
                />
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-orange text-white shadow-orange">
                  <UsersRound className="size-4" aria-hidden="true" />
                </span>
              </label>
            </div>

            <div className="mt-7 flex flex-col items-center gap-3">
              <button
                type="submit"
                disabled={submitState === 'sending'}
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3 text-sm font-black text-white shadow-[0_16px_34px_rgba(249,115,22,0.28)] transition hover:-translate-y-0.5 hover:bg-orange-600 disabled:cursor-wait disabled:opacity-70"
              >
                {submitState === 'success' ? <CheckCircle2 className="size-4" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
                {submitState === 'sending' ? 'Đang gửi...' : 'Gửi thông tin đăng ký'}
              </button>
              {submitState === 'success' && (
                <p className="text-sm font-bold text-emerald-600">Thông tin đã được gửi thành công.</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
