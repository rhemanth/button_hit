(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var that = this;
		this.stop();
		window.bashCount = 0;
		window.honkCount = 0;
		window.slapCount = 0;
		this.bash.addEventListener("click",bashClick);
		this.honk.addEventListener("click",honkClick);
		this.slap.addEventListener("click",slapClick);
		
		
		function bashClick(e){
		window.bashCount+=1;
		that.bash_count.text = window.bashCount;
		}
		
		function honkClick(e){
		window.honkCount+=1;
		that.honk_count.text = window.honkCount;
		}
		
		function slapClick(e){
		window.slapCount+=1;
		that.slap_count.text = window.slapCount;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// Layer 1
	this.honk_count = new cjs.Text("0", "30px Arial", "#00FF00");
	this.honk_count.lineHeight = 32;
	this.honk_count.lineWidth = 60;
	this.honk_count.setTransform(480.6,14.6);

	this.slap_count = new cjs.Text("0", "30px Arial", "#FF6600");
	this.slap_count.lineHeight = 32;
	this.slap_count.lineWidth = 60;
	this.slap_count.setTransform(764.8,14.6);

	this.bash_count = new cjs.Text("0", "30px Arial", "#FF0000");
	this.bash_count.lineHeight = 32;
	this.bash_count.lineWidth = 60;
	this.bash_count.setTransform(161.8,14.6);

	this.instance = new lib.slapped();
	this.instance.setTransform(598.4,14.6);

	this.instance_1 = new lib.honked();
	this.instance_1.setTransform(309.5,9.8);

	this.instance_2 = new lib.bashed();
	this.instance_2.setTransform(6,9.8);

	this.slap = new lib.Slap();
	this.slap.setTransform(564.2,198.1);
	new cjs.ButtonHelper(this.slap, 0, 1, 2);

	this.honk = new lib.Honk();
	this.honk.setTransform(291.9,351);
	new cjs.ButtonHelper(this.honk, 0, 1, 2);

	this.bash = new lib.Bash();
	this.bash.setTransform(28.3,134.5);
	new cjs.ButtonHelper(this.bash, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bash},{t:this.honk},{t:this.slap},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.bash_count},{t:this.slap_count},{t:this.honk_count}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,9.8,822.7,578.3);


// symbols:
(lib.bashed = function() {
	this.initialize(img.bashed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,38);


(lib.bonusbtn = function() {
	this.initialize(img.bonusbtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,236,237);


(lib.honked = function() {
	this.initialize(img.honked);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,38);


(lib.slapped = function() {
	this.initialize(img.slapped);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,38);


(lib.Slap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("slap");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF3300").ss(3,1,1).p("ALCLCQkkEmmeAAQmdAAklkmQklkkAAmeQAAmdElklQElklGdAAQGeAAEkElQEmElAAGdQAAGekmEkg");
	this.shape.setTransform(119,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).wait(1));

	// Layer 1
	this.text = new cjs.Text("SLAP!", "bold 50px Berlin Sans FB", "#B8B8B8");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 170;
	this.text.setTransform(118,89.3);
	this.text.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,12);

	this.instance = new lib.bonusbtn();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance},{t:this.text}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236,237);


(lib.Honk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("horn");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33FF99").ss(3,1,1).p("ALCLCQkkEmmeAAQmdAAklkmQklkkAAmeQAAmdElklQElklGdAAQGeAAEkElQEmElAAGdQAAGekmEkg");
	this.shape.setTransform(119,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).wait(1));

	// Layer 1
	this.text = new cjs.Text("HONK!", "bold 50px Berlin Sans FB", "#B8B8B8");
	this.text.lineHeight = 52;
	this.text.lineWidth = 170;
	this.text.setTransform(33,89.3);
	this.text.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,12);

	this.instance = new lib.bonusbtn();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance},{t:this.text}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236,237);


(lib.Bash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("punch");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FE6600").ss(3,1,1).p("ALCLCQkkEmmeAAQmdAAklkmQklkkAAmeQAAmdElklQElklGdAAQGeAAEkElQEmElAAGdQAAGekmEkg");
	this.shape.setTransform(119,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).wait(1));

	// Layer 1
	this.text = new cjs.Text("BASH!", "bold 50px Berlin Sans FB", "#B8B8B8");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.lineWidth = 170;
	this.text.setTransform(118,89.3);
	this.text.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,12);

	this.instance = new lib.bonusbtn();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).to({state:[{t:this.instance},{t:this.text}]},1).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,236,237);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;