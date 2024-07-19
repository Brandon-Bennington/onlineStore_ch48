
const categories = ["Bakery","Beverages","Fruits", "Meat"]

const data = [
  {
    "title": "Banana",
    "price": 1.00,
    "category": "fruits",
    "image": "banana.png",
    "_id": "1"
  },
  {
    "title": "Bread",
    "price": 2.50,
    "category": "bakery",
    "image": "bread.png",
    "_id": "2"
  },
  {
    "title": "Burger",
    "price": 5.00,
    "category": "meats",
    "image": "burger.png",
    "_id": "3"
  },
  {
    "title": "Carrot",
    "price": 0.75,
    "category": "vegetables",
    "image": "carrot.png",
    "_id": "4"
  },
  {
    "title": "Hotdog",
    "price": 3.00,
    "category": "meats",
    "image": "hotdog.png",
    "_id": "5"
  },
  {
    "title": "Lettuce",
    "price": 1.20,
    "category": "vegetables",
    "image": "lettuce.png",
    "_id": "6"
  },
  {
    "title": "Mango",
    "price": 1.50,
    "category": "fruits",
    "image": "mango.png",
    "_id": "7"
  },
  {
    "title": "Milk",
    "price": 1.00,
    "category": "drinks",
    "image": "milk.png",
    "_id": "8"
  },
  {
    "title": "Orange",
    "price": 1.00,
    "category": "fruits",
    "image": "orange.png",
    "_id": "9"
  },
  {
    "title": "Pear",
    "price": 1.00,
    "category": "fruits",
    "image": "pear.png",
    "_id": "10"
  },
  {
    "title": "Strawberry",
    "price": 1.00,
    "category": "fruits",
    "image": "strawberry.png",
    "_id": "11"
  }
];

class DataService {
    getProducts() {
        return data; 


        //todo: call the server and get products 
    }

    getCategories(){
        return categories; 
        //todo: call the server 

    }

}

export default new DataService(); 