
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Settings as SettingsIcon, 
  Trophy,
  Calendar,
  Users,
  Bell,
  Shield,
  Database,
  Save
} from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <SettingsIcon className="w-8 h-8 text-primary" />
            Configuración de Liga
          </h1>
          <p className="text-muted-foreground">Personaliza los parámetros de tu liga</p>
        </div>
        <Button className="gap-2">
          <Save className="w-4 h-4" />
          Guardar Cambios
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* League Information */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Información de la Liga
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="leagueName">Nombre de la Liga</Label>
              <Input id="leagueName" defaultValue="Liga Profesional 2024" />
            </div>
            <div>
              <Label htmlFor="season">Temporada</Label>
              <Input id="season" defaultValue="2024-2025" />
            </div>
            <div>
              <Label htmlFor="organizer">Organizador</Label>
              <Input id="organizer" defaultValue="Federación Española de Fútbol" />
            </div>
            <div>
              <Label htmlFor="description">Descripción</Label>
              <Textarea 
                id="description" 
                defaultValue="Liga profesional de fútbol con los mejores equipos del país."
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="website">Sitio Web</Label>
              <Input id="website" defaultValue="https://miliga.com" />
            </div>
          </CardContent>
        </Card>

        {/* Competition Rules */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Reglas de Competición
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="teams">Número de Equipos</Label>
              <Select defaultValue="20">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="16">16 equipos</SelectItem>
                  <SelectItem value="18">18 equipos</SelectItem>
                  <SelectItem value="20">20 equipos</SelectItem>
                  <SelectItem value="24">24 equipos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="rounds">Número de Vueltas</Label>
              <Select defaultValue="2">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Una vuelta</SelectItem>
                  <SelectItem value="2">Dos vueltas</SelectItem>
                  <SelectItem value="3">Tres vueltas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="promotion">Equipos que Ascienden</Label>
              <Input id="promotion" type="number" defaultValue="2" />
            </div>
            <div>
              <Label htmlFor="relegation">Equipos que Descienden</Label>
              <Input id="relegation" type="number" defaultValue="2" />
            </div>
            <div>
              <Label htmlFor="playoff">Equipos en Playoff</Label>
              <Input id="playoff" type="number" defaultValue="4" />
            </div>
          </CardContent>
        </Card>

        {/* Match Settings */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Configuración de Partidos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="duration">Duración del Partido (minutos)</Label>
              <Input id="duration" type="number" defaultValue="90" />
            </div>
            <div>
              <Label htmlFor="halftime">Descanso (minutos)</Label>
              <Input id="halftime" type="number" defaultValue="15" />
            </div>
            <div>
              <Label htmlFor="overtime">Tiempo Extra</Label>
              <Select defaultValue="yes">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Permitido</SelectItem>
                  <SelectItem value="no">No permitido</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="subs">Sustituciones Permitidas</Label>
              <Input id="subs" type="number" defaultValue="5" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="var">Sistema VAR</Label>
              <Switch id="var" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="awayGoals">Regla de Gol de Visitante</Label>
              <Switch id="awayGoals" />
            </div>
          </CardContent>
        </Card>

        {/* Points System */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Sistema de Puntuación
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="winPoints">Puntos por Victoria</Label>
              <Input id="winPoints" type="number" defaultValue="3" />
            </div>
            <div>
              <Label htmlFor="drawPoints">Puntos por Empate</Label>
              <Input id="drawPoints" type="number" defaultValue="1" />
            </div>
            <div>
              <Label htmlFor="lossPoints">Puntos por Derrota</Label>
              <Input id="lossPoints" type="number" defaultValue="0" />
            </div>
            <div>
              <Label htmlFor="tiebreaker">Criterio de Desempate</Label>
              <Select defaultValue="goal-difference">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="goal-difference">Diferencia de goles</SelectItem>
                  <SelectItem value="head-to-head">Enfrentamientos directos</SelectItem>
                  <SelectItem value="goals-for">Goles a favor</SelectItem>
                  <SelectItem value="goals-against">Goles en contra</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notificaciones
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="matchNotifs">Notificar Resultados de Partidos</Label>
              <Switch id="matchNotifs" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="scheduleNotifs">Notificar Cambios de Horario</Label>
              <Switch id="scheduleNotifs" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="tableNotifs">Notificar Cambios en Tabla</Label>
              <Switch id="tableNotifs" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="refNotifs">Notificar Designaciones Arbitrales</Label>
              <Switch id="refNotifs" />
            </div>
            <div>
              <Label htmlFor="notifyEmail">Email para Notificaciones</Label>
              <Input id="notifyEmail" type="email" defaultValue="admin@miliga.com" />
            </div>
          </CardContent>
        </Card>

        {/* User Management */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Gestión de Usuarios
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="teamRegistration">Registro Abierto de Equipos</Label>
              <Switch id="teamRegistration" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="refRegistration">Registro Abierto de Árbitros</Label>
              <Switch id="refRegistration" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="publicStats">Estadísticas Públicas</Label>
              <Switch id="publicStats" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="matchStreaming">Transmisión en Vivo</Label>
              <Switch id="matchStreaming" />
            </div>
            <div>
              <Label htmlFor="maxPlayers">Máximo Jugadores por Equipo</Label>
              <Input id="maxPlayers" type="number" defaultValue="25" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Save Button */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-green-800">Guardar Configuración</h3>
              <p className="text-sm text-green-600">Los cambios se aplicarán inmediatamente a toda la liga</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 gap-2">
              <Save className="w-4 h-4" />
              Aplicar Cambios
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
