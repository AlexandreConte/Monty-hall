import DoorModel from "../src/model/Door";

export function createDoors(quantity: number, doorWithGift: number): DoorModel[] {
  
  const array = Array.from({length: quantity}, (_, i) => {
    const number = i + 1
    const hasGift = number === doorWithGift

    return new DoorModel(number, hasGift)
  })

  return array
}

export function updateDoors(doors: DoorModel[], changedDoor: DoorModel): DoorModel[] {
  
  return doors.map(door => {
    const equalsChanged = door.number === changedDoor.number

    if (equalsChanged) {
      return changedDoor
    } else {
      return changedDoor.opened ? door : door.deselect()
    }
  })
}
