import Entry from "./Entry"
import entryData from "./entryData"

export default function Main() {
    const entries = entryData.map((entry) => {
        return (
            <Entry
                id={entry.id}
                entry={entry}
            />
        )
    })
    return (
        <div id="Main" className="container">
            <p>Main component</p>
            {entries}
        </div>
    )
}