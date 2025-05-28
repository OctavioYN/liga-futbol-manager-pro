
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { 
  UserCheck, 
  Plus, 
  Search, 
  Edit,
  Trash2,
  Award,
  Calendar
} from "lucide-react";

const Referees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const referees = [
    {
      id: 1,
      name: "Antonio Mateu Lahoz",
      license: "REF001",
      experience: "15 años",
      matchesOfficiated: 245,
      status: "Activo",
      phone: "+34 666 123 456",
      email: "mateu@referees.com",
      category: "Primera División"
    },
    {
      id: 2,
      name: "Jesús Gil Manzano",
      license: "REF002",
      experience: "12 años",
      matchesOfficiated: 198,
      status: "Activo",
      phone: "+34 666 789 012",
      email: "gil@referees.com",
      category: "Primera División"
    },
    {
      id: 3,
      name: "Ricardo de Burgos",
      license: "REF003",
      experience: "8 años",
      matchesOfficiated: 156,
      status: "Activo",
      phone: "+34 666 345 678",
      email: "burgos@referees.com",
      category: "Segunda División"
    },
  ];

  const filteredReferees = referees.filter(referee =>
    referee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    referee.license.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <UserCheck className="w-8 h-8 text-primary" />
            Gestión de Árbitros
          </h1>
          <p className="text-muted-foreground">Administra el cuerpo arbitral de tu liga</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Nuevo Árbitro
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Registrar Nuevo Árbitro</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="refName">Nombre Completo</Label>
                <Input id="refName" placeholder="Antonio Mateu Lahoz" />
              </div>
              <div>
                <Label htmlFor="license">Número de Licencia</Label>
                <Input id="license" placeholder="REF001" />
              </div>
              <div>
                <Label htmlFor="category">Categoría</Label>
                <Input id="category" placeholder="Primera División" />
              </div>
              <div>
                <Label htmlFor="experience">Años de Experiencia</Label>
                <Input id="experience" type="number" placeholder="15" />
              </div>
              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" placeholder="+34 666 123 456" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="arbitro@email.com" />
              </div>
              <div className="flex gap-2">
                <Button className="flex-1" onClick={() => setIsDialogOpen(false)}>
                  Registrar Árbitro
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
              placeholder="Buscar árbitros por nombre o licencia..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Referees Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredReferees.map((referee) => (
          <Card key={referee.id} className="card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{referee.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">Licencia: {referee.license}</p>
                </div>
                <Badge variant={referee.status === "Activo" ? "default" : "secondary"}>
                  {referee.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Categoría:</span>
                  <span className="font-medium">{referee.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Experiencia:</span>
                  <span className="font-medium">{referee.experience}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Teléfono:</span>
                  <span className="font-medium">{referee.phone}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium text-xs">{referee.email}</span>
                </div>
              </div>

              {/* Referee Stats */}
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <Award className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                <p className="text-2xl font-bold">{referee.matchesOfficiated}</p>
                <p className="text-xs text-muted-foreground">Partidos Dirigidos</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-1">
                  <Calendar className="w-3 h-3" />
                  Programar
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
          <UserCheck className="w-8 h-8 text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold">{referees.length}</p>
          <p className="text-sm text-muted-foreground">Árbitros Registrados</p>
        </Card>
        <Card className="text-center p-4">
          <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <p className="text-2xl font-bold text-green-600">{referees.filter(r => r.status === "Activo").length}</p>
          <p className="text-sm text-muted-foreground">Activos</p>
        </Card>
        <Card className="text-center p-4">
          <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{referees.reduce((acc, ref) => acc + ref.matchesOfficiated, 0)}</p>
          <p className="text-sm text-muted-foreground">Total Partidos</p>
        </Card>
        <Card className="text-center p-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-white font-bold text-sm">AVG</span>
          </div>
          <p className="text-2xl font-bold">{Math.round(referees.reduce((acc, ref) => acc + ref.matchesOfficiated, 0) / referees.length)}</p>
          <p className="text-sm text-muted-foreground">Promedio Partidos</p>
        </Card>
      </div>
    </div>
  );
};

export default Referees;
