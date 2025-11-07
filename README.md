# VectorCompression

A novel compression algorithm that utilizes vectors in dimensional space to store, compress, retain, and recall information - inspired by how Large Language Models represent and process data.

## Concept

This project explores vector-based compression by mapping characters to specific 3D coordinates. Words are represented as the vector sum of their constituent characters, creating a unique spatial representation that can be visualized and analyzed.

## Features

- **Base Vector Table**: Comprehensive mapping of characters (lowercase, uppercase, numbers, punctuation, symbols) to 3D vectors
- **3D Interactive Visualization**: Real-time visualization of words as vector sums in 3D space
- **Vector Addition**: Calculate and display the resultant vector of any word or phrase
- **Aesthetic Interface**: Beautiful, interactive 3D rendering using Three.js

## How It Works

Each character is assigned a unique 3D vector coordinate:
- Lowercase letters use simpler integer-based coordinates
- Uppercase letters utilize normalized diagonal vectors
- Numbers and symbols occupy specialized positions in 3D space

When you type a word, the visualization:
1. Looks up each character's base vector
2. Performs vector addition to compute the resultant
3. Displays both individual character vectors and the final sum
4. Renders the path through 3D space

## Usage

1. Open `visualizer/index.html` in a modern web browser
2. Enter any word or phrase in the input field
3. Watch as the 3D visualization builds the word vector by vector
4. Interact with the 3D scene (rotate, zoom, pan)

## Project Structure

```
VectorCompression/
├── Base Vector Table       # Character-to-vector mapping definition
├── README.md              # This file
├── visualizer/
│   ├── index.html        # Main visualization interface
│   ├── style.css         # Styling
│   └── app.js            # Visualization logic and vector math
├── context/
│   └── chat_history.md   # Development context and chat history
└── docs/
    └── algorithm.md      # Detailed algorithm documentation
```

## Future Directions

- Implement compression/decompression algorithms
- Explore dimensionality reduction techniques
- Analyze semantic similarity through vector proximity
- Develop encoding/decoding optimizations
- Compare compression ratios with traditional algorithms

## License

Private project - All rights reserved
