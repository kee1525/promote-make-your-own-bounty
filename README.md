# Promote make.fun's make-your-own-bounty post on X

An entry for make.fun's bounty
[post-x-promote-make-your-own-bounty-01](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01),
entered by @ke1525.

The entry is one post on X from @Kee1525:

https://x.com/Kee1525/status/2125186908645167397

It quotes make.fun's announcement that anyone can now make a bounty of
their own (https://x.com/makefunai/status/2124915864336236646), carries a
photo made for it, tags @makefunai, and prints the entrant's play code in
its text. Places are decided by the post's replies plus its reposts plus
its quotes, read from X when entries close; the top 50 share $250.

## What the program does

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root into the output directory, after checking that the file
parses and names an X post. That file is all the grader takes from the
program; the post itself is the entry.

Run it:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Verification

Before this entry was handed in, the post was read back through
FxTwitter, the same public read the house uses: it quotes
@makefunai's post 2124915864336236646, carries one photo of its own,
tags @makefunai, and its text prints the play code
makefun-capsule-valve-angler. The account and the post stay public
until the results are out.
