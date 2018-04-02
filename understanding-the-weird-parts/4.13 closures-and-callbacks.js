// What is callback function?

// A function you give to another function, to be run when the
// other function is finished.
// You tell a function: 'Here, take this function, when you're done 
// working, call the function I just gave you.' So the function you
// call (i.e. invoke), 'calls back' by calling the function you gave 
// it when it finishes.


function tellMeWhenDone(callback) {
	console.log('I\'m done, now let\'s run the call back!');
	console.log('------');

	callback();
}

tellMeWhenDone(function() {
	console.log('I\'m the call back!');
});

// I'm done, now let's run the call back!
// ------
// I'm the call back!






// 国内面试题

// What's the output of the following code?

for (var i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i);
	}, 1000 * i)
}


// 开始输出5，再每隔1s输出一个5，一共5个5

// 因为scope chain，闭包只能取得包含函数变量中任何变量的最后一个值
// 两种方法可以让闭包的行为符合预期：

// 1. 用let声明i，创建block chain
for (let i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i);
	}, 1000 * i)
}

// 等价于：
for (var i = 0; i < 5; i++) {
	let j = i;
	setTimeout(function() {
		console.log(j);
	}, 1000 * j);
}
// 开始输出0，再每个1s依次输出1，2，3，4

// 2. 创建IIFE
for (var i = 0; i < 5; i++) {
	(function(i) {
		setTimeout(function() {
			console.log(i);
		}, 1000 * i)
	})(i);
}



////////////////////////////////////////////////////////////////////////


// ????

for (var i = 0; i < 5; i++) {
	setTimeout((function(i) {
		console.log(i);
	})(i), i * 1000);
}


// 立即输出0-4


// setTimeout(func|code, delay)
// setTimeout函数接受两个参数，func|code是你想要在delay毫秒之后执行的函数/代码
// 上段代码中给setTimeout()传递的第一个参数是'()()' IIFE，是个undefined
// 相当于setTimeout(undefined, ...);
// 又因为IIFE会立即执行，所以会立即输出0-4