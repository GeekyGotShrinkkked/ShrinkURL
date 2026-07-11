import Link from "next/link";

const VARIANT_CLASS = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  outline: "btn btn-outline",
  ghost: "btn btn-ghost",
};

/**
 * Shared button component.
 * Renders a <Link> when `href` is provided, otherwise a native <button>.
 *
 * Props:
 *  - variant: "primary" | "secondary" | "outline" | "ghost"
 *  - size: "md" | "sm"
 *  - href: optional, renders as a Link
 */
export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}) {
  const classes = `${VARIANT_CLASS[variant] || VARIANT_CLASS.primary} ${
    size === "sm" ? "btn-sm" : ""
  } ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
