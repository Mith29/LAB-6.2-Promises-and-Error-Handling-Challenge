// Function to simulate fetching a product catalog from a server
export function fetchProductCatalog() {
  return new Promise((resolve, reject) => {
    // Simulate network delay with setTimeout
    setTimeout(() => {
      if (Math.random() < 0.8) {
        // Resolve with a sample product catalog
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
          { id: 3, name: "Tablet", price: 500 },
        ]);
      } else {
        // Reject with a NetworkError if "network request" fails
        reject(new NetworkError("Failed to fetch product catalog"));
      }
    }, 1000);
  });
}
// Function to simulate fetching product reviews based on product ID
// Returns a Promise that resolves with reviews or rejects with NetworkError/DataError
export function fetchProductReviews(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(new DataError("Invalid product ID"));
        return;
      }

      if (Math.random() < 0.9) {
        // Resolve with reviews filtered by product ID
        resolve(
          [
            { productId: 1, rating: 5, content: "Great product!" },
            { productId: 1, rating: 3, content: "Not bad" },
            { productId: 2, rating: 4, content: "Worth the price" },
            { productId: 2, rating: 2, content: "Not good" },
            { productId: 3, rating: 5, content: "great deal" },
            { productId: 3, rating: 1, content: "Not worth the price" },
          ].filter((item) => item.productId === id),
        );
      } else {
        // Reject with a NetworkError if "network request" fails
        reject(
          new NetworkError(`Failed to fetch reviews for product ID ${id}`),
        );
      }
    }, 1500);
  });
}
// Function to simulate fetching a sales report
// Returns a Promise with sales data or rejects with a NetworkError
export function fetchSalesReport() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve({ totalSales: 123, unitsSold: 5, averagePrice: 100 });
      } else {
        reject(new NetworkError("Failed to fetch sales report"));
      }
    }, 1000);
  });
}
// Custom error class for network-related errors
export class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}
// Custom error class for invalid or bad data errors
export class DataError extends Error {
  constructor(message) {
    super(message);
    this.name = "DataError";
  }
}
