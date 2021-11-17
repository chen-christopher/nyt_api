const app = {
  initialize: function () {
    app.getData();
  },
  getData: function () {
    console.log("GETTING DATA");
    const nyURl =
      "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=";
    let nyKey = "zofoKJ5CztJjD8YU4MAA88he8HrwnFso";
    const finalURL = nyURl + nyKey;
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        app.appendData(data);
      })
      .catch((error) => console.log(error));
  },
  appendData: function (data) {
    let content = document.querySelector(".booksDiv");
    console.log("here!");
    for (let i = 0; i < data.results.length; i++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("bookDiv");
      let newHeader = document.createElement("h3");
      newHeader.innerText = i + 1 + ". " + data.results[i].title;
      let newText = document.createElement("p");
      newText.innerText = data.results[i].description;
      let authorText = document.createElement("p");
      authorText.innerText = "Author: " + data.results[i].author;
      newDiv.append(newHeader, newText, authorText);

      content.append(newDiv);
    }
  },
};
