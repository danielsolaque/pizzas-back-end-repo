# pizzas-back-end-repo

# Express API for Menu Application

This Express API serves as the backend for a menu-related application. It provides the following routes and functionality:

## Routes

1. **GET /**
   - Description: Health check route to verify the service's status.
   - Response (Success): `{ data: "Service is running!" }` with a status code of 200.
   
2. **GET /items**
   - Description: Returns an array containing all menu items.
   - Response (Success): `{ data: <array of menu items> }` with a status code of 200.
   
3. **GET /items/:id**
   - Description: Retrieves a specific menu item by its ID.
   - Response (Success): `{ data: <menu item data> }` with a status code of 200.
   - Response (Error - Item Not Found): `{ error: "Item not found" }` with a status code of 404.

## Response Format

- For successful responses, the API returns data in the format `{ data: <the data requested> }` along with an appropriate status code (e.g., 200 for success).
- In case of errors, the API returns an error message in the format `{ error: <the error message> }` with the corresponding status code (e.g., 404 for not found, 500 for server errors).

## Port Configuration

- The API listens on the port specified in the `process.env.PORT` environment variable.
- If no specific port is specified, it defaults to port 8888.

## Error Handling

- The API handles various types of errors, including server errors (non-2xx responses from the API) and frontend errors (errors occurring in the frontend code).
- Error messages are displayed in the application to provide users with clear feedback.

Feel free to explore and modify this Express API for your menu application needs. If you encounter any issues or have questions, please refer to the documentation or reach out to our support team.