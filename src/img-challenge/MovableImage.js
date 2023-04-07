import React, { useState } from "react";
import Moveable from "react-moveable";

/*
 *    This is a React component named MovableImage, 
 *    which renders an image that can be moved, 
 *    resized and rotated using the react-moveable library. 
 *    Here's what each function in the component does:
 */

function MovableImage(props) {

  /*
   *    useState is a React Hook that allows you to use state in a functional
   *    component. In this case, the component defines four state
   *    variables: target, frame, position, and rotate.
   *    The target state is set to null by default, while the others are set to
   *    objects with properties x, y, width, height, and rotate.
   */

  const [target, setTarget] = useState(null);
  const [frame, setFrame] = useState({ x: 0, y: 0, width: 200, height: 200 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState(0);

  /*
   *    handleDrag is a function that is called whenever the image is dragged.
   *    It receives an object with two properties: target, which is a reference
   *    to the DOM element being dragged, and beforeTranslate, which is an array
   *    of two numbers representing the x and y coordinates of the drag before it
   *    occurs. The function then updates the position state with the new coordinates,
   *    and updates the transform style of the target image to reflect the new position
   *    and rotation.
   */

  const handleDrag = ({ target, beforeTranslate }) => {
    const [x, y] = beforeTranslate;
    setPosition({ x, y });
    target.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
  };

  /**
   *    handleResize is a function that is called whenever the image is resized.
   *    It receives an object with three properties: target, which is a reference
   *    to the DOM element being resized, width, which is the new width of the image,
   *    and height, which is the new height of the image. The function then updates the
   *    frame state with the new dimensions, and updates the width and height styles of
   *    the target image to reflect the new dimensions.
   */

  const handleResize = ({ target, width, height }) => {
    setFrame(prevFrame => ({ ...prevFrame, width, height }));
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
  };

  /*
   *    handleRotate is a function that is called whenever the image is rotated.
   *    It receives an object with two properties: target, which is a reference
   *    to the DOM element being rotated, and beforeRotate, which is the angle of
   *    the rotation before it occurs. The function then updates the rotate state
   *    with the new rotation angle, and updates the transform style of the target
   *    image to reflect the new position and rotation.  
   */

  const handleRotate = ({ target, beforeRotate }) => {
    const newRotate = beforeRotate;
    setRotate(newRotate);
    target.style.transform = `translate(${position.x}px, ${position.y}px) rotate(${newRotate}deg)`;
  };

  return (
    <div style={{ position: "relative" }}>
      <img
        src={props.src}
        alt={props.alt}
        ref={ref => setTarget(ref)}
        style={{ width: frame.width, height: frame.height, transform: `translate(${position.x}px, ${position.y}px) rotate(${rotate}deg)` }}
      />
      {target && (
        <Moveable
          target={target}
          draggable={true}
          resizable={true}
          rotatable={true}
          onDrag={handleDrag}
          onResize={handleResize}
          onRotate={handleRotate}
          renderDirections={["n", "s", "w", "e", "nw", "ne", "sw", "se"]}
          edge={true}
          zoom={1}
          origin={false}
        />
      )}
    </div>
  );
}

export default MovableImage;