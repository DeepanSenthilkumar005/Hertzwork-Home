import { OrbitControls } from "@react-three/drei"
import { Home } from './Home'


export const Experience = () => {
    return(
        <>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        <Home />
        </>
    );

};