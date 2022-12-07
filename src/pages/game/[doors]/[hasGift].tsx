import { useEffect, useState } from "react"
import { createDoors, updateDoors } from "../../../../functions/doors"
import Door from "../../../components/Door"
import Link from "next/link"
import styles from "../../../styles/Game.module.css"
import { useRouter } from "next/router"

export default function Game() {

  const router = useRouter()
  const [doors, setDoors] = useState([])
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const doors = Number(router.query.doors)
    const hasGift = Number(router.query.hasGift)

    const nValidDoors = doors >= 3 && doors <= 100
    const hasValidGift = hasGift >= 1 && hasGift <= doors

    setIsValid(nValidDoors && hasValidGift)
  }, [doors])

  useEffect(() => {
    const doors = Number(router.query.doors)
    const hasGift = Number(router.query.hasGift)

    setDoors(createDoors(doors, hasGift))
  }, [router?.query])

  function renderDoors() {
    return isValid && doors.map(door => {
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
        {isValid ?
          renderDoors() : <h2>Invalid Values</h2>
        }
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Reset game</button>
        </Link>
      </div>
    </div>
  )
}
