create database bookstore;
use bookstore;
-- Create the Author table
CREATE TABLE Author (
    AuthorID INT PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Biography TEXT
);

-- Create the Publisher table
CREATE TABLE Publisher (
    PublisherID INT PRIMARY KEY,
    PublisherName NVARCHAR(100) NOT NULL,
    Address NVARCHAR(200),
    Phone NVARCHAR(20)
);

-- Create the Genre table
CREATE TABLE Genre (
    GenreID INT PRIMARY KEY,
    GenreName NVARCHAR(50) NOT NULL,
    Description TEXT
);

-- Create the Book table
CREATE TABLE Book (
    ISBN VARCHAR(15) PRIMARY KEY,
    Title NVARCHAR(200) NOT NULL,
    AuthorID INT,
    PublisherID INT,
    GenreID INT,
    Price DECIMAL(10, 2),
    Quantity INT,
    FOREIGN KEY (AuthorID) REFERENCES Author(AuthorID),
    FOREIGN KEY (PublisherID) REFERENCES Publisher(PublisherID),
    FOREIGN KEY (GenreID) REFERENCES Genre(GenreID)
);

-- Create the Customer table
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    CustomerName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100),
    Address NVARCHAR(200),
    Phone NVARCHAR(20)
);

-- Create the UserAccount table
CREATE TABLE UserAccount (
    UserID INT PRIMARY KEY,
    Username NVARCHAR(50) NOT NULL,
    Password NVARCHAR(100) NOT NULL,
    UserType ENUM('admin', 'user','master') NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Customer(CustomerID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Create the `Order` table (use backticks to avoid conflicts with reserved keyword)
CREATE TABLE `Order` (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    TotalAmount DECIMAL(10, 2),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);

-- Create the OrderItem table
CREATE TABLE OrderItem (
    OrderItemID INT PRIMARY KEY,
    OrderID INT,
    BookISBN VARCHAR(15),
    Quantity INT,
    Subtotal DECIMAL(10, 2),
    FOREIGN KEY (OrderID) REFERENCES `Order`(OrderID),
    FOREIGN KEY (BookISBN) REFERENCES Book(ISBN)
);

-- Create the Payment table
CREATE TABLE Payment (
    PaymentID INT PRIMARY KEY,
    OrderID INT,
    PaymentMethod NVARCHAR(50),
    Amount DECIMAL(10, 2),
    PaymentDate DATE,
    FOREIGN KEY (OrderID) REFERENCES `Order`(OrderID)
);

-- Dữ liệu cho bảng Author
INSERT INTO Author (AuthorID, Name, Biography)
VALUES
    (1, 'Stan Lee', 'Stan Lee was an American comic book writer, editor, publisher, and producer.'),
    (2, 'Alan Moore', 'Alan Moore is an English writer known for his influential work in comics.'),
    (3, 'Naoko Takeuchi', 'Naoko Takeuchi is a Japanese manga artist best known for creating Sailor Moon.'),
    (4, 'Masashi Kishimoto', 'Masashi Kishimoto is a Japanese manga artist known for creating Naruto.');

-- Dữ liệu cho bảng Publisher
INSERT INTO Publisher (PublisherID, Name, Address, Phone)
VALUES
(1, 'Marvel Comics', 'New York, USA', '+1-800-123-4567'),
    (2, 'DC Comics', 'New York, USA', '+1-800-987-6543'),
    (3, 'Kodansha', 'Tokyo, Japan', '+81-3-1234-5678'),
    (4, 'Shueisha', 'Tokyo, Japan', '+81-3-9876-5432');

-- Dữ liệu cho bảng Genre
INSERT INTO Genre (GenreID, Name, Description)
VALUES
	(1, 'Superhero', 'Comics featuring superheroes with extraordinary powers.'),
    (2, 'Sci-Fi', 'Science fiction comics with futuristic and speculative themes.'),
    (3, 'Magical Girl', 'Comics featuring magical girl protagonists.'),
    (4, 'Shonen', 'Comics targeted at young male readers.');

-- Dữ liệu cho bảng Book
INSERT INTO Book (ISBN, Title, AuthorID, PublisherID, GenreID, Price, Quantity)
VALUES
	('978-1302907784', 'Spider-Man: Homecoming', 1, 1, 1, 15.99, 100),
    ('978-1401238964', 'Watchmen', 2, 2, 2, 19.99, 80),
    ('978-0785198815', 'The Avengers', 1, 1, 1, 18.99, 120),
    ('978-1401237882', 'Batman: The Dark Knight Returns', 2, 2, 1, 21.99, 70),
    ('978-0785195494', 'X-Men: Dark Phoenix Saga', 1, 1, 1, 16.99, 90),
    ('978-1935429746', 'Sailor Moon', 3, 3, 3, 12.99, 150),
    ('978-4088736308', 'Naruto', 4, 4, 4, 14.99, 120);

-- Dữ liệu cho bảng Customer
INSERT INTO Customer (CustomerID, CustomerName, Email, Address, Phone)
VALUES
    (1, 'John Doe', 'johndoe@email.com', '123 Main St, City, Country', '+1-555-123-4567'),
    (2, 'Jane Smith', 'janesmith@email.com', '456 Elm St, City, Country', '+1-555-987-6543'),
    (3, 'Bob Johnson', 'bobjohnson@email.com', '789 Oak St, City, Country', '+1-555-234-5678');

-- Dữ liệu cho bảng UserAccount
INSERT INTO UserAccount (UserID, Username, Password, UserType)
VALUES
    (1, 'admin_user', 'admin_password', 'admin'),
    (2, 'regular_user', 'user_password', 'user'),
    (3, 'master_user', 'master_password', 'master');

-- Dữ liệu cho bảng `Order`
INSERT INTO `Order` (OrderID, CustomerID, OrderDate, TotalAmount)
VALUES
    (1, 1, '2023-08-28', 45.99),
    (2, 2, '2023-08-29', 37.99),
    (3, 3, '2023-08-30', 62.50);

-- Dữ liệu cho bảng OrderItem
INSERT INTO OrderItem (OrderItemID, OrderID, BookISBN, Quantity, Subtotal)
VALUES
    (1, 1, '978-1302907784', 2, 31.98),
    (2, 1, '978-1401238964', 1, 19.99),
    (3, 2, '978-0785198815', 3, 56.97),
    (4, 2, '978-1401237882', 1, 21.99),
    (5, 3, '978-0785195494', 4, 67.96);
    
-- Dữ liệu cho bảng Payment
INSERT INTO Payment (PaymentID, OrderID, PaymentMethod, Amount, PaymentDate)
VALUES
    (1, 1, 'Credit Card', 45.99, '2023-08-28'),
    (2, 2, 'PayPal', 37.99, '2023-08-29'),
    (3, 3, 'Credit Card', 62.50, '2023-08-30');

