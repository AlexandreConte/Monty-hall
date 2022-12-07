import { useState } from "react"
import { createDoors, updateDoors } from "../../functions/doors"
import Door from "../components/Door"
import Link from "next/link"
import styles from "../styles/Game.module.css"

export default function Game() {
  const [doors, setDoors] = useState(createDoors(5, 2))

  function renderDoors() {
    return doors.map(door => {
      return (
        <Door key={door.number} value={door}
          onChange={newDoor => {
            setDoors(updateDoors(doors, newDoor))
          }} />
      )
    })
  }

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {renderDoors()}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reset game</button>
        </Link>
      </div>
    </div>
  )
}
