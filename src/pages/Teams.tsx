
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  Plus, 
  Search, 
  Edit,
  Trash2,
  UserPlus,
  Trophy
} from "lucide-react";

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const teams = [
    {
      id: 1,
      name: "Real Madrid CF",
      players: 25,
      founded: "1902",
      stadium: "Santiago Bernabéu",
      coach: "Carlo Ancelotti",
      wins: 8,
      draws: 2,
      losses: 1
    },
    {
      id: 2,
      name: "FC Barcelona",
      players: 26,
      founded: "1899",
      stadium: "Camp Nou",
      coach: "Xavi Hernández",
      wins: 7,
      draws: 3,
      losses: 1
    },
    {
      id: 3,
      name: "Atlético Madrid",
      players: 24,
      founded: "1903",
      stadium: "Cívitas Metropolitano",
      coach: "Diego Simeone",
      wins: 6,
      draws: 4,
      losses: 1
    },
  ];

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Users className="w-8 h-8 text-primary" />
            Gestión de Equipos
          </h1>
          <p className="text-muted-foreground">Administra los equipos de tu liga</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Nuevo Equipo
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Registrar Nuevo Equipo</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="teamName">Nombre del Equipo</Label>
                <Input id="teamName" placeholder="Ej: Real Madrid CF" />
              </div>
              <div>
                <Label htmlFor="founded">Año de Fundación</Label>
                <Input id="founded" type="number" placeholder="1902" />
              </div>
              <div>
                <Label htmlFor="stadium">Estadio</Label>
                <Input id="stadium" placeholder="Santiago Bernabéu" />
              </div>
              <div>
                <Label htmlFor="coach">Entrenador</Label>
                <Input id="coach" placeholder="Carlo Ancelotti" />
              </div>
              <div>
                <Label htmlFor="description">Descripción</Label>
                <Textarea id="description" placeholder="Descripción del equipo..." />
              </div>
              <div className="flex gap-2">
                <Button className="flex-1" onClick={() => setIsDialogOpen(false)}>
                  Registrar Equipo
                </Button>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Buscar equipos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTeams.map((team) => (
          <Card key={team.id} className="card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{team.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">Fundado en {team.founded}</p>
                </div>
                <Badge variant="secondary">{team.players} jugadores</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Estadio:</span>
                  <span className="font-medium">{team.stadium}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Entrenador:</span>
                  <span className="font-medium">{team.coach}</span>
                </div>
              </div>

              {/* Team Stats */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs font-medium text-muted-foreground mb-2">ESTADÍSTICAS</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-lg font-bold text-green-600">{team.wins}</p>
                    <p className="text-xs text-muted-foreground">Victorias</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-yellow-600">{team.draws}</p>
                    <p className="text-xs text-muted-foreground">Empates</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-red-600">{team.losses}</p>
                    <p className="text-xs text-muted-foreground">Derrotas</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-1">
                  <UserPlus className="w-3 h-3" />
                  Jugadores
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Edit className="w-3 h-3" />
                </Button>
                <Button variant="outline" size="sm" className="gap-1 text-red-600 hover:text-red-700">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center p-4">
          <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold">{teams.length}</p>
          <p className="text-sm text-muted-foreground">Equipos Registrados</p>
        </Card>
        <Card className="text-center p-4">
          <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{teams.reduce((acc, team) => acc + team.players, 0)}</p>
          <p className="text-sm text-muted-foreground">Total Jugadores</p>
        </Card>
        <Card className="text-center p-4">
          <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <p className="text-2xl font-bold text-green-600">{teams.reduce((acc, team) => acc + team.wins, 0)}</p>
          <p className="text-sm text-muted-foreground">Total Victorias</p>
        </Card>
        <Card className="text-center p-4">
          <div className="w-8 h-8 bg-gray-500 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-white font-bold text-sm">AVG</span>
          </div>
          <p className="text-2xl font-bold">{(teams.reduce((acc, team) => acc + team.players, 0) / teams.length).toFixed(1)}</p>
          <p className="text-sm text-muted-foreground">Promedio Jugadores</p>
        </Card>
      </div>
    </div>
  );
};

export default Teams;
