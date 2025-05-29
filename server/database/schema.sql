
-- Create database
CREATE DATABASE IF NOT EXISTS football_league;
USE football_league;

-- Teams table
CREATE TABLE teams (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  founded YEAR,
  stadium VARCHAR(255),
  coach VARCHAR(255),
  players_count INT DEFAULT 0,
  wins INT DEFAULT 0,
  draws INT DEFAULT 0,
  losses INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Referees table
CREATE TABLE referees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  license VARCHAR(50) UNIQUE NOT NULL,
  experience INT,
  matches_officiated INT DEFAULT 0,
  status ENUM('Activo', 'Inactivo') DEFAULT 'Activo',
  phone VARCHAR(20),
  email VARCHAR(255),
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Fields table
CREATE TABLE fields (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  capacity INT,
  surface_type VARCHAR(50),
  status ENUM('Disponible', 'Ocupado', 'Mantenimiento') DEFAULT 'Disponible',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Matches table
CREATE TABLE matches (
  id INT AUTO_INCREMENT PRIMARY KEY,
  home_team_id INT,
  away_team_id INT,
  referee_id INT,
  field_id INT,
  match_date DATETIME,
  home_score INT DEFAULT 0,
  away_score INT DEFAULT 0,
  status ENUM('Programado', 'En Curso', 'Finalizado', 'Cancelado') DEFAULT 'Programado',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (home_team_id) REFERENCES teams(id),
  FOREIGN KEY (away_team_id) REFERENCES teams(id),
  FOREIGN KEY (referee_id) REFERENCES referees(id),
  FOREIGN KEY (field_id) REFERENCES fields(id)
);

-- Insert sample data
INSERT INTO teams (name, founded, stadium, coach, players_count, wins, draws, losses) VALUES
('Real Madrid CF', 1902, 'Santiago Bernabéu', 'Carlo Ancelotti', 25, 8, 2, 1),
('FC Barcelona', 1899, 'Camp Nou', 'Xavi Hernández', 26, 7, 3, 1),
('Atlético Madrid', 1903, 'Cívitas Metropolitano', 'Diego Simeone', 24, 6, 4, 1);

INSERT INTO referees (name, license, experience, matches_officiated, status, phone, email, category) VALUES
('Antonio Mateu Lahoz', 'REF001', 15, 245, 'Activo', '+34 666 123 456', 'mateu@referees.com', 'Primera División'),
('Jesús Gil Manzano', 'REF002', 12, 198, 'Activo', '+34 666 789 012', 'gil@referees.com', 'Primera División'),
('Ricardo de Burgos', 'REF003', 8, 156, 'Activo', '+34 666 345 678', 'burgos@referees.com', 'Segunda División');
