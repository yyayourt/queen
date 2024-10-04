'use client'

import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Simulons une liste de modèles de sites vitrines
const templates = [
  { id: 1, name: "Restaurant Élégant", description: "Un design moderne pour les restaurants haut de gamme" },
  { id: 2, name: "Boutique de bonbon", description: "Une interface e-commerce attrayante et facile à utiliser" },
  { id: 3, name: "Portfolio d'Artiste", description: "Mettez en valeur vos créations avec ce design minimaliste" },
  // Ajoutez d'autres modèles ici
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Bienvenue sur Queen</h1>
      <p className="text-xl text-center mb-12">Découvrez nos magnifiques modèles de sites vitrines</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((templates) => (
          <Card key={templates.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{templates.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{templates.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Link href={`/template/${templates.id}`} passHref>
                <Button>Voir le modèle</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
