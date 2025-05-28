
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Plus, 
  Search, 
  Edit,
  Trash2,
  Calendar,
  Users,
  Zap
} from "lucide-react";

const Fields = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fields = [
    {
      id: 1,
      name: "Campo Principal",
      location: "Av. Principal 123, Madrid",
      capacity: 5000,
      surface: "Césped Natural",
      dimensions: "105x68m",
      lighting: true,
      status: "Disponible",
      nextMatch: "2024-05-28 16:00",
      matchesPlayed: 45
    },
    {
      id: 2,
      name: "Campo Secundario",
      location: "C/ Deportiva 456, Madrid", 
      capacity: 2500,
      surface: "Césped Artificial",
      dimensions: "100x64m",
      lighting: true,
      status: "Ocupado",
      nextMatch: "2024-05-29 18:30",
      matchesPlayed: 32
    },
    {
      id: 3,
      name: "Campo de Entrenamiento",
      location: "Zona Deportiva Norte",
      capacity: 500,
      surface: "Césped Natural",
      dimensions: "90x60m",
      lighting: false,
      status: "Mantenimiento",
      nextMatch: "2024-06-01 10:00",
      matchesPlayed: 18
    },
  ];

  const filteredFields = fields.filter(field =>
    field.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    field.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponible": return "bg-green-500";
      case "Ocupado": return "bg-red-500";
      case "Mantenimiento": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <MapPin className="w-8 h-8 text-primary" />
            Gestión de Campos
          </h1>
          <p className="text-muted-foreground">Administra las instalaciones deportivas</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Nuevo Campo
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Registrar Nuevo Campo</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fieldName">Nombre del Campo</Label>
                <Input id="fieldName" placeholder="Campo Principal" />
              </div>
              <div>
                <Label htmlFor="location">Ubicación</Label>
                <Input id="location" placeholder="Av. Principal 123, Madrid" />
              </div>
              <div>
                <Label htmlFor="capacity">Capacidad</Label>
                <Input id="capacity" type="number" placeholder="5000" />
              </div>
              <div>
                <Label htmlFor="surface">Tipo de Superficie</Label>
                <Input id="surface" placeholder="Césped Natural" />
              </div>
              <div>
                <Label htmlFor="dimensions">Dimensiones</Label>
                <Input id="dimensions" placeholder="105x68m" />
              </div>
              <div>
                <Label htmlFor="description">Descripción</Label>
                <Textarea id="description" placeholder="Descripción del campo..." />
              </div>
              <div className="flex gap-2">
                <Button className="flex-1" onClick={() => setIsDialogOpen(false)}>
                  Registrar Campo
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
              placeholder="Buscar campos por nombre o ubicación..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Fields Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredFields.map((field) => (
          <Card key={field.id} className="card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{field.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{field.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(field.status)}`}></div>
                  <Badge variant="secondary">{field.status}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Capacidad:</span>
                  <span className="font-medium">{field.capacity.toLocaleString()} personas</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Superficie:</span>
                  <span className="font-medium">{field.surface}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Dimensiones:</span>
                  <span className="font-medium">{field.dimensions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Iluminación:</span>
                  <div className="flex items-center gap-1">
                    {field.lighting ? (
                      <Zap className="w-3 h-3 text-yellow-500" />
                    ) : null}
                    <span className="font-medium">{field.lighting ? "Sí" : "No"}</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Próximo partido:</span>
                  <span className="font-medium text-xs">{field.nextMatch}</span>
                </div>
              </div>

              {/* Field Stats */}
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <Calendar className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                <p className="text-2xl font-bold">{field.matchesPlayed}</p>
                <p className="text-xs text-muted-foreground">Partidos Jugados</p>
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
          <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
          <p className="text-2xl font-bold">{fields.length}</p>
          <p className="text-sm text-muted-foreground">Campos Registrados</p>
        </Card>
        <Card className="text-center p-4">
          <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <p className="text-2xl font-bold text-green-600">{fields.filter(f => f.status === "Disponible").length}</p>
          <p className="text-sm text-muted-foreground">Disponibles</p>
        </Card>
        <Card className="text-center p-4">
          <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{fields.reduce((acc, field) => acc + field.capacity, 0).toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">Capacidad Total</p>
        </Card>
        <Card className="text-center p-4">
          <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <p className="text-2xl font-bold">{fields.reduce((acc, field) => acc + field.matchesPlayed, 0)}</p>
          <p className="text-sm text-muted-foreground">Total Partidos</p>
        </Card>
      </div>
    </div>
  );
};

export default Fields;
