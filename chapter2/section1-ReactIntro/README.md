## Section 1 - Introduction to JSX

### JSX - https://reactjs.org/docs/introducing-jsx.html

React uses JSX for templating instead of regular JavaScript. It is not necessary to use it, however, following are some pros that come with it.

- It is faster because it performs optimization while compiling code to JavaScript.
- It is also type-safe and most of the errors can be caught during compilation.
- It makes it easier and faster to write templates, if you are familiar with HTML.

### How to use?

1. Returning nested elements

    Make sure `render()` returns only single JSX elements. So in case we want to return multiple elements, we have to wrap them in a container, as mentioned in the code below.

    ```
    import React from 'react';

    class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Think One</h1>
                <h2>Thick Twice</h2>
                <p>This is the element nesting!!</p>
            </div>
        );
    }
    }
    export default App;
    ```

2. Custom Attributes

    In order to use our own custom attributes in addition to regular HTML properties and attributes, we need to use `data-` prefix with each custom attribute. In the following example, we added `data-cstmattr` as an attribute of `div` element.


    ```
    import React from 'react';

    class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p data-myattribute = "somevalue">This is the content!!!</p>
            </div>
        );
    }
    }
    export default App;
    ```

3. Javascript Expressions

    To use JavaScript expressions in JSX, we just need to wrap with curly brackets {}. Example -

    ```
    import React from 'react';

    class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{1+1}</h1>
            </div>
        );
    }
    }
    export default App;
    ```

    We cannot use `if else` conditionals inside JSX, instead we can use `ternary` expression.

    ```
    import React from 'react';

    class App extends React.Component {
    render() {
        var i = 1;
        return (
            <div>
                <h1>{i == 1 ? 'True!' : 'False'}</h1>
            </div>
        );
    }
    }
    export default App;
    ```

4. Inline CSS using JSX

    React recommends using inline styles. When we want to set inline styles, we need to use `camelCase` syntax. React will also automatically append `px` after the number value on specific elements. The following example shows how to add `customStyle` inline to `div` element.

    ```
    import React from 'react';

    class App extends React.Component {
    render() {
        var customStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        return (
            <div>
                <div style = {customStyle}>Hello World.</div>
            </div>
        );
    }
    }
    export default App;
    ```

5. Comments

    Put Curly brackets `{}` while writing comments in `render()`.

    ```
    import React from 'react';

    class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                {//End of the line Comment...}
                {/*Multi line comment...*/}
            </div>
        );
    }
    }
    export default App;
    ```

6. Naming Convention

    > Since JSX is JavaScript, identifiers such as `class` and `for` are discouraged as XML attribute names. Instead, React DOM components expect DOM property names such as `className` and `htmlFor`, respectively.

    - HTML tags always use **lowercase** tag names, while React components start with **Uppercase**.
