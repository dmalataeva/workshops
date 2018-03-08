var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
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

var colladaLoader = new THREE.ColladaLoader();
colladaLoader.options.convertUpAxis = true;
colladaLoader.load(
	media.indoor_plant,
	function( collada ) {
		//collada.scene.rotation.x += 30;
		var skin = collada.skins[0];
		scene.add(collada.scene);
	}
);
var controls = new THREE.OrbitControls(camera, renderer.domElement);

var light = new THREE.AmbientLight(0xFFFFFF, 1);
var lightDir = new THREE.DirectionalLight(0xFFFFFF, 0.8);
lightDir.position.set(10, 10, 10);
scene.add(camera);
//scene.add(light);
scene.add(lightDir);

animate();


function animate() {
	requestAnimationFrame(animate);
	//mesh.rotation.x += 0.01;
	//mesh.rotation.y += 0.01;
	render();
}

function render() {
	renderer.render(scene, camera);
}