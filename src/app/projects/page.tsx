import Navbar from "../components/navbar";

export default function Projects() {
    return (
        <>
            <Navbar />
            <div className="projects_sec">
                <h2 className="section-title">JS Projects</h2>
                <ol className="alpha-list">
                    <li>Calculator</li>
                    <li>Tic-Tac-Toe</li>
                    <li>Expense Tracker</li>
                    <li>Shopping List</li>
                    <li>API User Generator</li>
                    <li>Weather App</li>
                    <li>GitHub Profile Search</li>
                </ol>
            </div>
        </>
    );
}
