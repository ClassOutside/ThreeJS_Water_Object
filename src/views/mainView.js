import * as THREE from 'three';
import { LoadGLTFByPath, SetAmbientLighting } from '../helpers/ModelHelper.js'
import { setupRenderer } from '../helpers/RendererHelper.js'
import { setBackground } from '../helpers/SkyboxHelper.js'
import { getFirstCameraInScene, updateCameraAspect } from '../helpers/CameraHelper.js'
import { ReplacePlanesWithWater, animateWater } from '../helpers/WaterHelper.js'

const startingModelPath = './src/models/scene.gltf'

export async function setupScene(canvas) {

	//Scene is container for objects, cameras, and lights
	const scene = new THREE.Scene();
	const renderer = setupRenderer();
	let camera;

	await LoadGLTFByPath(scene, startingModelPath)
		.then(() => {
			camera = getFirstCameraInScene(scene);
			updateCameraAspect(camera);
		})
		.catch((error) => {
			console.error('Error loading JSON scene:', error);
	});
	scene.add(camera);

	SetAmbientLighting(scene);
	setBackground(scene)

	let waterList;
	waterList = await ReplacePlanesWithWater(scene);

	// Animate the scene
	function animate() {
		requestAnimationFrame(animate);

		if(waterList != undefined && waterList.length > 0){
			waterList.forEach(water => {
				animateWater(water);
			})
		}
				
		renderer.render(scene, camera);
	}
	animate();
};
