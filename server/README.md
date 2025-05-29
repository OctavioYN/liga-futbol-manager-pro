
# Football League Backend

## Configuración

1. **Instalar dependencias:**
   ```bash
   cd server
   npm install
   ```

2. **Configurar MySQL:**
   - Instala MySQL en tu sistema
   - Crea la base de datos ejecutando el archivo `database/schema.sql`
   - Configura las credenciales en el archivo `.env`

3. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   # Edita el archivo .env con tus credenciales de MySQL
   ```

4. **Ejecutar el servidor:**
   ```bash
   # Desarrollo
   npm run dev
   
   # Producción
   npm start
   ```

## API Endpoints

### Teams
- `GET /api/teams` - Obtener todos los equipos
- `POST /api/teams` - Crear nuevo equipo
- `PUT /api/teams/:id` - Actualizar equipo
- `DELETE /api/teams/:id` - Eliminar equipo

### Referees
- `GET /api/referees` - Obtener todos los árbitros
- `POST /api/referees` - Crear nuevo árbitro
- `PUT /api/referees/:id` - Actualizar árbitro
- `DELETE /api/referees/:id` - Eliminar árbitro

## Base de datos

El esquema de la base de datos incluye:
- `teams` - Equipos
- `referees` - Árbitros
- `fields` - Campos de juego
- `matches` - Partidos

Ejecuta el archivo `database/schema.sql` en tu instancia de MySQL para crear las tablas y datos de ejemplo.
