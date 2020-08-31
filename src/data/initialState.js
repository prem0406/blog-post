export const initState = {
  posts: [
    {
      id: "1",
      title: "Introducing the New React DevTools",
      category: "Open Source",
      body:
        "What’s changed? A lot has changed in version 4! At a high level, this new version should offer significant performance gains and an improved navigation experience. It also offers full support for React Hooks, including inspecting nested objects. React is defined as a JavaScript library for building user interfaces. Let’s start by talking about the two different parts of this definition. React is a JavaScript “library”. It is not exactly a “framework”. It is not a complete solution and you will often need to use more libraries with React to form any solution. React does not assume anything about the other parts in any solution.Frameworks serve a great purpose, especially for young teams and startups. When working with a framework, many smart design decisions are already made for you, which gives you a clear path to focus on writing good application-level logic. However, frameworks come with some disadvantages. For experienced developers working on large codebases, these disadvantages are sometimes a deal breaker. Frameworks are not flexible, although some claim to be. A framework usually wants you to code everything a certain way. If you try to deviate from that way, the framework usually ends up fighting you about it. Frameworks are also usually large and full of features. If you need to use only a small piece of them, you have to include the whole thing anyway. Admittedly, this point is changing today but it is still not ideal. Some frameworks are going modular, which I think is great, but I am a big fan of the pure Unix philosophy:",
    },
    {
      id: "2",
      title: "Introduction to Redux ",
      category: "Education",
      body: `Redux is a popular JavaScript library for managing the state of your application. It is very common and if you are working with React, chances are — you’ve already heard about it.
          For those of you who have no idea what an application state is: it is like a global object which holds information that you use for various purposes later in the app (e.g. making decisions on which components to render and when, rendering the stored data etc).
          An example that we face often is to display a loading indicator while the page is loading. In this case, if we used the store only for that purpose alone, the state object would store a boolean field whether the page is loaded and we’d use that field to toggle the display of the loading indicator.
          Another example is — if we were to build a social media application, we would store several objects and arrays inside our application state— the current user’s information, the current posts that we would render in News Feed, the current stories from the profiles the user is following etc.
          There are no rules as to which data should be kept in Redux, so, it’s all up to you. However, bear in mind to always store only serializable data.
          Big applications have big application states and managing them gets more and more inconvenient as your app grows.
          That’s why we need state management libraries like Redux.
          The way Redux works is fascinating and yet, so simple. Its pattern is very intuitive and its function names are self-explanatory. Trust me, you’re going to love it!
          Before we dive into Redux, I want to mention two crucial patterns that Redux follows (and I would highly recommend you to always keep this information in the back of your mind while writing your Redux applications!):
          One pattern that Redux follows is called “Single Source Of Truth”, which means that we have only one place (called Store) where we store the only state for the whole application.
          In other words, one app — one store — one state.
          However, components in React or other frameworks are free to contain their own internal state as well. Normally, you wouldn’t want to put literally everything in the application state.
          Another pattern that Redux follows is called “immutability”. And you will find this term quite often in other frameworks and libraries as well.
          In short, immutability means that we don’t change the state object and its properties directly. Instead, we make a new object, recalculate the new application state and update it with our newly created object. We want to leave our old state object intact.`,
    },
    {
      id: "3",
      title: "Introduction to React Context API",
      category: "Education",
      body: `In our React application, there can be global properties such as language, or theme colour that will configured at top most component in <App /> . These properties will be used by child components & also grand child components. Here in above example <MenuItem> element may need value of colour for styling, and language for localization. However these properties had to be passed through <Menu /> component, even though its not used in <Menu /> .
          Thereby each of these global properties, have to be mapped as props from intermediate components even though it may not be used in-between. This is called props drilling and may introduce redundant mapping of props for complex application for multiple properties.
          In these examples, value passed to React.Context is constant. Therefore there is not that much advantage of passing through context, but rather fetch just from configuration file. But in real application, this value is to change according to user interaction. As example application colour could be changed by user preference, or language can be switched by geographical area.`,
    },
  ],
};
