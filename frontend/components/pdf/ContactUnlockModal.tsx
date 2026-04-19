import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/lib/baseUrl";

type Field = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  value?: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
  [key: string]: string;
};

type ContactUnlockModalProps = {
  isOpen: boolean;
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  onClose: () => void;
  onSuccess?: (payload: FormState) => void;
  interestedCountry: string;
  remark: string;
  extraFields?: Field[];
};

const defaultForm: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const EMPTY_FIELDS: Field[] = [];

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function normalizePhone(value: string) {
  return value.replace(/[^\d+]/g, "").slice(0, 20);
}

export default function ContactUnlockModal({
  isOpen,
  title = "Contact us to unlock",
  subtitle = "We’ll share the document access immediately after submission.",
  submitLabel = "Submit & Unlock",
  onClose,
  onSuccess,
  interestedCountry,
  remark,
  extraFields: extraFieldsProp,
}: ContactUnlockModalProps) {
  const dialogTitleId = useId();
  const extraFields = extraFieldsProp ?? EMPTY_FIELDS;
  const [form, setForm] = useState<FormState>(defaultForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const extraFieldsKey = useMemo(() => {
    return JSON.stringify(
      extraFields.map((f) => ({
        name: f.name,
        value: f.value ?? "",
        readOnly: !!f.readOnly,
        required: !!f.required,
      }))
    );
  }, [extraFields]);

  const initializedKeyRef = useRef<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    // Initialize only once per open (and only re-init if field defaults change).
    if (initializedKeyRef.current === extraFieldsKey) return;
    initializedKeyRef.current = extraFieldsKey;

    const next: FormState = { ...defaultForm };
    for (const f of extraFields) {
      if (f.value != null) next[f.name] = f.value;
    }
    setForm(next);
    setError(null);
    setIsSubmitting(false);
  }, [extraFields, extraFieldsKey, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      initializedKeyRef.current = null;
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    try {
      window.dispatchEvent(
        new CustomEvent("edurizon:suppress-consultation", {
          detail: { suppress: true },
        })
      );
    } catch {
      // no-op
    }
    return () => {
      try {
        window.dispatchEvent(
          new CustomEvent("edurizon:suppress-consultation", {
            detail: { suppress: false },
          })
        );
      } catch {
        // no-op
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const canSubmit = useMemo(() => {
    const baseOk =
      form.name.trim().length >= 2 &&
      isValidEmail(form.email) &&
      normalizePhone(form.phone).replace(/\+/g, "").length >= 8;

    if (!baseOk) return false;

    for (const f of extraFields) {
      if (f.required && !(form[f.name] || "").trim()) return false;
    }
    return true;
  }, [extraFields, form.email, form.name, form.phone, form]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!canSubmit) {
      setError("Please fill your name, a valid email, and phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const requestData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        interestedCountry,
        remark,
      };

      const response = await axios.post(
        `${baseUrl}/api/consultation/request`,
        requestData
      );

      if (!response.data?.success) {
        throw new Error(response.data?.message || "Failed to submit");
      }

      onSuccess?.(form);
      onClose();
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4 transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby={dialogTitleId}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-xl bg-white rounded-2xl overflow-hidden shadow-2xl animate-[modalIn_180ms_ease-out]">
        <div className="px-6 py-5 border-b border-primary-fixed flex items-center justify-between gap-4">
          <div>
            <div
              id={dialogTitleId}
              className="font-bold text-regularTextPhone md:text-regularText text-on-surface"
            >
              {title}
            </div>
            <div className="text-tinyTextPhone md:text-tinyText text-on-surface-variant">
              {subtitle}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 rounded-lg hover:bg-black/5 text-on-surface"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <form onSubmit={submit} className="px-6 py-6 space-y-4">
          {error && (
            <div className="rounded-xl bg-linenChosen border border-primary-fixed px-4 py-3 text-smallTextPhone md:text-smallText text-[#7B2F00]">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="space-y-1">
              <div className="text-tinyTextPhone md:text-tinyText font-semibold text-on-surface">
                Name
              </div>
              <input
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                className="w-full rounded-xl border border-primary-fixed px-4 py-3 outline-none focus:ring-2 focus:ring-[#A14000]/30"
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label className="space-y-1">
              <div className="text-tinyTextPhone md:text-tinyText font-semibold text-on-surface">
                Email
              </div>
              <input
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                className="w-full rounded-xl border border-primary-fixed px-4 py-3 outline-none focus:ring-2 focus:ring-[#A14000]/30"
                placeholder="you@example.com"
                autoComplete="email"
                inputMode="email"
              />
            </label>
          </div>

          <label className="space-y-1 block">
            <div className="text-tinyTextPhone md:text-tinyText font-semibold text-on-surface">
              Phone
            </div>
            <input
              value={form.phone}
              onChange={(e) =>
                setForm((s) => ({ ...s, phone: normalizePhone(e.target.value) }))
              }
              className="w-full rounded-xl border border-primary-fixed px-4 py-3 outline-none focus:ring-2 focus:ring-[#A14000]/30"
              placeholder="+91 98XXXXXX"
              autoComplete="tel"
              inputMode="tel"
            />
          </label>

          {extraFields.length > 0 && (
            <div className="grid grid-cols-1 gap-4">
              {extraFields.map((f) => (
                <label key={f.name} className="space-y-1 block">
                  <div className="text-tinyTextPhone md:text-tinyText font-semibold text-on-surface">
                    {f.label}
                  </div>
                  <input
                    value={form[f.name] ?? ""}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, [f.name]: e.target.value }))
                    }
                    className="w-full rounded-xl border border-primary-fixed px-4 py-3 outline-none focus:ring-2 focus:ring-[#A14000]/30"
                    placeholder={f.placeholder}
                    readOnly={f.readOnly}
                  />
                </label>
              ))}
            </div>
          )}

          <label className="space-y-1 block">
            <div className="text-tinyTextPhone md:text-tinyText font-semibold text-on-surface">
              Message (optional)
            </div>
            <textarea
              value={form.message}
              onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              className="w-full min-h-[110px] rounded-xl border border-primary-fixed px-4 py-3 outline-none focus:ring-2 focus:ring-[#A14000]/30"
              placeholder="Tell us what you’re looking for..."
            />
          </label>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-full font-bold border border-primary-fixed hover:bg-black/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#A14000] disabled:opacity-60 disabled:cursor-not-allowed text-white px-5 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300"
            >
              {isSubmitting ? "Submitting..." : submitLabel}
            </button>
          </div>
        </form>
      </div>
      <style jsx global>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

