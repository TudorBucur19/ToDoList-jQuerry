/*$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
	

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("#first").text(todoText);
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});  */

//VANILLA JAVASCRIPT VERSION 

let input = document.querySelector('input');
let list = document.querySelector('ul');
let plus = document.querySelector('.fa-plus');

plus.addEventListener('click', function(event){
	input.classList.toggle('hidden');
})



input.addEventListener('keypress', function(event){
	if(event.keyCode === 13){
		let toDo = document.createElement('li');		
		toDo.innerHTML = "<span><i class='fa fa-trash'></i></span> " + input.value;		
		input.value = "";
		list.append(toDo);

		
		toDo.addEventListener('click', function(){
			toDo.classList.toggle('completed');
			});

	
		let trashCan = document.querySelector('span');
		trashCan.addEventListener('Click', function(event){
		toDo.remove(trashCan);
		event.stopPropagation();		
		});
		};
});



/*
let input = document.querySelector('input');
let toDo = document.createElement('li');
let list = document.querySelector('ul');


	input.addEventListener('keypress', function(event){
	if(event.keyCode === 13){		
		list.appendChild(toDo);
		toDo.innerHTML = "<span><i class='fa fa-trash'></i></span> " + input.value;
		input.value = "";
		};
	});






toDo.addEventListener('click', function(){
	toDo.classList.toggle('completed');
}); */