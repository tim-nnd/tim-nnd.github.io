(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pert4_atlas_", frames: [[0,0,1920,1080],[954,1082,900,979],[0,1082,952,1040]]}
];


// symbols:



(lib.game_background = function() {
	this.spriteSheet = ss["pert4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.scott_pilgrim_sprite_sheet_idles = function() {
	this.spriteSheet = ss["pert4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.scott_pilgrim_sprites = function() {
	this.spriteSheet = ss["pert4_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.MovieButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghAeQgNgMAAgSQAAgSAOgMQAOgLASgBQAKABAKADQAJAEAEAEQAHAHAEAJQACAIAAAHIAAAIIhIAAQACAHAIAEQAHAFALAAQAKAAARgFIAJgBQAEgBACADQADADAAAEQAAADgDADQgEADgNACQgOADgMABQgVAAgNgNgAgPgUQgHAEgEAIIA1AAQgFgIgGgEQgHgDgJgBQgIABgHADg");
	this.shape.setTransform(80.3,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeA5QgGAAgDgDQgCgCAAgEQAAgEACgDQADgCAGAAIAWAAIAAgrIgOAAQgHAAgDgCQgDgDAAgEQAAgEADgDQADgCAHAAIAfAAIAAA9IAWAAQAGAAADACQADADgBAEQABAEgDACQgDADgGAAgAgOglIAAgTIAUAAIAAATg");
	this.shape_1.setTransform(69.7,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJAoIgeg9IgCAAQgHAAgCgCQgDgDAAgEQAAgEADgDQACgCAHAAIAYAAQAGAAADACQADADAAAEQAAAGgEACQgCABgIAAIATAnIATgnQgHAAgCgBQgEgCAAgGQAAgEADgDQACgCAHAAIAYAAQAHAAADACQACADAAAEQAAAEgCADQgDACgHAAIgDAAIgeA9g");
	this.shape_2.setTransform(58.9,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAlQgLgGgGgKQgGgKAAgKQAAgKAGgKQAGgLAMgFQALgHALAAQAMAAAMAHQALAFAGALQAGAKAAAKQAAAKgGAKQgGAKgLAGQgMAFgMABQgLAAgMgGgAgTgQQgJAIAAAJQAAAJAJAHQAIAIALAAQAMAAAIgIQAJgHAAgJQAAgIgHgHQgIgKgOAAQgLABgIAHg");
	this.shape_3.setTransform(48.1,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWA1QgGAAgDgCQgDgDAAgEQAAgEADgCQADgDAGAAIAHAAIAAg0IgVAtIgOAAIgVgtIAAA0IAGAAQAHAAACADQADACAAAEQAAAEgDADQgCACgHAAIgYAAQgGAAgDgCQgDgDAAgEQAAgEADgCQADgDAGAAIAAhFQgFgBgDgCQgCgDAAgDQAAgEADgDQADgCAGAAIAUAAIAXA1IAYg1IAUAAQAHAAADACQACADAAAEQAAADgCADQgDACgEABIAABFQAGAAACADQADACAAAEQAAAEgDADQgDACgGAAg");
	this.shape_4.setTransform(37.3,21.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ao7DSIAAmjIR3AAIAAGjg");
	this.shape_5.setTransform(57.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.5,41.9);


(lib.Hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnaE2IAAprIO1AAIAAJrg");
	var mask_graphics_19 = new cjs.Graphics().p("Al7E2IAAprIL3AAIAAJrg");
	var mask_graphics_24 = new cjs.Graphics().p("Al7E2IAAprIL3AAIAAJrg");
	var mask_graphics_29 = new cjs.Graphics().p("Al7E2IAAprIL3AAIAAJrg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:284.5,y:232}).wait(19).to({graphics:mask_graphics_19,x:275,y:232}).wait(5).to({graphics:mask_graphics_24,x:275,y:232}).wait(5).to({graphics:mask_graphics_29,x:275,y:232}).wait(1));

	// Hero
	this.instance = new lib.scott_pilgrim_sprites();
	this.instance.parent = this;
	this.instance.setTransform(0,-322,1.204,1.204);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-97},0).wait(15).to({x:173},0).wait(5).to({x:246},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(237,201,95,62);


(lib.BckButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAQA5QgHAAgCgDQgDgCAAgEQAAgEADgDIgSgQIgEACIAAAeIgVAAQgGAAgDgDQgDgCAAgEQAAgEADgCQADgDAGAAIADAAIAAhNIgDAAQgGAAgDgDQgDgCAAgEQAAgEADgDQADgCAGAAIAVAAIAAA7IAPgKQgDgEAAgCQAAgEADgCQACgDAGAAIAVAAQAGAAADADQADACAAAEQAAAEgDADQgDACgGAAIgFAAIgWARIAdAaIAGAAQAGAAADADQADACAAAEQAAAEgDACQgDADgGAAg");
	this.shape.setTransform(73.1,17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgdAiQgQgMAAgUQAAgSANgNQAMgMAVAAIANABQAGABAGADQADgDAEAAQADAAADACQACAEAAAGIAAAMQAAAGgCADQgDADgEgBQgDAAgCgBQgCgCgCgFQgBgFgDgDQgIgDgLAAQgLAAgIAHQgIAIAAAKQAAAKAIAHQAHAFAQAAQALABAHgDQAFgBADgEQAEgDADAAQAEAAADACQACAEAAADQAAAGgIAFQgMAJgYgBQgTAAgMgIg");
	this.shape_1.setTransform(62.4,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmAjQgJgIAAgJQAAgMAMgIQALgKAVAAQAHAAAKACIAAgEQAAgFgDgCQgDgDgJABQgIAAgNACIgHABQgEABgCgDQgDgCAAgFIABgDIACgDIAHgDIAOgCIAMgBQAQgBAJAIQAJAHAAANIAAAkIAEAAQAGgBADADQADADAAAEQAAADgDADQgDACgGABIgWAAIAAgFQgGAEgIABQgIACgGAAQgPAAgJgHgAgXALQgFADAAADQAAABAAABQAAAAAAABQABAAAAABQABAAAAABQAEACAIAAQAHABAHgDQAIgDAGgEIAAgIQgKgCgIAAQgLAAgIAGg");
	this.shape_2.setTransform(51.6,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmA1QgGAAgDgCQgDgDABgEQgBgEADgCQADgDAGAAIADAAIAAhFIgDAAQgGAAgDgDQgDgCABgEQgBgEADgDQADgCAGAAIAsAAQARAAAJAJQALAJgBAMQABAGgDAFQgCAFgFAFQAIAEAFAHQAEAGAAAJQAAAHgDAGQgCAEgEADQgEAEgGACQgHACgKAAgAgRAjIAeAAQAMAAAEgDQADgCAAgFQABgFgIgGQgGgFgNAAIgXAAgAgRgIIATAAQAKAAAIgFQAEgEAAgFQABgFgFgEQgEgDgLAAIgWAAg");
	this.shape_3.setTransform(40.5,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AovDCIAAmDIRfAAIAAGDg");
	this.shape_4.setTransform(56,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,38.8);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.pert4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_45 = function() {
		function goToMovie()
		{
			window.open("https://www.imdb.com/title/tt0446029/")
		}
		
		function restart()
		{
			this.gotoAndPlay(0)
		}
		
		this.movieBtn.addEventListener("click", goToMovie.bind(this))
		this.backBtn.addEventListener("click", restart.bind(this))
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(45).call(this.frame_45).wait(17));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(275,200);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(29).to({scaleX:0.5,scaleY:0.5,x:338.1,y:280.6},16,cjs.Ease.quadInOut).wait(17));

	// button
	this.backBtn = new lib.BckButton();
	this.backBtn.name = "backBtn";
	this.backBtn.parent = this;
	this.backBtn.setTransform(399.4,304.6,1,1,0,0,0,56,19.4);
	new cjs.ButtonHelper(this.backBtn, 0, 1, 1);

	this.movieBtn = new lib.MovieButton();
	this.movieBtn.name = "movieBtn";
	this.movieBtn.parent = this;
	this.movieBtn.setTransform(399.3,246,1,1,0,0,0,57.2,20.9);
	new cjs.ButtonHelper(this.movieBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.movieBtn},{t:this.backBtn}]},45).to({state:[]},1).wait(16));

	// Idle Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_29 = new cjs.Graphics().p("AuVNjIAA7FIcrAAIAAbFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_graphics_29,x:298.6,y:261.8}).wait(33));

	// Hero Idle
	this.instance = new lib.scott_pilgrim_sprite_sheet_idles();
	this.instance.parent = this;
	this.instance.setTransform(-6,-352,1.992,1.992);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(33));

	// Hero Sliding
	this.instance_1 = new lib.Hero();
	this.instance_1.parent = this;
	this.instance_1.setTransform(306.6,834.6,1.371,1.371,0,0,0,572.9,625.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:657.6},24).to({_off:true},5).wait(33));

	// Background
	this.instance_2 = new lib.game_background();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.292,0.37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.9,-265,1571.2,1716.4);
// library properties:
lib.properties = {
	id: '33A9CFE835F6F648A052DE1C00DBB143',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pert4_atlas_.png?1574966529959", id:"pert4_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['33A9CFE835F6F648A052DE1C00DBB143'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;