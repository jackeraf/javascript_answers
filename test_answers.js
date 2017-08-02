//1st Question:


function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

getMaxOfArray([9, 2, 8,4,5,786,7])


//2nd Question:


function debouncer(onFunctionFinished, wait){
	
  
  var debounceTimer;
  window.addEventListener("mousemove", (event)=>{

        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(()=>{
          onFunctionFinished(event)
        }, wait)

  })
}

debouncer(function (event){
    alert("finished")
}, 1500)


// 3rd Question:


var modulo = (function(){
	var obj = {}
	var message;

	obj.setMessage = function(messageParam){
		message = messageParam
	}

	obj.getMessage = function(){
		return message
	}
	obj.alertMessage = function(){
		alert(message)
	}

	return obj

})()

// Ejemplo de como ejecutar el setMessage en el navegador Chrome:

// window.modulo.setMessage("jarek")




// 4th Question:

var modulo = (function(){
	var obj = {}
	var message;

	obj.setMessage = function(messageParam){
		message = messageParam
	}

	obj.getMessage = function(){
		return message
	}
	obj.alertMessage = function(){
		alert(message)
	}
	obj.createButton = function(){
		var create = $('body').html($('<div ><button id="BtnPrueba">Click me</button></div>'));
		$(create).click(function(){
		    alert("The button was clicked.");
		});
	}

	return obj

})()

// run: window.modulo.createButton()


