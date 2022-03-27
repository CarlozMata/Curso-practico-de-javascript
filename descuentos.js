//const precioOriginal = 120;
//const descuento = 18;

//const coupons = ["carlos", "mata", "carlozmata"]
const coupons = [
    {
        name: "carlos", discount: 15,
    },
    {
        name: "mata", discount: 30,
    },
    {
        name: "carlozmata", discount: 50,
    },
];


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}
//console.log({
//    precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento
//});

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}
    /*
    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
     } else if (couponValue === "carlos") {
        descuento = 15;
     } else if (couponValue === "mata") {
        descuento = 30;
     } else if (couponValue === "carlozmata") {
        descuento = 25;
     }

    switch(couponValue) {
      case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
      break;
      case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
      break;
      case coupons[2]: // "es_un_secreto"
        descuento = 25;
      break;
    }
    */