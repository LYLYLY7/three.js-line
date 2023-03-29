import * as THREE from '../node_modules/three/build/three.module.js';
// console.log(THREE)

// 创建一个场景、照相机、渲染器
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)


const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 定义一个材质（线）
const material = new THREE.LineBasicMaterial({ color: 0x0000ff })
// 构建带有顶点的geometry(几何体)
const points = [];
points.push(new THREE.Vector3(-10, 0, 0))
points.push(new THREE.Vector3(0, 10, 0))
// BufferGeometry 封装了对点的操作，完全由我们自己去操作点信息
const geometry = new THREE.BufferGeometry().setFromPoints(points);
//  line的两个参数，第一个是geometry（线段的顶点），第二个是material（线的材质）
const line = new THREE.Line(geometry, material);

// 渲染
scene.add(line);
renderer.render(scene, camera)