const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],

    getBalance() {
        return this.balance;
    },

    getDiscount() {
        return this.discount;
    },

    setDiscount(value) {
        this.discount = value;
    },

    getOrders() {
        return this.orders;
    },

    addOrder(cost, order) {
        this.balance -= cost - cost * this.discount;
        this.orders.push(order);
    },
};



customer.setDiscount(0.15);
console.log("t1-1:", customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log("t1-2:", customer.getBalance()); // 19750
console.log("t1-3:", customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
