CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  email VARCHAR(200),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150),
  description TEXT
);

INSERT INTO services (name, description) VALUES
('Engine Diagnostics', 'Full diagnostic & repair'),
('Welding & Fabrication', 'Structural welding & custom fabrication'),
('Suspension & Brakes', 'Safety-critical systems service');
