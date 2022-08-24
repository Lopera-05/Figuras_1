
//escenario
 const scene = new THREE.Scene(); 

scene.background = new THREE.Color(0xe50090) 

 var loader = new THREE.TextureLoader();
loader.load("./img/fodito.jpg", function(texture){
scene.background = texture;
} );

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xC70039 } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );

camera.position.z = 30; 
camera.position.y = 2;

//animación
function animate() {
	requestAnimationFrame( animate );
	torus.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

/* //escenario
const scene = new THREE.Scene(); 
{
    const near = 1;
    const far = 2;
    const color = 'green';
    scene.fog = new THREE.Fog(color, near, far);
 }
scene.background = new THREE.Color(0xa105)

//camara
const camera = new THREE.PerspectiveCamera( 130, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//geometria
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 0x99ff88} );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.z = 2;
// camera.position.y = 0;

//animacion

function animate() {
	requestAnimationFrame( animate );
	capsule.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

 */