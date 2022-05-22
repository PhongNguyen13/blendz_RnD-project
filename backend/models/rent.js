class Rent {
    constructor(id, number, TotalPrice, orderID, StartDate, EndDate) {
        this.id = id;
        this.number = number;
        this.TotalPrice = TotalPrice;
        this.orderID = orderID;
        this.StartDate= StartDate;
        this.EndDate = EndDate;
    }
}

module.exports = Rent; 