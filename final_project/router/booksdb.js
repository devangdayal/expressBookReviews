// let books = {
//       1: {"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {} },
//       2: {"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} },
//       3: {"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} },
//       4: {"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} },
//       5: {"author": "Unknown","title": "The Book Of Job", "reviews": {} },
//       6: {"author": "Unknown","title": "One Thousand and One Nights", "reviews": {} },
//       7: {"author": "Unknown","title": "Nj\u00e1l's Saga", "reviews": {} },
//       8: {"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} },
//       9: {"author": "Honor\u00e9 de Balzac","title": "Le P\u00e8re Goriot", "reviews": {} },
//       10: {"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} }
// }

// module.exports=books;
let books = {
    1: {
      "author": "Chinua Achebe",
      "title": "Things Fall Apart",
      "reviews": {
        1: {
          "user": "John Doe",
          "rating": 5,
          "comment": "A classic that provides deep insights into African culture."
        },
        2: {
          "user": "Jane Smith",
          "rating": 4,
          "comment": "Compelling story with well-developed characters."
        }
      }
    },
    2: {
      "author": "Hans Christian Andersen",
      "title": "Fairy tales",
      "reviews": {
        1: {
          "user": "Alice Johnson",
          "rating": 5,
          "comment": "Timeless and enchanting tales for all ages."
        },
        2: {
          "user": "Bob Williams",
          "rating": 3,
          "comment": "Some stories are a bit dark, but overall enjoyable."
        }
      }
    },
    // ... (similar structure for other books)
  };
  
  module.exports = books;
  