import uuid from "uuid";

// add expense
export const addExpense = ({
    description = "",
    createdAt = 0,
    note = "",
    amount = 0,
} = {}) => (
        {
            type: "ADD_EXPENSE",
            expense: {
                id: uuid(),
                description,
                createdAt,
                note,
                amount
            }
        }
    );

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
