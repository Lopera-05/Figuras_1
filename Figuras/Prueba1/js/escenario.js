//escenario
const scene = new THREE.Scene(); 
scene.background = new THREE.Color(0xa349)

var loader = new THREE.TextureLoader();
loader.load("./img/fondo.jpg", function(texture){
	scene.background = texture;
} );

//camara
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
// el primer numero es profundidad
//innerWith y innerheight controla en alto y el ancho
// 0.1 legania 
// 1000 acercanía

//render
const renderer = new THREE.WebGLRenderer();
// WebGL permite dibujar y crear en la web
// renderizar es transformar el archivo en algo visible en otros dispositivos 
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//esto se guarda en renderer

//geometria
const geometry = new THREE.BoxGeometry(1,1,1); // se crea la figura 
const material = new THREE.MeshBasicMaterial({color: 0x1E14EA, wireframe:true });  //puedo utilizar colores, texturas
const cube = new THREE.Mesh (geometry, material); // para que aparezca en la pantalla 
scene.add(cube);


camera.position.z = 2;  // controla las posiciones de la figura 
camera.position.y = 0.1;
camera.position.x = -0.2;

//animación
function animate() {
	requestAnimationFrame( animate );
	cube.rotation.y += 0.01;   // controla la rotacion de la figura y la rapidez
	cube.rotation.x += 0.01;
	cube.rotation.z += 0.01;
	// Se llama asi misma la animacón
	renderer.render( scene, camera );
	// Se renderiza la scene y la camara 
}
animate();