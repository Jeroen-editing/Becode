# UI Components
![](./assets/user-interface.gif)

- Repository: `design-components`
- Type of Challenge: `Consolidation challenge`
- Duration: `22 days (1 hour per UI)`
- Deployment strategy : github (no need to deploy)
- Team challenge : `yes (max 4)` |  `solo`

This Consolidation Challenge will help you to reach a professional level in "frontend development". By the time you finish the integration of the 22 mockups, you should feel totally confident that you have enough skills as a professional frontend integrator to face all types of html/css integration challenges.

## Mission objectives

You work in a Web Design agency as Frontend Integrator. The UI Designer provides you with 22 images, each representing a high-fidelity mockup of the website's interface component.  Your job is to reproduce in html and CSS each of these components. Each UI component has been validated by your customer. It's therefore really important that the end-result looks as close as possible to the mockups.

## Instructions

1. Create as many html/css templates as there are UI Components and try to reproduce the interface as close as possible. The HTML has to be valid, semantic and abide to the Progressive Enhancement approach.  With your css skills, reach the closest "pixel-perfect" version you can. Ideally, we should not see any difference between the image mockup and your result, without using any image. Images are only accepted for illustrations, when there is no CSS alternative.
2. Start with number 1 and work your way until the last.
3. Each UI component should be responsive (you are free to decide how exactly the screen should reflow) over 2 breakpoints: 480 and 768 pixel-width.
4. Use the *html5boilerplate* as a starting basis.
5. Given the amount of code you will reuse, use SASS, and organize your SCSS partials so as to stay orderly. Need ideas ? Read on [how others are doing it](https://zellwk.com/blog/css-architecture-3/). You probably should also read about [Block, Element, Modifier (BEM) Methodology (en)](https://css-tricks.com/bem-101/) or the [SMACSS](https://smacss.com/) approaches, often referred to in the industry. Use variables, *nesting* and `@import`. 
6. This file structure would be a good basis:    

```ascii
- UI-component-name/
    L index.html
    L assets
        L css
        L sass
        L img
```


## Static resources

It's sometimes hard to identify the right text font used in the UI mockup. Find "good enough" alternatives. Here are 2 useful tools for that :

- [Fontpair](http://fontpair.co/)
- [Google Font](https://fonts.google.com/)

Some images are available in the [assets](assets) folder. When it is not, use printscreens.
In the case of photographs, you can use other ones, available on [Unsplash](https://unsplash.com).

## Tips
### 1. See the outline of each html block element to visualize the flow

Add this property to the body element.

```css
.outline-mode * {
    outline: 1px solid #000;
}
```

### 2. Chrome extensions
You can find alternatives for different browsers.

- [pix-to-pix-pixel-perfect](https://chrome.google.com/webstore/detail/pix-to-pix-pixel-perfect/binboaimbgchaamickjnhgjdccohndin?hl=fr)
- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) to check your code performance and find ways to improve it (you should already have this)


# Good luck!
![](./assets/cat-gif.gif)
