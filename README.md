
# Sistema de Gestión de Liga de Fútbol

## Configuración Completa

### Frontend (React)
```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### Backend (Express + MySQL)
```bash
# Ir al directorio del servidor
cd server

# Instalar dependencias
npm install

# Configurar base de datos MySQL
# 1. Instalar MySQL en tu sistema
# 2. Crear base de datos ejecutando: mysql -u root -p < database/schema.sql
# 3. Configurar credenciales en server/.env

# Ejecutar servidor
npm run dev
```

### Configuración de MySQL

1. **Instalar MySQL:**
   - Windows: Descargar MySQL Installer
   - macOS: `brew install mysql`
   - Linux: `sudo apt-get install mysql-server`

2. **Crear base de datos:**
   ```bash
   mysql -u root -p
   source server/database/schema.sql
   ```

3. **Configurar credenciales:**
   ```bash
   cd server
   cp .env.example .env
   # Editar .env con tus credenciales de MySQL
   ```

## Estructura del Proyecto

```
├── src/                 # Frontend React
├── server/             # Backend Express
│   ├── config/         # Configuración de DB
│   ├── routes/         # Rutas de API
│   ├── database/       # Scripts SQL
│   └── server.js       # Servidor principal
└── README.md
```

## URLs de desarrollo

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001
- Health Check: http://localhost:3001/health

El proyecto ahora está completamente configurado para trabajar con MySQL local.
