//Buscar el producto de acuerdo al nombre
$("#btnBuscar").click(function (e) {
    e.preventDefault();
    //Referenciar el contenedor
    var productList = $("#productList");
    //Limpiar el contenedor
    productList.html("");
    //get data
    var json = {"data": [
            {"market": "Wong", "nombre": "Aceite Primor 1Lt", "precio": "6.5"},
            {"market": "Metro", "nombre": "Aceite Capri 1Lt", "precio": "6.3"},
            {"market": "Metro", "nombre": "Aceite Metro 1Lt", "precio": "6.1"}
        ]};
    //Obtener el numero de registros
    var dataLength = json.data.length;
    //Crear la lista de productos
    var ulProductos = $("<ul class='list-group'></ul>");
    for (i = dataLength - 1; i >= 0; i--) {
        var item = json.data[i];
        var descripcion = "<a class='action badge' href='#' title='Agregar al carrito de compras'><span class='glyphicon glyphicon-plus'></span></a><span class='badge'>";
        descripcion = descripcion.concat(item.precio, "</span>", "<input type='numeric' value='0' class='form-control' />", item.nombre);
        $("<li></li>", {
            "html": descripcion,
            "class": 'list-group-item'
        }).appendTo(ulProductos);
    }
    //Agregar la lista al contenedor (div#productList)
    productList.append(ulProductos);

    //Agregar eventos a los items creados
    agregarEventos();
    return false;
});

function agregarEventos() {
//Remover de product list y moverlo a shopping list 
    $("ul > li > a.action").click(function (e) {
        e.preventDefault();
        //Seleccionar el item li del anchor clickado
        var li = $(this).parent();
        //Obtener el padre contentedor
        var container = li.parent().parent();
        console.log(container.attr("id"));
        if (container.attr("id") === "productList") {
            //Cambiar el icono y eventos del item agregado
            $(".action > span", li).attr("class", "glyphicon glyphicon-minus");
            //Cambiar texto de ayuda
            $(".action", li).attr("title", "Quitar del carrito de compras");
            //Agregar li a la lista del carrito
            $("#shoppingList > ul").append(li);
        } else {
            //Cambiar el icono y eventos del item agregado
            $(".action > span", li).attr("class", "glyphicon glyphicon-plus");
            //Cambiar texto de ayuda
            $(".action", li).attr("title", "Agregar al carrito de compras");
            $("#productList > ul").append(li);
        }

        return false;
    });
}

$("#btnCancelar").click(function (e) {
    e.preventDefault();
    $("#shoppingList > ul").html("");
    return false;
});