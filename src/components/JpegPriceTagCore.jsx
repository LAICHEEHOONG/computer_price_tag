import React, { useRef } from 'react';
import { exportComponentAsPNG, exportComponentAsJPEG, exportComponentAsSVG } from 'react-component-export-image';

function MyComponent() {
  const componentRef = useRef();

  // Function to export the component as PNG
  const exportAsPNG = () => {
    exportComponentAsPNG(componentRef, 'my-component');
  };

  // Function to export the component as JPEG
  const exportAsJPEG = () => {
    exportComponentAsJPEG(componentRef, 'my-component');
  };

  // Function to export the component as SVG
  const exportAsSVG = () => {
    exportComponentAsSVG(componentRef, 'my-component');
  };

  return (
    <div>
      <div ref={componentRef}>
        {/* Your component's JSX goes here */}
      </div>
      <button onClick={exportAsPNG}>Export as PNG</button>
      <button onClick={exportAsJPEG}>Export as JPEG</button>
      <button onClick={exportAsSVG}>Export as SVG</button>
    </div>
  );
}