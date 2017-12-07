## Section 2 - Introduction to Components in ReactJs

### Components

> Components let us split the UI into independent, reusable pieces, and think about each piece in isolation.

    Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

Example - 

As we have seen earlier, a component looks as follows:

```
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

If we think of this in Javascript form, it can be defined as below.

```
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

### Disclaimer

Always start component names with a capital letter.
For example, `<div />` represents a DOM tag, but `<Welcome />` represents a component and requires Welcome to be in scope.

--------------------

## Project 1 - Simple Components Usage

Here to explain the use cases of Components, creating components for page header, content, and footer in `src/simple_components.jsx` and using them through `src/index.jsx`.

## Project 2 - Components with Props

**What are props?**

>As we've seen in the above example, `props` of a components are equivalent to arguments to a function.

For using Components with Props, File `src/props_components.jsx` contains definition of a user component which can take arguments Name, Email, and Phone. 

## Project 3 - Components with State

It looks like that a component is just a function, but it is not actually, it's a class in ES6 which has some more features than a function.

Mainly components can be categorized into two types - 

1. Stateless Components - 

>**State** is the place where the data comes from, which simply means that **State** is the source of data.

A components which doesn't have a source of data is a stateless component.

2. Stateful components - 

If a component has a source of data, then it is a stateful component.

>We should always try to make our state as simple as possible and minimize the number of stateful components.

# State

State is a useful part of component becuase the data flows from here outwards. So if we want data flow through the application, this is going to be a big game changer.

## How do we add state to a component?

```
import React from 'react';

class App extends React.Component {
    
    {/* constructor() is a constructor function of a component and it must call super() with props */}
    constructor(props) {
        super(props);

        {/* defining state of a component */}
        this.state = {
            data: 0
        }
    };
}
```

## How to use state properly?

1. Don't modify the state of the component directly.

Don't do the following ever.

```
this.state.data = 'Hello World';
```

Instead, use `setState()`:

```
this.setState({data: 'Hello World'});
```

2. State Updates May Be Asynchronous - keep state out of async updates.

>React may batch multiple `setState()` calls into a single update for performance.

Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

```
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```

To fix it, use a second form of `setState()` that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.

```
// Correct
this.setState(function(prevState, props) {
    return {
        counter: prevState.counter + props.increment
    };
});
```

We can also use an arrow function here.

```
// Correct
this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
}));
```

3. State Updates are Merged

When you call `setState()`, React merges the object you provide into the current state.

For example, your state may contain several independent variables:

```
constructor(props) {
    super(props);
    this.state = {
        posts: [],
        comments: []
    };
}
```

So if we only update `this.setState({posts: ['A', 'B']})`, then as merging is shallow, the latest update will keep `this.state.comments` intact.

4. Data flows down

Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components.

-------------------
## Notes -

1. When we say `import React from "react";`, `React` is a namespace, and `"Component"` is a class in this namespace.

2. Make sure you export components defined in any other file. Also you can `export default` a single component from a single file. So if you want to export multiple components, you can either export one module as `export default` and others as `export` or all the components defined in that file just using `export` keyword.

3. A component can be composed of other component.

4. "Props" are read-only.

In JS, there are two types of functions, one are "pure" functions and others are "impure" functions. Pure functions are those which don't attempt to change their input, however impure functions do change their input. Example,

```
// pure function
function sum(a, b) {
  return a + b;
}

// impure function
function withdraw(account, amount) {
  account.total -= amount;
}
```

**React is pretty flexible but it has a single strict rule:**

>All React components must act like pure functions with respect to their props.

This is major reason for introduction of state to components.
