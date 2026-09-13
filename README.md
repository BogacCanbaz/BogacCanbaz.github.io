# bogaccanbaz.github.io

Seven pages, plain HTML and CSS plus one small script, no build step.

- index.html                about, background, publications, patents, contact
- portfolio.html            hub linking to the four case studies
- coursework.html           graduate courses with course numbers, grouped by theme
- gyroscope.html            case study one: underactuated gyroscope
- monolithic-spring.html    case study two: monolithic spring
- coursework-projects.html  case study three: hands-on projects from graduate courses
- antenna.html              case study four: undergraduate antenna measurement system
- style.css                 shared styles for all pages (bump ?v= in the <link> tags when it changes)
- theme.js                  day and night switch, loaded on every page (bump ?v= in the <script> tags when it changes)

## assets/

Add files with exactly these names. Any figure that is missing is hidden automatically.

Research case studies:

- headshot.jpeg        your photo (in place)
- rig.jpeg             the rig photo (in place)
- fig-schematic.png    UDGCMG body schematic
- fig-cmg-iss.jpg      NASA photo of an ISS control moment gyroscope (public domain)
- fig-gyro-loop.png    closed-loop block diagram of the rig
- fig-tracking.png     Case II tracking plot and error (in place)
- fig-gimbal-lock.png  singularity boundaries figure (still to add)
- fig-observer.png     observer block diagram (still to add)
- fig-spring.png       monolithic spring CAD render
- fig-spring-disc-module.png     the disc-spring module modeled for comparison (thesis Fig. 2.13)
- fig-spring-stress.png          body stress at 650 N (thesis Fig. 2.11)
- fig-spring-thermal.png         MS and DS temperature distributions side by side (thesis Figs. 2.15 and 2.16)
- fig-spring-instron.jpg         prototype on the Instron frame (thesis Fig. 3.1)
- fig-spring-force-deflection.png measured deflection against force (thesis Fig. 3.2)
- fig-antenna-collage.webp       portfolio card thumbnail for the antenna measurement system
- CV_BogacCanbaz.pdf   current CV

Coursework case study (coursework-projects.html), in place:

- fig-coursework-collage.webp portfolio card thumbnail for the coursework case study, built from the figures below
- fig-flyback-prototype.jpg   photo of the assembled flyback converter on the bench (also the page's og:image)
- fig-flyback-transformer.jpg photo of the final transformer on the LCR meter, reading 12.22 uH
- fig-flyback-topology.png    PLECS drawing of the dual-output flyback topology
- fig-flyback-bench-24v.jpg   oscilloscope and supply during the 24 V qualification run
- fig-pmdrive-bench.jpg       photo of the two LAUNCHXL-F28069M boards, inverter stages, and link inductors
- fig-pmdrive-block.png       dq current controller block diagram with decoupling and Pade delay blocks
- fig-pmdrive-idq.png         simulated dq currents through the 60 to 30 to 60 Hz cycle
- fig-pmdrive-scope-sweep.png hardware scope capture over two frequency cycles

Illustrations recomputed or drawn for the site (scratch script: make_figs.py, matplotlib and schemdraw):

- fig-3rpr-workspace.png      3-RPR parallel robot workspace for a sample geometry
- fig-arm-heatmap.png         two-link arm manipulability heat map
- fig-pso-convergence.png     PSO on the six-hump camelback function
- fig-happywhale-pipeline.png the proposed Happywhale pipeline as a flow diagram
- fig-snubber-schematic.png   buck converter with the polarized RC turn-off snubber
- fig-snubber-waveforms.png   idealized turn-off waveforms and switching locus, with and without the snubber

Antenna measurement system (antenna.html):

- fig-antenna-arduino.jpg     own photo, Arduino UNO with the Motor Shield
- fig-antenna-switches.jpg    own photo, the SP8T and SP4T switch boards
- fig-antenna-system.png      block diagram drawn for the site
- fig-antenna-pattern.png     example radiation pattern computed for the site
- fig-antenna-multiprobe.jpg  figure from Park et al., Electronics 2022, CC BY 4.0
- fig-antenna-chamber.jpg     NASA anechoic chamber photo (public domain)
- fig-antenna-collage.webp    portfolio card thumbnail

Source material (project reports, lecture handouts, homework) can sit in assets/ for reference;
.gitignore keeps it out of the published repository.

## Preview locally

    python -m http.server 8000

then open http://localhost:8000

## Publish a change

    git add .
    git commit -m "what changed"
    git push
