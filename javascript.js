const loanForm = document.getElementById("loanForm");
const results = document.getElementById("results");

loanForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const amount = Number(document.getElementById("loanAmount").value);
    const rate = Number(document.getElementById("interestRate").value);
    const months = Number(document.getElementById("duration").value);

    if (amount <= 0 || rate < 0 || months <= 0) {
        alert("Please enter valid loan details.");
        return;
    }

    const interest = amount * (rate / 100) * (months / 12);
    const totalRepayment = amount + interest;
    const monthlyPayment = totalRepayment / months;

    document.getElementById("customer").textContent =
        "Customer: " + name;

    document.getElementById("principal").textContent =
        "Loan Amount: $" + amount.toFixed(2);

    document.getElementById("interest").textContent =
        "Interest: $" + interest.toFixed(2);

    document.getElementById("total").textContent =
        "Total Repayment: $" + totalRepayment.toFixed(2);

    document.getElementById("monthly").textContent =
        "Monthly Payment: $" + monthlyPayment.toFixed(2);

    results.style.display = "block";
});