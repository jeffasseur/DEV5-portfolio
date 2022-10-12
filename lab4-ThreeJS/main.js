import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 0.1, 1000 );
const controls = new OrbitControls( camera, renderer.domElement );


// make a simple house
const geometry = new THREE.PlaneGeometry( 10, 10);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// make ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);


scene.add( ambientLight );


camera.position.z = 5;

function animate() {
  requestAnimationFrame( animate );

  controls.update();

  // cube.rotation.x += 0.007;
  // cube.rotation.y += 0.007;

  renderer.render( scene, camera );
};

animate();
