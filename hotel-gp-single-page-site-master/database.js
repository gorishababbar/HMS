// database.js

var SQL = window.SQL;

// Function to initialize the database
function initializeDatabase() {
    // Open or create a new in-memory database
    var db = new SQL.Database();

    // Create the users table
    var createTableQuery = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT NOT NULL, password TEXT NOT NULL)";
    db.run(createTableQuery);

    // Insert initial user data
    var insertDataQuery = "INSERT INTO users (email, password) VALUES ('user1@example.com', 'password1'), ('user2@example.com', 'password2'), ('user3@example.com', 'password3')";
    db.run(insertDataQuery);

    return db;
}

// Export the initializeDatabase function
export { initializeDatabase };
