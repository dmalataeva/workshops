/*
 * collada-import.js
 * WebGL Workshop, UW-Workshops
 *
 * Deniza Malataeva, 2017
 *
 *
 * This example demonstrates the use of the custom Collada Loader
 * to import .dae files into the browser.
 *
 */

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 40;

var loader = new THREE.ColladaLoader();
loader.options.convertUpAxis = true;
loader.load(
	media.indoor_plant,
	function(collada) {
		var skin = collada.skins[0];
		scene.add(collada.scene);
	}
	);
var userControls = new THREE.OrbitControls(camera, renderer.domElement);

var lightDirectional = new THREE.DirectionalLight(0xFFFFFF, 0.8);
lightDirectional.position.set(-15, 15, 15);
var lightAmbient = new THREE.AmbientLight(0xFFFFFF, 0.2);

scene.add(camera);
scene.add(lightDirectional);
scene.add(lightAmbient);
console.log("Hey! I'm working!");

animate();

function animate() {
	requestAnimationFrame(animate);
	render();
}

function render() {
	renderer.render(scene, camera);
}
