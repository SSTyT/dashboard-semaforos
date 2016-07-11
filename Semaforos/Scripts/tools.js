var tabla = [] ; 
function getValues(row){
	var values = []; 

	 $(row).children().each(function(i,e){
	 	
	 	values.push($(e).find('input').val());
	 });

	 return $(values) ;
}

function getIneerHTML(row){
	var values = []; 

	 $(row).children().each(function(i,e){
	 	
	 	values.push($(e).html());
	 });

	 return values ;
}

function 	insertFila(names,row){

	var temp = {} ; 

	getValues(row).each(function (i,e){

			temp[names[i]] = e;

	}); 

	tabla.push(temp);

}

function parse(){
	  var arreglo =$('#tblItems').find('tr');
	  
	  var fieldNames = getIneerHTML(arreglo[0]) ;

	 
	  console.log(fieldNames)

	 arreglo.each(function(i,e){

	 	if (i > 0){
	 			insertFila(fieldNames,e);
	 	}
	 		});
	 	
	  //console.log(tabla);


	  console.log(JSON.stringify(tabla));

}


parse();