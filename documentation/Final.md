# Marketplace Technical Foundation - "Haketo"

### Frontend Requirements:
1. **User-Friendly Interface for Browsing Products**:
   - Implement intuitive navigation and search features.
   - Categorize products for easy browsing.
   - Allow product filtering and sorting based on user preferences (e.g., price, popularity, ratings).
   - Use a clean and visually appealing layout with high-quality product images.

2. **Responsive Design for Mobile and Desktop Users**:
   - Ensure the UI adapts seamlessly to different screen sizes using responsive design techniques like CSS Grid or Flexbox.
   - Optimize images and content for faster loading times on mobile devices.

3. **Essential Pages**:
   - **Home Page**: Display featured products, categories, and promotions.
   - **Product Listing Page**: Show product thumbnails, basic details, and filtering options.
   - **Product Details Page**: Provide detailed descriptions, images, sizes, and reviews.
   - **Cart Page**: Allow users to view items in the cart, adjust quantities, and proceed to checkout.
   - **Checkout Page**: Collect user details, shipping address, and payment information.
   - **Order Confirmation Page**: Confirm the order with details like shipping, payment, and expected delivery.

### Sanity CMS as Backend:
1. **Sanity CMS for Managing Product Data, Customer Details, and Order Records**:
   - Use Sanity CMS to store and retrieve product details (title, description, price, images).
   - Manage customer details such as account info, order history, and preferences.
   - Store order information, including item details, shipping address, and payment status.
   - Ensure proper user authentication and access control to secure data.

2. **Designing Schemas in Sanity**:
   - Create schemas for products, customers, and orders.
   - Define necessary relationships between product categories, reviews, and inventory.
   - Utilize the flexibility of Sanity to accommodate future features like user reviews or discount codes.

### Third-Party APIs:
1. **Shipment Tracking API**:
   - Integrate a third-party API to track the shipment status of customer orders.
   - Ensure real-time updates on the order’s location, expected delivery time, and potential delays.

2. **Payment Gateway API**:
   - Integrate a payment processing API (e.g., Stripe) for secure payment transactions.
   - Ensure the frontend handles payment forms securely and can process payments successfully.

3. **Other Required Backend Services**:
   - Integrate APIs for services like customer support, notifications (email or SMS), or fraud detection.
   - Ensure APIs are scalable to accommodate traffic spikes and support business growth.

4. **API Data Handling**:
   - Ensure all third-party APIs provide data that aligns with frontend requirements (e.g., payment confirmation, shipment tracking).
   - Handle data validation, error handling, and user feedback for a smooth user experience.

### **Key Workflows:**

1. **User Registration**:
   - **Flow**: 
     1. User visits the frontend (Next.js).
     2. User signs up by providing necessary details.
     3. Registration details are stored in **Sanity CMS**.
     4. A confirmation email is sent to the user.
   - **Components Involved**: Frontend (Next.js) ↔ Sanity CMS ↔ Email Service (for confirmation)

2. **Product Browsing**:
   - **Flow**:
     1. User views product categories on the homepage.
     2. The frontend makes a request to the **Product Data API** (powered by Sanity CMS).
     3. The API responds with the product data (e.g., images, descriptions, prices, etc.), which is displayed on the frontend.
   - **Components Involved**: Frontend (Next.js) ↔ Sanity CMS ↔ Product Data API (Sanity)

3. **Order Placement**:
   - **Flow**:
     1. User adds products to their cart.
     2. User proceeds to checkout.
     3. Order details (items, quantities, shipping info) are sent to **Sanity CMS**.
     4. Sanity stores the order data for future reference.
     5. User is redirected to the payment gateway for transaction processing.
   - **Components Involved**: Frontend (Next.js) ↔ Sanity CMS ↔ Payment Gateway API ↔ Order Data API

4. **Shipment Tracking**:
   - **Flow**:
     1. Once the order is processed, the **Third-Party API** (shipment tracking) is called.
     2. The API fetches the real-time shipment status (e.g., in transit, delivered).
     3. The frontend fetches and displays this information to the user.
   - **Components Involved**: Frontend (Next.js) ↔ Third-Party Shipment Tracking API ↔ User Device

5. **Payment Processing**:
   - **Flow**:
     1. The user enters payment details on the frontend.
     2. The frontend sends the payment data to the **Payment Gateway API** for processing.
     3. Upon successful payment, the confirmation is sent back to the frontend, and **Sanity CMS** records the payment and order status.
   - **Components Involved**: Frontend (Next.js) ↔ Payment Gateway API ↔ Sanity CMS

### **System Interaction Summary:**

- **Frontend (Next.js)**: Handles user interactions, product display, cart management, and payment processing.
- **Sanity CMS**: Manages product data, user data, and order records, acting as a backend for content and order management.
- **Third-Party APIs**: Provide external services such as shipment tracking and payment processing.
- **Product Data API**: Powered by Sanity CMS, this API provides product information to the frontend for browsing and selection.
- **Payment Gateway**: Securely handles transaction processing, allowing users to complete their purchases.

### **Data Flow in the System**:

1. **Product Browsing**: Frontend → Sanity CMS → Product Data API → Frontend (User sees products)
2. **Order Placement**: Frontend → Sanity CMS → Frontend (User confirms order) → Payment Gateway → Payment Confirmation
3. **Shipment Tracking**: Frontend → Shipment Tracking API → Frontend (User sees shipment status)

This architecture ensures that each component is responsible for specific tasks, and data flows smoothly between the frontend, backend (Sanity CMS), and third-party services (shipment tracking and payment gateways). By clearly defining these interactions, you can better plan the integration process and anticipate how different components will function together.

### **API Endpoints**

#### **1. Product Management**
- **Endpoint Name**: `/products`  
  - **Method**: GET  
  - **Description**: Fetch all available products from Sanity CMS.  
  - **Response**:  
    ```json
    [
      {
        "id": 1,
        "name": "Product A",
        "price": 100,
        "stock": 50,
        "image": "https://example.com/product-a.jpg"
      },
      {
        "id": 2,
        "name": "Product B",
        "price": 200,
        "stock": 30,
        "image": "https://example.com/product-b.jpg"
      }
    ]
    ```

- **Endpoint Name**: `/product/:id`  
  - **Method**: GET  
  - **Description**: Fetch details of a specific product by its ID.  
  - **Response**:  
    ```json
    {
      "id": 1,
      "name": "Product A",
      "description": "High-quality product A",
      "price": 100,
      "stock": 50,
      "images": ["https://example.com/product-a1.jpg", "https://example.com/product-a2.jpg"],
      "categories": ["Electronics", "Accessories"]
    }
    ```

---

#### **2. Order Management**
- **Endpoint Name**: `/orders`  
  - **Method**: POST  
  - **Description**: Create a new order in Sanity CMS.  
  - **Payload**:  
    ```json
    {
      "customerId": 123,
      "products": [
        { "id": 1, "quantity": 2 },
        { "id": 2, "quantity": 1 }
      ],
      "paymentStatus": "Paid",
      "shippingAddress": {
        "line1": "123 Main St",
        "city": "New York",
        "state": "NY",
        "zip": "10001"
      }
    }
    ```  
  - **Response**:  
    ```json
    {
      "orderId": 456,
      "status": "Success",
      "message": "Order placed successfully"
    }
    ```

- **Endpoint Name**: `/orders/:id`  
  - **Method**: GET  
  - **Description**: Fetch the details of a specific order by its ID.  
  - **Response**:  
    ```json
    {
      "orderId": 456,
      "customer": {
        "name": "John Doe",
        "email": "john.doe@example.com"
      },
      "products": [
        { "id": 1, "name": "Product A", "quantity": 2, "price": 100 },
        { "id": 2, "name": "Product B", "quantity": 1, "price": 200 }
      ],
      "totalAmount": 400,
      "status": "Processing",
      "createdAt": "2025-01-16T10:00:00Z"
    }
    ```

---

#### **3. Shipment Management**
- **Endpoint Name**: `/shipment`  
  - **Method**: GET  
  - **Description**: Track order status via a third-party API.  
  - **Query Parameters**: `orderId`  
  - **Response**:  
    ```json
    {
      "shipmentId": "SHIP123",
      "orderId": 456,
      "status": "In Transit",
      "expectedDeliveryDate": "2025-01-20T18:00:00Z"
    }
    ```

---

#### **4. User Management**
- **Endpoint Name**: `/users/register`  
  - **Method**: POST  
  - **Description**: Register a new user in the system.  
  - **Payload**:  
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "securepassword",
      "phone": "1234567890"
    }
    ```  
  - **Response**:  
    ```json
    {
      "userId": 123,
      "status": "Success",
      "message": "User registered successfully"
    }
    ```

- **Endpoint Name**: `/users/login`  
  - **Method**: POST  
  - **Description**: Authenticate a user and generate a token.  
  - **Payload**:  
    ```json
    {
      "email": "john.doe@example.com",
      "password": "securepassword"
    }
    ```  
  - **Response**:  
    ```json
    {
      "token": "abc123def456",
      "expiresIn": "24h",
      "status": "Success"
    }
    ```

---

#### **5. Payment Processing**
- **Endpoint Name**: `/payments/process`  
  - **Method**: POST  
  - **Description**: Process payment through a payment gateway.  
  - **Payload**:  
    ```json
    {
      "orderId": 456,
      "paymentMethod": "Credit Card",
      "cardDetails": {
        "cardNumber": "4111111111111111",
        "expiry": "12/25",
        "cvv": "123"
      },
      "amount": 400
    }
    ```  
  - **Response**:  
    ```json
    {
      "transactionId": "TXN789",
      "status": "Success",
      "message": "Payment processed successfully"
    }
    ```

---

### **API Documentation Notes**
1. Each endpoint should have clear **method types**, **descriptions**, **payloads**, and **response examples**.
2. Ensure proper **authentication and authorization** (e.g., API keys or JWT) for endpoints handling sensitive data like `/orders`, `/shipment`, and `/payments`.
3. Use consistent naming conventions and versioning for APIs (e.g., `/api/v1/products`).

This plan ensures a robust and scalable API design tailored for an e-commerce marketplace.
