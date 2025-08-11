function getLocalDateStr(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Load or initialize item list
let itemsList = JSON.parse(localStorage.getItem("itemsList") || '["Hours Slept", "Breaks Taken", "Example"]');

const datePicker = document.getElementById("datePicker");
const itemsDiv = document.getElementById("items");
const monthTotalsDiv = document.getElementById("monthTotals");
const yearTotalsDiv = document.getElementById("yearTotals");

// Load today's date
const today = getLocalDateStr();
datePicker.value = today;
datePicker.max = today; // prevents selecting future dates

datePicker.addEventListener("change", loadItems);

function loadItems() {
    const date = datePicker.value;
    const data = JSON.parse(localStorage.getItem("dailyData") || "{}");
    const dayData = data[date] || {};

    // Daily items
    itemsDiv.innerHTML = "";
    itemsList.forEach(item => {
        const count = dayData[item] || 0;
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
        <span>${item}: ${count}</span>
        <div>
            <button style="background-color: green; color: white; border: black;" onclick="addTally('${item}')">+</button>
            <button style="background-color: red; color: white; border: black;" onclick="removeTally('${item}')">−</button>
            <button onclick="deleteItem('${item}')">🗑</button>
        </div>
        `;
        itemsDiv.appendChild(div);
    });

    // Monthly totals
    const monthTotals = getTotalsForRange(date, "month", data);
    monthTotalsDiv.innerHTML = createTotalsTable(monthTotals);

    // Yearly totals
    const yearTotals = getTotalsForRange(date, "year", data);
    yearTotalsDiv.innerHTML = createTotalsTable(yearTotals);

    // Update streak & days tracked
    updateStats(data);
}

function addTally(item) {
    updateTally(item, 1);
}

function removeTally(item) {
    updateTally(item, -1);
}

function updateTally(item, change) {
    const date = datePicker.value;
    const data = JSON.parse(localStorage.getItem("dailyData") || "{}");
    if (!data[date]) data[date] = {};
    if (!data[date][item]) data[date][item] = 0;
    data[date][item] = Math.max(0, data[date][item] + change);
    localStorage.setItem("dailyData", JSON.stringify(data));
    loadItems();
}

function changeDate(days) {
    let currentDate = new Date(datePicker.value);
    currentDate.setDate(currentDate.getDate() + days);
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    if (currentDate > today) {
        currentDate = today;
    }
    datePicker.value = currentDate.toISOString().split('T')[0];
    loadItems();
}

function getTotalsForRange(dateStr, range, data) {
const totals = {};
itemsList.forEach(item => totals[item] = 0);

const date = new Date(dateStr);
const year = date.getFullYear();
const month = date.getMonth();

for (let d in data) {
    const dDate = new Date(d);
    if (range === "month" && dDate.getFullYear() === year && dDate.getMonth() === month) {
    itemsList.forEach(item => totals[item] += (data[d][item] || 0));
    }
    if (range === "year" && dDate.getFullYear() === year) {
    itemsList.forEach(item => totals[item] += (data[d][item] || 0));
    }
}
    return totals;
}

function createTotalsTable(totals) {
    let html = "<table><tr></tr>";
    for (let item in totals) {
        html += `<tr><td>${item}</td><td>${totals[item]}</td></tr>`;
    }
    html += "</table>";
    return html;
}

function addNewItem() {
    const newItemName = document.getElementById("newItemName").value.trim();
    if (!newItemName || itemsList.includes(newItemName)) return;
    itemsList.push(newItemName);
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
    document.getElementById("newItemName").value = "";
    loadItems();
}

function deleteItem(item) {
    if (!confirm(`Delete "${item}" and all its tallies?`)) return;
    itemsList = itemsList.filter(i => i !== item);
    localStorage.setItem("itemsList", JSON.stringify(itemsList));

    let data = JSON.parse(localStorage.getItem("dailyData") || "{}");
    for (let date in data) {
        if (data[date][item] !== undefined) {
        delete data[date][item];
        }
    }
    localStorage.setItem("dailyData", JSON.stringify(data));
    loadItems();
}

function updateStats(data) {
    const allDates = Object.keys(data)
        .filter(date => Object.values(data[date]).some(v => v > 0))
        .sort();
    const daysTracked = allDates.length;

    let streak = 0;
    let currentDate = new Date();
    let dayStr = getLocalDateStr(currentDate);

    while (allDates.includes(dayStr)) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
        dayStr = getLocalDateStr(currentDate);
    }

    document.getElementById("daysTracked").textContent = daysTracked;
    document.getElementById("currentStreak").textContent = streak;
}

loadItems();

//Alert Closing
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    this.style.opacity = "0";
    this.style.pointerEvents = "none";
    this.style.display = "none";
  }
}
document.getElementById("newItemName").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addNewItem()
    }
});

const reloadtoday = new Date().toDateString();
if (localStorage.getItem('lastLoadDate') !== reloadtoday) {
  localStorage.setItem('lastLoadDate', reloadtoday);
  location.reload(true);
}