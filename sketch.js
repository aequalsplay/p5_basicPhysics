var particles = [];


function setup(){
    createCanvas(640, 360);
for (var i=0; i < 10; i++) {
    particles[i] = new Particle(random(width), random(2,4), 1)
}
}

function mousePressed(){
    console.log(particle.vel.y + " " + particle2.vel.y);
}


function draw(){
    background(51);

    var wind = createVector(1, 0);

    for (var i=0; i < particles.length; i++) {

    var gravity1 = createVector(0, 0.2 * particles[0].mass);
    particles[i].applyForce(gravity1);

    if(mouseIsPressed){
        particles[i].applyForce(wind);

    }

    particles[i].update();
    particles[i].edges(); 
    particles[i].display();
 
}

}


