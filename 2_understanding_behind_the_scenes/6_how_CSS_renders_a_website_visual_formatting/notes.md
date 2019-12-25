# Visual formatting model

Algorithm that calculates boxes and determines the layout of those boxes, for each element in the render tree, in order to determine the final layout of the page

## Factors taken by the visual formatting model algorithm:

- Dimensions of the boxes - box model
- box type - inline, block and inline-block
- positioning schem - floats and positioning
- Stacking contexts
- Other elements in the render tree
- Viewport size, dimensions of images, etc

## box model:

each element on the page can be seen as a box.

- Content - text, images etc (height, width).
- Padding - transparent area around the content, inside the box.
- border
- Margin - space between boxes.

- Fill area - area that gets filled with background color or background image

## calculated:

### default:

total width = right border + right padding + content width + left padding + left border

total height = top border + top padding + specified height + bottom padding + bottom border

### border-box

total width = width
total height = height

padding and border will be taken from content.

## box types (inline, block and inilne-block)

display properties flex, list-item, and table produce block level boxes as well

- block will occupy as much space as it can (100% of its parent). It will also create line breaks before and after the element

-inline - only space the content needs. No line breaks.
Height and width do not apply!.
Paddings only horizontal

-inline block
inline block that works like block.
Occupies only content space.
No line breaks.
box-model as in normal block

## Positioning schemes: normal flow, absolute positioning, floats

1. Normal flow is when element has default position or relative, it is not floated also is laid accordingly to its source order

2. Floats - removed from the normal flow.
   Text and inline elements will wrap around the floated element. Container will not adjust its height to the alement
   i.e float: left

Container will not adjust its height to the floating element. That is why we used clear: both fix

3. Absolute positioning
   when the element is positioned absolute or fixed

Element that is absolute positioned is removed from normal flow and has no impact on surrounding elements

## Stacking context.

In which order the elements are rendereds on the page.
z-index is the best known method of creating stacking context.
Opacity and transform can also change the stacking index
