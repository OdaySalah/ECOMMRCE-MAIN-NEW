let btnCloseSide = document.getElementById("btn-close");
let sideBar = document.getElementById("side-bar");
let btnOpenSide = document.getElementById("open-side");

btnOpenSide.onclick = () => {
  sideBar.classList.add("active");
};
btnCloseSide.onclick = () => {
  sideBar.classList.remove("active");
};
/*
const products = [
  {
    title: "Product 1",
    price: "$100",
    img: "Funnnimages/Im17.jpg",
    description:
      "هذا هو الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر وأكبر عن المنتجهذا هو الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر وأكبر عن المنتجهذا هو الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر وأكبر عن المنتجهذا هو الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر وأكبر عن المنتجهذا هو الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر وأكبر عن المنتج."
  },
  {
    title: "Product 2",
    price: "$200",
    img: "Funnnimages/Im17.jpg",
    description:
      "هذا هو الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر وأكبر عن المنتجهذا هو الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر وأكبر عن المنتجهذا هو الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر وأكبر عن المنتجهذا هو الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر كثر وأكبر عن المنتج."
  },
  {
    title: "Product 3",
    price: "$300",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 4",
    price: "$400",
    img: "Funnnimages/Im11.jpg",
    description: ""
  },
  {
    title: "Product 5",
    price: "56",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 6",
    price: "$600",
    img: "Funnnimages/Im8.jpg",
    description: ""
  },
  {
    title: "Product 7",
    price: "$700",
    img: "Funnnimages/Im19.jpg",
    description: ""
  },
  {
    title: "Product 8",
    price: "$800",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 9",
    price: "$900",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 10",
    price: "$1000",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 11",
    price: "$1100",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 12",
    price: "$1200",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 13",
    price: "$1300",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 14",
    price: "$1400",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 15",
    price: "$1500",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 16",
    price: "$1600",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 17",
    price: "$1700",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 18",
    price: "$1800",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },

  {
    title: "Product 19",
    price: "$800",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 20",
    price: "$900",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 21",
    price: "$1000",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 22",
    price: "$1100",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 23",
    price: "$1200",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 24",
    price: "$1300",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 25",
    price: "$1400",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 26",
    price: "$1500",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 27",
    price: "$1600",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 28",
    price: "$1700",
    img: "Funnnimages/Im17.jpg",
    description: ""
  }
];

const products_2 = [
  {
    title: "Product 1",
    price: "$100",
    img: "Funnnimages/Im17.jpg",
    description:
      " اعثر على كل ما تحتاجه لتحويل منزلك إلى مساحة ذكية ومتصلة. يقدم متجر Z لدينا مجموعة واسعة من الأجهزة لتناسب اعثر على كل ما تحتاجه لتحويل منزلك إلى مساحة ذكية ومتصلة. يقدم متجر Z لدينا مجموعة واسعة من الأجهزة لتناسب احتياجاتكاعثر على كل ما تحتاجه لتحويل منزلك إلى مساحة ذكية ومتصلة. يقدم متجر Z لدينا مجموعة واسعة من الأجهزة لتناسب احتياجاتكاحتياجاتك"
  },
  {
    title: "Product 2",
    price: "$200",
    img: "Funnnimages/Im17.jpg",
    description:
      "هذا هو الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر وأكبر عن المنتجهذا هو الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر وأكبر عن المنتجهذا هو الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر وأكبر عن المنتجهذا هو اعثر على كل ما تحتاجه لتحويل منزلك إلى مساحة ذكية ومتصلة. يقدم متجر Z لدينا مجموعة واسعة من الأجهزة لتناسب احتياجاتكاعثر على كل ما تحتاجه لتحويل منزلك إلى مساحة ذكية ومتصلة. يقدم متجر Z لدينا مجموعة واسعة من الأجهزة لتناسب احتياجاتكاعثر على كل ما تحتاجه لتحويل منزلك إلى مساحة ذكية ومتصلة. يقدم متجر Z لدينا مجموعة واسعة من الأجهزة لتناسب احتياجاتكالوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر كثر وأكبر عن المنتج."
  },
  {
    title: "Product 3",
    price: "$300",
    img: "Funnnimages/Im17.jpg",
    description:
      "اعثر على كل ما تحتاجه لتحويل منزلك إلى مساحة ذكية ومتصلة. يقدم متجر Z لدينا مجموعة واسعة من الأجهزة لتناسب احتياجاتكاعثر على كل ما تحتاجه لتحويل منزلك إلى مساحة ذكية ومتصلة. يقدم متجر Z لدينا مجموعة واسعة من الأجهزة لتناسب احتياجاتكاعثر على كل ما تحتاجه لتحويل منزلك إلى مساحة ذكية ومتصلة. يقدم متجر Z لدينا مجموعة واسعة من الأجهزة لتناسب احتياجاتك"
  },
  {
    title: "Product 4",
    price: "$400",
    img: "Funnnimages/Im11.jpg",
    description: ""
  },
  {
    title: "Product 5",
    price: "$500",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 6",
    price: "$600",
    img: "Funnnimages/Im8.jpg",
    description: ""
  },
  {
    title: "Product 7",
    price: "$700",
    img: "Funnnimages/Im19.jpg",
    description: ""
  },
  {
    title: "Product 8",
    price: "$800",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 9",
    price: "$900",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 10",
    price: "$1000",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 11",
    price: "$1100",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 12",
    price: "$1200",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 13",
    price: "$1300",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 14",
    price: "$1400",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 15",
    price: "$1500",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 16",
    price: "$1600",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 17",
    price: "$1700",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 18",
    price: "$1800",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },

  {
    title: "Product 19",
    price: "$800",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 20",
    price: "$900",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 21",
    price: "$1000",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 22",
    price: "$1100",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 23",
    price: "$1200",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 24",
    price: "$1300",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 25",
    price: "$1400",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 26",
    price: "$1500",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 27",
    price: "$1600",
    img: "Funnnimages/Im17.jpg",
    description: ""
  },
  {
    title: "Product 28",
    price: "$1700",
    img: "Funnnimages/Im17.jpg",
    description: ""
  }
];

// Pagination Variables
let currentPage = 1;
const itemsPerPage = 16;
const totalPages = Math.ceil(products.length / itemsPerPage);

// Function to display cards based on page number
function displayCards(page) {
  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  const cardsToDisplay = products.slice(start, end);

  // Clear existing cards
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  // Add new cards
  cardsToDisplay.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("col-sm-6", "col-md-6", "col-lg-3", "mb-4");

    card.innerHTML = `
    <div class="card-content">
      <img src="${product.img}" alt="Product Image" >
      <h5 class="mt-2">${product.title}</h5>
      <div class="price"data>${product.price}</div>
      <p
                    class="description" data-full="هذا هوراغتفتاسقفاسفاسفلسقلثقلثقلثقلقثقلثقلثقلقلثقلثضثاغنهملانات الوصف الكامل للمنتج 1، ويحتوي على تفاصيل أكثر وأكبر عن المنتج.">
                   ${product.description}
  
                  </p>
      <span class="discount">34%</span>
      <div class="icons-overlay"id="uo">
        <ul class="product-action">
          <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
          <li><a href="#"><i class="fa-solid fa-cart-arrow-down"></i></a></li>
          <li><a href="#"><i class="fa-solid fa-print"></i></a></li>
        </ul>
      </div </ul>
                    </div>
  
  
  `;
    cardContainer.appendChild(card);
  });
}*/
