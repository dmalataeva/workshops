var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.setClearColor(0xEEEEEE);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
scene.background = new THREE.CubeTextureLoader().load(media.gallery_pano);
var camera = 
new THREE.PerspectiveCamera( 
	100, 
	window.innerWidth / window.innerHeight, 
	0.1, 
	1000 
);
camera.position.z = 20;


var shape = new THREE.SphereBufferGeometry(10, 100, 100);
var material = new THREE.MeshPhongMaterial(
	{ 
		color: 0x9944e2, 
		envMap: scene.background, 
		refractionRatio: 0.98 
	}
);
material.envMap.mapping = THREE.CubeRefractionMapping;
var mesh = new THREE.Mesh(shape, material);

var ambient = new THREE.AmbientLight(0xFFFFFF, 0.5);
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
	render();
}

function render() {
	renderer.render(scene, camera);
}