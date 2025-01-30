import { Canvas } from '@react-three/fiber';
import '../App.css';
import { Experience } from './Experience';

function threemodel() {
  return (
    <div id="root">
      <div className="canvas-container">
        <Canvas>
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}

export default threemodel;
