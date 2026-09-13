# bogaccanbaz.github.io

Five pages, plain HTML and CSS, no build step.

- index.html          about, publications, patents, contact
- portfolio.html      hub linking to the two case studies
- gyroscope.html      case study one
- monolithic-spring.html  case study two
- style.css           shared styles for all three

## assets/

Add files with exactly these names. Any figure that is missing is hidden automatically.

- headshot.jpeg        your photo (in place)
- rig.jpeg             the rig photo (in place)
- udgcmg.mp4           compressed video from IMG_2743_2.MOV
- fig-gimbal-lock.png  singularity boundaries figure
- fig-tracking.png     Case II tracking plot and error
- fig-observer.png     observer block diagram
- fig-spring.png       monolithic spring render or stress plot
- CV_BogacCanbaz.pdf   current CV

## Preview locally

    python -m http.server 8000

then open http://localhost:8000

## Publish a change

    git add .
    git commit -m "what changed"
    git push
