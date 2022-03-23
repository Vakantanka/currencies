const currencies = [
    {
        title: "US Dollar",
        sub: "$",
        text: "USD"
    },
    {
        title: "Euro",
        sub: "€",
        text: "EUR"
    },
    {
        title: "Chinese Yuan",
        sub: "¥",
        text: "CNY"
    },
    {
        title: "Thai Baht",
        sub: "฿",
        text: "THB"
    },
    {
        title: "British Pound Sterling",
        sub: "£",
        text: "GBP"
    },
    {
        title: "Ghanaian Cedi",
        sub: "₵",
        text: "GHS"
    },
    {
        title: "Japanese Yen",
        sub: "￥",
        text: "JPY"
    },
    {
        title: "Polish Zloty",
        sub: "zł",
        text: "PLN"
    }
]

function loadEvent() {
    console.log("Load completed.");
    document.getElementById("currencies").insertAdjacentHTML("beforeend", currencies.map((currency, index) => 
        `<div class="card">
            <div class="sub">${currency.sub}</div>
            <div class="title">${currency.title}</div>
            <div class="text">${currency.text}</div>
            <button>
                <span class="buttonText">Save</span>
                <span class="arrow material-icons">arrow_forward</span>
            </button>
        </div>`).join(''));
}

window.addEventListener("load", loadEvent);