# 📘 API Documentation - nexodevfakeapi

This API provides demo data for developers building frontend apps.

---

## 📦 Products

### GET `/api/products`

Fetch all products with filters.

#### Query Parameters:
| Name      | Type    | Description                                      |
|-----------|---------|--------------------------------------------------|
| category  | string  | Filter by category (e.g., `mobile`)              |
| minPrice  | number  | Minimum price                                    |
| maxPrice  | number  | Maximum price                                    |
| search    | string  | Search by product name                           |
| inStock   | boolean | Filter by availability (`true` or `false`)       |
| sort      | string  | Sort by `price` or `rating`                      |

#### Example:
`GET /api/products?category=mobile&minPrice=500&sort=price`


### GET `/api/products/:id`

Fetch a single product by ID.

---

## 👤 Users

### GET `/api/users`

Fetch users with filters.

#### Query Parameters:
| Name      | Type    | Description                                     |
|-----------|---------|-------------------------------------------------|
| search    | string  | Search name or username                         |
| location  | string  | Filter by location                              |
| sort      | string  | Sort by `name` or `username`                    |
| limit     | number  | Limit number of results                         |

#### Example:
`GET /api/users?search=ankit&location=India&limit=5`

---

## 📝 Posts

### GET `/api/posts`

Fetch posts with filters.

#### Query Parameters:
| Name      | Type    | Description                                      |
|-----------|---------|--------------------------------------------------|
| search    | string  | Search by title or content                       |
| author    | string  | Filter by author (name)                          |
| tags      | string  | Comma-separated tags (e.g., `react,api`)         |
| sort      | string  | Sort by `likes` or `recent`                      |
| limit     | number  | Limit number of results                          |

#### Example:
`GET /api/posts?tags=javascript,node&sort=likes&limit=10`

### GET `/api/posts/:id`

Fetch a post by its ID.

---

## 🛠 Setup

- Base URL: `http://localhost:5000/api`
- Content-Type: `application/json`
