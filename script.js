const API_URL = "https://YOUR_SERVER/api/places"; // замените на ваш сервер

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const cafesList = document.getElementById("cafes");
    const restaurantsList = document.getElementById("restaurants");

    data.forEach(row => {
      const { name, address, type } = row;
      const li = document.createElement("li");
      li.textContent = `${name} — ${address}`;

      if (type.toLowerCase() === "cafe") {
        cafesList.appendChild(li);
      } else if (type.toLowerCase() === "restaurant") {
        restaurantsList.appendChild(li);
      }
    });
  })
  .catch(err => console.error("Ошибка загрузки:", err));
