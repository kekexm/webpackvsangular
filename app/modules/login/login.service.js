loginService.$inject = ['commonService'];
export default function loginService(cs){
	this.method1 = function(){
		return cs.get();
	}
	this.method2 = function(){
		return cs.post()
	}
}