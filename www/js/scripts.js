max = 30;
ne1 = "Equipo 1"
ne2 = "Equipo 2"

$(document).ready( function(){
	//pantalla 1
/*
	click en #inicio:
		#eq1 ---> #ne1 (ver nombre por defecto)
		#eq2 ---> #ne2 (ver nombre por defecto)
		POR DEFECTO: a 30 ---> #max
		borrar fosforos
		#p1 en 0
		#p2 en 0
		oculta pantalla1
		muestra pantalla2

	click en #a24:
		seteo el max en 24
	click en #a30:
		seteo el max en 30
*/

	$("#a24").on('click', fnSetear24);
	$("#a30").on('click', fnSetear30);
	$("#inicio").on('click', fnInicio);

	//pantalla 2
/*
	click en #s1:
		sumar 1 al equipo 1 HASTA llegar al max
		mostrar el valor en #p1
		mostrar imagenes del equipo 1 segun #p1

	click en #r1:
		resto 1 al equipo 1 HASTA llegar a 0
		mostrar el valor en #p1
		mostrar imagenes del equipo 1 segun #p1

	click en #fin
		limpiar eq1
		limpiar eq2
		selecciona a30 -> valor max = 30
		ocultar pantalla2
		mostrar pantalla1
*/
	$("#s1").on("click", function(){ fnSumar(1); })
	$("#s2").on("click", function(){ fnSumar(2); })
	$("#r1").on("click", function(){ fnRestar(1); })
	$("#r2").on("click", function(){ fnRestar(2); })
	$("#fin").on("click", fnFin )
});

// MIS FUNCIONES DE PANT 2
function fnSumar(nroEquipo) {
	valorActual = $("#p"+nroEquipo).text();
	valorActual = parseInt(valorActual);
	if (valorActual < max) {
		valorActual++;
		$("#p"+nroEquipo).text(valorActual);
		dibujarPalitos(nroEquipo);
	}
}

function fnRestar(nroEquipo) {
	valorActual = $("#p"+nroEquipo).text();
	valorActual = parseInt(valorActual);
	if (valorActual > 0) {
		valorActual--;
		$("#p"+nroEquipo).text(valorActual);
		dibujarPalitos(nroEquipo);
	}
}

function dibujarPalitos(nroEquipo) {
	// recupero el puntaje del equipo
	pad = parseInt($("#p"+nroEquipo).text())   // pad es Puntos A Dibujar
	// DIBUJAR
	for (i=1; i<=6; i++) {
		idImagen = "#p" + nroEquipo + i;
		// si se juega a 24. es la 3er imagen y tengo 2 o mas...
		if (max==24 && i==3 && pad >= 2) {
			$(idImagen).attr("src", "img/2.png");
			pad = pad - 2;
		} else {
			if (pad >= 5) {
				$(idImagen).attr("src", "img/5.png");
				pad = pad - 5;
			} else {
				// 0 1 2 3 4
				$(idImagen).attr("src", "img/"+pad+".png");
				pad = 0;
			}			
		}
	}
}

function fnFin() {
	//	limpiar eq1
	// $("#eq1").val('');
	//	limpiar eq2
	// $("#eq2").val('');
	//	selecciona a30 -> valor max = 30
	//OPCION 1: $("#a30").click();
	fnSetear30(); // opcion 2
	//	oculta pantalla2
	$("#pant2").removeClass("visible").addClass("oculto");
	//	muestra pantalla1
	$("#pant1").removeClass("oculto").addClass("visible");
}

// MIS FUNCIONES DE PANT 1
function fnInicio() {
	//	#eq1 ---> #ne1 (ver nombre por defecto)
	eq1 = $("#eq1").val();  $("#ne1").text(eq1);
	//	#eq2 ---> #ne2 (ver nombre por defecto)
	$("#ne2").html($("#eq2").val());
	//	POR DEFECTO: a 30 ---> #max
	$("#max").text("A "+max);
	//	borrar fosforos
	$(".img").attr("src","img/0.png");
	//	#p1 en 0 //	#p2 en 0
	$("#p1").text("0"); $("#p2").text("0");
	//	oculta pantalla1
	$("#pant1").removeClass("visible").addClass("oculto");
	//	muestra pantalla2
	$("#pant2").removeClass("oculto").addClass("visible");
}

function fnSetear24() {
	max = 24;
	$("#a30").removeClass("seleccionado");
	$("#a24").addClass("seleccionado");
}
function fnSetear30() {
	max = 30;
	$("#a24").removeClass("seleccionado");
	$("#a30").addClass("seleccionado");
}
