
// joint and bone - constructor
Bone = function(size)
{	
	this.bone = new Cuboid([0,0,0],size);
	this.bone.color = [0.5,0.8,0.5];
	this.bone.offset = [0,0,0.5];
	this.rot = [0,0,0,0];
}

// joint and bone - drawing method
Bone.prototype.draw = function()
{	
	if (this.rot)
	{
		if (this.rot[0]) zRotate(this.rot[0]);	// horizontal angle
		if (this.rot[1]) yRotate(this.rot[1]);	// vertical angle
		if (this.rot[2]) xRotate(this.rot[2]);	// vertical angle
		if (this.rot[3]) zRotate(this.rot[3]);	// axis angle
	}
	if (this.offset) translate(this.offset); 
	this.bone.draw();
	translate([0,0,this.bone.size[2]]); // translation to the end of the bone
}

// returns a colour based on the index i
function col(i){
    switch(i){
        case 0: return [0.4,1,0.4];
        case 1: return [0.8,1,0.4];
        case 2 : return [1,1,0.4];
        case 3 : return [1,0.8,0.4];
        case 4 : return [1,0.6,0.4];
        case 5 : return [0.8,0.4,0.4];
        case 6 : return [0.6,0.4,0.4];
        case 7 : return [0.45,0.4,0.4];
        case 8 : return [0.2,0.3,0.2];
        case 9 : return [0.1,0.1,0.1];
        default: return [1,1,1];
    }
}

Bird = function(){
    this.body = new Bone([1.25,0.6,0.7]);
    this.body.bone.color = [0.5,0.5,0.5];
    this.head = new Bone([0.4,0.4,0.5]);
    this.head.bone.color = [0.5,0.5,0.5];
    this.head.offset = [0.9,0,-0.6];
    this.beak = new Bone([0.2,0.03,0.2]);
    this.beak.bone.color = [1,0.4,0];
    this.leftEye = new Bone([0.15,0.01,0.15]);
    this.leftEye.bone.color = [1,1,1];
    this.leftIris = new Bone([0.075,0.01,0.075]);
    this.leftIris.bone.color = [0.6,0.7,1]
    this.rightEye = new Bone([0.15,0.01,0.15]);
    this.rightEye.bone.color = [1,1,1]
    this.rightIris = new Bone([0.075,0.01,0.075]);
    this.rightIris.bone.color = [0.6,0.7,1];

   
   var a = 7;
   var cnt = 0;
   this.rightWing =[];
   this.rightWing[0] = new Bone([Math.sin(1.5*5/10),0.08,0.15]);
   this.rightWing[0].bone.color = col(0);
   this.rightWing[0].offset = [-0.8,-0.2,0.3];

   this.leftWing = [];
   this.leftWing[0] = new Bone([Math.sin(1.5*5/10),0.08,0.15]);
   this.leftWing[0].bone.color = col(0);
   this.leftWing[0].offset = [-0.8,0.2,0.3];
    
   for(var i = 1; i <10;i++){
        this.leftWing[i] = new Bone([Math.sin(1.5*a/10),0.08,0.15]);
        this.leftWing[i].bone.color = col(i);
        this.leftWing[i].offset = [0,0,0.03];
        this.rightWing[i] = new Bone([Math.sin(1.5*a/10),0.08,0.15]);
        this.rightWing[i].bone.color = col(i);
        this.rightWing[i].offset = [0,0,0.03];
        cnt+=1;
        if(cnt == 8){
            a = 0.5;
        }else{
            if(cnt >= 3){
                a -=2;
            }else{
                a += 2;
            }
        }     
    }
   
}
Bird.prototype.draw = function(){
    pushMatrix();
    this.body.draw();
    this.head.draw();
    
    pushMatrix();
    translate([0.12,0,-0.4]);
    yRotate(45);
    this.beak.draw();
    popMatrix();

    pushMatrix();
    translate([0,0.22,-0.2]);
    this.leftEye.draw();
    popMatrix();

    pushMatrix();
    translate([0,0.23,-0.15]);
    this.leftIris.draw();
    popMatrix();

    pushMatrix();
    translate([0,-0.22,-0.2]);
    this.rightEye.draw();
    popMatrix();

    pushMatrix();
    translate([0,-0.23,-0.15]);
    this.rightIris.draw();
    popMatrix();

    pushMatrix();
    xRotate(90);
    for(var i = 0; i <10;i++){
        this.leftWing[i].draw();
    }
    popMatrix();

    pushMatrix();
    xRotate(-90);
    for(var i = 0; i <10;i++){
        this.rightWing[i].draw();
    }
    popMatrix();
    popMatrix();
}
