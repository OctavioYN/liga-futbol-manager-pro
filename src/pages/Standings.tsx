
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Trophy,
  Target,
  Shield,
  TrendingUp,
  Medal
} from "lucide-react";

const Standings = () => {
  const standings = [
    {
      position: 1,
      team: "Real Madrid CF",
      matches: 11,
      wins: 8,
      draws: 2,
      losses: 1,
      goalsFor: 24,
      goalsAgainst: 8,
      goalDifference: 16,
      points: 26,
      form: ["W", "W", "D", "W", "W"]
    },
    {
      position: 2,
      team: "FC Barcelona",
      matches: 11,
      wins: 7,
      draws: 3,
      losses: 1,
      goalsFor: 22,
      goalsAgainst: 10,
      goalDifference: 12,
      points: 24,
      form: ["W", "D", "W", "W", "D"]
    },
    {
      position: 3,
      team: "Atlético Madrid",
      matches: 11,
      wins: 6,
      draws: 4,
      losses: 1,
      goalsFor: 18,
      goalsAgainst: 9,
      goalDifference: 9,
      points: 22,
      form: ["D", "W", "D", "W", "W"]
    },
    {
      position: 4,
      team: "Valencia CF",
      matches: 11,
      wins: 5,
      draws: 3,
      losses: 3,
      goalsFor: 16,
      goalsAgainst: 14,
      goalDifference: 2,
      points: 18,
      form: ["L", "W", "D", "W", "L"]
    },
    {
      position: 5,
      team: "Sevilla FC",
      matches: 11,
      wins: 4,
      draws: 4,
      losses: 3,
      goalsFor: 15,
      goalsAgainst: 13,
      goalDifference: 2,
      points: 16,
      form: ["D", "L", "W", "D", "W"]
    },
    {
      position: 6,
      team: "Real Betis",
      matches: 11,
      wins: 3,
      draws: 5,
      losses: 3,
      goalsFor: 12,
      goalsAgainst: 15,
      goalDifference: -3,
      points: 14,
      form: ["D", "D", "L", "D", "W"]
    },
  ];

  const getPositionColor = (position: number) => {
    if (position <= 2) return "text-green-600 bg-green-50";
    if (position <= 4) return "text-blue-600 bg-blue-50";
    if (position >= standings.length - 1) return "text-red-600 bg-red-50";
    return "text-gray-600 bg-gray-50";
  };

  const getFormColor = (result: string) => {
    switch (result) {
      case "W": return "bg-green-500";
      case "D": return "bg-yellow-500";
      case "L": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const topScorer = { name: "Karim Benzema", team: "Real Madrid CF", goals: 15 };
  const topAssists = { name: "Luka Modrić", team: "Real Madrid CF", assists: 8 };
  const cleanSheets = { team: "Atlético Madrid", keeper: "Jan Oblak", cleanSheets: 7 };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="football-gradient rounded-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="w-8 h-8" />
          <h1 className="text-3xl font-bold">Tabla de Clasificaciones</h1>
        </div>
        <p className="text-green-100">Posiciones actuales de la liga</p>
      </div>

      {/* Main Standings Table */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Clasificación General
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-medium">Pos</th>
                  <th className="text-left p-2 font-medium">Equipo</th>
                  <th className="text-center p-2 font-medium">PJ</th>
                  <th className="text-center p-2 font-medium">G</th>
                  <th className="text-center p-2 font-medium">E</th>
                  <th className="text-center p-2 font-medium">P</th>
                  <th className="text-center p-2 font-medium">GF</th>
                  <th className="text-center p-2 font-medium">GC</th>
                  <th className="text-center p-2 font-medium">DG</th>
                  <th className="text-center p-2 font-medium">Pts</th>
                  <th className="text-center p-2 font-medium">Forma</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team) => (
                  <tr key={team.position} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getPositionColor(team.position)}`}>
                        {team.position}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{team.team.charAt(0)}</span>
                        </div>
                        <span className="font-medium">{team.team}</span>
                      </div>
                    </td>
                    <td className="text-center p-2">{team.matches}</td>
                    <td className="text-center p-2 text-green-600 font-medium">{team.wins}</td>
                    <td className="text-center p-2 text-yellow-600 font-medium">{team.draws}</td>
                    <td className="text-center p-2 text-red-600 font-medium">{team.losses}</td>
                    <td className="text-center p-2">{team.goalsFor}</td>
                    <td className="text-center p-2">{team.goalsAgainst}</td>
                    <td className={`text-center p-2 font-medium ${team.goalDifference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                    </td>
                    <td className="text-center p-2 font-bold text-lg">{team.points}</td>
                    <td className="text-center p-2">
                      <div className="flex gap-1 justify-center">
                        {team.form.map((result, index) => (
                          <div
                            key={index}
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getFormColor(result)}`}
                          >
                            {result}
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Scorer */}
        <Card className="card-hover">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-green-500" />
              Máximo Goleador
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Medal className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">{topScorer.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{topScorer.team}</p>
              <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                {topScorer.goals} goles
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Top Assists */}
        <Card className="card-hover">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Máximo Asistente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">{topAssists.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{topAssists.team}</p>
              <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                {topAssists.assists} asistencias
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Clean Sheets */}
        <Card className="card-hover">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="w-5 h-5 text-purple-500" />
              Portería Menos Vencida
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg">{cleanSheets.keeper}</h3>
              <p className="text-sm text-muted-foreground mb-2">{cleanSheets.team}</p>
              <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                {cleanSheets.cleanSheets} porterías a cero
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* League Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Posiciones de Clasificación</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm">Posiciones 1-2: Copa de Campeones</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-sm">Posiciones 3-4: Copa Internacional</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm">Últimas 2 posiciones: Descenso</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle>Estadísticas de la Liga</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total de goles:</span>
              <span className="font-bold">{standings.reduce((acc, team) => acc + team.goalsFor, 0)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Promedio por partido:</span>
              <span className="font-bold">{(standings.reduce((acc, team) => acc + team.goalsFor, 0) / standings.reduce((acc, team) => acc + team.matches, 0)).toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Partidos jugados:</span>
              <span className="font-bold">{standings.reduce((acc, team) => acc + team.matches, 0) / 2}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Jornadas completadas:</span>
              <span className="font-bold">{Math.max(...standings.map(team => team.matches))}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Standings;
