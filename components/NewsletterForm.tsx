"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type NewsletterFormProps = {
  placeholder?: string
  buttonLabel?: string
  size?: "default" | "lg"
  align?: "left" | "center"
  fullWidth?: boolean
  className?: string
}

export function NewsletterForm({
  placeholder = "Email Address",
  buttonLabel = "Subscribe",
  size = "default",
  align = "left",
  fullWidth = false,
  className,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const inputSize = size === "lg" ? "h-12 text-base" : ""
  const buttonSize = size === "lg" ? "h-12 text-base" : ""
  const widthClass = fullWidth ? "w-full" : "w-full sm:w-[420px]"
  const layout =
    align === "center" ? "items-stretch justify-center sm:flex-row sm:items-center" : "items-start sm:flex-row"

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isValid) {
      setStatus("error")
      return
    }
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <p className={cn("text-sm text-muted-foreground", align === "center" && "text-center")}>
        Thanks for subscribing! Please check your inbox to confirm your email.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className={cn("flex w-full flex-col gap-3", layout, className)}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-invalid={status === "error"}
        className={cn(widthClass, inputSize)}
      />
      <Button
        type="submit"
        disabled={status === "loading"}
        className={cn("bg-orange-400 text-background hover:bg-orange-400/90 hover:cursor-pointer", buttonSize)}
      >
        {status === "loading" ? "Subscribing..." : buttonLabel}
      </Button>
      {status === "error" ? (
        <p className={cn("text-xs text-destructive", align === "center" && "text-center")}>
          Please enter a valid email address.
        </p>
      ) : null}
    </form>
  )
}
