# react-test-util

react-test-util have two functions as utils for a test with @testing-library/react. These make your test effective, and Commonized, more readable.

The concise feature is following;

* easier to write a unit test
* more strict with a test
* made by TypeScript

But this is not good at a scenario test. So, you should think that it is a unit test-only.

## Install

> Warning.  
> The followings as copied and pasted is not working.
> Change version number you want.

### Yarn
```
$ yarn install -D ssh://git@github.com:NULL-header/react-test-util.git#version
```

### Npm
```
$ npm i --save-dev git+git@github.com:NULL-header/react-test-util.git#version
```

There are the branches as versions in the repository. So you must specify the branch name you want when you install this.

## Usage
```tsx
import { getElementsFrom, renderDomFactory } from "null-header/react-test-util";

const getProps = () => ({ className: "classname" });

const renderDom = renderDomFactory(
  <div {...getProps()}>
    <div>test</div>
  </div>
);

describe("testcase", () => {
  it("className", () => {
    const {
      container,
      props: { className },
    } = renderDom();
    expect(container).toHaveProperty("className", className);
  });

  it("showing text", () => {
    const { container } = renderDom();
    const div = getElementFrom(container).byTagName("div");
    expect(div.innerText).toBe("test");
  });
});
```

If you want to learn more, look [here](./doc/features.md).

## License

MIT © NULL-header