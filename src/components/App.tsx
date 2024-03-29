import React, { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList'
import ExpenseFilter from './expense-tracker/ExpenseFilter';

function App() {
  const [selectedCategory, setSelecetedCategory] = useState('');
    const [expenses, setExpenses] = useState([
        {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
        {id: 2, description: 'bbb', amount: 10, category: 'Utilities'},
        {id: 3, description: 'ccc', amount: 10, category: 'Utilities'},
        {id: 4, description: 'ddd', amount: 10, category: 'Utilities'},
    ]);

    const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;

  return (
    <div>
      <div className="mb-3">
      <ExpenseFilter onSelectCategory={category => selectedCategory(category)}/>
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
    </div>
  )
}

export default App
