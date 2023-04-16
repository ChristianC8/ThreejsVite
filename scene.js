import * as THREE from './node_modules/three'
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader'
import { RGBELoader } from './node_modules/three/examples/jsm/loaders/RGBELoader'
import { FBXLoader } from './node_modules/three/examples/jsm/loaders/FBXLoader'
import { Reflector } from 'three/addons/objects/Reflector.js';




const scene = new THREE.Scene();
//scene.background = new THREE.Color('rgb(243, 241, 241)')
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1, 1000);
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0)
document.body.appendChild(renderer.domElement);
/* 
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
cube.castShadow = true;
cube.reciveShadow = true;
cube.position.set(0,-0.5,5)

 */

camera.position.z = 5;
camera.position.x = 7;
camera.position.y = 2;

/* let grid = new THREE.GridHelper(100,10);
scene.add(grid) */




/* const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
light.castShadow = true;
scene.add( light ); */

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5, 1);
directionalLight.position.set(0,1,1);
directionalLight.castShadow = true;
scene.add( directionalLight ); 

const directionalLight2 = new THREE.DirectionalLight( 'rgb(105, 134, 213)', .5, 1);
directionalLight2.position.set(1,4,-1);
directionalLight2.castShadow = true;
scene.add( directionalLight2);

const directionalLight3 = new THREE.DirectionalLight( 'rgb(105, 134, 213)', .5, 2);
directionalLight3.position.set(-1,3,-1);
directionalLight3.rotation.set(-1,3,-1);
directionalLight3.castShadow = true;
scene.add( directionalLight3);

/* const Alight = new THREE.AmbientLight( 0x404040 ); // soft white light
Alight .castShadow = true;
scene.add( Alight  ); */


/* 
let planeGeometry = new THREE.PlaneGeometry(10,10,30,30);
let material2 = new THREE.MeshStandardMaterial({color: "rgb(109, 68, 110)" });
let plane = new THREE.Mesh(planeGeometry,material2);
plane.reciveShadow = true;
plane.position.set(0,0,0);
plane.rotation.set(100,0,0);
scene.add(plane);
 */

const controls = new OrbitControls(camera,renderer.domElement);

const fbxloader = new FBXLoader();
const gltfloader = new GLTFLoader();
const rgbeLoader = new RGBELoader();
//codificacion y tono de mapeado 
/* renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 4; */

 
/* 
  let zeus = new THREE.Object3D();
  gltfloader.load('../FBXS/zeusG.glb', function (object){
    zeus = object.scene;
    scene.add(zeus);
  }); */

/*   let kurisu = new THREE.Object3D();
  gltfloader.load('../FBXS/kurisu2.glb', function (object){
    kurisu = object.scene;
    scene.add(kurisu);
    kurisu.position.set(-0.23,0.2,4.1)
   
  }); */

/*   let zeus = new THREE.Object3D();
  fbxloader.load('../FBXS/zeus.fbx', function (object){
    zeus = object.scene;
    scene.add(zeus);
  });

 */
/*   let senial = new THREE.Object3D();
  gltfloader.load('../FBXS/recreativaSignal.glb', function (object){
    senial = object.scene;
    scene.add(senial);
    senial.position.set(-0.23,0.2,4.1)
   


  }); */

  
    /* //interfaz
    const interfazHTML = document.getElementById('interfaz');
    const texture = new THREE.Texture(interfazHTML);
    texture.needsUpdate = true;
    const materialNew = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
    

    
 */


  let ramen = new THREE.Object3D();
  gltfloader.load('../FBXS/ramen.glb', function (object){
    ramen = object.scene;


    //light
    const Plight = new THREE.PointLight('rgb(250, 229, 5)', 2, 4 );
    Plight.position.set(ramen.getObjectByName('lampara2').position.x,ramen.getObjectByName('lampara2').position.y,ramen.getObjectByName('lampara2').position.z);
    scene.add( Plight );

    const Plight2 = new THREE.PointLight('rgb(250, 229, 5)', 2, 4 );
    Plight2.position.set(ramen.getObjectByName('lampara1').position.x,ramen.getObjectByName('lampara1').position.y,ramen.getObjectByName('lampara1').position.z);
    scene.add( Plight2 );

    const Plight3 = new THREE.PointLight('rgb(250, 229, 5)', 2, 4 );
    Plight3.position.set(ramen.getObjectByName('luzlampara3').position.x,ramen.getObjectByName('luzlampara3').position.y,ramen.getObjectByName('luzlampara3').position.z);
    scene.add( Plight3 );
















/* 

    ramen.getObjectByName('pantallaMaquina').material  = materialNew;
    ramen.getObjectByName('pantallaMaquina').material.needsUpdate = true;
 */

    scene.add(ramen);
    
    
/*     console.log(ramen.getObjectByName('suelo'))
    ramen.getObjectByName('suelo').material.reflectivity = 1; */
  
  });





 /*  let verticalMirror = new Reflector( ramen.getObjectByName('suelo'), {
    clipBias: 0.003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0xc1cbcb
  } );
  verticalMirror.position.y = 50;
  verticalMirror.position.z = - 50;
  scene.add( verticalMirror ); */

/*   let geometrys = new THREE.CircleGeometry( 40, 64 );
  let groundMirror = new Reflector( geometrys, {
    clipBias: 0.003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0xb5b5b5
  } );
  groundMirror.position.y = -0.859;
  groundMirror.rotateX( - Math.PI / 2 );
  scene.add( groundMirror );
  -0.86;
 */

  
  let geometrys = new THREE.CircleGeometry( 40, 64 );
  let groundMirror = new Reflector( geometrys, {
    clipBias: 0.00003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0xb5b5b5,
    blur: { value: 4222 }
   
  } );

  groundMirror.position.y = -0.86;
  groundMirror.rotateX( - Math.PI / 2 );
  scene.add( groundMirror );
  console.log(groundMirror)














  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();

  function onMouseMove(event){
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1 ;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1 ;


    raycaster.setFromCamera(mouse,camera);

  
   /*  for(let i = 0 ; i < intersects.length ; i++){
      console.log(intersects);
      
    }
 */

/*     if(intersects.length > 0 ){
      console.log(intersects[0]);
    }
 */

  }

window.addEventListener('mousemove', onMouseMove, false);

window.addEventListener('click',()=>{

  const intersects = raycaster.intersectObjects(scene.children);
      if(intersects.length >= 0){
        console.log(intersects[0]);
        if(intersects[0].object.parent.name == 'boton'){
          window.open("https://christianc8.github.io/proyect-class-e/");
        }
        if(intersects[0].object.parent.name == 'ramencopyrigt'){
          window.open("https://es.wikipedia.org/wiki/Ramen")
        }
   
    
      }
     /*  console.log(intersects.length) */


})


window.addEventListener('resize', () => {
  // Actualiza el tamaño del renderizador
  renderer.setSize(window.innerWidth, window.innerHeight);
});




function animate(){

     requestAnimationFrame( animate );
     renderer.render(scene, camera);
  //   cube.rotation.y += 0.01;
 /*  zeus.rotation.y += 0.006; */
/*   kurisu.rotation.y += 0.05; */
  ramen.getObjectByName('ramenElectronico').rotation.z += 0.01;
/*   texture.needsUpdate = true;
   */
}
animate();