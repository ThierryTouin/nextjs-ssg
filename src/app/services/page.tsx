import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  const services = [
    {
      title: "Service 1",
      description: "Description détaillée du service 1. Nous offrons une solution complète pour répondre à vos besoins.",
    },
    {
      title: "Service 2",
      description: "Description détaillée du service 2. Notre expertise vous garantit des résultats optimaux.",
    },
    {
      title: "Service 3",
      description: "Description détaillée du service 3. Une approche innovante pour des solutions durables.",
    },
    {
      title: "Service 4",
      description: "Description détaillée du service 4. Personnalisé selon vos exigences spécifiques.",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Nos Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}