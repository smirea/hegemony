# Sorted Deck Assets

Images from `fixtures/assets/decks` are grouped by visible deck/component type. The original generated deck id is kept in each filename because several source files were duplicates or subset decks that reused the same sheet art.

Filename prefixes:

- `back__...` is a deck/card back image.
- `single__...` is a single playable/reference card face.
- `grid_N-items_X-Y__...` is a sheet image with `N` visible items on an `X` by `Y` grid. Split cards use `__pos-X-Y` with 1-based row-major positions.

Run `scripts/split-deck-grids.ts` to crop every grid image into individual files next to its source sheet. Each folder should have at most one source `grid_...` image; extra sheets should be a separately named `*-expansion-cards` folder.

Notes:

- `middle-class-company-cards/grid_17-items_6-3__...` and `capitalist-class-company-cards/grid_28-items_6-5__...` use the visible/rules component counts; the generated source README understated those counts.
- `historical-event-expansion-cards` and the four `*-action-expansion-cards` folders were split out from base decks because they came from additional 5-card or historical event sheets, not the base component counts in `fixtures/rules/components.md`.
- Duplicate source sheets were collapsed to one canonical copy: historical events keep deck 190, Automa events keep deck 212, Automa agenda keeps deck 209, Automa Capitalist action priority keeps deck 233, Automa spending influence keeps deck 243, and Working Class action expansion keeps deck 202.
- Automa agenda backs were originally repeated as 5x4 back grids. They are represented by one cropped `back__automa-agendas-deck-209.jpg` image and should not be split.
- The historical event, crisis response, and Automa folders were classified from visible card text and backs. They are present in the extracted workshop assets but are not fully covered by the markdown rules.
- Grid images with blank trailing cells only split the named item count, so empty end cells are ignored.
