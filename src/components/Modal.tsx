import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export type ModalState = {
  title: string;
  message: string;
} | null;

type ModalProps = {
  modal: ModalState;
  onClose: () => void;
};

export function Modal({ modal, onClose }: ModalProps) {
  useEffect(() => {
    if (!modal) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modal, onClose]);

  return (
    <AnimatePresence>
      {modal ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/[0.55] p-4 backdrop-blur-md"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="relative w-full max-w-md rounded-[2rem] bg-white p-7 shadow-soft"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-orange-50 text-brand-deep transition hover:bg-orange-100"
              aria-label="Đóng thông báo"
              onClick={onClose}
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <p className="mb-2 text-xs font-black uppercase text-brand-deep">Future Makers</p>
            <h2 id="modal-title" className="pr-10 text-2xl font-black text-slate-950">
              {modal.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{modal.message}</p>
            <button
              type="button"
              className="mt-7 w-full rounded-full bg-brand-orange px-6 py-3 text-sm font-black uppercase text-white shadow-orange transition hover:-translate-y-0.5 hover:bg-brand-deep"
              onClick={onClose}
            >
              Đã rõ
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
