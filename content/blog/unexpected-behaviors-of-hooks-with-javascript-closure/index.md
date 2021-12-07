---
title: Unexpected Behaviors of Hooks with JavaScript Closure
date: 2021-12-07T13:23:03.968Z
description: Unexpected Behaviors of Hooks with JavaScript Closure
---


![Thumbnail image](react-hooks-yasmikash.jpeg)

With the release of React version 16, the hooks initially came into existence after making a few announcements prior, and it’s being loved by the React community for the sake of its simplicity and to avoid unnecessary complications introduced by classes, especially among developers that use JavaScript as their main programming language. However, using hooks in functional components can be tricky at some times, especially when it comes to dealing with some of the JavaScript fundamental concepts such as closures.

Simply put, closure is a function that remembers its outer scope (the lexical environment). The state of the outer function is remembered by the inner function and can work with that state at a later time, even though the outer function is not being held by the execution context at any time the state is referenced.

```javascript
function sayHello() {
  var greet = "Hello!"
  return function() {
    console.log(greet);
  }
}

var hello = sayHello();
hello();
```

In the above code snippet, the function returned by the `sayHello()`captures the value for the greet variable and logs onto the console.

The behavior of this code is pretty straightforward, but there can be some odd behaviors when working with closures.

```javascript
function createIncrement(incrementBy) {
  var value = 0;

  function increment() {
    value += incrementBy;
    console.log(value);
  }

  const message = `current value: ${value}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement(1);
increment(); // 1
increment(); // 2
increment(); // 3

log(); // "current value: 0"
```

In the above code snippet, `createIncrement()` function returns an array that contains two function references are increment and log, respectively. Both functions have access to the closure created by their outer function, but calling the log() function doesn't seem to access the updated value for the value variable.

The reason is the message variable never gets executed upon receiving a new value for the value variable and `log()` function refers to the same old snapshot of the message variable. This can be easily solved by including the message variable itself inside the log function, so whenever it gets executed message has the updated value for the value variable.

A closure that maintains some outdated state is called a **stale closure**. Stale closures have always been a problem when using React hooks, especially `useState()` hook and `useEffect()` hook.

We will see some of the scenarios that this problem can occur, and solutions to prevent some unexpected behaviors in our application caused by stale closures as well.

**The Issue with the useState() Hook**

```javascript
const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component updates...");
  });

  const asyncUpdater = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  };

  return (
    <div>
      <h4>Count {count}</h4>
      <button onClick={asyncUpdater}>Increase</button>
    </div>
  );
};
```

The App component maintains a count state that will be incremented by one per 3 seconds with the `setTimeout()` timer function. But if we click on the Increase button multiple times at a fast phase (all the subsequent calls should happen within 3 secs) you will notice that the value is incremented only by one.

This behaves this way because each time the function executes it has access to the old value because the value only gets updated after some seconds, which results in the component not being re-rendered as the state value remains the same on each call.

To prevent this behavior from happening, we can provide a pure function to the `setCount()` method which is then guaranteed to be called only after the count value has been updated (the component has been re-rendered with the new value!).

*Code snippet with the pure function passed into `setCount() `function:*

```javascript
const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component updates...");
  });

  const asyncUpdater = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 3000);
  };

  return (
    <div>
      <h4>Count {count}</h4>
      <button onClick={asyncUpdater}>Increase</button>
    </div>
  );
};
```

**The Issue with the useEffect() Hook**

```javascript
const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log(`count ${count}`);
    }, 2000);
  }, []);

  return (
    <div>
      <h4>Count {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
```

In this above code snippet, App component has the `useEffect()` function which calls the timer function setInterval once the component has been mounted. You are free to change the state after it has been mounted and the count value gets incremented by one. But the issue here is that the `setInterval()` function still has the snapshot of the old value for the count variable which was initialized from `useState()` function.

To fix this issue, we can pass the count variable into the dependency array, which causes the `useState()` function to execute again whenever the value for the count variable gets changed so that we have the updated value for each `setInterval()` function call.

*Code snippet with the count passed into the dependency array:*

```javascript
const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(`count ${count}`);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [count]);

  return (
    <div>
      <h4>Count {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
```

So, the important thing to understand is that we always need to make sure to design our hooks inside the functional component which uses the closure which always maintains a fresh state of its data, so that it will avoid falling our app into pretty unexpected behaviors.