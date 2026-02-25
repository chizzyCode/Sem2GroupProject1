function makeChart(canvasId, config) {
  const el = document.getElementById(canvasId);
  if (!el) return;
  new Chart(el, config);
}

document.addEventListener("DOMContentLoaded", () => {
  // --- Real counts from your Excel analysis ---
  const genderLabels = ["Male", "Female"];
  const genderCounts = [2652, 1248];

  const sizeLabels = ["S", "M", "L", "XL"];
  const sizeCounts = [663, 1755, 1053, 429];

  const paymentLabels = ["PayPal", "Credit Card", "Cash", "Debit Card", "Venmo", "Bank Transfer"];
  const paymentCounts = [677, 671, 670, 636, 634, 612];

  const subscriptionLabels = ["Non-subscriber (0)", "Subscriber (1)"];
  const subscriptionCounts = [2847, 1053];

  const purchaseBinLabels = ["20-29","30-39","40-49","50-59","60-69","70-79","80-89","90-99","100-109"];
  const purchaseBinCounts = [503, 511, 452, 471, 472, 467, 468, 520, 36];

  const ageBinLabels = ["18-24","25-34","35-44","45-54","55-64","65-70"];
  const ageBinCounts = [486, 755, 729, 752, 751, 427];

  // --- Charts (only render if canvas exists on page) ---
  makeChart("genderChart", {
    type: "bar",
    data: {
      labels: genderLabels,
      datasets: [{ label: "Customers", data: genderCounts }]
    },
    options: { responsive: true }
  });

  makeChart("paymentChart", {
    type: "bar",
    data: {
      labels: paymentLabels,
      datasets: [{ label: "Count", data: paymentCounts }]
    },
    options: { responsive: true }
  });

  makeChart("sizeChart", {
    type: "bar",
    data: {
      labels: sizeLabels,
      datasets: [{ label: "Count", data: sizeCounts }]
    },
    options: { responsive: true }
  });

  makeChart("subscriptionChart", {
    type: "doughnut",
    data: {
      labels: subscriptionLabels,
      datasets: [{ label: "Customers", data: subscriptionCounts }]
    },
    options: { responsive: true }
  });

  makeChart("purchaseDistChart", {
    type: "line",
    data: {
      labels: purchaseBinLabels,
      datasets: [{ label: "Number of purchases", data: purchaseBinCounts, tension: 0.25 }]
    },
    options: { responsive: true }
  });

  makeChart("ageDistChart", {
    type: "line",
    data: {
      labels: ageBinLabels,
      datasets: [{ label: "Customers", data: ageBinCounts, tension: 0.25 }]
    },
    options: { responsive: true }
  });
});