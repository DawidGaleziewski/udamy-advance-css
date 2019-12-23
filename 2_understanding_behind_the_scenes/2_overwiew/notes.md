# Overwiew

## What happens when we load a page?

1. Load HTML

2. Parse HTML - reads line by line
   2.a Browser will build DOM during this process
   2.b Browser will Load CSS it finds during parsing process.
   2.b.a - Browser will Parse the CSS itself.

During CSS parse phase:

- CSS parse conflicts will be resolved via cascade
- Final CSS values will be processed. I.E % values and relative units are calculated on the user device in the parsing phase
- CSS is stored in CSS Object Model (CSSOM)

3. DOM + CSSOM = Render tree

4. Website rendering the visual formatting model
