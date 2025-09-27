import './Day.css'
import { useState } from 'react'

export default function Day({dayOfTheWeek}: {dayOfTheWeek:string}) {
    const [chest, setChest] = useState(0);

    function handleNewExercise(muscleGroup: string, numSets: number) {
        if (muscleGroup == "chest") {
            setChest(numSets);
        }
        else {
            throw new Error("Only implemented chest so far");
        }
    }
    return (
        <div className="day-container">
            <h2>{dayOfTheWeek}</h2>
            <p>Hello</p>
            <form>
                <div className="form-row">
                    <div className="form-group" id="muscleForm">
                        <input id="muscle-group" type="text" placeholder='Muscle group...'></input>
                    </div>
                    <div className="form-group" id="setForm">
                        <input id="sets" type="number" placeholder='1'></input>
                    </div>
                </div>
            </form>
        </div>
    )
}