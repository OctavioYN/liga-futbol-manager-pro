
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  UserCheck, 
  MapPin, 
  Calendar, 
  Trophy,
  Target,
  Clock,
  TrendingUp
} from "lucide-react";

const Index = () => {
  const stats = [
    { title: "Equipos Registrados", value: "12", icon: Users, color: "bg-blue-500" },
    { title: "Jugadores Activos", value: "240", icon: Target, color: "bg-green-500" },
    { title: "Árbitros", value: "8", icon: UserCheck, color: "bg-purple-500" },
    { title: "Campos Disponibles", value: "4", icon: MapPin, color: "bg-orange-500" },
  ];

  const recentMatches = [
    { home: "Real Madrid CF", away: "FC Barcelona", score: "2-1", date: "2024-05-25", status: "Finalizado" },
    { home: "Atlético Madrid", away: "Valencia CF", score: "1-0", date: "2024-05-24", status: "Finalizado" },
    { home: "Sevilla FC", away: "Real Betis", score: "vs", date: "2024-05-28", status: "Programado" },
  ];

  const topScorers = [
    { name: "Karim Benzema", team: "Real Madrid CF", goals: 15 },
    { name: "Robert Lewandowski", team: "FC Barcelona", goals: 13 },
    { name: "Antoine Griezmann", team: "Atlético Madrid", goals: 10 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="football-gradient rounded-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Dashboard de Liga</h1>
        </div>
        <p className="text-green-100">Gestiona tu liga de fútbol de forma profesional</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Matches */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Partidos Recientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentMatches.map((match, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{match.home} vs {match.away}</p>
                    <p className="text-xs text-muted-foreground">{match.date}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg">{match.score}</p>
                    <Badge variant={match.status === "Finalizado" ? "default" : "secondary"} className="text-xs">
                      {match.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Scorers */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Máximos Goleadores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topScorers.map((player, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{player.name}</p>
                      <p className="text-xs text-muted-foreground">{player.team}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{player.goals}</p>
                    <p className="text-xs text-muted-foreground">goles</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Acciones Rápidas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors text-left">
              <Users className="w-6 h-6 text-blue-600 mb-2" />
              <p className="font-medium">Registrar Equipo</p>
              <p className="text-sm text-muted-foreground">Añadir nuevo equipo a la liga</p>
            </button>
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-left">
              <Calendar className="w-6 h-6 text-green-600 mb-2" />
              <p className="font-medium">Programar Partido</p>
              <p className="text-sm text-muted-foreground">Crear nuevo enfrentamiento</p>
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-left">
              <TrendingUp className="w-6 h-6 text-purple-600 mb-2" />
              <p className="font-medium">Ver Estadísticas</p>
              <p className="text-sm text-muted-foreground">Análisis detallado de la liga</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
