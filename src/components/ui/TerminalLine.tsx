export interface TerminalLineProps {
  text: string
  prompt?: string
  showCursor?: boolean
}

export function TerminalLine({ text, prompt = '$', showCursor = false }: TerminalLineProps) {
  return (
    <p className="font-mono text-sm text-terminal-cyan">
      <span className="text-accent-green">{prompt}</span> {text}
      {showCursor ? (
        <span
          aria-hidden="true"
          className="ml-1 inline-block animate-cursor-blink text-accent-green"
        >
          |
        </span>
      ) : null}
    </p>
  )
}
