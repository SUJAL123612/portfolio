import Navbar from "../components/navbar";

export default function Projects() {
    return (
        <>
            <div className="mx-auto my-2 p-5 bg-white rounded shadow-md w-[90%] max-w-3xl">
                <h2 className="text-black text-center font-bold text-2xl mb-4">My Projects</h2>

                <table className="table-auto w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">No.</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Project Name</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">1</td>
                            <td className="border border-gray-300 px-4 py-2 cursor-pointer"><a href="https://sujal123612.github.io/restaurent/">Sakura Restaurant</a></td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">2</td>
                            <td className="border border-gray-300 px-4 py-2 cursor-pointer"><a href="https://sujal123612.github.io/simple_calc/">Calculator</a></td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">3</td>
                            <td className="border border-gray-300 px-4 py-2 cursor-pointer"><a href="https://sujal123612.github.io/Tic-Tac-Toe/">Tic-Tac-Toe</a></td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">4</td>
                            <td className="border border-gray-300 px-4 py-2 cursor-pointer"><a href="https://sujal123612.github.io/Expense_Tracker/">Expense Tracker</a></td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">5</td>
                            <td className="border border-gray-300 px-4 py-2 cursor-pointer"><a href="https://sujal123612.github.io/Shopping_List/">Shopping List</a></td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">6</td>
                            <td className="border border-gray-300 px-4 py-2 cursor-pointer"><a href="https://sujal123612.github.io/Api_Random_User/">API Random User Generator</a></td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">7</td>
                            <td className="border border-gray-300 px-4 py-2 cursor-pointer"><a href="https://sujal123612.github.io/Weather_APP/">Weather App</a></td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">8</td>
                            <td className="border border-gray-300 px-4 py-2 cursor-pointer"><a href="https://sujal123612.github.io/Github_Profile_search/">GitHub Profile Search</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
}
