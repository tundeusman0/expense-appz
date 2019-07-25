import database from "../firebase/firebase"

// add expense
export const addExpense = (expense) => (
    {
        type: "ADD_EXPENSE",
        expense
    }
);

//  start add expense 
export const startAddExpense = (expenseData) =>{
    return( dispatch ) => {
        const {
            description = "",
            note = "",
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        database.ref("expenses").push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}
// remove Expense
export const removeExpense = (id) => ({
    type: "REMOVE_EXPENSE",
    id
});

// edit expense
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
