# Set up your database

1. Plan your tables
   - think about how many tables you'll need, possibly only 2
   - one for posts, one for categories?

- How do I connect the tables? one to many or many to many?
- Visually draw your tables on DrawSQL etc
- Manny's advice is to have one category for many posts.

- category table will have a simple list of the categories
- foreign key FROM categories (serial unique key) will be in the posts table

2.
