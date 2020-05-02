function solve(meal_cost, tip_percent, tax_percent) {

    let meal = +(meal_cost).toFixed(1);
    let tip = +(meal * tip_percent/100).toFixed(1);
    let tax = +(meal * tax_percent/100).toFixed(1);

    let totalPrice = Math.round(meal + tip + tax);

    console.log(totalPrice);

    }
    
    solve(10.25, 17, 5);