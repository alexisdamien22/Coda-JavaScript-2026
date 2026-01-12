const sales = [
{ product: "Laptop", quantity: 2, unitPrice: 899, category: "Informatique" },
{ product: "Souris", quantity: 15, unitPrice: 25, category: "Accessoires" },
{ product: "Clavier", quantity: 8, unitPrice: 75, category: "Accessoires" },
{ product: "Écran", quantity: 3, unitPrice: 299, category: "Informatique" },
{ product: "Webcam", quantity: 0, unitPrice: 89, category: "Accessoires" },
{ product: "Casque", quantity: 12, unitPrice: 45, category: "Audio" }
];

sales = sales.map((sale)=>({sale, totalPrice: sale.unitPrice * sale.quantity}));
console.log(sales);