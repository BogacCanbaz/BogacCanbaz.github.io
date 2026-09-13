# bogaccanbaz.github.io

Six pages, plain HTML and CSS, no build step.

- index.html                about, coursework, publications, patents, contact
- portfolio.html            hub linking to the three case studies
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

Coursework case study (coursework-projects.html):

- fig-flyback-prototype.jpg   photo of the assembled flyback converter (also the portfolio card thumbnail)
- fig-flyback-transformer.jpg photo of the hand-wound transformer on the LCR meter
- fig-flyback-waveforms.png   Level-2 PLECS waveforms of the DCM design
- fig-pmdrive-bench.jpg       photo of the two LAUNCHXL-F28069M + BOOSTXL-DRV8301 stages and RL link
- fig-pmdrive-block.png       dq-frame control block diagram with PLL and delays
- fig-pmdrive-idq.png         simulated dq currents through the 30 to 60 Hz sweep
- fig-3rpr-workspace.png      3-RPR parallel robot workspace / singularity plot
- fig-arm-heatmap.png         two-link arm kinematic performance heat map
- fig-pso-convergence.png     PSO convergence plot from the wireless power project
- fig-cnn-training.png        CIFAR-10 CNN training and validation curves
- fig-snubber-waveforms.png   turn-off waveforms with and without the snubber

## Preview locally

    python -m http.server 8000

then open http://localhost:8000

## Publish a change

    git add .
    git commit -m "what changed"
    git push
