export function CircleBackdrop() {
  return (
    <svg
      viewBox="0 0 1208 1024"
      className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:top-12 md:-top-20 lg:-top-12 xl:top-0"
    >
      <ellipse
        cx={604}
        cy={512}
        fill="url(#radial-gradient)"
        rx={604}
        ry={512}
      />
      <defs>
        <radialGradient id="radial-gradient">
          <stop stopColor="#6366F1" />
        </radialGradient>
      </defs>
    </svg>
  )
}