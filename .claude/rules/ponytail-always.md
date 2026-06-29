# Rule: Ponytail Always Active

The ponytail skill is active on every implementation task. No opt-out without explicit user instruction.

## The ladder — check in order before writing any code

```
1. Does this need to exist at all?          → YAGNI: skip and say so
2. Already in this codebase?                → reuse it
3. Browser / stdlib does it natively?       → use it (input[type=date], fetch, CSS grid)
4. Tailwind covers it?                      → utility class, not a custom component
5. Already-installed dependency solves it?  → use it, don't add a new one
6. Can it be one line?                      → one line
7. Only then: minimum code that works
```

## Portfolio-specific applications

| Situation                     | Lazy first move                                                                  |
| ----------------------------- | -------------------------------------------------------------------------------- |
| Need a date display           | `new Date().toLocaleDateString()` not a date library                             |
| Need smooth scroll to section | `scroll-behavior: smooth` in CSS, not a scroll library                           |
| Need a tooltip                | `title` attribute or `<details>` before a tooltip component                      |
| Need icons                    | SVG inline or a single icon sprite, not an icon library unless already installed |
| Need a grid layout            | Tailwind `grid grid-cols-3`, not a layout component                              |
| Need animation                | Tailwind `transition`, `animate-*`, or CSS `@keyframes` before a motion library  |
| Need a modal                  | `<dialog>` native element before a modal library                                 |

## Mark deliberate simplifications

```tsx
{
  /* ponytail: native dialog, add focus-trap lib if a11y requires it */
}
;<dialog ref={dialogRef}>...</dialog>
```

## When NOT to simplify

- Input validation at trust boundaries.
- Accessibility (alt text, keyboard nav, ARIA) — never skip.
- Security (no `dangerouslySetInnerHTML`, no exposed secrets).
- Anything explicitly requested by the user.

## Intensity levels

Default is **full**. Change with: `ponytail lite` (suggest but let user choose) or
`ponytail ultra` (YAGNI extremist, challenge the requirement itself).
