export default function Education() {
    return (
        <>
            <div className="bg-black/90 border border-transparent w-full h-[600px]">
                <h2
                    className="text-[50px] font-sans text-white cursor-default underline underline-offset-7 decoration-purple-600 decoration-4 text-center -mt-[30px]"
                    id="education" style={{ fontFamily: "'Inter', sans-serif;" }}>
                    EDUCATION
                </h2>
                <div className="border border-transparent w-full h-[500px] flex items-center">
                    <div className="flex items-center -mt-[325px] ml-[110px]">
                        <img src="book.png" alt="Book Icon" className="w-10 h-10 mr-3" />
                        <p className="text-3xl font-sans text-white cursor-default" style={{ fontFamily: "'Roboto', sans-serif;" }}>SSC(Maharashtra State Board)</p>
                        <p className="text-3xl font-sans text-white cursor-default ml-[413px]">2009-2019</p>
                    </div>
                </div>
                <div className="flex items-center -mt-[385px] ml-[110px]">
                        <p className="text-2xl font-sans text-white cursor-default ml-[60px]" style={{ fontFamily: "'Roboto', sans-serif;" }}>Guru Nanak English High School</p>
                        <p className="text-2xl font-sans text-white cursor-default ml-[520px]">70.80%</p>
                </div>
                <div className="border border-transparent w-full h-[500px] flex items-center">
                    <div className="flex items-center -mt-[325px] ml-[110px]">
                        <img src="book.png" alt="Book Icon" className="w-10 h-10 mr-3" />
                        <p className="text-3xl font-sans text-white cursor-default" style={{ fontFamily: "'Roboto', sans-serif;" }}>HSC-Science(Maharashtra State Board)</p>
                        <p className="text-3xl font-sans text-white cursor-default ml-[292px]">2019-2021</p>
                    </div>
                </div>
                <div className="flex items-center -mt-[385px] ml-[110px]">
                        <p className="text-2xl font-sans text-white cursor-default ml-[60px]" style={{ fontFamily: "'Roboto', sans-serif;" }}>Vidya Prasark Mandal&apos;s B.N. Bandodkar College of Science</p>
                        <p className="text-2xl font-sans text-white cursor-default ml-[240px]">74.17%</p>
                </div>
                <div className="border border-transparent w-full h-[500px] flex items-center">
                    <div className="flex items-center -mt-[325px] ml-[110px]">
                        <img src="book.png" alt="Book Icon" className="w-10 h-10 mr-3" />
                        <p className="text-3xl font-sans text-white cursor-default" style={{ fontFamily: "'Roboto', sans-serif;" }}>Bachelor of Science - Computer Science</p>
                        <p className="text-3xl font-sans text-white cursor-default ml-[280px]">2021-2024</p>
                    </div>
                </div>
                <div className="flex items-center -mt-[385px] ml-[110px]">
                        <p className="text-2xl font-sans text-white cursor-default ml-[60px]" style={{ fontFamily: "'Roboto', sans-serif;" }}>Mulund College of Commmerce</p>
                        <p className="text-2xl font-sans text-white cursor-default ml-[510px]">7.89 CGPA</p>
                </div>
            </div>
        </>
    );
}
