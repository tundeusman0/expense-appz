import moment from "moment";

export default [{
    id: 1,
    description: "Gum",
    note: "this is a gum",
    amount: 67467,
    createdAt: 0
},
{
    id: 2,
    description: "Rent",
    note: "",
    amount: 1000,
    createdAt: moment(0).subtract(4, "days").valueOf()
},
{
    id: 3,
    description: "Credit card",
    note: "this is a for my gtb",
    amount: 60,
    createdAt: moment(0).add(4, "days").valueOf()
}]