const orders = [
    { id: 1, customer: "Alice", amount: 150, status: "livrée", products: 3 },
    { id: 2, customer: "Bob", amount: 85, status: "en cours", products: 2 },
    { id: 3, customer: "Charlie", amount: 200, status: "livrée", products: 5 },
    { id: 4, customer: "Diana", amount: 45, status: "annulée", products: 1 },
    { id: 5, customer: "Alice", amount: 120, status: "livrée", products: 2 }
];

const serviceAmount = orders.map((order)=>({order, totalAmount: order.amount * 1.10}));
console.log(serviceAmount);

const delivered = orders.filter((order) => order.status === "livrée");
console.log(delivered);

const total = orders.reduce((acc, order)=>{return acc + order.amount}, 0);
console.log(total);

const third = orders.find((order)=>order.id === 3);
console.log(third);

const ordered = orders.sort((a,b) => b.amount - a.amount);
console.log(ordered);