document.addEventListener("DOMContentLoaded", function () {
    const categoryFilter = document.getElementById("categoryFilter");
    const carList = document.getElementById("car-list");

    // ფილტრის ფუნქცია
    function filterCars() {
        const selectedCategory = categoryFilter.value.toLowerCase(); // აირჩიე კატეგორია
        const cars = carList.getElementsByClassName("car"); // მიიღეთ ყველა მანქანა

        // გადამოწმება ყველა მანქანაზე
        Array.from(cars).forEach(car => {
            const carCategory = car.querySelector("p").textContent.toLowerCase(); // კითხვის კატეგორია

            // თუ შეეფერება არჩევანს, აჩვენე მანქანა, სხვა შემთხვევაში დამალე
            if (selectedCategory === "all" || carCategory.includes(selectedCategory)) {
                car.style.display = "block"; // აჩვენე
            } else {
                car.style.display = "none"; // დამალე
            }
        });
    }

    // მოსმენა შერჩევის ცვლილებაზე
    categoryFilter.addEventListener("change", filterCars);

    // თავდაპირველად რომ ყველაფერი ნორმალურად ჩატვირთოს
    filterCars();
});
