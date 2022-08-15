
function Hello() {
    return (
        <div className='relative flex flex-col justify-between flex-1 py-20 bg-cover lg:py-32 px-7 lg:px-20'>
            <div>
                <p className="text-lg text-[#E5E9F0] font-fira-code">Hi all. I'am</p>
                <h1 className="font-fira-code text-[#E5E9F0] text-6xl mt-2">Matias Zapata</h1>
                <p className="text-[#43D9AD] font-fira-code text-xl mt-2">{">"} Full stack developer</p>
            </div>
            <div>
                <p className="text-[#607B96] font-fira-code mb-4">{"// find my profile on Github:"}</p>
                <p className="text-white font-fira-code"><span className="text-[#4D5BCE]">const</span> <span className="text-[#43D9AD]">githubLink</span> = <span className="text-[#E99287]">"https://github.com/matzapata"</span></p>
            </div>
            <img src="/images/bg-blur.png" className="fixed pointer-events-none left-1/3 top-[15%] w-2/3 filter blur-3xl" alt="background blur"/>
        </div>
    );
}

export default Hello;
