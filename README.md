# jquery.lazy
A tiny JQuery plugin to enable image lazy loading.


# How to use jquery.lazy

## Step 1: Include jquery.lazy.js after jquery
```html
<script src="jquery-3.3.1.min.js"></script>
<script src="jquery.lazy.js"></script> 
```

## Step 2: Your image elements should be like this:
```html
<img lazy src="placeholder.png" data-src="image1.png" />
<img lazy src="placeholder.png" data-src="image2.png" />
<img lazy src="placeholder.png" data-src="image3.png" />
<img lazy src="placeholder.png" data-src="image4.png" />
<img lazy src="placeholder.png" data-src="image5.png" />
<!-- More images -->
```

## Step 3 ( Alternative ): If your images don't have the lazy attribute but a class or an id:

```html
<img class="some-random-class" src="placeholder.png" data-src="image1.png" />
<img class="some-random-class" src="placeholder.png" data-src="image2.png" />
<img class="some-random-class" src="placeholder.png" data-src="image3.png" />
<img class="some-random-class" src="placeholder.png" data-src="image4.png" />
<img class="some-random-class" src="placeholder.png" data-src="image5.png" />
<!-- More images -->
```

```javascript
$('img.some-random-class').lazy();
```
