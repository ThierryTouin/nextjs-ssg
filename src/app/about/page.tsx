import { Separator } from "../../components/ui/separator";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">À propos de nous</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Notre Histoire</h2>
          <p className="text-muted-foreground">
            Fondée en 2020, notre entreprise a commencé avec une vision simple : créer des solutions innovantes qui répondent aux besoins réels de nos clients. Au fil des années, nous avons grandi pour devenir un leader dans notre domaine, tout en restant fidèles à nos valeurs fondamentales.
          </p>
        </section>
        
        <Separator />
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
          <p className="text-muted-foreground">
          Notre%20mission%20est%20de%20fournir%20des%20services%20exceptionnels%20qui%20d%C3%A9passent%20les%20attentes%20de%20nos%20clients.%20Nous%20nous%20effor%C3%A7ons%20d%27innover%20constamment%20et%20de%20maintenir%20les%20plus%20hauts%20standards%20de%20qualit%C3%A9%20dans%20tout%20ce%20que%20nous%20faisons.          </p>
        </section>
        
        <Separator />
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Notre Équipe</h2>
          <p className="text-muted-foreground mb-4">
            Notre équipe est composée de professionnels passionnés et talentueux, dédiés à l'excellence et à la satisfaction client.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[1, 2, 3].map((member) => (
              <div key={member} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-muted mb-4"></div>
                <h3 className="font-medium">Membre de l'équipe {member}</h3>
                <p className="text-sm text-muted-foreground">Poste</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}