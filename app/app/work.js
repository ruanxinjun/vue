var love = require('./love.json');
document.write(love.name+'---'+love.pwd);

var sum  = (a,b)=>a+b;

var sum2 = function(a,b){
	return a+b;
}

alert(sum(1,2));