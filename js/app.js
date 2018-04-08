function onClick(el) {
    if (el == 1) {
        window.location.href = "desarrolloWeb.html";
    }
    if (el == 2) {
        window.location.href = "desarrolloMovil.html";
    }
    if (el == 3) {
        window.location.href = "databaseSystem.html";
    }
    if (el == 4) {
        window.location.href = "techniqueService.html";
    }

}
window.addEventListener('mouseup', function (e) {
    var box = document.getElementById("mySidebar");
    if (e.target != box) {
        box.style.display = "none";
    }
});

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
$(function () {
    var div = $("#divcitoTop");
    var bar = $("#divcito2");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            div.addClass("w3-white");
            div.addClass("border");
            bar.removeClass("divcitoBar").addClass("divcitoBarBlack");
        } else {
            div.removeClass("w3-white");
            div.removeClass("border");
            bar.removeClass("divcitoBarBlack").addClass("divcitoBar");
        }
    });
});

function validarFormulario() {
    var nombre = document.getElementById("Name").value;
    var correo = document.getElementById("Email").value;
    var mensaje = document.getElementById("Message").value;
    var emailValues = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (nombre != "" && correo != "" && mensaje != "") {
        if (correo.match(emailValues)) {
            var parametros = {
                "Name": nombre,
                "Email": correo,
                "Message": mensaje

            };
            $.ajax({
                data: parametros,
                url: "Server/mail.php",
                type: "POST"

            }).done(function (response) {
                console.log(response);
                if (response == true) {
                    document.getElementById('id01').style.display = 'block';
                } else {
                    document.getElementById('id02').style.display = 'block';
                }

            });
        } else {
            document.getElementById('id04').style.display = 'block';
        }


    } else {
        document.getElementById('id03').style.display = 'block';
    }

}
