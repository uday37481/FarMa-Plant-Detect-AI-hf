export interface Crop {
  name: string
  diseases: number
  image: string // path under /images/crops
}

export const crops: Crop[] = [
  { name: "Tomato", diseases: 12, image: "/images/crops/tomato.png" },
  { name: "Potato", diseases: 8, image: "/images/crops/potato.png" },
  { name: "Corn", diseases: 6, image: "/images/crops/corn.png" },
  { name: "Rice", diseases: 10, image: "/images/crops/rice.png" },
  { name: "Wheat", diseases: 7, image: "/images/crops/wheat.png" },
  { name: "Apple", diseases: 5, image: "/images/crops/apple.png" },
  { name: "Grape", diseases: 4, image: "/images/crops/grape.png" },
  { name: "Onion", diseases: 6, image: "/images/crops/onion.jpg" },
]
