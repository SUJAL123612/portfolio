import Navbar from "../components/navbar";

export default function Projects() {
    return (
        <>
            <Navbar />
            <div className="m-[40px auto] p-[20px] bg-white-500 ">
                <h2 className=" text-black-600/100 text-center font-weight: 700; text-2xl inset-x-0 bottom-0 h-16">JS Projects</h2>
                <ol className="text-black-300/100 list-[lower-alpha] text-lg ps-8">
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
