import React from "react";
const Day_6 = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>React Interview Questons Day-6</h1>
      <h1>Q.1What is an event in react?</h1>
      <p>
        <b>Ans</b>.Handling events with React elements is very similar to
        handling events on DOM elements. There are some syntax differences:
      </p>
      <ul>
        <li>React events are named using camelCase, rather than lowercase.</li>
        <li>
          With JSX you pass a function as the event handler, rather than a
          string.
        </li>
      </ul>
      <h1 style={{ marginTop: "5px" }}>
        Q.2 What is memory leak and how to overcome?
      </h1>
      <p>
        <b>Ans</b> Memory leaks in React applications are primarily a result of
        not canceling subscriptions made when a component was mounted before the
        component gets unmounted. These subscriptions could be a:
      </p>
      <ul>
        <li>DOM Event Listener</li>
        <li>WebSocket Subscription</li>
        <li>Request to an API</li>
      </ul>

      <h1>Q.3 Do you prefer function-based or class component and why ?</h1>
      <p>
        <b>Ans:</b> yes, I am Using Functional component , because after
        completed React Tutorial i conclused very very bst functional component
        , only use useState , useEffect, useConterxt they made very easy code
      </p>
      <h1>Q.4 Explain reducer as pure function in redux</h1>
      <p>
        You may have heard that Redux depends on “pure functions” from
        functional programming. Well, what exactly does that mean?
      </p>
      <p>
        The picture below shows a simple Todo app from Redux examples. It
        currently has four tasks. It shows the fourth one as completed, and is
        set to show “All” Tasks — both completed and not completed.
      </p>
      <p>
        The right-hand side shows the current state stored in Redux. Its a
        simple JavaScript object that captures all the details in one place
      </p>
    <h1>Q.5 Why do we use redux thunk?</h1>
      <p>
        Redux Thunk is a middleware that lets you call action creators that
        return a function instead of an action object. That function receives
        the store's dispatch method, which is then used to dispatch regular
        synchronous actions inside the function's body once the asynchronous
        operations have been completed
      </p>
      <h1>Q.6 What do you know about NPM?</h1>
      <p>Npm stands for Node Package Manager. It is a package manager for the Node JavaScript platform. Npm is known as the world's largest software registry. Open-source developers all over the world use npm to publish and share their source code.
   </p>
    </>
  );
};

export default Day_6;
