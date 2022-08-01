const expect =require('chai').expect;
it('should add numbers correctly',function(){
	const num1=3;
	const num2=2;
	expect(num1+num2).to.equal(5);
})
it('should add numbers not correctly',function(){
	const num1=3;
	const num2=3;
	expect(num1+num2).not.to.equal(6);
})