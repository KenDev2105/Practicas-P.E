let transacciones = [
    { id: 1, tipo: "deposito", monto: 1000, fecha: "2024-01-15", categoria: "salario" },
    { id: 2, tipo: "retiro", monto: 200, fecha: "2024-01-16", categoria: "compras" },
    { id: 3, tipo: "deposito", monto: 500, fecha: "2024-01-17", categoria: "freelance" }
];


function procesarTransacciones(...nuevasTransacciones) { 
    nuevasTransacciones.forEach(trans => {
        if (!trans.id || !trans.tipo || !trans.monto || !trans.fecha) {
            console.log("Transacción inválida: falta información");
        }
    });

    transacciones = [...transacciones, ...nuevasTransacciones]; 

    console.log("Transacciones actualizadas:", transacciones);
}

function calcularBalance() {
    return transacciones.reduce((balance, tr) => {
        if (tr.tipo === "deposito") return balance + tr.monto;
        if (tr.tipo === "retiro") return balance - tr.monto;
        return balance;
    }, 0);
}

function analizarGastos(periodo = "mes") {

    const gastos = transacciones.filter(tran => tran.tipo === "retiro");

    return gastos.reduce((resumen, tx) => {
        resumen[tx.categoria] = (resumen[tx.categoria] || 0) + tx.monto;
        return resumen;
    }, {});
}


function buscarTransacciones(criterios = {}) {
    const { tipo, categoria, fecha } = criterios;

    return transacciones.filter(transfer => {
        return (!tipo || transfer.tipo === tipo) &&
            (!categoria || transfer.categoria === categoria) &&
            (!fecha || transfer.fecha === fecha);
    });
}

procesarTransacciones(
    { id: 4, tipo: "retiro", monto: 150, fecha: "2024-01-20", categoria: "transporte" },
    { id: 5, tipo: "deposito", monto: 1200, fecha: "2024-01-22", categoria: "salario" }
);

console.log("Balance actual:", calcularBalance());

console.log("Gastos por categoría:", analizarGastos());

console.log("Buscar solo depósitos:", buscarTransacciones({ categoria: "transporte" }));
