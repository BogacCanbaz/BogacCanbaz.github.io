# bogaccanbaz.github.io

Seven pages, plain HTML and CSS, no build step.

- index.html                about, background, publications, patents, contact
- portfolio.html            hub linking to the three case studies
- coursework.html           graduate courses with course numbers, grouped by theme
- gyroscope.html            case study one: underactuated gyroscope
- monolithic-spring.html    case study two: monolithic spring
- coursework-projects.html  case study three: hands-on projects from graduate courses
- style.css                 shared styles for all pages (bump ?v= in the <link> tags when it changes)

## assets/

Add files with exactly these names. Any figure that is missing is hidden automatically.

Research case studies:

- headshot.jpeg        your photo (in place)
- rig.jpeg             the rig photo (in place)
- fig-schematic.png    UDGCMG body schematic
- fig-gimbal-lock.png  singularity boundaries figure
- fig-tracking.png     Case II tracking plot and error
- fig-observer.png     observer block diagram
- fig-spring.png       monolithic spring render or stress plot
- CV_BogacCanbaz.pdf   current CV

Coursework case study (coursework-projects.html), in place:

- fig-flyback-prototype.jpg   photo of the assembled flyback converter on the bench (also the portfolio card thumbnail)
- fig-flyback-transformer.jpg photo of the final transformer on the LCR meter, reading 12.22 uH
- fig-flyback-topology.png    PLECS drawing of the dual-output flyback topology
- fig-flyback-bench-24v.jpg   oscilloscope and supply during the 24 V qualification run
- fig-pmdrive-bench.jpg       photo of the two LAUNCHXL-F28069M boards, inverter stages, and link inductors
- fig-pmdrive-block.png       dq current controller block diagram with decoupling and Pade delay blocks
- fig-pmdrive-idq.png         simulated dq currents through the 60 to 30 to 60 Hz cycle
- fig-pmdrive-scope-sweep.png hardware scope capture over two frequency cycles

Still to add (hidden until the file exists):

- fig-3rpr-workspace.png      3-RPR parallel robot workspace / singularity plot
- fig-arm-heatmap.png         two-link arm kinematic performance heat map
- fig-pso-convergence.png     PSO convergence plot from the wireless power project
- fig-cnn-training.png        CIFAR-10 CNN training and validation curves
- fig-snubber-waveforms.png   turn-off waveforms with and without the snubber

Source material (project reports, lecture handouts, homework) can sit in assets/ for reference;
.gitignore keeps it out of the published repository.

## Preview locally

    python -m http.server 8000

then open http://localhost:8000

## Publish a change

    git add .
    git commit -m "what changed"
    git push
