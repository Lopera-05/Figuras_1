
//escenario
 const scene = new THREE.Scene();
 {
    const near = 40;
    const far = 5;
    const color = 'red';
    scene.fog = new THREE.Fog(color, near, far);
 } 

scene.background = new THREE.Color(0xe50090) 

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xFFC300 } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

camera.position.z= 40
camera.position.y = 5


//animación
function animate() {
	requestAnimationFrame( animate );
	torusKnot.rotation.y += 0.01;   // controla la rotacion de la figura y la rapidez
	torusKnot.rotation.x += 0.01;
	torusKnot.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();
