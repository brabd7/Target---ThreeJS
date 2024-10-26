import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { scene } from '../core/scene';
import { world } from '../physics/world';

// ### THREE (VISUEL ) ### // 
// Création du sol visuel
const geometry = new THREE.PlaneGeometry(25, 25);

// Création du matériau du sol visuel
const material = new THREE.MeshBasicMaterial();

// Création du mesh (un mesh combine une géométrie et un matériau pour former un objet 3D)
const floorMesh = new THREE.Mesh(geometry, material);

// Incliner le sol pour qu'il soit horizontal
floorMesh.rotation.x = -Math.PI / 2;

// ### CANNON (PHYSIQUE) ### //
// Création du corps physique du sol
const floorBody = new CANNON.Body({
    mass: 0
});

// Création de la forme du corps physique du sol
const shape = new CANNON.Plane();

// Lier la forme au corps physique
floorBody.addShape(shape);

// Incliner le sol
floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

// ### AJOUT SUR LA SCENE ET DANS LE MONDE ### //
// L'ajouter à la scène et au monde physique
scene.add(floorMesh);
world.addBody(floorBody);
