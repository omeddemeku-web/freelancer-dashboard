const ctx = document.getElementById("incomeChart");

new Chart(ctx, {
    type: "line",

    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug"
        ],

        datasets: [{
            label: "Income",
            data: [
                900,
                1200,
                950,
                1800,
                1500,
                2200,
                2700,
                3240
            ],

            borderWidth: 3,
            tension: 0.4
        }]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
