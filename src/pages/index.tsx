import Card from "../components/Card";
import styles from "../styles/Form.module.css"
import Link from "next/link";
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Form() {

  const [nDoors, setNDoors] = useState(3)
  const [doorWithGift, setDoorWithGift] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#ff7373">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput value={nDoors}
          onChange={newQuantity => setNDoors(newQuantity)} 
          text="Doors quantity?" />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput value={doorWithGift}
          onChange={newGiftedDoor => setDoorWithGift(newGiftedDoor)} 
          text="Door with gift?" />
        </Card>
        <Card bgColor="#71ff7d">
          <Link href={`/game/${nDoors}/${doorWithGift}`} className={styles.a}>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
