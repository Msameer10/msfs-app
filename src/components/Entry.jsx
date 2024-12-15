export default function Entry(details) {
    return (
        <div className="Entry card text-center bg-dark">
            <h5>{details.entry.route}</h5>
            <p>Date: {details.entry.date} &emsp; Aircraft: {details.entry.aircraft} &emsp; Flight: {details.entry.flight} 
                &emsp; Distance: {details.entry.distance} &emsp; Duration: {details.entry.duration} &emsp; Cruise Alt: {details.entry.cruise_alt}</p>
            <p></p>
        </div>
        
    )
}