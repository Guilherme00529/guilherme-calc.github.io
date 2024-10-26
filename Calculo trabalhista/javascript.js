function calcular() {

    var vh = document.getElementById('vh').value;

    var th = document.getElementById('th').value;

    let od = document.getElementById('od').value;



    var sub = vh * th

    var inss = 0;

    if (sub <= 1320) {

        inss = sub * 0.075;

    }

    else if (sub > 1320 & sub <= 2571.29) {

        inss = sub * 0.09;

    }
    else if (sub > 2571.29 % sub <= 3856.94) {

        inss = sub * 0.12;


    }

    else if (sub >= 3856.94 & sub < 7507.49) {

        inss = sub * 0.14;

    }
    alert(inss);

    var iprf = 0;


    if (sub <= 2112) {

        irpf = (sub * 0.0) - od;

    }

    else if (sub > 2112 & sub <= 2826.65) {

        irpf = (sub * 0.075) - od;

    }
    else if (sub > 2826.65 % sub <= 3751.06) {

        irpf = (sub * 0.015) - od;


    }

    else if (sub >= 3751.06 & sub < 4664.68) {

        irpf = (sub * 0.225) - od;

    }

    else if (sub > 4664.69) {

        irpf = (sub * 0.275) - od;

    }

    var vale = document.getElementsByName('vale')

    if (vale = 'sim') {
        vale.value = (sub * 0.06);
    }
    else {

        vale = '-';


    }

    alert('Salario bruto \n' + sub + 'Desconto Inss \n ' + inss + 'Desconto Iprf \n' + iprf + 'Outras Deducões \n' + od + 'Vale transporte \n' + vale);
}
