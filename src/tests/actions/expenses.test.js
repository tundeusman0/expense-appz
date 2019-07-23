import { addExpense, removeExpense, editExpense } from "./../../actions/expenses";

describe("action expenses", ()=>{
    const id = 10990;
    const expense = {
        description: "this should do",
        createdAt: 3673676,
        note: "one year rent",
        amount: 133,
    }

    test("should add an expense",()=>{
        expect(addExpense(expense)).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                ...expense,
                id: expect.any(String)
            }
        })
    });

    test("should add an expense with default values",()=>{
        expect(addExpense()).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                description: "",
                createdAt: 0,
                note: "",
                amount: 0,
                id: expect.any(String)
            }
        })
    })

    test("should remove an expense", () => {
        expect(removeExpense(id)).toEqual({
            type: "REMOVE_EXPENSE",
            id
        })
    })

    test("should edit an expense", () => {
        expect(editExpense(id,expense)).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates:{
                ...expense
            }
        })
    })
})