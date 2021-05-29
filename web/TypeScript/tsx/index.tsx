declare namespace JSX {
    interface ElementAttributesProperty {
      props; // specify the property name to use
    }
  }
  class MyComponent {
    // specify the property on the element instance type
    props: {
      foo?: string;
    };
  }
  // element attributes type for 'MyComponent' is '{foo?: string}'
  <MyComponent foo="bar" />;