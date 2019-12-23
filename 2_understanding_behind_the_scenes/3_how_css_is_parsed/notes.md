## terms refresh

```css

.class-name /* Selector*/
{
    color: blue /* declaration */
    background-color: /*Property */
    red /* Declared value */

} /* Declaration block*/

```

# CSS pharse phase

## 1 Cascade

- combines diffrent sources of stylesheets.
  eaither author, user styles or browser
  (what was programmed vs what is forced by the user vs browser)

- resolving conflicts
  Importance (weight) > Specificity > Source order

1.  Most important are user declarations with !important keyword

2.  Author !important declaration

3.  AUthor declarations

4.  User declarations

5.  Default browser declarations

## Maintainable CSS:

!Importance: styles declared in inline styles will alway come before the styles from stylesheets

Universal selector \* has the specificity of 0,0,0,0

It is always better to use specificity then order! As we may want to move the stylesheets in the future

Order should be used mostly with 3rd party imports i.e normallize
