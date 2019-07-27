import database from "../firebase/firebase";


// add expense
export const addExpense = (expense) => (
    {
        type: "ADD_EXPENSE",
        expense
    }
);

//  start add expense 
export const startAddExpense = (expenseData = {}) =>{
    return( dispatch, getState ) => {
        const uid = getState().auth.uid;
        const {
            description = "",
            note = "",
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
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

// SET_EXPENSES
export const setExpenses = (expense) =>({
    type: "SET_EXPENSE",
    expense
})

// start set expenses
export const startSetExpenses = () =>{
    return(dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once("value").then((snapshot)=>{
            const expenses = [];
            snapshot.forEach(childSnapShot=>{
                expenses.push({
                    id: childSnapShot.key,
                    ...childSnapShot.val()
                });
            });
            dispatch(setExpenses(expenses))
        });
    }
}

// start remove expense
export const startRemoveExpense = (id) => {
    return( dispatch, getState )=>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense(id))
        })
    }
}

// start edit expense
export const startEditExpense = (id, updates) => {
    return ( dispatch, getState ) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        })
    }
}
