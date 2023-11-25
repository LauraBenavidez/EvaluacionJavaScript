// Espera a que la página se cargue completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {

    // Obtiene referencias a elementos clave del formulario y la información del pedido
    const orderForm = document.getElementById("order-form");
    const orderSummary = document.getElementById("order-summary");
    const totalPrice = document.getElementById("total-price");

    // Inicializa un contador para el precio total
    let total = 0;

    // Evita que el formulario se envíe automáticamente al hacer clic en "Add to Order"
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    // Cuando haces clic en "Add to Order"
    document.getElementById("add-to-order").addEventListener("click", function () {

        // Obtiene la información sobre medicamentos seleccionados
        const medicine = document.getElementById("select-medicine").value;
        const medicineQuantity = parseInt(document.getElementById("medicine-quantity").value);

        // Obtiene la información sobre productos de aseo seleccionados
        const toiletry = document.getElementById("select-toiletry").value;
        const toiletryQuantity = parseInt(document.getElementById("toiletry-quantity").value);

        // Inicializa precios de medicamentos y productos de aseo
        let medicinePrice = 0;
        let toiletryPrice = 0;

        // Asigna precios a medicamentos mediante un switch
        switch (medicine) {
            case "Aspirina":
                medicinePrice = 2500;
                break;
            // ... casos para otros medicamentos
            default:
                medicinePrice = 0;
        }

        // Asigna precios a productos de aseo mediante un switch
        switch (toiletry) {
            case "Pañales":
                toiletryPrice = 3500;
                break;
            // ... casos para otros productos de aseo
            default:
                toiletryPrice = 0;
        }

        // Calcula los costos parciales de medicamentos y productos de aseo
        const medicineSubtotal = medicinePrice * medicineQuantity;
        const toiletrySubtotal = toiletryPrice * toiletryQuantity;

        // Calcula el costo total del pedido
        const subtotal = medicineSubtotal + toiletrySubtotal;

        // Crea un nuevo elemento en el resumen del pedido
        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");
        orderItem.innerHTML = ` ${medicine} (x${medicineQuantity}), ${toiletry} (x${toiletryQuantity})`;

        // Agrega el nuevo elemento al resumen del pedido
        orderSummary.appendChild(orderItem);

        // Actualiza el precio total acumulado
        total += subtotal;
        totalPrice.textContent = total.toFixed();

        // Aquí puedes enviar la información del pedido a tu servidor o procesarla de la manera que desees
        console.log("Pedido:", { medicine, medicineQuantity, toiletry, toiletryQuantity, subtotal });
    });
});
