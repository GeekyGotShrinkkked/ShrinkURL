export default function Card({ className = "", hover = true, glass = false, children, ...props }) {
  const classes = `card ${hover ? "card-hover" : ""} ${glass ? "card-glass" : ""} ${className}`.trim();
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
