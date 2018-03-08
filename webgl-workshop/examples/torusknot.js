/*
 * torusknot.js
 * WebGL Workshop, UW-Workshops
 *
 * Deniza Malataeva, 2017
 *
 *
 * This example demonstrates a torus knot geometry.
 *
 */

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xEEEEEE);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 20;


var shape = new THREE.TorusKnotBufferGeometry(20, 8, 300, 100);
var material = new THREE.MeshNormalMaterial();
var mesh = new THREE.Mesh(shape, material);

var ambient = new THREE.AmbientLight(0xFFFFFF, 0.1);
var light = new THREE.DirectionalLight(0xFFFFFF, 1);
var controls = new THREE.OrbitControls(camera, renderer.domElement);
light.position.set(-15, 15, 15);

scene.add(camera);
scene.add(mesh);
scene.add(ambient);
scene.add(light);

animateMesh();

console.log("If you see this, I'm working");

function animateMesh() {
	requestAnimationFrame(animateMesh);
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;
	render();
}

function render() {
	renderer.render(scene, camera);
}