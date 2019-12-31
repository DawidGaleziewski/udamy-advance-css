# Architecture

## Mindset for good architecture - TBA

### Think - consider the layout before writing the code

- Modular building blocks - divide the layout into blocks that create the interface.

- Think in component way, thinking about what are the building blocks of the whole layout

- re-usable across a project and between diffrent projects

- Independant, make sure they do not depand on the parent elements

i.e atomic design:
Smallest components on the page are atoms

### Build - write HTML and CSS consistently for the class names

- Pick naming convention (i.e BEM, SMACKS)

#### BEM

- BLOCK - element that has its meaning on its own
  i.e a recepie section will be a block, but also a button in this section as it can be re-used on the page

- ELEMENT - they will have their use only in the block.
  Elements are not re-usable outside the block parent

- MODIFIER - diffrent version of a element.

```html
<div class="recipe">
  <div class="recipe__info">
    I have no meaning on my own. If you take me out of the block I am not use on
    my own.
  </div>
  <div class="recipe__info--3">
    I am a diffrent version of class recipe__info.
  </div>
  <a class="btn recipe__btn">I am a block and element at the same time</a>
</div>
```

### Architect - create a logical architecture for the files and folders

#### 7-1 pattern

-7 folders where we put sass partial files.

1. base/
2. components/
3. layout/
4. pages/
5. themes/
6. abstracts/
7. vendors/

-1 main file that imports all the files
