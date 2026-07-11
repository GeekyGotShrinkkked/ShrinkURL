"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../../Components/ui/Button";

const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

function isValidUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function isValidSlug(value) {
  return /^[a-zA-Z0-9-_]{1,64}$/.test(value);
}

export default function ShortenPage() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState("");
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const urlError = url.length > 0 && !isValidUrl(url) ? "Enter a full URL, including https://" : "";
  const slugError =
    shortUrl.length > 0 && !isValidSlug(shortUrl)
      ? "Use letters, numbers, hyphens, or underscores only"
      : "";

  const canSubmit = isValidUrl(url) && isValidSlug(shortUrl) && status !== STATUS.LOADING;

  const generate = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus(STATUS.LOADING);
    setErrorMessage("");
    setGenerated("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl: shortUrl }),
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        setStatus(STATUS.ERROR);
        setErrorMessage(result.message || "Something went wrong. Try a different slug.");
        return;
      }

      const host =
        typeof window !== "undefined" ? window.location.origin : process.env.NEXT_PUBLIC_HOST || "";
      setGenerated(`${host}/${shortUrl}`);
      setStatus(STATUS.SUCCESS);
      setUrl("");
      setShortUrl("");
    } catch (error) {
      setStatus(STATUS.ERROR);
      setErrorMessage("Couldn't reach the server. Check your connection and try again.");
    }
  };

  const handleCopy = async () => {
    if (!generated) return;
    try {
      await navigator.clipboard.writeText(generated);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — user can still select the text manually.
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
      <div className="container-page relative section flex flex-col items-center gap-10">
        <div className="flex flex-col items-center text-center gap-3 fade-up">
          <span className="eyebrow">Shorten a link</span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: "var(--ink)" }}>
            Paste a link, pick a slug, done
          </h1>
          <p className="text-base max-w-md" style={{ color: "var(--ink-soft)" }}>
            Your short link is live the moment you hit generate.
          </p>
        </div>

        <form
          onSubmit={generate}
          noValidate
          className="card w-full max-w-lg p-6 sm:p-8 flex flex-col gap-5 fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          <div>
            <label htmlFor="url" className="label">
              Destination URL
            </label>
            <input
              id="url"
              type="url"
              inputMode="url"
              autoComplete="off"
              value={url}
              className={`field ${urlError ? "field-error" : ""}`}
              placeholder="https://example.com/your-long-link"
              onChange={(e) => setUrl(e.target.value)}
              aria-invalid={Boolean(urlError)}
              aria-describedby="url-help"
            />
            {urlError ? (
              <p id="url-help" className="error-text">
                {urlError}
              </p>
            ) : (
              <p id="url-help" className="help-text">
                Must start with http:// or https://
              </p>
            )}
          </div>

          <div>
            <label htmlFor="slug" className="label">
              Custom slug
            </label>
            <div
              className="flex items-center rounded-[14px] overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <span
                className="mono text-sm px-3 py-3 whitespace-nowrap"
                style={{ background: "var(--bg-muted)", color: "var(--ink-faint)" }}
              >
                shrinkurl.app/
              </span>
              <input
                id="slug"
                type="text"
                autoComplete="off"
                value={shortUrl}
                className={`field mono !border-0 !rounded-none ${slugError ? "field-error" : ""}`}
                placeholder="my-link"
                onChange={(e) => setShortUrl(e.target.value)}
                aria-invalid={Boolean(slugError)}
                aria-describedby="slug-help"
              />
            </div>
            {slugError ? (
              <p id="slug-help" className="error-text">
                {slugError}
              </p>
            ) : (
              <p id="slug-help" className="help-text">
                This becomes the end of your short link.
              </p>
            )}
          </div>

          <Button type="submit" variant="primary" disabled={!canSubmit} className="w-full mt-1">
            {status === STATUS.LOADING ? <Spinner /> : "Generate short link"}
          </Button>

          {status === STATUS.ERROR && (
            <div
              role="alert"
              className="flex items-start gap-2 px-4 py-3 rounded-lg text-sm"
              style={{ background: "#fef2f2", color: "#b91c1c" }}
            >
              <span aria-hidden="true">⚠️</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {status === STATUS.SUCCESS && generated && (
            <div
              className="flex flex-col gap-2 px-4 py-3 rounded-lg text-sm fade-up"
              style={{ background: "var(--accent-soft)" }}
            >
              <span className="font-semibold" style={{ color: "var(--ink)" }}>
                Your link is live
              </span>
              <div className="flex items-center justify-between gap-3">
                <Link
                  href={generated}
                  target="_blank"
                  className="mono truncate"
                  style={{ color: "var(--accent-1)" }}
                >
                  {generated}
                </Link>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn btn-outline btn-sm shrink-0"
                >
                  {copied ? "Copied ✓" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}
