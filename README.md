# ThreeJS_Water_Object
Project made for tutorial on how to convert a horizontal plane into a WebGL water object. Uses ThreeJS.

STEPS TO Turn Plane Into Water In ThreeJS:

    1. Download the "waternormals.jpg" file from the ThreeJS github: https://github.com/mrdoob/three.js/blob/6774f1e4aa52d10e0e14b017427bcf7e558b8d81/examples/textures/waternormals.jpg
    2. Import ./src/helpers/WaterHelper.js file
    3. Make sure any planes in your scene that you want to be replaced with water objects are named "WaterPlane"
    4. Create a list to hold all water objects.
    5. Call await ReplacePlanesWithWater(scene), and set the water objects list to the result. 
    6. Add the following to the animate function: 
        if(waterList != undefined && waterList.length > 0){
    			waterList.forEach(water => {
    				animateWater(water);
    			})
    		}
