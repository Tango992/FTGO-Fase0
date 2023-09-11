-- Dapatkan data first_name dan last_name dari tabel actor dengan disortir descending.
SELECT first_name, last_name FROM actor_info
ORDER BY first_name DESC;

-- Dapatkan data dari tabel actor dengan first_name didahului huruf C. Kemudian ambil 10 data teratas.
SELECT first_name, last_name FROM actor_info
WHERE first_name LIKE "C%"
LIMIT 10;

-- Dapatkan data title, rental_rate dan rating dari tabel film, yang memiliki ratingG atau R. Serta mempunyai rental_rate antara 2 sampai 5.Preview Hasil:
SELECT title, rating, rental_rate FROM film
WHERE rating = 'G' OR rating = 'R'
AND rental_rate BETWEEN 2 AND 5;

-- Dapatkan rating dan rata-rata nilai rental_duration dari tabel film. Kemudian kelompokkan berdasar rating.
SELECT rating, AVG(rental_duration) FROM film
GROUP BY rating;

-- Dengan menggunakan INNER JOIN antara tabel film dan film_actor, tampilkan data title, actor_id dan film_id. Kemudian lakukan filtering dimana actor_id adalah 15.
SELECT film.title, film_actor.actor_id, film.film_id FROM film
INNER JOIN film_actor
ON film.film_id = film_actor.film_id
WHERE film_actor.actor_id = 15;

-- Hitung rata-rata jumlah inventaris per toko
SELECT store_id, COUNT(inventory_id) AS inventory_per_store
FROM inventory
GROUP BY store_id;

-- Tampilkan toko dengan inventaris terbanyak
SELECT store_id, COUNT(inventory_id) 
FROM inventory
GROUP BY store_id DESC
LIMIT 1;