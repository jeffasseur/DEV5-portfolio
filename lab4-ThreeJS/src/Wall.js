import * as THREE from 'three'

// create class wall
export default class Wall {
    constructor() {
        this.buildWall();
    }

    buildWall() {
        const geometry = new THREE.BoxGeometry( 5, 5, 0.03);
        const material = new THREE.MeshBasicMaterial( {color: 0xA64833} );
        const wall = new THREE.Mesh( geometry, material );
        return wall;
    }
}