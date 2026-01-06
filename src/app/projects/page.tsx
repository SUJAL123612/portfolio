export default function Projects() {
    return (
        <>
            <div className="bg-black/90 border border-transparent w-full h-[1940px]">
                <h2
                    className="text-[50px] font-sans text-white cursor-default underline underline-offset-7 decoration-purple-600 decoration-4 text-center -mt-[50px]"
                    id="projects" style={{ fontFamily: "'Inter', sans-serif;" }}>
                    PROJECTS
                </h2>
                <div className="flex ml-5 mt-[-30px]">
                    <div className=" rounded-lg border border-transparent mt-16 w-80 md:w-96 p-6 flex flex-col items-center text-center ml-[20px] bg-gray-900 shadow-lg hover:shadow-purple-600 transition duration-300">
                        <img src="restaurent.png" alt="Restaurant Icon" className="w-full h-48 object-contain mb-4 cursor-default rounded transition-transform duration-500 hover:scale-110"/>
                        <p className="group text-2xl text-white font-semibold mb-2 hover:text-purple-500" style={{ fontFamily: "'Inter', sans-serif" }} >
                            <a href="https://sujal123612.github.io/restaurent/" target="_blank" className="block group-hover:hidden">Restaurant</a>
                            <a href="https://sujal123612.github.io/restaurent/" target="_blank" className="hidden group-hover:block">Show Project</a>
                        </p>
                        <p className="text-base text-white/60 font-sans cursor-default" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            Built a modern, single-page restaurant website using HTML and CSS. Features include an image slider, responsive layout, parallax backgrounds, a detailed food menu, featured chef sections, and a footer with contact and gallery information.
                        </p>
                    </div>
                    <div className="rounded-lg border border-transparent mt-16 w-80 md:w-96 p-6 flex flex-col items-center text-center ml-[20px] bg-gray-900 shadow-lg hover:shadow-purple-600 transition duration-300">
                        <img src="calculator.png" alt="calculator Icon" className="w-full h-48 object-contain mb-4 cursor-default rounded transition-transform duration-500 hover:scale-110" />
                        <p className="group text-2xl text-white font-sans cursor-pointer mb-2 hover:text-purple-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <a href="https://sujal123612.github.io/simple_calc/" target="_blank" className="block group-hover:hidden">Calculator</a>
                            <a href="https://sujal123612.github.io/simple_calc/" target="_blank" className="hidden group-hover:block">Show Project</a>
                        </p>
                        <p className="text-base text-white/60 font-sans cursor-default" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            Simple Operations Like Addition, Subtraction, Multiplication and Division.
                        </p>
                    </div>
                    <div className="rounded-lg border border-transparent mt-16 w-80 md:w-96 p-6 flex flex-col items-center text-center ml-[20px] bg-gray-900 shadow-lg hover:shadow-purple-600 transition duration-300">
                        <img src="Tic_Tac_Toe.png" alt="tic-tac-toe Icon" className="w-full h-48 object-contain mb-4 cursor-default rounded transition-transform duration-500 hover:scale-110" />
                        <p className="group text-2xl text-white font-sans cursor-pointer mb-2 hover:text-purple-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <a href="https://sujal123612.github.io/Tic-Tac-Toe/" target="_blank" className="block group-hover:hidden">Tic-Tac-Toe</a>
                            <a href="https://sujal123612.github.io/Tic-Tac-Toe/" target="_blank" className="hidden group-hover:block">Show Project</a>
                        </p>
                        <p className="text-base text-white/60 font-sans cursor-default" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            Play with a friend, customize player names, and experience the joy of victory in this classic two-player game. Simple and interactive.
                        </p>
                    </div>
                </div>
                <div className="flex ml-5 ">
                    <div className="rounded-lg border border-transparent mt-16 w-80 md:w-96 p-6 flex flex-col items-center text-center ml-[20px] bg-gray-900 shadow-lg hover:shadow-purple-600 transition duration-300">
                        <img src="Expense_Tracker.png" alt="expense Icon" className="w-full h-48 object-contain mb-4 cursor-default rounded transition-transform duration-500 hover:scale-110" />
                        <p className="group text-2xl text-white font-sans cursor-pointer mb-2 hover:text-purple-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <a href="https://sujal123612.github.io/Expense_Tracker/" target="_blank" className="block group-hover:hidden">Expense_Tracker</a>
                            <a href="https://sujal123612.github.io/Expense_Tracker/" target="_blank" className="hidden group-hover:block">Show Project</a>
                        </p>
                        <p className="text-base text-white/60 font-sans cursor-default" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            A simple expense tracker web application using HTML, CSS, and JavaScript. Add your income and expenses, view the transaction history, and track your total balance dynamically.
                        </p>
                    </div>
                    <div className="rounded-lg border border-transparent mt-16 w-80 md:w-96 p-6 flex flex-col items-center text-center ml-[20px] bg-gray-900 shadow-lg hover:shadow-purple-600 transition duration-300">
                        <img src="Shopping_List.png" alt="shopping Icon" className="w-full h-48 object-contain mb-4 cursor-default rounded transition-transform duration-500 hover:scale-110" />
                        <p className="group text-2xl text-white font-sans cursor-pointer mb-2 hover:text-purple-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <a href="https://sujal123612.github.io/Shopping_List/" target="_blank" className="block group-hover:hidden">Shopping_List</a>
                            <a href="https://sujal123612.github.io/Shopping_List/" target="_blank" className="hidden group-hover:block">Show Project</a>
                        </p>
                        <p className="text-base text-white/60 font-sans cursor-default" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            A simple shopping list web app built with HTML, CSS, and JavaScript. Features include adding, editing, deleting, searching, and saving items using localStorage.
                        </p>
                    </div>
                    <div className="rounded-lg border border-transparent mt-16 w-80 md:w-96 p-6 flex flex-col items-center text-center ml-[20px] bg-gray-900 shadow-lg hover:shadow-purple-600 transition duration-300">
                        <img src="API.png" alt="Api Icon" className="w-full h-48 object-contain mb-4 cursor-default rounded transition-transform duration-500 hover:scale-110" />
                        <p className="group text-2xl text-white font-sans cursor-pointer mb-2 hover:text-purple-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <a href="https://sujal123612.github.io/Api_Random_User/" target="_blank" className="block group-hover:hidden">API_Random_User</a>
                            <a href="https://sujal123612.github.io/Api_Random_User/" target="_blank" className="hidden group-hover:block">Show Project</a>
                        </p>
                        <p className="text-base text-white/60 font-sans cursor-default" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            Generates random user profiles using the Random User API. Built with HTML, CSS, and JavaScript for a responsive and interactive UI.
                        </p>
                    </div>
                </div>
                <div className="flex ml-5">
                    <div className="rounded-lg border border-transparent mt-16 w-80 md:w-96 p-6 flex flex-col items-center text-center ml-[20px] bg-gray-900 shadow-lg hover:shadow-purple-600 transition duration-300">
                        <img src="Weather.png" alt="weather Icon" className="w-full h-48 object-contain mb-4 cursor-default rounded transition-transform duration-500 hover:scale-110" />
                        <p className="group text-2xl text-white font-sans cursor-pointer mb-2 hover:text-purple-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <a href="https://sujal123612.github.io/Weather_APP/" target="_blank" className="block group-hover:hidden">Weather_App</a>
                            <a href="https://sujal123612.github.io/Weather_APP/" target="_blank" className="hidden group-hover:block">Show Project</a>
                        </p>
                        <p className="text-base text-white/60 font-sans cursor-default" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            A simple and responsive Weather App built with HTML, CSS, and JavaScript. It fetches real-time weather data using the OpenWeatherMap API based on user input.
                        </p>
                    </div>
                    <div className="rounded-lg border border-transparent mt-16 w-80 md:w-96 p-6 flex flex-col items-center text-center ml-[20px] bg-gray-900 shadow-lg hover:shadow-purple-600 transition duration-300">
                        <img src="Github.png" alt="github Icon" className="w-full h-48 object-contain mb-4 cursor-default rounded transition-transform duration-500 hover:scale-110" />
                        <p className="group text-2xl text-white font-sans cursor-pointer mb-2 hover:text-purple-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <a href="https://sujal123612.github.io/Github_Profile_search/" target="_blank" className="block group-hover:hidden">Github_Profile_Search</a>
                            <a href="https://sujal123612.github.io/Github_Profile_search/" target="_blank" className="hidden group-hover:block">Show Project</a>
                        </p>
                        <p className="text-base text-white/60 font-sans cursor-default" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            The GitHub Profile Search is a simple and interactive web application that allows users to search for GitHub profiles by entering a username.
                        </p>
                    </div>
                    <div className="rounded-lg border border-transparent mt-16 w-80 md:w-96 p-6 flex flex-col items-center text-center ml-[20px] bg-gray-900 shadow-lg hover:shadow-purple-600 transition duration-300">
                        <img src="Pokemon.png" alt="github Icon" className="w-full h-48 object-contain mb-4 cursor-default rounded transition-transform duration-500 hover:scale-110" />
                        <p className="group text-2xl text-white font-sans cursor-pointer mb-2 hover:text-purple-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <a href="https://sujal123612.github.io/Pokemon_Project/first_page" target="_blank" className="block group-hover:hidden">Pokemon Battle Arena</a>
                            <a href="https://sujal123612.github.io/Pokemon_Project/first_page" target="_blank" className="hidden group-hover:block">Show Project</a>
                        </p>
                        <p className="text-base text-white/60 font-sans cursor-default" style={{ fontFamily: "'Roboto', sans-serif" }}>
                            Pokémon-inspired battle arena built with React.
                        </p>
                    </div>
                </div>
                <div className="flex ml-5">
                    <div className="rounded-lg border border-transparent mt-16 w-80 md:w-96 p-6 flex flex-col items-center text-center ml-[20px] bg-gray-900 shadow-lg hover:shadow-purple-600 transition duration-300">
                        <img src="LMS.png" alt="LMS Icon" className="w-full h-48 object-contain mb-4 cursor-default rounded transition-transform duration-500 hover:scale-110" />
                        <p className="group text-2xl text-white font-sans cursor-pointer mb-2 hover:text-purple-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <a href="https://library-management-system-d0nlu2eve-sujal-chalkes-projects.vercel.app/" target="_blank" className="block group-hover:hidden">Library_Management_System</a>
                            <a href="https://library-management-system-d0nlu2eve-sujal-chalkes-projects.vercel.app/" target="_blank" className="hidden group-hover:block">Show Project</a>
                        </p>
                        <p className="text-base text-white/60 font-sans cursor-default" style={{ fontFamily: "'Roboto', sans-serif" }}>
                        Developed a full-stack Online Library Management System using Next.js, React, TypeScript, and MySQL, enabling admins to manage books and members while allowing users to issue, return, and track books with fine calculation. Designed a responsive UI with secure role-based access.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
