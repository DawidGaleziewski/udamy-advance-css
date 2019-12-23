Each property has to have a value, even if it was not declared

Width:
1 Declared values:
p tag 140px
.amazing 66% - wins due to class

2. Cascaded value:
   66%

3. Specified value:
   66%

4. Computed value
   % to px
   orange to # value

66%

5. Used value
   (66% of 280px prent width = 184.8px)

6. Actual value
   185.px (.8 is to specific for a browser)

#Padding - despite it was not declared each porperty has a initial value and for padding it is 0px

Font size
16px is default value.
Font size is a user declaration

## How units are converted from relative to absolute

### % will differ for fonts and lengths

150% font size is based on parent computed font size" 16px \* 1.5 = 24px

150% height is based on parent's computed height
150% height, referance is parent width: 150%

### em:

em when used for fonts uses font size of the parent.
em when used for length uses font size of the current element

### rem

always uses root, same for length and font size
