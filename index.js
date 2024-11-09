console.log("Hello World!");

const dateElement = document.getElementById('date');
console.log(dateElement);

// Get Current Date
let currentDate = new Date();
let dataOptions = { year: "numeric", month: "long", day: "numeric" };

// Set formatted date in the HTML element
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dataOptions);

// URL for fetching data
const url = "https://fakestoreapi.com/products";
const options = {};

// Client Request
fetch(url, options)
  .then(res => res.json())
  .then(data => {
    console.log(data);

    // Adds titles per objects to the "titles" storage
    let titles = data.map(object =>{
        // console.log(object);
        // console.log(object.title);
        return object.title
    });

    console.log(titles);

    // Ratings
    // Ensure rating exists, else set 0
    let ratings = data.map(object => {
        return object.rating ? object.rating.rate: 0;
    });

    console.log(ratings);

    // // Example product array (fixed syntax)
    // let products = [
    //   {
    //     title: "Nike Shoes",
    //     price: 550,
    //     description: "Nike Shoes",
    //     category: "Shoes",
    //     image: null,
    //     rating: {
    //       rate: 5,
    //       count: 100
    //     }
    //   }
    // ];

    // console.log(products);
    // console.log(products[0].title);
    // console.log(products[0].description);
    // console.log(products[0].price);
    // console.log(products[0].rating.rate);

       // Get the canvas element for Chart.js
       const myChart = document.getElementById("myChart");

       // Chart.js constructor (use `Chart` instead of `CharacterData`)
       let barChart = new Chart(myChart, {
           type: 'bar',
           data: {
               labels: titles,
               datasets: [{
                   label: 'Ratings of Products',
                   data: ratings,
                   borderWidth: 2,
                   backgroundColor: [
                       'rgba(255, 99, 132, 0.2)',
                       'rgba(255, 159, 64, 0.2)',
                       'rgba(255, 205, 86, 0.2)',
                       'rgba(75, 192, 192, 0.2)',
                       'rgba(54, 162, 235, 0.2)',
                       'rgba(153, 102, 255, 0.2)',
                       'rgba(201, 203, 207, 0.2)'
                   ],
                   borderColor: [
                       'rgb(255, 99, 132)',
                       'rgb(255, 159, 64)',
                       'rgb(255, 205, 86)',
                       'rgb(75, 192, 192)',
                       'rgb(54, 162, 235)',
                       'rgb(153, 102, 255)',
                       'rgb(201, 203, 207)'
                   ],
                   hoverBackgroundColor: [
                       'rgb(255, 99, 132)',
                       'rgb(255, 159, 64)',
                       'rgb(255, 205, 86)',
                       'rgb(75, 192, 192)',
                       'rgb(54, 162, 235)',
                       'rgb(153, 102, 255)',
                       'rgb(201, 203, 207)'
                   ]
               }]
           },
           options: {
               indexAxis: 'y', // Set chart to horizontal bar chart
               scales: {
                   y: {
                       beginAtZero: true
                   }
               }
           }
       });
   
     })

     .catch(error => {
       console.error("Error fetching data:", error);
     });