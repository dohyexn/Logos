export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-background selection:bg-primary/30">
      <main className="max-w-2xl w-full flex flex-col items-center gap-12 text-center sm:items-start sm:text-left">
        {/* Header / Logo */}
        <div className="flex flex-col gap-2">
          <div className="h-1 w-12 bg-primary rounded-full mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Logos
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Minimalism, Intellectual Mood, and Readability.
          </p>
        </div>

        {/* Feature Card */}
        <div className="w-full bg-card rounded-2xl p-8 shadow-sm border border-muted flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-card-foreground">
              A New Design Perspective
            </h2>
            <p className="text-muted-foreground">
              Experience the harmony of <strong>The Library</strong> and <strong>The Agora</strong>. Designed with a deep teal accent for a touch of intellectual sophistication.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground">
              Responsive
            </div>
            <div className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground">
              Minimalist
            </div>
            <div className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground">
              Toss Style
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col w-full sm:flex-row gap-4">
          <button className="h-14 px-8 rounded-full bg-primary text-white font-semibold text-lg transition-transform active:scale-95 hover:brightness-110">
            Get Started
          </button>
          <button className="h-14 px-8 rounded-full border border-muted bg-card text-foreground font-semibold text-lg transition-transform active:scale-95 hover:bg-muted">
            Learn More
          </button>
        </div>

        {/* Footer info */}
        <p className="text-sm text-muted-foreground pt-4 border-t border-muted w-full">
          Designed for thinkers and readers. Built with Next.js and Tailwind CSS.
        </p>
      </main>
    </div>
  );
}
