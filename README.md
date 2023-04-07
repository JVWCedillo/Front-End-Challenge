# MovableImage React Component

The MovableImage component is a React component that renders an image that can be moved, resized, and rotated. It uses the react-moveable library to implement these features.

## Installation

To use the component, first install the react-moveable library:
```
npm install react-moveable
```
Then, import the MovableImage component and use it in your code:
```
import MovableImage from './MovableImage';

function MyComponent() {
  return (
    <MovableImage src="path/to/image.jpg" alt="My Image" />
  );
}
```
You can also pass additional props to the component, such as style or className.

## Usage

To use the MovableImage component in your project, you can import it and pass in the src and alt props for your image:

```
import React from "react";
import MovableImage from "movable-image";

function App() {
  return (
    <div>
      <MovableImage src="/path/to/image.png" alt="An example image" />
    </div>
  );
}
```

You can customize the component by passing in additional props, such as width and height for the initial size of the image, or renderDirections to customize the moveable directions

```
import React from "react";
import MovableImage from "movable-image";

function App() {
  return (
    <div>
      <MovableImage
        src="/path/to/image.png"
        alt="An example image"
        width={300}
        height={300}
        renderDirections={["n", "e", "s", "w", "nw", "ne", "sw", "se"]}
      />
    </div>
  );
}
export default App;
```

### Props
|     Prop      |     Type      |  Default value  |  Description  |
| ------------- | ------------- | --------------- | ------------- |
| src | string | undefined | The path to the image file to display |
| alt | string | undefined | The alt text for the image |
| width | number | 200 | The initial width of the image |
| height | number | 200 | The initial height of the image |
| renderDirections | string[] | ["n", "e", "s", "w", "nw", "ne", "sw", "se"] | The directions in which the image can be moved using the moveable controls |
| edge | boolean | true | Whether to show the edge around the image when it is selected for moving, resizing, or rotating |
| zoom | number | 1 | The initial zoom level for the moveable controls |
| origin | boolean | false | Whether to show the origin control (the circle in the center of the moveable controls) |
| draggable | boolean | true | Whether the image can be dragged using the moveable controls |
| resizable | boolean | true | Whether the image can be resized using the moveable controls |
| rotatable | boolean | true | Whether the image can be rotated using the moveable controls |
| onDrag | function | undefined | A callback function that will be called when the image is dragged using the moveable controls |
| onResize | function | undefined | A callback function that will be called when the image is resized using the moveable controls |
| onRotate | function | undefined | A callback function that will be called when the image is resized using the moveable control |

