export default function Projects() {
    return (
        <>
            <div className="bg-black/90 border border-transparent w-full h-[1340px]">
                <h2
                    className="text-2xl font-sans text-white cursor-default underline underline-offset-7 decoration-purple-600 decoration-4 ml-[580px] -mt-[50px]"
                    id="projects">
                    PROJECTS
                </h2>
                <div className="flex">
                <div className="rounded-lg border border-white mt-[60px] w-[400px] h-[400px] ml-[20px] p-6 flex flex-col items-center text-center">
                    <img src="restaurent.png" alt="Restaurant Icon" className="w-75 h-40 mb-4 cursor-pointer" />
                    <p className="text-2xl text-white font-sans cursor-pointer mb-2 hover:text-gray-400">
                    <a href="https://sujal123612.github.io/restaurent/" target="_blank">Restaurant</a>
                    </p>
                    <p className="text-1xl text-white/60 font-sans cursor-pointer">
                    Built a modern, single-page restaurant website using HTML and CSS. Features include an image slider, responsive layout, parallax backgrounds, a detailed food menu, featured chef sections, and an footer with contact and gallery information.
                    </p>
                </div>
                <div className="rounded-lg border border-white mt-[60px] w-[400px] h-[400px] ml-[20px] p-6 flex flex-col items-center text-center">
                    <img src="calculator.png" alt="calculator Icon" className="w-75 h-40 mb-4 cursor-pointer" />
                    <p className="text-2xl text-white font-sans cursor-pointer mb-2 hover:text-gray-400">
                    <a href="https://sujal123612.github.io/simple_calc/" target="_blank">Calculator</a>
                    </p>
                    <p className="text-1xl text-white/60 font-sans cursor-pointer">
                    Simple Operations Like Addition, Subtraction, Multiplication and Division.
                    </p>
                </div>
                <div className="rounded-lg border border-white mt-[60px] w-[400px] h-[400px] ml-[20px] p-6 flex flex-col items-center text-center">
                    <img src="Tic_Tac_Toe.png" alt="tic-tac-toe Icon" className="w-75 h-40 mb-4 cursor-pointer" />
                    <p className="text-2xl text-white font-sans cursor-pointer mb-2 hover:text-gray-400">
                    <a href="https://sujal123612.github.io/Tic-Tac-Toe/" target="_blank">Tic-Tac-Toe</a>
                    </p>
                    <p className="text-1xl text-white/60 font-sans cursor-pointer">
                    Play with a friend, customize player names, and experience the joy of victory in this classic two-player game. Simple and interactive.
                    </p>
                </div>
                </div>
                <div className="flex">
                <div className="rounded-lg border border-white mt-[60px] w-[400px] h-[380px] ml-[20px] p-6 flex flex-col items-center text-center">
                    <img src="Expense_Tracker.png" alt="expense Icon" className="w-45 h-40 mb-4 cursor-pointer" />
                    <p className="text-2xl text-white font-sans cursor-pointer mb-2 hover:text-gray-400">
                    <a href="https://sujal123612.github.io/Expense_Tracker/" target="_blank">Expense_Tracker</a>
                    </p>
                    <p className="text-1xl text-white/60 font-sans cursor-pointer">
                    A simple expense tracker web application using HTML, CSS, and JavaScript. Add your income and expenses, view the transaction history, and track your total balance dynamically.
                    </p>
                </div>
                <div className="rounded-lg border border-white mt-[60px] w-[400px] h-[380px] ml-[20px] p-6 flex flex-col items-center text-center">
                    <img src="Shopping_List.png" alt="shopping Icon" className="w-65 h-40 mb-4 cursor-pointer" />
                    <p className="text-2xl text-white font-sans cursor-pointer mb-2 hover:text-gray-400">
                    <a href="https://sujal123612.github.io/Shopping_List/" target="_blank">Shopping_List</a>
                    </p>
                    <p className="text-1xl text-white/60 font-sans cursor-pointer">
                    A simple shopping list web app built with HTML, CSS, and JavaScript. Features include adding, editing, deleting, searching, and saving items using localStorage.
                    </p>
                </div>
                <div className="rounded-lg border border-white mt-[60px] w-[400px] h-[380px] ml-[20px] p-6 flex flex-col items-center text-center">
                    <img src="API.png" alt="Api Icon" className="w-75 h-40 mb-4 cursor-pointer" />
                    <p className="text-2xl text-white font-sans cursor-pointer mb-2 hover:text-gray-400">
                    <a href="https://sujal123612.github.io/Api_Random_User/" target="_blank">API_Random_User</a>
                    </p>
                    <p className="text-1xl text-white/60 font-sans cursor-pointer">
                    Generates random user profiles using the Random User API. Built with HTML, CSS, and JavaScript for a responsive and interactive UI.
                    </p>
                </div>
                </div>
                <div className="flex">
                <div className="rounded-lg border border-white mt-[60px] w-[400px] h-[380px] ml-[20px] p-6 flex flex-col items-center text-center">
                    <img src="Weather.png" alt="weather Icon" className="w-75 h-40 mb-4 cursor-pointer" />
                    <p className="text-2xl text-white font-sans cursor-pointer mb-2 hover:text-gray-400">
                    <a href="https://sujal123612.github.io/Weather_APP/" target="_blank">Weather_App</a>
                    </p>
                    <p className="text-1xl text-white/60 font-sans cursor-pointer">
                    A simple and responsive Weather App built with HTML, CSS, and JavaScript. It fetches real-time weather data using the OpenWeatherMap API based on user input.
                    </p>
                </div>
                <div className="rounded-lg border border-white mt-[60px] w-[400px] h-[380px] ml-[20px] p-6 flex flex-col items-center text-center">
                    <img src="Github.png" alt="github Icon" className="w-75 h-40 mb-4 cursor-pointer" />
                    <p className="text-2xl text-white font-sans cursor-pointer mb-2 hover:text-gray-400">
                    <a href="https://sujal123612.github.io/Github_Profile_search/" target="_blank">Github_Profile_Search</a>
                    </p>
                    <p className="text-1xl text-white/60 font-sans cursor-pointer">
                    The GitHub Profile Search is a simple and interactive web application that allows users to search for GitHub profiles by entering a username.
                    </p>
                </div>
                </div>
            </div>
        </>
    );
}
