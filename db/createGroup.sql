INSERT INTO groups (name, category, description, website, twitter, facebook, instagram) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *; 