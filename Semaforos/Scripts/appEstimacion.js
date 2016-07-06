'use strict';
var totalObra = 0;
var totalPrevio = 0;
var total = 0;
        $(document).ready(bindValues());
            
        function decodeFormat(number) {
            return parseFloat(number.toString().replace(/,/g, ''));
        }
        function bindValues() {
            Number.prototype.format = function (n, x) {
                var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
                return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
            };
            totalObra = 0;
            totalPrevio = 0;
            total = 0;
            calcularTotal();
            $('.darsenaInt').change(function () {
            $('#txtTotalToqueInt').val((decodeFormat($('#txtPrecioToqueInt').val()) * decodeFormat($('#txtCantidadToqueInt').val())).format(0));
                calcularTotal();
            });
            $('.darsenaNac').change(function () {
                $('#txtTotalToqueNac').val((decodeFormat($('#txtPrecioToqueNac').val()) * decodeFormat($('#txtCantidadToqueNac').val())).format(0));
                calcularTotal();
            });
            $('.est').change(function () {
                $('#txtTotalEst').val((decodeFormat($('#txtPrecioEst').val()) * decodeFormat($('#txtCantidadEst').val())).format(0));
                calcularTotal();
            });
            $('.ypf').change(function () {
                $('#txtTotalYPF').val((decodeFormat($('#txtMensualYPF').val()) * 12).format(0));
                calcularTotal();
            });
            $('.loc').change(function () {
                $('#txtTotalLoc').val((decodeFormat($('#txtPrecioLoc').val()) * decodeFormat($('#txtCantidadLoc').val()) * 12).format(0));
                calcularTotal();
            });
            $('.esc').change(function () {
                $('#txtTotalEsc').val((decodeFormat($('#txtPrecioEsc').val()) * decodeFormat($('#txtCantidadEsc').val()) * 12).format(0));
                calcularTotal();
            });
            $('.bol').change(function () {
                $('#txtTotalBol').val((decodeFormat($('#txtPrecioBol').val()) * decodeFormat($('#txtCantidadBol').val()) * 12).format(0));
                calcularTotal();
            });
            $('.pers').change(function () {
                $('#txtTotalPers').val((decodeFormat($('#txtPrecioPers').val()) * decodeFormat($('#txtCantidadPers').val()) * 12).format(0));
                calcularTotal();
            });
            $('.limp').change(function () {
                $('#txtTotalLimp').val((decodeFormat($('#txtPrecioLimp').val()) * decodeFormat($('#txtCantidadLimp').val()) * 12).format(0));
                calcularTotal();
            });
            $('.seg').change(function () {
                $('#txtTotalSeg').val((decodeFormat($('#txtPrecioSeg').val()) * decodeFormat($('#txtCantidadSeg').val()) * 12).format(0));
                calcularTotal();
            });
            $('.ofi').change(function () {
                $('#txtTotalOfi').val((decodeFormat($('#txtPrecioOfi').val()) * decodeFormat($('#txtCantidadOfi').val()) * 12).format(0));
                calcularTotal();
            });
            $('.dep').change(function () {
                $('#txtTotalDep').val((decodeFormat($('#txtCantidadDep').val()) * parseFloat($('#txtPrecioDep').val()) * parseFloat($('#txtAprovechamientoDep').val()) / 100.0 * 12).format(0));
                calcularTotal();
            });
            $('.ingreso').change(function () {
                calcularTotal();
            });
            $('.egreso').change(function () {
                calcularTotal();
            });
            $('#cmbAfectacionDellepiane').change(function () {
                impactoDellepiane();
                calcularTotal();
            });
            $('#cmbAniosConcesion').change(function () {
                calcularTotal();
            });
            $('#txtCanon').change(function () {
                calcularTotal();
            });
            $('#txtGanancia').change(function () {
                calcularTotal();
            });
            

        }
        function impactoDellepiane() {
 
            var sinDellepiane = 1 - parseFloat($('#cmbAfectacionDellepiane').val()) / 100;
            var totalPartcialInt = Math.round(decodeFormat($('#txtCantidadToqueIntADellepiane').val()) * sinDellepiane).format(0).toString();
            var totalPartcialNac = Math.round(decodeFormat($('#txtCantidadToqueNacADellepiane').val()) * sinDellepiane).format(0).toString();
  
            $('#txtCantidadToqueInt').val(totalPartcialInt);
            $('#txtCantidadToqueNac').val(totalPartcialNac);

            $('#txtTotalToqueNac').val((decodeFormat($('#txtPrecioToqueNac').val()) * decodeFormat($('#txtCantidadToqueNac').val())).format(0));
            $('#txtTotalToqueInt').val((decodeFormat($('#txtPrecioToqueInt').val()) * decodeFormat($('#txtCantidadToqueInt').val())).format(0));

           
        }

        function calcularTotal() {

            var egresos = 0 ; 
            var egresosPrevios = 0 ; 
            
            var ingresos = 0 ;
            var ingresosPrevios = 0 ;

            $('.ingreso').each(function (i, elem) {
                ingresos += decodeFormat(elem.value);
            });

            $('.egreso').each(function (i, elem) {
                egresos += decodeFormat(elem.value);
            });
           
            total = ingresos - egresos ; 

            //Calculo Obra Total
            var disponibleAnual = total;
            disponibleAnual -= decodeFormat($('#txtCanon').val()) * 12;
            var tasa = parseFloat($('#txtGanancia').val())/100.0;
            var cantidadAnios = parseFloat($('#cmbAniosConcesion').val());
            totalObra = Math.round(disponibleAnual / tasa * (1 - Math.pow(1 + tasa, -cantidadAnios)));    
            $('#totalObra').text(totalObra.format(0));

            $('#total').text(total.format(0));
            $('#ingresos-total').text(ingresos.format(0));
            $('#egresos-total').text(egresos.format(0));

            pintarTotalInfo();
        }

function pintarTotalInfo() {

if (totalPrevio !== 0 )
    {
        
        var porcentage = (totalObra*100)/totalPrevio;

        if (totalObra > totalPrevio)
            {
                $('#total-info').html('<span class="glyphicon glyphicon-arrow-up">'+(porcentage - 100).toFixed(2)+'%</span>');
            }
        else
            {    $('#total-info').html('<span class="glyphicon glyphicon-arrow-down">'+(100 - porcentage).toFixed(2)+'%</span>');
            }

} else {
    totalPrevio = totalObra;
}
}

var ingresos = [] ;

function collectIngresos(){
    var ingresos_temp = $('#rubros-principales').find('.ingreso').parent().parent().parent();
    $(ingresos_temp).each(function(i,e){
        ingresos.push({
            "label" :  $($(e).children()[0]).children().html() ,
            "value" : $($($(e).children()[2]).children()[2]).find('.ingreso').val()
        });
    });
}


function collectEgresos(){

    var egresos_temp = $('#rubros-principales').find('.ingreso').parent().parent().parent();


}



function bakeData(){


//colectar ingresos

//sortear ingresos 
//seleccionar los 4 mayores
//sumar otros
//presentar

//colectar egresos
//sortear egresos
//seleccionar 4 mayores
//sumar otros
//presentar

}


function conv_number(expr, decplaces)

{ // This function is from David Goodman's Javascript Bible.

var str = "" + Math.round(eval(expr) * Math.pow(10,decplaces));

while (str.length <= decplaces) {

str = "0" + str;

}

var decpoint = str.length - decplaces;

return (str.substring(0,decpoint) + "." + str.substring(decpoint,str.length));

}

