// Base Vector Table - Character to 3D Vector Mapping
const BASE_VECTORS = {
    'e': [5,0,0],
    't': [4,3,0],
    'a': [3,4,0],
    'o': [0,5,0],
    'i': [-3,4,0],
    'n': [-4,3,0],
    's': [-5,0,0],
    'h': [-4,-3,0],
    'r': [-3,-4,0],
    'd': [0,-5,0],
    'l': [3,-4,0],
    'c': [4,-3,0],
    'u': [0,0,5],
    'm': [0,3,4],
    'w': [0,4,3],
    'f': [0,4,-3],
    'g': [0,3,-4],
    'y': [0,0,-5],
    'p': [0,-3,-4],
    'b': [0,-4,-3],
    'v': [0,-4,3],
    'k': [0,-3,4],
    'j': [4,0,3],
    'x': [3,0,4],
    'q': [-3,0,4],
    'z': [-4,0,3],
    '.': [-4,0,-3],
    '?': [-3,0,-4],
    '!': [3,0,-4],
    "'": [4,0,-3],
    'E': [5*Math.sqrt(3)/3, 5*Math.sqrt(3)/3, 5*Math.sqrt(3)/3],
    'T': [-5*Math.sqrt(3)/3, 5*Math.sqrt(3)/3, 5*Math.sqrt(3)/3],
    'A': [-5*Math.sqrt(3)/3, -5*Math.sqrt(3)/3, 5*Math.sqrt(3)/3],
    'O': [5*Math.sqrt(3)/3, -5*Math.sqrt(3)/3, 5*Math.sqrt(3)/3],
    'I': [5*Math.sqrt(3)/3, 5*Math.sqrt(3)/3, -5*Math.sqrt(3)/3],
    'N': [-5*Math.sqrt(3)/3, 5*Math.sqrt(3)/3, -5*Math.sqrt(3)/3],
    'S': [-5*Math.sqrt(3)/3, -5*Math.sqrt(3)/3, -5*Math.sqrt(3)/3],
    'H': [5*Math.sqrt(3)/3, -5*Math.sqrt(3)/3, -5*Math.sqrt(3)/3],
    'R': [5*Math.sqrt(2)/2, 5*Math.sqrt(2)/2, 0],
    'D': [-5*Math.sqrt(2)/2, 5*Math.sqrt(2)/2, 0],
    'L': [-5*Math.sqrt(2)/2, -5*Math.sqrt(2)/2, 0],
    'C': [5*Math.sqrt(2)/2, -5*Math.sqrt(2)/2, 0],
    'U': [0, 5*Math.sqrt(2)/2, 5*Math.sqrt(2)/2],
    'M': [0, -5*Math.sqrt(2)/2, 5*Math.sqrt(2)/2],
    'W': [0, -5*Math.sqrt(2)/2, -5*Math.sqrt(2)/2],
    'F': [0, 5*Math.sqrt(2)/2, -5*Math.sqrt(2)/2],
    'G': [5*Math.sqrt(2)/2, 0, 5*Math.sqrt(2)/2],
    'Y': [5*Math.sqrt(2)/2, 0, -5*Math.sqrt(2)/2],
    'P': [-5*Math.sqrt(2)/2, 0, -5*Math.sqrt(2)/2],
    'B': [-5*Math.sqrt(2)/2, 0, 5*Math.sqrt(2)/2],
    'V': [2*Math.sqrt(6), 1, 0],
    'K': [1, 2*Math.sqrt(6), 0],
    'J': [-1, 2*Math.sqrt(6), 0],
    'X': [-2*Math.sqrt(6), 1, 0],
    'Q': [-2*Math.sqrt(6), -1, 0],
    'Z': [-1, -2*Math.sqrt(6), 0],
    ' ': [1, -2*Math.sqrt(6), 0],
    ':': [2*Math.sqrt(6), -1, 0],
    '$': [0, 2*Math.sqrt(6), 1],
    '@': [0, 1, 2*Math.sqrt(6)],
    '0': [0, -1, 2*Math.sqrt(6)],
    '1': [0, -2*Math.sqrt(6), 1],
    '2': [0, -2*Math.sqrt(6), -1],
    '3': [0, -1, -2*Math.sqrt(6)],
    '4': [0, 1, -2*Math.sqrt(6)],
    '5': [0, 2*Math.sqrt(6), -1],
    '6': [1, 0, 2*Math.sqrt(6)],
    '7': [2*Math.sqrt(6), 0, 1],
    '8': [2*Math.sqrt(6), 0, -1],
    '9': [1, 0, -2*Math.sqrt(6)],
    ',': [-1, 0, -2*Math.sqrt(6)],
    ';': [-2*Math.sqrt(6), 0, -1],
    '"': [-2*Math.sqrt(6), 0, 1],
    '-': [-1, 0, 2*Math.sqrt(6)],
    '(': [5*Math.sqrt(2)/3, 5*Math.sqrt(2)/3, 5*Math.sqrt(5)/3],
    ')': [5*Math.sqrt(5)/3, 5*Math.sqrt(2)/3, 5*Math.sqrt(2)/3],
    '[': [5*Math.sqrt(2)/3, 5*Math.sqrt(5)/3, 5*Math.sqrt(2)/3],
    ']': [-5*Math.sqrt(2)/3, 5*Math.sqrt(2)/3, 5*Math.sqrt(5)/3],
    '{': [-5*Math.sqrt(5)/3, 5*Math.sqrt(2)/3, 5*Math.sqrt(2)/3],
    '}': [-5*Math.sqrt(2)/3, 5*Math.sqrt(5)/3, 5*Math.sqrt(2)/3],
    '<': [-5*Math.sqrt(5)/3, -5*Math.sqrt(2)/3, 5*Math.sqrt(2)/3],
    '>': [-5*Math.sqrt(2)/3, -5*Math.sqrt(5)/3, 5*Math.sqrt(2)/3],
    '#': [-5*Math.sqrt(2)/3, -5*Math.sqrt(2)/3, 5*Math.sqrt(5)/3],
    '%': [5*Math.sqrt(5)/3, -5*Math.sqrt(2)/3, 5*Math.sqrt(2)/3],
    '&': [5*Math.sqrt(2)/3, -5*Math.sqrt(5)/3, 5*Math.sqrt(2)/3],
    '*': [5*Math.sqrt(2)/3, -5*Math.sqrt(2)/3, 5*Math.sqrt(5)/3],
    '+': [5*Math.sqrt(2)/3, 5*Math.sqrt(2)/3, -5*Math.sqrt(5)/3],
    '=': [5*Math.sqrt(5)/3, 5*Math.sqrt(2)/3, -5*Math.sqrt(2)/3],
    '/': [5*Math.sqrt(2)/3, 5*Math.sqrt(5)/3, -5*Math.sqrt(2)/3],
    '\\': [-5*Math.sqrt(2)/3, 5*Math.sqrt(2)/3, -5*Math.sqrt(5)/3],
    '|': [-5*Math.sqrt(5)/3, 5*Math.sqrt(2)/3, -5*Math.sqrt(2)/3],
    '~': [-5*Math.sqrt(2)/3, 5*Math.sqrt(5)/3, -5*Math.sqrt(2)/3],
    '^': [-5*Math.sqrt(5)/3, -5*Math.sqrt(2)/3, -5*Math.sqrt(2)/3]
};

// Three.js Scene Setup
let scene, camera, renderer, controls;
let vectorObjects = [];
let gridHelper, axesHelper;

// Initialize the 3D scene
function initScene() {
    const container = document.getElementById('canvas-container');
    const width = container.clientWidth;
    const height = container.clientHeight || 600;

    // Scene
    scene = new THREE.Scene();
    scene.background = null; // Transparent background

    // Camera
    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(30, 30, 30);
    camera.lookAt(0, 0, 0);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 10;
    controls.maxDistance = 100;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 50, 50);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Grid
    gridHelper = new THREE.GridHelper(100, 20, 0x1a1a1a, 0xd0d0d0);
    scene.add(gridHelper);

    // Axes
    axesHelper = new THREE.AxesHelper(15);
    axesHelper.material.linewidth = 2;
    scene.add(axesHelper);

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Start animation loop
    animate();
}

function onWindowResize() {
    const container = document.getElementById('canvas-container');
    const width = container.clientWidth;
    const height = container.clientHeight || 600;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Clear all vectors from scene
function clearVectors() {
    vectorObjects.forEach(obj => {
        scene.remove(obj);
    });
    vectorObjects = [];
}

// Create arrow for vector visualization
function createVectorArrow(start, end, color, opacity = 1) {
    const direction = new THREE.Vector3(
        end[0] - start[0],
        end[1] - start[1],
        end[2] - start[2]
    );
    const length = direction.length();

    const arrowHelper = new THREE.ArrowHelper(
        direction.normalize(),
        new THREE.Vector3(start[0], start[1], start[2]),
        length,
        color,
        length * 0.15,
        length * 0.1
    );

    arrowHelper.line.material.opacity = 1.0;
    arrowHelper.line.material.transparent = false;
    arrowHelper.cone.material.opacity = 1.0;
    arrowHelper.cone.material.transparent = false;

    return arrowHelper;
}

// Create sphere marker
function createSphere(position, color, size = 0.5) {
    const geometry = new THREE.SphereGeometry(size, 16, 16);
    const material = new THREE.MeshPhongMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.3,
        shininess: 100
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(position[0], position[1], position[2]);
    sphere.castShadow = true;
    return sphere;
}

// Visualize word as vector sum
async function visualizeWord(input) {
    clearVectors();

    if (!input) {
        updateVectorInfo('Please enter a word');
        return;
    }

    const animate = document.getElementById('animateAddition').checked;
    const showIndividual = document.getElementById('showVectors').checked;
    const layerWords = document.getElementById('layerWords').checked;

    let vectorInfoHTML = '';
    const allWordVectors = [];

    // Split by spaces if layering words
    const words = layerWords ? input.split(/\s+/).filter(w => w.length > 0) : [input];

    // Process each word
    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
        const word = words[wordIndex];
        let currentPos = layerWords ? [0, 0, 0] : (wordIndex > 0 ? allWordVectors[wordIndex - 1].resultant : [0, 0, 0]);
        const charVectors = [];

        if (layerWords && words.length > 1) {
            vectorInfoHTML += `<div class="char-vector" style="border-left-color: #FFD700; font-weight: bold;">
                <strong>Word ${wordIndex + 1}:</strong> "${word}"
            </div>`;
        }

        // Calculate all character vectors for this word
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            const vector = BASE_VECTORS[char];

            if (!vector) {
                vectorInfoHTML += `<div class="char-vector" style="border-left-color: #ff6b6b;">
                    <strong>${char}</strong> No vector mapping found
                </div>`;
                continue;
            }

            const nextPos = [
                currentPos[0] + vector[0],
                currentPos[1] + vector[1],
                currentPos[2] + vector[2]
            ];

            charVectors.push({
                char: char,
                start: [...currentPos],
                end: [...nextPos],
                vector: vector,
                wordIndex: wordIndex
            });

            currentPos = nextPos;

            vectorInfoHTML += `<div class="char-vector">
                <strong>${char}</strong>
                [${vector[0].toFixed(2)}, ${vector[1].toFixed(2)}, ${vector[2].toFixed(2)}]
            </div>`;
        }

        allWordVectors.push({
            word: word,
            vectors: charVectors,
            resultant: currentPos
        });
    }

    updateVectorInfo(vectorInfoHTML);

    // Render all words
    for (let wordIndex = 0; wordIndex < allWordVectors.length; wordIndex++) {
        const wordData = allWordVectors[wordIndex];
        const charVectors = wordData.vectors;
        const totalWords = allWordVectors.length;

        // Calculate color based on word position (for layered words) or character position
        let vectorColor;
        if (layerWords && totalWords > 1) {
            // Gradient based on word index (word 1 is redder, last word is blacker)
            const lightness = Math.floor(50 - (wordIndex / (totalWords - 1)) * 50);
            vectorColor = `hsl(0, 100%, ${lightness}%)`;
        }

        // Animate or show all at once
        if (animate && charVectors.length > 0) {
            for (let i = 0; i < charVectors.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 300));

                if (showIndividual) {
                    // Use word-based color for layered words, character-based for single words
                    const color = layerWords && totalWords > 1 ? vectorColor :
                        `hsl(0, 100%, ${Math.floor(50 - (i / charVectors.length) * 50)}%)`;

                    const arrow = createVectorArrow(
                        charVectors[i].start,
                        charVectors[i].end,
                        color,
                        0.7
                    );
                    scene.add(arrow);
                    vectorObjects.push(arrow);
                }
            }
        } else {
            charVectors.forEach((cv, i) => {
                if (showIndividual) {
                    // Use word-based color for layered words, character-based for single words
                    const color = layerWords && totalWords > 1 ? vectorColor :
                        `hsl(0, 100%, ${Math.floor(50 - (i / charVectors.length) * 50)}%)`;

                    const arrow = createVectorArrow(cv.start, cv.end, color, 0.7);
                    scene.add(arrow);
                    vectorObjects.push(arrow);
                }
            });
        }

        // Show resultant vector for each word
        if (charVectors.length > 0) {
            const resultant = wordData.resultant;
            const startPoint = layerWords ? [0, 0, 0] : (wordIndex > 0 ? allWordVectors[wordIndex - 1].resultant : [0, 0, 0]);

            // Always use golden color for resultant vectors
            const goldenColor = 0xFFD700;

            const resultantArrow = createVectorArrow(startPoint, resultant, goldenColor, 1);
            resultantArrow.line.material.linewidth = 3;
            scene.add(resultantArrow);
            vectorObjects.push(resultantArrow);

            console.log(`Word ${wordIndex + 1}: Resultant vector from [${startPoint}] to [${resultant}]`);
        }
    }

    // Update stats with final resultant
    if (allWordVectors.length > 0) {
        const lastWord = allWordVectors[allWordVectors.length - 1];
        const resultant = lastWord.resultant;
        const magnitude = Math.sqrt(
            resultant[0] ** 2 + resultant[1] ** 2 + resultant[2] ** 2
        );

        const displayText = layerWords && words.length > 1 ?
            `${words.length} words (layered)` : input;
        const charCount = allWordVectors.reduce((sum, w) => sum + w.vectors.length, 0);

        document.getElementById('currentWord').textContent = displayText;
        document.getElementById('charCount').textContent = charCount;
        document.getElementById('resultantVector').textContent =
            `[${resultant[0].toFixed(2)}, ${resultant[1].toFixed(2)}, ${resultant[2].toFixed(2)}]`;
        document.getElementById('magnitude').textContent = magnitude.toFixed(2);

        // Focus camera on result
        controls.target.set(resultant[0] / 2, resultant[1] / 2, resultant[2] / 2);
    }
}

function updateVectorInfo(html) {
    document.getElementById('vectorInfo').innerHTML = html;
}

// Event Listeners
document.getElementById('visualizeBtn').addEventListener('click', () => {
    const word = document.getElementById('wordInput').value;
    visualizeWord(word);
});

document.getElementById('wordInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const word = document.getElementById('wordInput').value;
        visualizeWord(word);
    }
});

document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('wordInput').value = '';
    clearVectors();
    updateVectorInfo('<p class="help-text">Enter a word to see its vector representation</p>');
    document.getElementById('currentWord').textContent = '-';
    document.getElementById('charCount').textContent = '0';
    document.getElementById('resultantVector').textContent = '-';
    document.getElementById('magnitude').textContent = '0';
    controls.target.set(0, 0, 0);
});

document.getElementById('showGrid').addEventListener('change', (e) => {
    gridHelper.visible = e.target.checked;
});

document.getElementById('showAxes').addEventListener('change', (e) => {
    axesHelper.visible = e.target.checked;
});

document.getElementById('showVectors').addEventListener('change', () => {
    const word = document.getElementById('wordInput').value;
    if (word) visualizeWord(word);
});

document.getElementById('animateAddition').addEventListener('change', () => {
    const word = document.getElementById('wordInput').value;
    if (word) visualizeWord(word);
});

document.getElementById('layerWords').addEventListener('change', () => {
    const word = document.getElementById('wordInput').value;
    if (word) visualizeWord(word);
});

// Initialize on load
window.addEventListener('load', initScene);
