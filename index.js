const showMenu = document.getElementById("show-menu");
const navbar = document.getElementById("navbar");
const closeNavbar = document.getElementById("close-nav");

const closeNavbarFunction = () => {
    navbar.style.transform = "translateX(-110%)";
}
const openNavbarFunction = () => {
    navbar.style.transform = "translateX(0%)";
}

closeNavbar.addEventListener("click", closeNavbarFunction);
showMenu.addEventListener("click", openNavbarFunction);

//
const myItem = [
    {
        id: 1,
        name: "hoodie",
        image: "https://i.pinimg.com/564x/38/8b/93/388b93596791670efb5171c5eae31b95.jpg",
        price: 12,
    },
    {
        id: 2,
        name: "dress",
        image: "https://i.pinimg.com/564x/3b/39/ff/3b39ffb8189a4833a841b9917b516154.jpg",
        price: 15,
    },
    {
        id: 3,
        name: "shoes",
        image: "https://i.pinimg.com/564x/45/72/bf/4572bff667ed71bd8646970effdab78b.jpg",
        price: 20,
    },
    {
        id: 4,
        name: "laptop",
        image: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 999,
    },
    {
        id: 5,
        name: "fender",
        image: "https://images.unsplash.com/photo-1580745294190-1626b58bf7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 300,
    },
    {
        id: 6,
        name: "book",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        price: 30,
    },
    {
        id: 7,
        name: "snack",
        image: "https://plus.unsplash.com/premium_photo-1669687014825-61818cd95f8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 5,
    },
    {
        id: 8,
        name: "coke",
        image: "https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 0.75,
    },
    {
        id: 9,
        name: "gummy",
        image: "https://images.unsplash.com/photo-1601493700625-9185417898cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
        price: 1.5,
    },
    {
        id: 10,
        name: "phone",
        image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 1000,
    },
    {
        id: 11,
        name: "tablet",
        image: "https://images.unsplash.com/photo-1557825835-b4527f242af7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 500,
    },
    {
        id: 12,
        name: "pen",
        image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80",
        price: 0.25,
    },
    {
        id: 13,
        name: "backpack",
        image: "https://images.unsplash.com/photo-1577733975197-3b950ca5cabe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        price: 12,
    },
    {
        id: 14,
        name: "keyboard",
        image: "https://images.unsplash.com/photo-1632597327016-6119d0efd7a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 30,
    },
    {
        id: 15,
        name: "short",
        image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 10,
    },
    {
        id: 16,
        name: "glasses",
        image: "https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        price: 70,
    },
    {
        id: 17,
        name: "glove",
        image: "https://images.unsplash.com/photo-1584819762556-68601d7f3a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 1,
    },
    {
        id: 18,
        name: "pizza",
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80",
        price: 20,
    },
    {
        id: 19,
        name: "pasta",
        image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 5,
    },
    {
        id: 20,
        name: "bread",
        image: "https://images.unsplash.com/photo-1567042661848-7161ce446f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        price: 10,
    },

];

const container = document.getElementById("container");
const sortExpensive = document.getElementById("sort-exp");
const sortCheap = document.getElementById("sort-che");
const allProduct = document.getElementById("all-pro");
const searchBtn = document.getElementById("search");
const item = document.getElementById("item");
const visit = document.getElementById("visit");
const home = document.getElementById("home");

visit.addEventListener("click", () => {
    home.style.display = "none";
    input.style.display = "block";
    searchProductItem();
})

const allProductItem = () => {
    return (
        container.innerHTML = myItem.map((x) => {
            return `
            <div class="person">
                    <img src=${x.image}>
                    <div class="infors">
                        <h1>${x.name}</h1>
                        <p>$${x.price}</p>
                        <p>skfjkd</p>
                    </div>
                </div>
            `
        })
    )
}

const sortExpensiveFunction = () => {
    myItem.sort((b, a) => a.price - b.price);
    allProductItem();
    closeNavbarFunction();
    searchBtn.style.display = "none";
}
const sortCheapFunction = () => {
    myItem.sort((b, a) => b.price - a.price);
    allProductItem();
    closeNavbarFunction();
    searchBtn.style.display = "none";
    
}

const searchProductItem = () => {
    item.innerHTML = myItem.map((x) => {
        return `
        <div class="person">
                    <img src=${x.image}>
                    <div class="infors">
                        <h1>${x.name}</h1>
                        <p>$${x.price}</p>
                        <p>skfjkd</p>
                    </div>
                </div>
        `
    })
    closeNavbarFunction();
    input.style.display = "block";

}

allProduct.addEventListener("click", () => {
    allProductItem();
    closeNavbarFunction();
    searchBtn.style.display = "none";
});
sortExpensive.addEventListener("click", sortExpensiveFunction);
sortCheap.addEventListener("click", sortCheapFunction);








