Every CSS property HAS to have a value even if we do not specify it

```css
.parent {
  font-size: 20px;
  line-height: 150%;
}

.child {
  font-size: 25px;
  /* I will inherit the value from my parent.
  But not the 150%, first it needs to get computed */
}
```

## inheritance process

1. Is there a cascaded value?
2. If not, is the property inherited?

## rule of thumb on inherit values

- values related to fonts are inherit- font size, font family, font color

- values related to padding/ margin are not inherit
