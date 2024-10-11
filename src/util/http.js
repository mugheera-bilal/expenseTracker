import axios from 'axios';

const BACKEND_URL = 'https://react-native-meta-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
  const id = response.data.name;
  return id
}

export async function fetchExpenses() { 
  const response = await axios.get(BACKEND_URL + '/expenses.json');

   const expenses = []

   console.log(response.data );
   
   for (const key in response.data) {
    const expenseObj = {
        id : key,
        itemName : response.data[key].itemName,
        date : response.data[key].date,
        price : response.data[key].price
    }
    expenses.push(expenseObj)
   }
   return expenses
}

export  function updateExpense (id , expenseData ) {
   return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData)

}

export  function deleteExpense (id) {
   return axios.delete(BACKEND_URL + `/expenses/${id}.json`)
    
}