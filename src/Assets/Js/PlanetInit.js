import * as THREE from "three";

export function PlanetInit () {
    var renderer, scene, camera, circle, particle, luminor, halo;
    var lights = [];
    if (document.getElementById('vertexShader').textContent && document.getElementById('fragmentShader').textContent) {
        var vertexShader = document.getElementById('vertexShader').textContent;
        var fragmentShader = document.getElementById('fragmentShader').textContent;
    } else {
        return
    }
    window.onload = function() {
        init();
        animate();
    }

    function init() {
        renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.autoClear = false;
        renderer.setClearColor('#232323', 0.0);
        if (document.getElementById('canvas')) {
            document.getElementById('canvas').appendChild(renderer.domElement);
        }
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 400;
        scene.add(camera);

        circle = new THREE.Object3D();
        particle = new THREE.Object3D();
        halo = new THREE.Object3D();
        luminor = new THREE.Object3D();
        
        scene.add(circle);
        scene.add(particle);
        scene.add(halo);
        scene.add(luminor);

        var geo_planet = new THREE.SphereGeometry(8, 64, 32);
        var geom3 = new THREE.SphereGeometry(12, 22, 12);
        
        var mat = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            emissive: '#111111',

            map: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/2/2c/Generic_Celestia_asteroid_texture.jpg'),
            bumpMap: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/2/2c/Generic_Celestia_asteroid_texture.jpg'),
            bumpScale:   0.025,
            specularMap: new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/2/2c/Generic_Celestia_asteroid_texture.jpg'),
            specular: new THREE.Color('#232323')
        });
        
        var mat3 = new THREE.ShaderMaterial({
            uniforms: {},
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            side: THREE.BackSide,
            blending: THREE.AdditiveBlending,
            transparent: true
        });
        
        var planet = new THREE.Mesh(geo_planet, mat);
        planet.scale.x = planet.scale.y = planet.scale.z = 15;
        circle.add(planet);

        var ball = new THREE.Mesh(geom3, mat3);
        ball.scale.x = ball.scale.y = ball.scale.z = 16;
        halo.add(ball);
        
        var ball2 = new THREE.Mesh(geom3, mat3);
        ball2.scale.x = ball2.scale.y = ball2.scale.z = 12;
        ball2.position.set(25,5,1)
        halo.add(ball2);
        
        var ambientLight = new THREE.AmbientLight(0x000000);
        scene.add(ambientLight);
        
        var hemiLight = new THREE.HemisphereLight(0x000000, 0x1111111, 20);
                hemiLight.position.set(-1, -1, 2);
        luminor.add(hemiLight);
        
        lights[1] = new THREE.DirectionalLight(0x000000, 7);
        lights[1].position.set(-1, 0, 0.5);
        lights[2] = new THREE.DirectionalLight(0x000000, 7);
        lights[2].position.set(1, 0, 0.5);

        scene.add(lights[1]);
        scene.add(lights[2]);
        
        window.addEventListener('resize', onWindowResize, false);

    };

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);

        particle.rotation.x += 0.0000;
        particle.rotation.y -= 0.0040;
        circle.rotation.x -= 0.001;
        circle.rotation.y -= 0.001;
        
        halo.rotation.z -= 0.005;
        luminor.rotation.z -= 0.005;
        
        renderer.clear();
        renderer.render(scene, camera)
    };
}