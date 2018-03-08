var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
scene.background = 
new THREE.CubeTextureLoader()
.load(media.narthex_pano);
var camera = 
new THREE.PerspectiveCamera( 
	100, 
	window.innerWidth / window.innerHeight, 
	0.1, 
	1000 
);
camera.position.z = 10;
var controls = new THREE.OrbitControls(camera, renderer.domElement);

scene.add(camera);


animateMesh();
console.log("If you see this, I'm working");

function animateMesh() {
	requestAnimationFrame(animateMesh);
	render();
}

function render() {
	renderer.render(scene, camera);
}