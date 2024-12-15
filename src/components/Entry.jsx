export default function Entry(details) {
    return (
        <div className="Entry card text-center bg-dark">
            <h5>{details.entry.route}</h5>
            <p>Date: {details.entry.date}</p>
            <p>Aircraft: {details.entry.aircraft}</p>
            <p>Flight: {details.entry.flight}</p>
            <p>Distance: {details.entry.distance}</p>
            <p>Duration: {details.entry.duration}</p>
        </div>
        
    )
}