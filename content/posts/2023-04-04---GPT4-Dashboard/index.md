---
title: "Can GPT4 generate good CSS?"
date: "2023-04-04T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/gpt4-dashboard"
category: "thought"
tags:
  - "AI"
  - "ChatGPT"
  - "GPT4"
  - "Tutorial"
---

## Building the Dashboard

### Generating the Menu Sidebar

**Prompt 1**: _Let's build a frontend for a SaaS Dashboard. We are going to use React, TailwindCSS, Font Awesome, and Recharts to build the app. For Typography, we are using "Poppins" from Google Fonts._

_You have to help me generate the code for this app. Make sure the design and theme look like a modern SaaS app. I'll explain to you all the steps one by one. Let's start:_

_Generate code for a Menu sidebar on the left side of the screen-_

_On the top, create an h1 title: "SaaS Kit", then use a thin border on the bottom_
_Now create a small section for account details: profile picture, name, and email._

In the response, GPT4 first asked me to install all the dependencies I mentioned earlier and gave me all the commands followed by the code for MenuSidebar.jsx and App.jsx

```Powershell
npm install tailwindcss@latest postcss@latest autoprefixer@latest
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
npm install recharts
npm install --save @fontsource/poppins
```

So far so good, except that GPT4 unnecessarily imported components from Recharts that we don't need in the sidebar and it used Fontsource to host _Poppins_ when I clearly mentioned Google Fonts.

Additionally, it missed to generate the CSS code we need to reference the font in our stylesheet, we will fix this later.

![](jfjfl.png)

**Prompt 2**: _Great, now below the email ID, add the following details-_

_Create a list of menu icons along with their names:_

_1. Dashboard_

_2. Tasks_

_3. Email_

_4. Contacts_

_5. Chat_

_6. Deals_

_Then, divide this section with a thin border at the bottom followed by an icon and name for "Settings"._

_At the bottom of the section, use an icon for toggle and name "Toggle Sidebar"._

In the response, it started by giving me all the import statements of Font Awesome icons that are being used in the sidebar. It also created a new component **MenuItem** to add menu options along with the icons and rendered it multiple times inside MenuSidar component.

Thus, we got this-

![](aefddsaf.png)

**Prompt 3**: _Perfect! Layout is exactly what I wanted. Just improve the styling now. Feel free to use transitions and shadows to give a more polished look to the sidebar._

Layout wise, I was very satisfied by what it had already generated. So I asked if it could help to improve the style further.

As I instructed, it only gave me transition and shadow. The menu items already had hover effect. But this time, GPT made it smoother by adding `transition duration-200 ease-in` classes to the menu items. It also gave `shadow-lg` class to the sidebar.

<!-- GIF here comparing old and new style -->

Remember, I told you earlier that we are going to fix the issue related to Poppins font? Let's do it this time.

**Prompt 4**: _Good, generate the code related to importing the Poppins font, it's not working_

GPT4 fixed the issue this time. It gave the following code to add to the `index.css` or `app.css` of our project.

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

body {
  font-family: "Poppins", sans-serif;
}
```

It also told me to remove the `import '@fontsource/poppins';` statement from the **MenuSidebar.jsx** which was the right thing to do.

I also increased the margin-top of the menu items from `mt-4` to `mt-8` and completed the sidebar.

![](retgrege.png)

### Generating the Search Bar

**Prompt 5**: _Thank you,_

_Now, create a search bar that fills all the remaining horizontal space on the screen on the top beside the sidebar._

_On the left, it should have a search icon followed by the placeholder "Global Search"._
_On the right, add a bell icon for notifications._

_Also, share the updated App.js file_

GPT created a great search bar design in the first attempt itself. So let's move ahead without changing anything.

![](rouhfjld.png)

**Prompt 6**: _Perfect, now create a new component for tasks. Use only 60% of the available horizontal screen after sidebar for this component. Here's what you have to add-_

_1. Display completion status on top left- 8 tasks completed out of 10. On the top right, create a filter option with the name "Show". It has three values- "This week", "This month", and "This year"._

_2. Add a 6px curved line below that shows our percentage progress. The original color should be gray but the X% of the line is green depending on the our progress._

**Prompt 7**: _Really amazing work, Now below the green line, add-_

_1. Today's date and day in bold._

_2. In the new line, write names of the upcoming days for the whole week in short along with their days on the bottom, all evenly spaced._

Here's the result of the last 2 prompts. GPT4 has done great work again with the design.

Although, I instructed to add the word **Show** before the filter for further clarity. But it also works fine without it, so let's move ahead.

![](ruotrgjlf.png)

**Prompt 8**: _Absolutely amazing. Now, create a new component file called TaskLists.jsx_

_Inside this component, create 3 different sections for tasks. Each section should contain a title, tag, due date, assigned person + their profile picture, and status._

_Status could be either Competed, Active or Ended. Use Green, Yellow, or Red color for the button based on the status. Add a show more button in the center below the 3rd task._

_Layout: On the left side, add title followed due date followed by the assigned person + their profile pic in 3 different lines. Add tag on the top right and status button on the bottom right of the section._

_Render this component below the timeline in the TaskSection component._

For the left side of the Task Card, GPT4 understood my instructions well and gave me exactly same design what I had asked for.

On the right side of the card, I didn't asked for the background color on tag and I didn't wanted the status button beside it, let's fix that.

![](yrhfdfssd.png)

**Prompt 9**: _Don't use background color for tag and don't add it before the status button. Add it on the top right of the card._

This time it messed with the design even more but did what I had asked for. The prompt was little unclear this time.

![](jrthrtytr.png)

**Prompt 10**: _Make the status button parallel to the assigned person on the bottom right side_

Not exactly what I was looking more, but better. So, we can leave it here and start building the next component.

![](kjgdrtouer.png)

**Prompt 11**: _Brilliant!! Now, create a component to show a deals chart_

_In this component, create a section with the title "Deals" on top left and a filter "Show" on the top right with values- weekly, monthly, and yearly._

_Then, create a Line Graph using Recharts. Use 0, 50, 100, 150, and 200 as values on the y-axis and 3 Aug, 10 Aug, 17 Aug, and 24 Aug on the x-axis._

_Give it 40% height of the screen and render it beside TaskSection.jsx. Give width according to the available space._

As instructed, GPT4 created a new component for chart and gave the updated App.jsx code. Chart looks fine but the width is too much. We are going to address it in the next prompt.

GPT4 also made a mistake in the App.jsx file this time. It generated wrong component names of MenuSidebar and SearchBar.

![](retergfdg.png)

**Prompt 12**: _Reduce the current width of the chart component to 30% and increase margin on the left._

I instructed GPT4 to reduce the width to 30% and increase margin on the left. In return, it replaced the class `w-full` with `w-3/10` and assigned `ml-6` class for margin left.

![](iyghbkhs.png)

Margin worked fine but there is no exact predefined 30% width class in Tailwind. Here, GPT made a mistake and assigned a non-existent class `w-3/10` to the component.

I manually replaced it with `w-1/3` which is 33.33% and got the following result-

![](ergfdfd.png)

**Prompt 13**: _Thank you,_

_Now, in a new component TasksChart.jsx-_

_1. Create a section with the title "Tasks" on the top left and a filter "Show" on the top right with values- This week, This month, and This year._

_2. Then, create a Pie Chart using Recharts. Use Green, Yellow, and Red colors for completed, active, and ended. 60% of the tasks are completed, 30% are active, and 10% are ended._

_3. Give it a height of 40% and the same width as the DealsChart.jsx_

_Render this component in App.jsx below DealsChart.jsx_

The Pie Chart looked good but I wanted more detailed look with percentage values also assigned to the sections.

GPT4 again generated the wrong width class. I told it to give the same width to TasksChart.jsx as DealsChart.jsx has. So, it assigned the `w-3/10` class
to TasksChart.jsx(I changed it to `w-1/3` again).

Apart from that, the TasksChart.jsx is also not getting rendered at its correct place. This is because the `flex-wrap` class is assigned to div wrapping TaskSection.jsx, DealsChart.jsx, and TasksChart.jsx

![](qwrefds.png)

**Prompt 14**: _Great but you need to fix 2 things-_

_1. Add the percentage number in the TasksChart._

_2. Both Charts should render together beside TaskSection, DealsChart on the top, and TasksChart on the bottom. To do so, you have to wrap both these components in another element and make it flex._

In response, GPT4 added the label prop to the Responsive container in the Pie Chart-

`` label={(entry) => `${entry.value}%`} ``

Apart from that, it wrapped both chart components in another div and made it flex as I instructed-

```jsx
<div className="flex flex-col w-3/10">
  <DealsChart />
  <TasksChart />
</div>
```

In the above code, it again gave me the non-existent `w-3/10` class, and again the charts are not assigned the proper space in the UI.

![](dfsdfd.png)

**Prompt 15**: _Not working, I want both the charts to cover the remaining area on the right side of the screen beside TaskSection. Right now, both the charts are getting shrinked to ~10% of their original size_

Again, it gave me the wrong code and the charts this time got even worse-

![](vcbfdgdfg.png)

**Prompt 16**: _Create a new component Charts.jsx with width 1.5x of the MenuSidebar that renders both chart vertically on the right side of the screen._

I thought let's check whether rendering both chart components in another component with fix width will work or not, nothing worked.

It again gave a wrong width the class `w-6/10` to the new Chart.jsx component.

This time I had to manually fix this problem. After trying out various things for a while I realized that instead of giving _percentage_ values to the charts, giving _rem_ value would work.

So, I changed the DealsChart.jsx width and height from `w-1/3` and `h-2/5` to `w-96` and `h-80`. Similarly, I assigned the `w-96` and `h-96` classes to the TasksChart.jsx

This time it worked!

I also made some more manual changes to the code to make UI better like-

1. Giving the `ml-6` class to the TasksChart.jsx component, same as DealsChart.jsx for proper alignment.

2. I removed the **Show More** button from TaskSection because it was not adding much value.

3. I removed the `w-screen` from the top div in App.jsx that was causing an overflow.

Once all the changes were done we finally got this amazing UI that we can be proud of.

![](mbvgdhd.png)

## My Thoughts on GPT4

After completing the whole app, one thing I must admit is that GPT4 is insanely powerful. Although it doesn't give you 100% accurate results always, but you still cannot deny that it is truly magical.

You can see for yourself how it remembers the context of the design and creates components that match really well with the overall theme in no time.

As a programmer, its your job to give GPT better prompts for it understand your requirements well based on which you will receive the results. The better your prompt is, the better the result will be.

However, it doesn't mean that it will always give your 100% correct code. There were lots of places in the app where GPT gave me incorrect code.

That's why it needs human intervention to build really great apps. It's you who will fix the GPT errors and design the large scale architecture of your apps and give GPT the individual tasks to perform.
