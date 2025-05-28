
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  Plus, 
  Search, 
  Edit,
  Trash2,
  Clock,
  MapPin,
  Users
} from "lucide-react";

const Matches = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  const matches = [
    {
      id: 1,
      homeTeam: "Real Madrid CF",
      awayTeam: "FC Barcelona",
      date: "2024-05-28",
      time: "16:00",
      field: "Campo Principal",
      referee: "Antonio Mateu Lahoz",
      status: "Programado",
      homeScore: null,
      awayScore: null,
      attendance: 0
    },
    {
      id: 2,
      homeTeam: "Atlético Madrid", 
      awayTeam: "Valencia CF",
      date: "2024-05-25",
      time: "18:30",
      field: "Campo Secundario",
      referee: "Jesús Gil Manzano",
      status: "Finalizado",
      homeScore: 1,
      awayScore: 0,
      attendance: 2200
    },
    {
      id: 3,
      homeTeam: "Sevilla FC",
      awayTeam: "Real Betis",
      date: "2024-05-30",
      time: "20:00",
      field: "Campo Principal",
      referee: "Ricardo de Burgos",
      status: "Programado",
      homeScore: null,
      awayScore: null,
      attendance: 0
    },
  ];

  const filteredMatches = matches.filter(match => {
    const matchesSearch = match.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         match.awayTeam.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || match.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Programado": return "bg-blue-500";
      case "En Curso": return "bg-green-500";
      case "Finalizado": return "bg-gray-500";
      case "Suspendido": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Calendar className="w-8 h-8 text-primary" />
            Gestión de Partidos
          </h1>
          <p className="text-muted-foreground">Programa y gestiona los enfrentamientos</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Nuevo Partido
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Programar Nuevo Partido</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="homeTeam">Equipo Local</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar equipo local" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="real-madrid">Real Madrid CF</SelectItem>
                    <SelectItem value="barcelona">FC Barcelona</SelectItem>
                    <SelectItem value="atletico">Atlético Madrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="awayTeam">Equipo Visitante</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar equipo visitante" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="real-madrid">Real Madrid CF</SelectItem>
                    <SelectItem value="barcelona">FC Barcelona</SelectItem>
                    <SelectItem value="atletico">Atlético Madrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="date">Fecha</Label>
                <Input id="date" type="date" />
              </div>
              <div>
                <Label htmlFor="time">Hora</Label>
                <Input id="time" type="time" />
              </div>
              <div>
                <Label htmlFor="field">Campo</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar campo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="principal">Campo Principal</SelectItem>
                    <SelectItem value="secundario">Campo Secundario</SelectItem>
                    <SelectItem value="entrenamiento">Campo de Entrenamiento</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="referee">Árbitro</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar árbitro" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mateu">Antonio Mateu Lahoz</SelectItem>
                    <SelectItem value="gil">Jesús Gil Manzano</SelectItem>
                    <SelectItem value="burgos">Ricardo de Burgos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1" onClick={() => setIsDialogOpen(false)}>
                  Programar Partido
                </Button>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar partidos por equipos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="programado">Programado</SelectItem>
                <SelectItem value="en curso">En Curso</SelectItem>
                <SelectItem value="finalizado">Finalizado</SelectItem>
                <SelectItem value="suspendido">Suspendido</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      {/* Matches List */}
      <div className="space-y-4">
        {filteredMatches.map((match) => (
          <Card key={match.id} className="card-hover">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                {/* Teams and Score */}
                <div className="lg:col-span-5">
                  <div className="flex items-center justify-between">
                    <div className="text-right flex-1">
                      <p className="font-semibold">{match.homeTeam}</p>
                      <p className="text-sm text-muted-foreground">Local</p>
                    </div>
                    <div className="mx-4 text-center">
                      {match.status === "Finalizado" ? (
                        <div className="text-2xl font-bold">
                          {match.homeScore} - {match.awayScore}
                        </div>
                      ) : (
                        <div className="text-xl font-medium text-muted-foreground">VS</div>
                      )}
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-semibold">{match.awayTeam}</p>
                      <p className="text-sm text-muted-foreground">Visitante</p>
                    </div>
                  </div>
                </div>

                {/* Match Info */}
                <div className="lg:col-span-4 space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{match.date} - {match.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{match.field}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{match.referee}</span>
                  </div>
                  {match.attendance > 0 && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{match.attendance.toLocaleString()} asistentes</span>
                    </div>
                  )}
                </div>

                {/* Status and Actions */}
                <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-3">
                  <Badge className={`${getStatusColor(match.status)} text-white`}>
                    {match.status}
                  </Badge>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Edit className="w-3 h-3" />
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1 text-red-600 hover:text-red-700">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center p-4">
          <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold">{matches.length}</p>
          <p className="text-sm text-muted-foreground">Total Partidos</p>
        </Card>
        <Card className="text-center p-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">{matches.filter(m => m.status === "Programado").length}</p>
          <p className="text-sm text-muted-foreground">Programados</p>
        </Card>
        <Card className="text-center p-4">
          <div className="w-8 h-8 bg-gray-500 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <p className="text-2xl font-bold text-gray-600">{matches.filter(m => m.status === "Finalizado").length}</p>
          <p className="text-sm text-muted-foreground">Finalizados</p>
        </Card>
        <Card className="text-center p-4">
          <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{matches.reduce((acc, match) => acc + match.attendance, 0).toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">Total Asistencia</p>
        </Card>
      </div>
    </div>
  );
};

export default Matches;
