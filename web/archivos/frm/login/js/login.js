function validar() {
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();

    if (nombre === null || nombre.length === 0) {
        alert("El usuario no debe quedar vacio");
        return false;
    } else {
        if (!/^([a-z A-Z])*$/.test(nombre)) {
            alert("El nombre solo debe contener letras");
            $("#nombre").val("");
            $("#nombre").focus();
            return false;
        } else {
            if (nombre !== "luis") {
                alert("El nombre es incorrecto");
                $("#nombre").val("");
                $("#nombre").focus();
                return false;
            } else {
                if (apellido === null || apellido.length === 0) {
                    alert("El apellido no debe quedar vacio");
                    return false;
                } else {
                    if (!/^([a-z A-Z])*$/.test(apellido)) {
                        alert("El apellido solo debe contener letras");
                        $("#apellido").val("");
                        $("#apellido").focus();
                        return false;
                    } else {
                        if (apellido !== "correa") {
                            alert("El apellido es incorrecto");
                            $("#apellido").val("");
                            $("#apellido").focus();
                            return false;
                        }
                    }
                }
            }

        }
    }


    }



