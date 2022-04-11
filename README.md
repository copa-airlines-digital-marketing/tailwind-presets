# Copa Airlines Tailwind Design System


## Inputs

By default inputs has a validation behaviour that activates the helper text, if you want this behaviour you must add `cm-styles.js` file. If you want to implement it your self the input should include `error` attribute to show the helper text.

### Required

Required inputs label needs to include a `requiered` attribute to include the red asterisk

``` html
<label for="{reference}" required>{Label}<label>
```

### Selects 

Selects by default remove the chevron so it can be added as you like, I suggets using https://remixicon.com/ 

