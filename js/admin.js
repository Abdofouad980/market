const deleteProduct=(btn)=>{
	// console.log('clicked')
	const prodId=btn.parentNode.querySelector('[name=productId]').value
	const csrf = btn.parentNode.querySelector('[name=_csrf]').value;
	const productElement =btn.closest('article');
	fetch('/admin/product/'+prodId,{
		method:'DELETE',
		headers:{
			'csrf-token':csrf
		}
	})
	.then(result=>{
		return result.json();
		//here cryptic body so what happend here 
	})
	.then(data=>{
		console.log(data)
		//here after remove from database want to remove from dom
		productElement.parentNode.removeChild(productElement);//to remove from any browser
	})
	.catch(err=>{
		console.log(err)
	})
}