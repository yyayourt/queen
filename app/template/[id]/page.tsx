'use client'

import { useEffect, useState } from "react"
import { RestaurantHomepage } from "./restaurant-homepage"
import { BonbonShopHomepage } from "./bonbon-shop-homepage"

// Simulons une fonction pour obtenir les détails du template
const getTemplateDetails = (id: string) => {
  const templates = [
    { id: "1", name: "Restaurant Élégant", component: RestaurantHomepage },
    { id: "2", name: "Boutique de bonbon", component: BonbonShopHomepage },
    { id: "3", name: "Portfolio d'Artiste", component: null }, // À implémenter plus tard
  ]
  return templates.find(t => t.id === id) || { id: "0", name: "Template non trouvé", component: null }
}

export default function TemplatePage({ params }: { params: { id: string } }) {
  const [template, setTemplate] = useState(getTemplateDetails(params.id))

  useEffect(() => {
    setTemplate(getTemplateDetails(params.id))
  }, [params.id])

  if (!template.component) {
    return <div>Modèle non trouvé</div>
  }

  const TemplateComponent = template.component
  return <TemplateComponent />
}