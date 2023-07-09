---
title: "Best Figma to React Plugins: Pros, Cons, Walkthrough, and Review"
date: "2023-07-07"
template: "post"
draft: false
slug: "posts/figma-to-react-plugins"
category: "figma"
tags:
  - "Figma"
  - "React"
description: ""
---

```toc
# This code block gets replaced with the TOC
```

Figma to code plugins and tools are sky high. There was a time when developers had to manually write each line of code to translate designs into the final website, all by scratch. Today, you can install a Figma plugin and let it do the hard work.

The Internet is filled with a plethora of such tools that claim they can convert Figma design to high-quality code that is readable and maintainable for human developers. In this article, we will cover a few of these tools that are popular in the Figma to React code generation space.

We will review them thoroughly, test them on our design, and judge them based on the quality of the code and the preciseness of the final design. But before that, let's take a quick overview of Figma and React.

## Overview of Figma and React

### What is Figma?

[Figma](https://www.figma.com/) is a cloud-based UI/UX design application that provides a workspace for teams to collaborate in real time. As a design tool, Figma offers a variety of features that make it an excellent choice for designers. These include vector editing, prototyping, and design components that allow designers to build effectively and efficiently.

Figma’s collaborative nature sets it apart from many other design tools. Multiple team members can work on a design simultaneously, making it a perfect choice for large teams and complex projects. Additionally, as it's browser-based, you can access your work from anywhere, making it incredibly flexible and portable.

### What is React?

[React](https://react.dev/), on the other hand, is a JavaScript library for building user interfaces developed and maintained by Meta. React allows developers to create large web applications that update and render efficiently in response to data changes.

React stands out for its component-based architecture. This allows developers to break down complex UIs into simpler components, making the code more manageable and the application more scalable. Each component in React has its lifecycle and is responsible for rendering a part of the UI. As a result, a change in one component doesn't affect the others, leading to more efficient updates and less buggy code.

## Top 4 tools to convert Figma to React code

In this section, we are going to review a few popular Figma to React tools that are available in the market.

We will see their pros and cons and test their effectiveness by converting the following design to a React app using these tools:

**Note:** Please remember that whatever we have written about these tools is not based on what we have read on the internet but on what we have experienced while using these products when converting our design from Figma to React.

### Anima

[Anima](https://www.animaapp.com/) is a popular design-to-code automation tool. It helps in converting your designs to HTML/CSS, Vue, and React code. Its Figma plugin allows you to export single or multiple frames to code in no time. For styling, it gives you the option to choose between CSS, Styled Components, and Saas.

Anima also has integrations available with apps like AWS Amplify, Vercel, Firebase, Strapi etc.

#### Pros

- Allows you to add multiple frames for responsive design.

- Gives you multiple styling options: CSS, Styled Components, and Saas.

- It has a rich feature set. You can add Entrance animation, hover effects, media elements, submit button, parallax scroll, etc.

#### Cons

- Uses lots of absolution positioning to align the elements.

- For multiple frames, create separate interfaces altogether.

- Names components and classNames on Figma nodes.

#### How to use Anima?

**Step 1:** Create an account on [Anima](https://projects.animaapp.com/signup) and install the Anima Figma plugin from [here](https://www.figma.com/community/plugin/857346721138427857/Export-to-React%2C-HTML-%26-Vue-code-with-Anima/Anima---Figma-to-React-and-HTML).

**Step 2:** Open a Figma design and run Anima plugin.

**Step 3:** From here, there are two options. If you want to convert a single frame: select that frame, click on **Get Code**, and select **Inspect**. Now Anima will generate the code of the frame for you. You can also open it in CodeSandbox or download it.

**Step 4:** If you want to add multiple frames for a responsive layout: click on **Responsive Pages** inside the Anima window, select all the frames you want to convert to code and click on **Save page**.

**Step 5:** But before exporting, you can also add effects, animations, action on submit button, etc. If your project has such requirements, explore these options in the plugin window.

**Step 6:** Now, click on **Get Code** and select **Export**. Create a new Anima project, select your team, and click on **Create project**.

**Step 7:** Once done, click on **Sync & Get project** and select **React** in the framework list.

**Step 8:** Once your code is ready, click on **Go to Anima**.

**Step 9:** Now, you will be redirected to the Anima builder, where you can download the Zip file.

#### Final Thoughts

Although Anima accurately translates the design to code, the code output it generates is barely up to the mark. Following are some of the issues we have found while converting our Figma design to React code:

**For single frame in Inspect mode:**

Instead of using Flexbox or Grid, it uses position: absolute almost everywhere to align elements. This makes it impossible for us to design responsively without rewriting the entire codebase.

It failed to identify interactive elements. Example: Instead of creating an `<input>` element for the search bar, it created an `<p>` element with the placeholder text wrapped in another div.

It created several components for text like `<TextRegular>`, `<TextMedium>`, `<TextMediumBlack>`, etc., for the text of various styles, the names of which were directly taken from Figma nodes. This could have been avoided by using multiple `<p>` tags or a single `<Text>` component with predefined CSS classes for styling.

**For multiple frames in an Anima project:**

Anima allows you to add multiple Figma frames for desktop, tablet, and mobile designs and export them to an Anima project. This ensures that your website looks native to each breakpoint and device. However, again instead of using Flexbox or Grid, it used positioning to align elements, and if you are using multiple frames, it will create separate designs for each frame.

**For example:** Suppose, you are using two frames, one of 1440px and the other of 375px. It will create two different designs for both screens. The default 375px design will be used for the pixels from 0 to 1439. Up to that point, `display: none`; will be used on the 1440px design to hide it from the UI, and once the resolution of the screen touches 1440px, it will be shown on the UI, and the other mobile design will now be hidden using `display: none`;

Another issue is that it assigns Figma node names to classNames and components. We don't think this is the right way because, in the real working environment, your designer won't know how to name things from a programming context.

### Locofy

[Locofy](https://www.locofy.ai/) is another popular design to code conversion tool that helps you generate frontend code for mobile and web. It has a separate web platform, as well as Figma and Adobe XD plugins. It allows you to generate HTML/CSS, React, React Native, Next.js, Gatsby, and Vue code in JavaScript or TypeScript.

For the styling part, you can instruct the plugin to use CSS, CSS Modules, Tailwind, and even UI libraries like Material UI, Bootstrap, Chakra UI, etc. Additionally, it allows you to download your code, push it to GitHub, and even deploy it using Netlify, Vercel, or GitHub Pages.

#### Pros

- It supports a wide variety of tech: HTML/CSS, React, Next.js, Gatsby, Vue, and React Native.

- It has a rich feature set with options to set animations, shadows, onClick actions, edit styles and layout once you hit a specific breakpoint, etc.

- Allows you to deploy the project from the builder itself.

#### Cons

- Auto Tag feature doesn't work perfectly. So, you have to manually tag the layers as a button, input, text area, etc., if you want to generate the correct elements instead of divs.

- Code Quality is not up to the mark. It uses a lot of positioning hacks.

- Needs your Figma design to follow a specific structure and grouping of layers to create accurate designs.

- Auto-component feature is only available for designs with auto layout and proper grouping. Otherwise, it will add all the code in a single component file.

- Names components based on Figma nodes.

#### How to use Locofy?

**Step 1:** Create an account on [Locofy](https://www.locofy.ai/signup) and install its Figma plugin from [here](<https://www.figma.com/community/plugin/1056467900248561542/Locofy---Figma-to-React-code-(BETA)/Locofy-FREE-BETA---Figma-to-React%2C-React-Native%2C-HTML%2FCSS%2C-Next.js%2C-Gatsby%2C-Vue>).

**Step 2:** Open a Figma design and run Locofy.

**Step 3:** In the Locofy window, click on **Select Project** and then **Create New**. Now, name the project, select **React** as the framework, and modify code settings based on what other tech you want to use.

**Step 4:** Select the frame you want to convert to code.

**Step 5:** From here, you have to do some manual work depending on how well you want your final code to be. **For example:** you can tag elements inside Figma frame as input, button, paragraph, etc., to generate better code. Similarly, you can add onClick actions like change page, open popup, open URL, etc., or you can edit the layout and style of your project at specific breakpoints.

**Step 6:** Once everything is done, click on Sync to Builder. Once you are in the Builder, make whatever changes you want to make and deploy the app, push it to GitHub, or export code.

#### Final Thoughts

Based on our interaction with the tool, we have found that it's not the perfect solution for building large projects post-MVP stage. We have already mentioned a few cons above; now let's dive into the details of it:

Right from the beginning, you have to structure your Figma design in such a way that's best suited for Locofy to work properly. Apart from the structure, it also requires you to do proper naming of the Figma nodes because it's going to be used in the code. This would require your designers to come on the same page as developers and would distract them from their real craft to focus on details that shouldn't be important to them.

The code Locofy generated for us was filled with tons of divs everywhere with only a few `<img>`, `<i>`, `<p>` elements. In most places, it has not even generated a separate `<p>` tag for text, and all the text is inside `<div>` only. We know some of these things can be avoided by tagging them as paragraphs, buttons, input, iframe, etc. But the LocoAI fails to automatically recognize all interactive elements, and manually tagging each element would be too much effort for developers.

Again, similar to Anima, Locofy has also generated code filled with `position: absolute` and `position: relative`. In real-world development, the alignment of elements is done with either flexbox or grid, and positions are used only when you want to break out of the natural alignment of elements. In such a code, the moment you try to change the resolution of the screen, your design breaks.

### DhiWise

Similar to Locofy, [DhiWise](https://www.dhiwise.com/) allows you to import your Figma designs into their builder. DhiWise is primarily a design to code platform for mobile with options to generate code for Flutter, Android, and iOS, but it allows you to generate React code.

Apart from converting frames to codes, it also allows you to setup navigation, authentication and authorization, and integrate Firebase and Supabase to your app.

#### Pros

- Supports mobile and web.

- You can sync your app to VS Code, GitHub, and GitLab.

- Provides lots of templates for mobiles.

- Allows you to deploy the project from the builder itself.

#### Cons

- Generates distorted designs.

- Builds the entire app in a single component.

- It only uses Tailwind for styling.

#### How to use Dhiwise?

**Step 1:** Create an account on [Dhiwise](https://app.dhiwise.com/sign-up) and install the Figma plugin from [here](https://www.figma.com/community/plugin/1037309320238203168/DhiWise---Figma-to-Code).

**Step 2:** Open your Figma file and run Dhiwise plugin.

**Step 3:** Inside the Dhiwise plugin window, click on **Design to Code**.

**Step 4:** Now select the tech stack you want to use. **React** + **JavaScript** in our case.

**Step 5:** Next, in the **Export** section, select All Frames or Selected Frames(and select the Frames you want to export), enter the Figma URL, and hit **Create app**.

**Step 6:** Once your app is ready, click on **View and download app code** in DhiWise.

**Step 7:** Now, you will be redirected to the DhiWise website. Click on **Let’s Start**, and the builder will open up.

**Step 8:** Inside the builder, make whatever changes you want to make and click on the **Build app**.

**Step 9:** Now DhiWise will spin up a new React app which you can download on your computer, sync with GitHub or GitLab, or deploy on Vercel.

#### Final Thoughts

It turns out that DhiWise was not at all useful when we converted our design from Figma to React. It gave us the following result for our design:

Although it provides a visual editor to make further changes but that would work only when you have to make minor adjustments. If the design is fundamentally broken, you have no other option except to rebuild everything from scratch.

There is no auto component creation feature for React in DhiWise. So, it generates all the code in a single component file only except a few components for Text, Image, etc. But thankfully, it allows you to create your own components within the builder.

Unlike Anima and Locofy, DhiWise only gives you the option to generate Tailwind code for styling. So, if you were looking for CSS files, DhiWise is not the best place for you.

### TeleportHQ

[TeleportHQ](https://teleporthq.io/) is a visual UI builder for static websites. Similar to Locofy and DhiWise, it allows you to push your designs to its builder from Figma, from where you can modify the design and either ship the code or download it locally. TeleportHQ allows you to export your code to React, Next.js, Gatsby, Vue, Angular, Preact, React Native, and Stencil. Apart from that, it also provides you with free static templates to build websites right from its builder.

#### Pros

- TeleportHQ has a drag-and-drop builder which you can use to position elements with ease.

- Allows you to add media queries visually at multiple breakpoints.

- Allows you to tag elements visually as `<Article>`, `<Section>`, `<Nav>`, `<Header>`, etc.

- Support multiple tech stacks: React, Vue, Angular, etc., and gives you multiple styling options: Inline Styles, CSS, CSS Modules, Styled Components, Styled JSX, React JSS.

#### Cons

- The code uses lots of absolute positioning to align elements on UI.

- Just like previous tools, it also assigns Figma node names to CSS classes. We have already discussed in the article earlier why this is not the right way.

- All the code is wrapped in a single component file and a single CSS file.

- If you are using Styled Components to style the app, the component name will be, again, based on the Figma nodes, and all the code will reside inside a single JS file only.

#### How to use TeleportHQ?

**Step 1:** Create an account on [Teleport HQ](https://play.teleporthq.io/signup) and install the Figma plugin from [here](https://www.figma.com/community/plugin/992726161890204477/TeleportHQ---Figma-to-Code---Export-HTML%2C-CSS%2C-React-%26-Vue).

**Step 2:** Open the Figma design and run TeleportHQ plugin.

**Step 3:** Select the frame you want to export and click on **Export as a new project**.

**Step 4:** A new pop-up will be open, which will lead you to the TeleportHQ website. Select **My workspace** and click on **Save Project**.

**Step 5:** Now, you will be redirected to the TeleportHQ builder, where you can modify the design visually and export it.

#### Final Thoughts

Similar to DhiWise, TeleportHQ's Figma plugin also failed to capture the design elements accurately, which created a distorted version of the final design inside the TeleportHQ builder. You can take a look below:

The good thing is that it has a drag-and-drop builder, unlike, DhiWise, which makes it relatively easy for us to position elements. However, even if we spend hours fixing the design issues, we will be rewarded with a code that is using absolute positioning to align UI elements which will take us hours again to fix.

Similar to previous tools, TeleportHQ also generated each line of code in a single React component. classNames was again based on figma nodes. If you are using Styled Components, then the name of the components will be based on the Figma nodes too, similar to how Anima does it.

It also allows you to visually add media queries, which is a great feature, by the way. But for any skilled developer, it would be much easier to write code manually than to fix the design in TeleportHQ and add media queries on the breakpoint.

## Wrapping Up

We have spent over a year playing with these tools, identifying the missing gaps in the market, and working on our solution. From our experience, we have seen that existing tools try their best to give developers the necessary tools to ease their work and make them more productive.

But what mistake they make is they don't take the right approach of focusing on generating human readable, and maintainable code. And we are excited to announce that very soon, we are going to launch our own tool that tries to solve this problem and help developers become more productive.

We have identified the problem, learned from the previous players, and are more than excited to show you guys what we have built.

Stay tuned for more updates!
