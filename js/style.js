let cakes = [
  {
    name: "Strawberry Cake",
    update: "Last updated 3 mins ago",
    keterangan:
      "Cake yang dibuat dengan cream yang sangat enak dan dibalut dengan strawberry, blueberry",
    img:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1870&q=80",
  },
  {
    name: "Chocolate Cake",
    update: "Last updated 6 mins ago",
    keterangan:
      "Dibuat dengan Chocolate khusus dari italy tentunya untuk rasa jangan ditanya lagi",
    img:
      "https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
  },
  {
    name: "Biskuit Cake",
    update: "Last updated 9 mins ago",
    keterangan: "Balutan Biskuit tentunya menambah rasa cake",
    img:
      "https://images.unsplash.com/photo-1562777717-dc6984f65a63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Blueberry Cake",
    update: "Last updated 12 mins ago",
    keterangan:
      "Blueberry cake sangat cocok buat kamu yang ingin diet tapi ingin merasakan cake",
    img:
      "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "Brown Cake",
    update: "Last updated 15 mins ago",
    keterangan: "Taburan gula aren menjadikan cita rasa khusus pada cake",
    img:
      "https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80",
  },
  {
    name: "Purple Cake",
    update: "Last updated 18 mins ago",
    keterangan: "Buat Kamu yang bosan dengan cake yang itu itu aja",
    img:
      "https://images.unsplash.com/photo-1559553156-2e97137af16f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80",
  },
];

// Function Cake Cards

function cakeCards(cake) {
  return `
  <div class="col-4 mt-3">
    <div class="card-deck">
      <div class="card">
        <img
          class="card-img-top"
          src="${cake.img};"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">${cake.name}</h5>
          <p class="card-text">${cake.keterangan}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">${cake.update}</small>
        </div>
      </div>
    </div>
    </div>
  `;
}

document.getElementsByClassName("row")[0].innerHTML = `${cakes
  .map(cakeCards)
  .join("")}`;
