import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

export const setBackground = ( scene ) => {
   const backgroundColor = new THREE.Color(0x90e3fc);
   scene.background = backgroundColor;
} 