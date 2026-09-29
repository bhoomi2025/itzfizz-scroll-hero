<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture decisions

- Keep the experience as one TanStack Start index route with its GSAP timeline initialized client-side, because GSAP requires browser APIs and the assignment is a focused single-page showcase.
- Keep all illustration artwork inline and token-colored, because the scene needs crisp responsive scaling without external image dependencies.
