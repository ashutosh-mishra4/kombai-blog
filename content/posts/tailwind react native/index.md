---
title: "How to use Tailwind CSS with React Native"
date: "2023-05-13"
template: "post"
draft: false
slug: "/posts/tailwind-react-native-installation-and-usage"
category: "tailwind"
tags:
  - "Tailwind"
  - "React Native"
  - "CSS Frameworks"
description: "Dive into the benefits of using Tailwind CSS with React Native, explore utility-first styling, and uncover leading Tailwind React Native libraries."
---

React Native has become a popular choice among developers for building cross-platform mobile applications. With its component-based architecture and native performance, it offers an excellent development experience.

However, when it comes to styling, React Native takes a different approach compared to web development, which may leave some developers longing for the familiarity of CSS.

Tailwind CSS is a popular utility-first CSS framework that has gained traction for its simplicity, efficiency, and customizability. In this article, we'll explore why using a Tailwind-like approach in React Native can be beneficial and introduce some libraries that bring the utility-first philosophy of Tailwind into the React Native world.

## Why use Tailwind in React Native?

Tailwind CSS has rapidly gained popularity among web developers for its simplicity, efficiency, and customizable features.

But can you work with Tailwind on a React Native project? Is Tailwind a good fit for that?

The answer is yes. In fact, using Tailwind with React Native can significantly improve your workflow. The utility-first class approach of Tailwind allows developers to create responsive interfaces with less code and minimal context switching between HTML and CSS.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">No one can stop me now! React Native + Tailwind CSS <a href="https://t.co/r7Tly9V7na">pic.twitter.com/r7Tly9V7na</a></p>&mdash; Joe Ferreira (@ferreiracoder) <a href="https://twitter.com/ferreiracoder/status/1452273897768947723?ref_src=twsrc%5Etfw">October 24, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This approach, when combined with the component-based structure of React Native, can lead to a more efficient development process.

Tailwind also shines in its flexibility. It doesn't enforce a specific design system, leaving developers with full freedom to create custom designs according to their needs.

## Styling in React Native

React Native, unlike regular web development, doesn't support CSS out of the box. Instead, it uses a JavaScript-based styling approach, where styles are written as JavaScript objects. This can be a challenge for developers coming from a web development background.

Although this approach ensures better performance and a more native feel to the apps, it may not be as intuitive as the traditional CSS way of styling. This is where Tailwind comes into play, offering a more familiar utility-first way of styling components.

## The utility-first class approach

The utility-first class approach is a method of styling where instead of defining styles for each individual component, you use utility classes to directly apply styling. This approach promotes composition over inheritance, leading to less CSS bloat and more reusable styles.

In Tailwind, every utility class corresponds to a CSS declaration, making it incredibly straightforward to apply styles. You can chain multiple utility classes together to achieve complex designs with ease.

This approach can be highly productive and efficient, particularly in a React Native environment.

## What are the Tailwind like libraries for React Native?

Despite the clear benefits, Tailwind CSS can't be directly used with React Native due to the latter's unique styling approach.

However, several libraries have been developed to bring the utility-first philosophy of Tailwind into the React Native world.

### NativeWind

[NativeWind](https://www.nativewind.dev/) is a popular library designed to offer a Tailwind-like utility-first experience in React Native.

It's a set of utility classes built on top of the Tailwind CSS itself, allowing developers to utilize a familiar workflow within React Native.

NativeWind provides a universal style system and comes with lots of amazing features like dark mode, arbitrary classes, media queries, themes, fast runtime etc.

**Example usage**:

```jsx
import React from "react";
import { withExpoSnack } from "nativewind";

import { Text, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const App = () => {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText className="text-slate-800">Hello World! 🎉</StyledText>
    </StyledView>
  );
};
```

### NativeBase

[NativeBase](https://nativebase.io/) is not a Tailwind CSS library per se but offers a similar utility-first approach.

It is a comprehensive library of pre-built React Native components that can be customized with utility props, making it a good alternative for developers who want a more robust solution.

NativeBase components are highly modular, and the library also includes support for custom themes and Dark Mode.

**Example Usage**:

```jsx
function Example() {
  return (
    <Box alignItems="center">
      <Pressable
        onPress={() => console.log("I'm Pressed")}
        rounded="8"
        overflow="hidden"
        borderWidth="1"
        borderColor="coolGray.300"
        maxW="96"
        shadow="3"
        bg="coolGray.100"
        p="5"
      >
        <Box>
          <HStack alignItems="center">
            <Badge
              colorScheme="darkBlue"
              _text={{
                color: "white",
              }}
              variant="solid"
              rounded="4"
            >
              Business
            </Badge>
            <Spacer />
            <Text fontSize={10} color="coolGray.800">
              1 month ago
            </Text>
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Marketing License
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            Unlock powerfull time-saving tools for creating email delivery and
            collecting marketing data
          </Text>
          <Flex>
            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
              Read More
            </Text>
          </Flex>
        </Box>
      </Pressable>
    </Box>
  );
}
```

### React Native Zephyr

[React Native Zephyr](https://formidable.com/open-source/react-native-zephyr/) is a newer addition to the utility-first CSS libraries for React Native.

It follows the Tailwind CSS methodology and provides a vast set of customizable utility classes, making it a great choice for those seeking an intuitive and efficient styling approach.

React Native Zephyr also includes a built-in set of responsive variants and support for custom themes.

Example usage:

```jsx
import * as React from "react";
import { StyledView, StyledText } from "./styles";

export const MyComponent = () => {
  return (
    <StyledView
      classes={["flex:1", "bg:purple-100", "justify:center", "items:center"]}
      darkClasses={["bg:purple-800"]}
    >
      <StyledText
        classes={["text:5xl", "color:gray-800"]}
        darkClasses={["color:gray-100"]}
      >
        Hey world
      </StyledText>
    </StyledView>
  );
};

export default App;
```

### Tailwind React Native Classnames

[Tailwind React Native Classnames](https://github.com/jaredh159/tailwind-react-native-classnames) is a library that brings Tailwind's utility-first approach to React Native in a familiar way.

With Tailwind React Native Classnames, you can write Tailwind classes directly in your components as if you were writing for the web, enhancing productivity and ease of use.

One of the unique features of this library is that it supports all Tailwind CSS features, including responsive design, pseudo-classes, and dark mode.

Apart from that, it also offers _platform prefixes_ to conditionally apply styles to a specific platform. Eg: `` tw`ios:pt-4 android:pt-2`; ``

**Example usage**:

```jsx
import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

function App() {
  return (
    <View style={tw`bg-blue-500 h-full`}>
      <Text style={tw`text-white text-xl font-bold`}>
        Hello, Tailwind React Native Classes!
      </Text>
    </View>
  );
}

export default App;
```

## Conclusion

To sum up, the combination of Tailwind's utility-first approach with React Native's component-based architecture can significantly enhance the development process.

While there are challenges due to React Native's unique styling approach, libraries like NativeWind, NativeBase, React Native Zephyr, and Tailwind React Native Classnames provide solutions that make it easier to enjoy the benefits of Tailwind in a React Native environment.

While each of these libraries are great, none of them is same. So, the best way is to experiment with each of these libraries to find the one that resonates with your project requirements and coding style.

_Happy Coding!_
