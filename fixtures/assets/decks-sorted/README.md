# Sorted Deck Assets

Images from `fixtures/assets/decks` are grouped by visible deck/component type. The original generated deck id is kept in each filename because several source files were duplicates or subset decks that reused the same sheet art.

Filename prefixes:

- `back__...` is a deck/card back image.
- `single__...` is a single playable/reference card face.
- `grid_N-items_X-Y__...` is a sheet image with `N` visible items on an `X` by `Y` grid. Split cards use `__pos-X-Y` with 1-based row-major positions.

Run `scripts/split-deck-grids.ts` to crop every grid image into individual files next to its source sheet. Each folder should have at most one source `grid_...` image; extra sheets should be a separately named `*-expansion-cards` folder.

Each deck folder has a `deck.ts` fixture file. The `rawText` field is OCR-derived unless the card is icon-only; company, business deal, immigration, and loan cards also include structured values from the rules/source data or visible card values. Action, event, and Automa cards use `stateEffects` for declarative game-state operations only. OCR/source text stays in `rawText` and `content`; it should not be encoded as a raw state effect.

Some physical decks contain repeated copies of the same visible card face. In those cases `deck.ts` has one entry per physical card, while repeated entries share the same `frontImage` and use `source.copyIndex`/`source.physicalIndex` for provenance.

Notes:

- `middle-class-company-cards/grid_17-items_6-3__...` and `capitalist-class-company-cards/grid_28-items_6-5__...` use the visible/rules component counts; the generated source README understated those counts.
- Company deck fixtures are the source for `shared/logic/cards/companyCards.ts`. Public Companies include 12 physical cards: the 3-diamond University Hospital, Technical University, and National Public Broadcasting are the 3/4-player starting variants; the 2-diamond Public Hospital, Public University, and Regional TV Station are the 2-player starting variants. Regional TV Station visibly produces 3 Influence.
- Cooperative Farm cards are exported from `companyCards.ts` as a special side deck; they are parsed from `fixtures/rules/components.md` as 0-cost Food companies that produce 2 Food and require 3 unskilled Working Class workers.
- Class action card ids are normalized from the visible title plus copy index, and `content` starts at the visible title while `rawText` preserves the noisy OCR. `stateEffectsCoverage: "unparsed"` means the card still needs a declarative effect pass; `"partial"` means at least one declarative effect exists but choices/conditions may still need refinement.
- `business-deal-cards` has 20 physical cards but only 10 unique faces; each face appears twice, matching the Tabletop Simulator `cardIds`.
- `loan-cards` has 10 physical base-game Loan 50 cards sharing one visible face. `loan-expansion-cards` keeps the separate 3-card 30/40 front and 50/70 back loan deck from the extracted expansion assets.
- `export-cards/deck.ts` includes the visible icon transactions as `{ resource, amount, money }` rows; the OCR text is still preserved because the source cards are mostly icon-only.
- `historical-event-expansion-cards` and the four `*-action-expansion-cards` folders were split out from base decks because they came from additional 5-card or historical event sheets, not the base component counts in `fixtures/rules/components.md`.
- Duplicate source sheets were collapsed to one canonical copy: historical events keep deck 190, Automa events keep deck 212, Automa agenda keeps deck 209, Automa Capitalist action priority keeps deck 233, Automa spending influence keeps deck 243, and Working Class action expansion keeps deck 202.
- Automa agenda backs were originally repeated as 5x4 back grids. They are represented by one cropped `back__automa-agendas-deck-209.jpg` image and should not be split.
- The historical event, crisis response, and Automa folders were classified from visible card text and backs. They are present in the extracted workshop assets but are not fully covered by the markdown rules.
- Grid images with blank trailing cells only split the named item count, so empty end cells are ignored.
