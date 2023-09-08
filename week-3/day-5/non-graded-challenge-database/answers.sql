-- Query 1: List the titles of books borrowed by a member (identified by a specific Member_ID).

SELECT title 
FROM book
INNER JOIN lending_transaction
ON book.isbn = lending_transaction.isbn
WHERE member_id = 1;

-- Query 2: Find out the members who have borrowed books but have not returned yet.

SELECT DISTINCT first_name, last_name, title
FROM member
INNER JOIN lending_transaction
ON member.member_id = lending_transaction.member_id
INNER JOIN book
ON lending_transaction.isbn = book.isbn
WHERE lending_transaction.return_date IS NULL;

-- Query 3: Find out the total number of books borrowed by a member (identified by a specific Member_ID)

SELECT first_name, last_name, 
COUNT(first_name) AS books_borrowed
FROM member
INNER JOIN lending_transaction
ON member.member_id = lending_transaction.member_id
WHERE lending_transaction.member_id = 1;


-- Query 4: List the books which were not returned in good condition.

SELECT DISTINCT title
FROM book
INNER JOIN lending_transaction
ON book.isbn = lending_transaction.isbn
WHERE lending_transaction.condition_at_return = 'Bad';


-- Query 5: Identify members who have borrowed more than one book at a time.

SELECT member.member_id, member.first_name, member.last_name, lending_transaction.lending_date, COUNT(*) AS books_lent
FROM member
INNER JOIN lending_transaction 
ON member.member_id = lending_transaction.member_id
GROUP BY member.member_id, lending_transaction.lending_date
HAVING books_lent > 1;