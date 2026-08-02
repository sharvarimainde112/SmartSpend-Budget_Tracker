// ============================================================
//  SPENDWISE — app.js
//  Your JS playground! The HTML and CSS are done.
//  All logic goes here.
//
//  The 3 features you need to build:
//
//  FEATURE 1 — Add & delete transactions
//    • Read values from the form inputs
//    • Push a transaction object into the `transactions` array
//    • Call renderTransactions() to update the UI
//    • Delete a transaction by its id when the × button is clicked
//
//  FEATURE 2 — Live balance summary
//    • After every add/delete, loop through `transactions`
//    • Sum up income and expense totals separately
//    • Update the three display elements: balance, income, expenses
//
//  FEATURE 3 — Category filter
//    • Track which filter is active (default: "all")
//    • When a filter button is clicked, set the active filter
//    • In renderTransactions(), only show items that match the filter
// ============================================================


// ── STATE ──────────────────────────────────────────────────
// This is your app's "database" for the session.
// Each transaction will be an object like:
// { id: 1, description: "Groceries", amount: 250, type: "expense", category: "food" }

let transactions = [];
let activeFilter = "all";  // tracks which category filter is selected


// ── DOM REFERENCES ─────────────────────────────────────────
// Grab the elements you'll be reading from / writing to.

const descriptionInput     = document.getElementById("txDescription");
const amountInput          = document.getElementById("txAmount");
const categorySelect       = document.getElementById("txCategory");
const addBtn               = document.getElementById("addTransactionBtn");
const transactionList      = document.getElementById("transactionList");
const emptyState           = document.getElementById("emptyState");
const balanceDisplay       = document.getElementById("balanceDisplay");
const incomeDisplay        = document.getElementById("incomeDisplay");
const expenseDisplay       = document.getElementById("expenseDisplay");
const toast                = document.getElementById("toast");
const typeBtns             = document.querySelectorAll(".type-btn");
const filterBtns           = document.querySelectorAll(".filter-btn");

// Track which type (income/expense) is selected via the toggle buttons
let selectedType = "expense";   // default


// ── FEATURE 1: TYPE TOGGLE ──────────────────────────────────
// When the user clicks Income or Expense, update `selectedType`
// and visually mark the active button.

typeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // TODO:
    // 1. Remove the "active" class from all typeBtns
    // 2. Add the "active" class to the clicked btn
    // 3. Set selectedType = btn.dataset.type
  });
});


// ── FEATURE 1: ADD TRANSACTION ──────────────────────────────
// Fires when the user clicks "+ Add Transaction"

addBtn.addEventListener("click", () => {
  // TODO:
  // 1. Read description from descriptionInput.value  (trim whitespace)
  // 2. Read amount from amountInput.value            (parse as float)
  // 3. Validate — if empty or amount <= 0, show an error toast and return
  // 4. Build a transaction object:
  //      { id: Date.now(), description, amount, type: selectedType, category: categorySelect.value }
  // 5. Push it into the transactions array
  // 6. Clear the input fields (set their .value = "")
  // 7. Call renderTransactions()
  // 8. Call updateSummary()
  // 9. Show a success toast ("Transaction added!")
});


// ── FEATURE 1: DELETE TRANSACTION ──────────────────────────
// Called when the × button on a transaction is clicked.
// The id is passed in from the renderTransactions() function below.

function deleteTransaction(id) {
  // TODO:
  // 1. Filter out the transaction with the matching id from `transactions`
  //    Hint: transactions = transactions.filter(tx => tx.id !== id)
  // 2. Call renderTransactions()
  // 3. Call updateSummary()
}


// ── FEATURE 3: CATEGORY FILTER ─────────────────────────────
// When a filter button is clicked, update activeFilter and re-render.

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // TODO:
    // 1. Remove "active" class from all filterBtns
    // 2. Add "active" class to the clicked btn
    // 3. Set activeFilter = btn.dataset.filter
    // 4. Call renderTransactions()
  });
});


// ── RENDER TRANSACTIONS ─────────────────────────────────────
// Reads from `transactions` and `activeFilter`, builds the list HTML.

function renderTransactions() {
  // TODO:
  // 1. Filter transactions by activeFilter
  //    If activeFilter === "all", show everything
  //    Otherwise, only show transactions where tx.category === activeFilter
  //
  // 2. If the filtered list is empty, show emptyState, hide transactionList — and return
  //    Otherwise, hide emptyState, show transactionList
  //
  // 3. For each transaction, build a <li> element like this:
  //
  //    <li class="tx-item">
  //      <div class="tx-category-badge">[emoji for category]</div>
  //      <div class="tx-info">
  //        <p class="tx-description">[description]</p>
  //        <p class="tx-meta">[category] · [type]</p>
  //      </div>
  //      <span class="tx-amount [income or expense]">[+ or -]₹[amount]</span>
  //      <button class="tx-delete" onclick="deleteTransaction([id])">×</button>
  //    </li>
  //
  // 4. Set transactionList.innerHTML to the built HTML
  //
  // CATEGORY EMOJI MAP (helper):
  //   const emojiMap = {
  //     food: "🍜", transport: "🚌", shopping: "🛍️",
  //     health: "💊", entertainment: "🎮", salary: "💼", other: "📦"
  //   };
}


// ── FEATURE 2: UPDATE SUMMARY ───────────────────────────────
// Recalculates and updates the balance, income, and expense displays.

function updateSummary() {
  // TODO:
  // 1. Loop through ALL transactions (not the filtered ones — balance is always total)
  // 2. Separate income and expense totals:
  //    let totalIncome  = 0;
  //    let totalExpense = 0;
  //    transactions.forEach(tx => {
  //      if (tx.type === "income")  totalIncome  += tx.amount;
  //      if (tx.type === "expense") totalExpense += tx.amount;
  //    });
  //
  // 3. Calculate balance = totalIncome - totalExpense
  //
  // 4. Update the DOM:
  //    balanceDisplay.textContent  = "₹" + balance.toFixed(2)
  //    incomeDisplay.textContent   = "₹" + totalIncome.toFixed(2)
  //    expenseDisplay.textContent  = "₹" + totalExpense.toFixed(2)
  //
  // BONUS — animate the balance number:
  //    balanceDisplay.classList.add("bump")
  //    setTimeout(() => balanceDisplay.classList.remove("bump"), 200)
}


// ── TOAST HELPER ────────────────────────────────────────────
// Shows a brief notification at the bottom of the form.
// type is "success" or "error"

function showToast(message, type = "success") {
  // TODO:
  // 1. Set toast.textContent = message
  // 2. Remove any existing "success"/"error" class from toast
  // 3. Add the class: toast.classList.add(type)
  // 4. Add the class "show" to make it visible (CSS handles the animation)
  // 5. After 2500ms, remove the "show" class to hide it
  //    Hint: use setTimeout(() => { toast.classList.remove("show") }, 2500)
}


// ── INIT ────────────────────────────────────────────────────
// Run on page load to set up the initial empty UI state.
renderTransactions();
updateSummary();