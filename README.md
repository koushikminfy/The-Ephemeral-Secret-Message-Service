
### 📄 `README.md`

# Secret Message Service (Basic)

A simple Express.js backend that allows users to post, retrieve, and manage **ephemeral secret messages**.
These messages are stored only in memory and vanish if the server is restarted.

---



##  Getting Started


### 1. Install Dependencies

```bash
bun install
```

### 2. Run the Server

```bash
bun start
```

---

##  API Endpoints

###  POST `/messages` – Create a New Message

**Request Body:**

```json
{
  "message": "The eagle has landed and is hungry."
}
```
![118](https://github.com/user-attachments/assets/7ee33b4c-de78-4dd3-9e07-1b5fc720f1bf)

**Success Response (201 Created):**

---

### POST `/messages` – Validation Failure

**Request Body:**

```json
{
  "message": "Too short"
}

```

![119](https://github.com/user-attachments/assets/e005cbe9-f0ae-445b-b6b7-9549fa9253f2)

**Response (400 Bad Request):**

---

###  GET `/messages/:id` – Retrieve Message by ID

**Example:**

```http
GET http://localhost:3000/messages/0
```

![120](https://github.com/user-attachments/assets/eace1cdc-03ea-4c3f-a861-84bc7800264d)




---





