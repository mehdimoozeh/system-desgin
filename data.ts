export const USERS: { id: number, name: string }[] = [
  {
    id: 1,
    name: 'Mohammad'
  },
  {
    id: 2,
    name: 'Farnood'
  },
  {
    id: 3,
    name: 'Siavash'
  }
]

export const RELATIONS: { sourceId: number, targetId: number }[] = [
  {
    sourceId: 1,
    targetId: 2
  },
  {
    sourceId: 1,
    targetId: 3
  },
  {
    sourceId: 2,
    targetId: 1
  }
]
