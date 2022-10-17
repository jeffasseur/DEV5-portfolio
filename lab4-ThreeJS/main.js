import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const light = new THREE.AmbientLight( 0xffffff, 0.1 );

const wallTexture = new THREE.TextureLoader().load('/bump-bricks.jpg')

// back panel of the house
const geometry = new THREE.BoxGeometry( 5, 5, 0.05);
const material = new THREE.MeshBasicMaterial( {color: 0xA64833, map: wallTexture} );
const wall = new THREE.Mesh( geometry, material );

// right panel of the house
const geometry2 = new THREE.BoxGeometry( 5, 5, 0.05);
const material2 = new THREE.MeshBasicMaterial( {color: 0xA64833, map: wallTexture} );
const wall2 = new THREE.Mesh( geometry2, material2 );
wall2.position.set(2.5, 0, 2.5);
wall2.rotateY(1.570796);

// left panel of the house
const geometry3 = new THREE.BoxGeometry( 5, 5, 0.05);
const material3 = new THREE.MeshBasicMaterial( {color: 0xA64833, map: wallTexture} );
const wall3 = new THREE.Mesh( geometry3, material3 );
wall3.position.set(-2.5, 0, 2.5);
wall3.rotateY(1.570796);

// front panel of the house
const geometry4 = new THREE.BoxGeometry( 5, 5, 0.05);
const material4 = new THREE.MeshBasicMaterial( {color: 0xA64833, map: wallTexture} );
const wall4 = new THREE.Mesh( geometry4, material4 );
wall4.position.set(0, 0, 5);
wall4.rotateY(3.141592);

// door of the house
const geometry8 = new THREE.BoxGeometry( 1.5, 2.5, 0.02);
const doorTexture = new THREE.TextureLoader().load('/bump-wood.jpg');
const material8 = new THREE.MeshBasicMaterial( {color: 0x663300, map: doorTexture} );
const door = new THREE.Mesh( geometry8, material8 );
door.position.set(0, -1.25, 5.02);
door.rotateY(3.141592);

// roof of the house
const geometry5 = new THREE.ConeGeometry( 5, 2, 4 );
const roofTexture = new THREE.TextureLoader().load('/bump-rooftilekopie.jpg');
const material5 = new THREE.MeshBasicMaterial( {color: 0x8B4513, map: roofTexture} );
const roof = new THREE.Mesh( geometry5, material5 );
roof.position.set(0, 3, 2.5);
roof.rotateY(0.7853982);

// floor of the house 
const geometry6 = new THREE.PlaneGeometry( 5, 5);
const material6 = new THREE.MeshBasicMaterial( {color: 0x00ff00, side: THREE.DoubleSide} );
const floor = new THREE.Mesh( geometry6, material6 );
floor.position.set(0, -2.5, 2.5);
floor.rotateX(1.570796);

// white card on the house
const geometry9 = new THREE.PlaneGeometry( 0.8, 0.5);
const material9 = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
const card = new THREE.Mesh( geometry9, material9 );
card.position.set(1.2, -1, 5.2);

// floor of the earth
const geometry7 = new THREE.PlaneGeometry( 100, 100);
const earthTexture = new THREE.TextureLoader().load('/bump-grass.jpg');
const material7 = new THREE.MeshPhongMaterial( {color: 0xff0000, side: THREE.DoubleSide} );
material7.map = earthTexture;
earthTexture.wrapS = THREE.RepeatWrapping;
earthTexture.wrapT = THREE.RepeatWrapping;
earthTexture.repeat.set( 10, 10 );
const earth = new THREE.Mesh( geometry7, material7 );
earth.position.set(0, -2.5, 2.5);
earth.rotateX(1.570796);

// add pointer light
const pointLight = new THREE.PointLight( 0xffffff, 0.4, 100 );
pointLight.position.set( 10, 10, 10 );

// add flame world
const world = new THREE.SphereGeometry( 200, 32, 32 );
const worldTexture = new THREE.TextureLoader().load('/flameworld.jpg');
const worldMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, map: worldTexture, side: THREE.DoubleSide} );
const worldSphere = new THREE.Mesh( world, worldMaterial );
world.rotateX(3);

// add gltf model Chinese Dragon
const url = '/chineseDragon/scene.gltf';
const dragonLoader = new GLTFLoader();
dragonLoader.load(url, (gltfScene) => {
  let scale = 0.03;
  gltfScene.scene.scale.set(scale, scale, scale);
  gltfScene.scene.position.set(-5, -2.5, 5);
  scene.add(gltfScene.scene);
  animate();
  console.log(gltfScene.scene);
});

camera.position.set(5, 10, 30)

scene.add( wall, wall2, wall3, wall4, roof, floor, earth, light, door, card, pointLight, worldSphere );


function animate() {
  requestAnimationFrame( animate );

  camera.rotation.x += 0.01;
  camera.rotation.y += 0.01;
  controls.update();

  renderer.render( scene, camera );
};

animate();