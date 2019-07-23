import moment from "moment"; 
import selectExpenses from "./../../selectors/expenses";
import expenses from "./../fixtures/expenses"


const date = undefined

describe("select expenses", ()=>{
    test("should filter by text value",()=>{
        expect(selectExpenses(expenses,{
            text:"e",sortBy:"date",startDate:date,endDate:date
        })).toEqual([ expenses[2], expenses[1] ]);
    });

    test("should filter by startDate", () => {
        expect(selectExpenses(expenses, {
            text: "", sortBy: "date", startDate: moment(0), endDate: date
        })).toEqual([expenses[2], expenses[0]]);
    });

    test("should filter by endDate", () => {
        // expect(selectExpenses(expenses, {
        //     text: "", sortBy: "date", startDate: date, 
        //     endDate: moment(0).add(4, "days").valueOf()
        // }))
        // .toEqual([ expenses[0], expenses[1]]);
    });

    test("should sort by date", () => {
        expect(selectExpenses(expenses, {
            text: "", sortBy: "date", startDate: date, endDate: date
        })).toEqual([expenses[2], expenses[0], expenses[1]]);
    });

    test("should sort by amount", () => {
        expect(selectExpenses(expenses, {
            text: "", sortBy: "amount", startDate: date, endDate: date
        })).toEqual([...expenses]);
    });
})