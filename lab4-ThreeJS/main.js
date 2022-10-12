import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


scene.add( ambientLight, directionalLight );


camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.007;
  cube.rotation.y += 0.007;

  camera.position.x = 5 * Math.sin(Date.now() / 1000);
  camera.position.y = 5 * Math.cos(Date.now() / 1000);
  controls.update();

  renderer.render( scene, camera );
};

animate();
