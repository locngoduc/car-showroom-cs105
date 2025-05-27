# Gran Turismo Inspired Car Showroom Scene (v2)
 A car showroom mainly inspired by the one in Gran Turismo Sport, and made with React-Three-Fiber, Tailwind + Shadcn and Zustand. The old version (version 1) which was limited to only 1 car can be found [here](https://github.com/jdichh/car-showroom-R3F). <br/> <br/> Models and textures were sourced from CSR Racing 2 then edited with Blender, and engine audio files were sourced from various videos in YouTube then edited with Tenacity. Car data/info sourced from the Gran Turismo 7 game wiki and official manufacturer information available online.

## Demo
https://github.com/jdichh/car-showroom-r3f-v2/assets/90493623/ea953291-8fb7-43f8-96b1-d621082e7ca2

## Challenges Faced and How It Was Solved
<ul>
 <li>State management with React Context (for menu items, car paint states, current car state, etc.), used Zustand instead to simplify</li>
 <li>UI responsiveness, but it is not meant for mobile devices as it can be too performance-heavy for them (I just made the UI responsive in case a user's mobile device can run it properly.)</li>
</ul>

## Project setup
If you want to try this out for yourself, download the source code, open the folder in VSCode/VSCodium, and run these lines of code.
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run dev
```
