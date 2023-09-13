const chocolates = [
    { name: "Dairy Milk", price: 80 },
    { name: "Dark Chocolate", price: 45 },
    { name: "Frute And Nuts Chocolate", price: 50 },
    // Add more chocolate options as needed
];

const selectedChocolates = [];
let totalPrice = 0.00;

function updateSummary() {
    const selectedChocolatesList = document.getElementById("selectedChocolates");
    const totalPriceElement = document.getElementById("totalPrice");

    selectedChocolatesList.innerHTML = "";
    totalPrice = 0.00;

    for (const chocolate of selectedChocolates) {
        const listItem = document.createElement("li");
        listItem.textContent = `${chocolate.name} - Rs${chocolate.price.toFixed(2)}`;
        selectedChocolatesList.appendChild(listItem);
        totalPrice += chocolate.price;
    }

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function selectChocolate(index) {
    const chocolate = chocolates[index];
    if (!chocolate || selectedChocolates.length >= 8) {
        return;
    }

    selectedChocolates.push(chocolate);
    updateSummary();
}

window.onload = function () {
    const chocolatesContainer = document.getElementById("chocolates");

    for (let i = 0; i < chocolates.length; i++) {
        const chocolate = chocolates[i];
        const chocolateElement = document.createElement("div");
        chocolateElement.classList.add("chocolate");
        chocolateElement.textContent = `${chocolate.name} - Rs${chocolate.price.toFixed(2)}`;
        chocolateElement.addEventListener("click", () => selectChocolate(i));

        chocolatesContainer.appendChild(chocolateElement);
    }
};
