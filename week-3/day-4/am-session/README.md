# Notes

## As

Berfungsi Sebagai Alias

```sql
SELECT customerName AS 'Nama Customer',
creditLimit AS 'Limit Kredit'
FROM customers;
```

## Order By

### Ascending

```sql
SELECT customerName AS 'Nama Customer',
creditLimit AS 'Limit Kredit'
FROM customers
ORDER BY customerName;
```

### Descending

```sql
SELECT customerName AS 'Nama Customer',
creditLimit AS 'Limit Kredit'
FROM customers
ORDER BY customerName DESC;
```

## Limit

```sql
SELECT customerName, creditLimit FROM customers
LIMIT 5;
```

## Distinct

Memilih kolom yang berbeda

```sql
SELECT DISTINCT country
FROM customers;
```

Dapat diaplikasikan untuk multiple column

```sql
SELECT DISTINCT country, city, postalCode
FROM customers;
```

## Menggabungkan Beberapa Klausa

```sql
SELECT customerName AS 'Nama Customer', 
country AS 'Negara' FROM customers
	WHERE country = 'Indonesia'
    ORDER BY customerName DESC
    LIMIT 5;
```

## Operator

```sql
SELECT customerName, creditLimit
FROM customers
WHERE creditLimit >= 2000000;
```

```sql
SELECT customerName, creditLimit
FROM customers
WHERE country != 'Sweden';
```

```sql
SELECT customerName, creditLimit / 4 AS 'Quarter of Limit' FROM customers
LIMIT 5;
```

## Logical Operator

Bersifat case insensitive

### Like

```sql
SELECT customerName, country FROM customers
WHERE country LIKE 'sw%';
```

### And

```sql
SELECT customerName, country, creditLimit
FROM customers
	WHERE country = 'Indonesia' AND
	creditLimit > 300000;
```

### Or

```sql
SELECT customerName, country, city, creditLimit
FROM customers
	WHERE country = 'Sweden' OR
	city = 'Jakarta';
```

### NULL

Value 0 / '' tidak termasuk null.

```sql
SELECT customerName, state FROM customers
	WHERE state is NULL;
```

### In

```sql
SELECT customerName, country FROM customers
	WHERE country IN ('Indonesia', 'France');
```

### Between

```sql
SELECT customerName, creditLimit FROM customers
	WHERE creditLimit BETWEEN 8000000 AND 10000000;
```

### Not

```sql
SELECT customerName, creditLimit FROM customers
	WHERE creditLimit NOT BETWEEN 8000000 AND 10000000;
```

```sql
SELECT customerName, state FROM customers
	WHERE state IS NOT NULL;
```

```sql
SELECT customerName, country FROM customers
WHERE country NOT LIKE 'sw%';
```

## Join

### Inner Join

Hanya menampilkan irisan yang kecil.

```sql
SELECT 
	Employees.emp_no, first_name, last_name, Salary
FROM
	Employees
INNER JOIN Salary
	ON Employees.emp_no = Salary.emp_no;
```

### Left Join

Menampilkan semua data yang digabungkan di tabel kiri, meskipun di tabel kanan datanya NULL.

```sql
SELECT
	Employees.emp_no, first_name, last_name, salary
FROM
	Employees
LEFT JOIN Salary
	ON Employees.emp_no = Salary.emp_no;
```

### Self Join

Harus memiliki klausa WHERE

```sql
SELECT
	Employees.emp_no AS emp_noA,
    Salary.emp_no as emp_noB,
    Employees.salary
FROM
	salary Employees, salary Salary
WHERE 
    Employees.emp_no != Salary.emp_no AND Employees.salary = Salary.salary;
```