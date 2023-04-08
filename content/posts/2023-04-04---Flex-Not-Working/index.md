---
title: "Flex Properties “Not Working”? Check for these 6 issues reported 1000s of time on Stack Overflow"
date: "2023-04-04T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/flex-not-working"
category: "problems"
tags:
  - "CSS"
  - "Flexbox"
description: ""
---

Flexbox is easily one of the most powerful developments in CSS ever. But, its implementation has been confounding frontend and fullstack devs ever since it was introduced.

In the last year alone, 6,000+ new threads were posted on Stack Overflow with questions/issues on CSS flex (Source: [Stack Overflow search](https://stackoverflow.com/search?q=css+flex+created%3A1y))!

Similarly, Reddit, Quora, and every other platform that developers frequently use are also riddled with devs struggling to get this very powerful but often confusing concept to work for them.

We read through a few hundred threads across platforms to find these 7 issues that crop up most frequently when devs think that flex is not working for them.

If you think some flex related properties are not working in your code, go through these checks quickly to make sure that you are not making the same errors as those thousands of devs :-)

### 1. Are you using the correct syntax?

Make sure you are using the correct and latest CSS syntax throughout the code, particularly if you don’t write CSS too often.

It’s often easy to overlook small errors in CSS selectors or property names because default IDEs don’t do a good job at highlighting errors.

You’d be surprised how many times we have discovered `display:flexbox` instead of `display:flex` while reviewing our own code!

Consider using a CSS linting tool like [Stylelint](https://stylelint.io/), which is great at spotting unintentional errors and enforcing best practices.

**Fun(?) fact:** [`display: box`](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) and [`display: flexbox`](https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/) used to be the correct syntax in the olden times, way back in 2009 and 2012!

### 2. Are you using 'display:flex' at the correct element (immediate parent)?

Remember that `display:flex` makes the direct children of the container it’s applied to, flex items. So, you’ll have to apply `display:flex` to the immediate parent of the items you want to distribute using flex.

Also, this applies to every level of your div structure. So, if you want to flex an element within a flex element, you must do it twice for both containers. For example, see the code below.

```html
<div class="flex">
  <p>Hello World!</p>
  <div>
    <!-- Also, apply flex here -->
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </div>
</div>
```

### 3.Are you using flex-grow, flex-shrink and flex-basis correctly?

`flex-grow`: This property defines the ability of a flex item to grow beyond its initial size to fill any available space within a flex container.

`flex-shrink`: This property defines the ability of a flex item to shrink below its initial size to fit within the available space within a flex container.

`flex-basis`: This property defines the initial size of a flex item before any available space is distributed among the items in the container.

Here are 2 Stack Overflow examples on how these properties work-

#### [Example 1](https://stackoverflow.com/questions/71399363/how-exactly-does-flex-basis-work-in-combination-with-flex-grow):

<iframe height="300" style="width: 100%;" scrolling="no" title="flex properties 1" src="https://codepen.io/ashutosh-mishra4/embed/preview/bGmNoMQ?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ashutosh-mishra4/pen/bGmNoMQ">
  flex properties 1</a> by Ashutosh Mishra (<a href="https://codepen.io/ashutosh-mishra4">@ashutosh-mishra4</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### Output

- In the above code, 50% of 300px, i.e, 150px is immediately to the first item because of `flex-basis: 50%;`

- The remaining 150px space is initially empty because the `flex-basis` of the other two items is 0. Later on, it's divided into all three items equally because each of them has `flex-grow: 1`, making them 200px, 50px, and 50px respectively.

#### [Example 2](https://stackoverflow.com/questions/25066214/flexbox-not-giving-equal-width-to-elements/25066844#25066844):

<iframe height="300" style="width: 100%;" scrolling="no" title="flex properties 2" src="https://codepen.io/ashutosh-mishra4/embed/preview/Exdawpy?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ashutosh-mishra4/pen/Exdawpy">
  flex properties 2</a> by Ashutosh Mishra (<a href="https://codepen.io/ashutosh-mishra4">@ashutosh-mishra4</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

- In the above code, the flex items have `flex-grow: 1` for equal distribution of space but don't have `flex-basis` and therein lies the point. When you miss to assign a specific `flex-basis` value to your flex items, its default value becomes auto and the width distribution will be done according to the content size.

- To fix this issue, also add `flex-basis: 0`. Flex basis will ensure that there is no default distribution width and the entirety of it then will be distributed equally among the items because of _flex-grow: 1_.

If you want to understand these properties in much more detail, check out this [guide](https://css-tricks.com/understanding-flex-grow-flex-shrink-and-flex-basis/) by CSS Tricks.

### 4. Are media queries overriding some of your desired properties?

If you are building a UI where certain elements are to be same irrespective of the device and screen, make sure that media queries are not overriding those default properties that need to work on each screen.

<iframe height="300" style="width: 100%;" scrolling="no" title="Media Query overriding properties" src="https://codepen.io/ashutosh-mishra4/embed/preview/dygPVON?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ashutosh-mishra4/pen/dygPVON">
  Media Query overriding properties</a> by Ashutosh Mishra (<a href="https://codepen.io/ashutosh-mishra4">@ashutosh-mishra4</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

In the above [example](https://stackoverflow.com/questions/74006260/why-flex-basis-100-is-not-working-in-this-case-what-is-the-solution), the property `flex: 0 0 100%;` was overridden by `flex: 0 0 calc(50% - 1rem);` in the media query and therefore the user was not getting the desired output in the UI.

### 5. Automatic minimum size of Flex items

All flex items have an automatic minimum size `min-width: auto` or `min-height: auto` on the main axis to avoid shrinking past its content. Remember that it works only for the main axis, so if the `flex-direction` is row, only `min-width` will become auto and if the `flex-direction` is column, then only the `min-height` become auto.

Minimum width or height when set to auto allows flex items to change their size to accommodate the content properly. You can, however, override this default behavior by setting `min-width: 0` in row-direction and `min-height: 0` in column-direction.

Here's an [example](https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size/36247448#36247448) of this issue-

<iframe height="300" style="width: 100%;" scrolling="no" title="Automatic minimum size of Flex items" src="https://codepen.io/ashutosh-mishra4/embed/preview/oNagGeB?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ashutosh-mishra4/pen/oNagGeB">
  Automatic minimum size of Flex items</a> by Ashutosh Mishra (<a href="https://codepen.io/ashutosh-mishra4">@ashutosh-mishra4</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 6. If you are using justify-content, remember that default width is auto:

One important thing to keep in mind is that if you are not explicitly giving a fixed width to an element, then the default width is auto.

An element with the `width:auto` will take up the smallest needed space for the content and will shrink or expand accordingly to fit its content.

<iframe height="300" style="width: 100%;" scrolling="no" title="Default width is auto" src="https://codepen.io/ashutosh-mishra4/embed/preview/oNagGoZ?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ashutosh-mishra4/pen/oNagGoZ">
  Default width is auto</a> by Ashutosh Mishra (<a href="https://codepen.io/ashutosh-mishra4">@ashutosh-mishra4</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

In such [cases](https://stackoverflow.com/questions/73002394/css-flex-property-justify-content-not-working), justify-content will not work as intended because all the available space has already been covered by the content itself and there is no extra space for justify-content to align the flex items. This problem can be solved by giving a fixed width to the element.

### 7. If your issue is happening in some specific browsers/ devices

Sometimes, the code you write is correct but it doesn't conform to the ways flex used to work earlier. As a result, it doesn't work as intended on some old browser versions.

<iframe height="300" style="width: 100%;" scrolling="no" title="Not working on old iPads" src="https://codepen.io/ashutosh-mishra4/embed/preview/NWOPawE?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ashutosh-mishra4/pen/NWOPawE">
  Not working on old iPads</a> by Ashutosh Mishra (<a href="https://codepen.io/ashutosh-mishra4">@ashutosh-mishra4</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

In the above [example](https://stackoverflow.com/questions/37296836/css-flex-layout-not-working-on-some-ipads), the flex layout is not working on some iPads. This is because it is missing the `-webkit-` syntax that must be used for iPads that have Safari version 6.1 or less.

Here are a few tools and guides that will help you identify and solve cross-browser compatibility issues-

- [Autoprefixer CSS online](https://autoprefixer.github.io/)- Autoprefixer is a tool that automatically adds vendor prefixes to your CSS code. Vendor prefixes are extra code added to CSS properties to ensure they work correctly on different browsers. For example: `-webkit-`, `-ms-`, and `-moz-`.

- [Can I use](https://caniuse.com/flexbox)- This tool shows up-to date browser support tables for various web technologies, including CSS Flexbox.

- [Backwards compatibility of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)- A guide by MDN that tells about the history of flexbox and how to write to code that is backwards compatible with the older versions of the browsers.

- [Flexbugs](https://github.com/philipwalton/flexbugs)- A GitHub repository that contains lots of flexbox issues, particularly dealing with cross-browser compatibility problems.

## Wrapping Up

Though the article has come to an end, the bugs are still alive. We have covered some of the common flexbox issues developers face and hope this will help you figure out solutions for your codebase.

Let us know in the comments if you find this blog post helpful and whether or not it has helped you solve your flexbox related issues.

_Happy Coding!_
