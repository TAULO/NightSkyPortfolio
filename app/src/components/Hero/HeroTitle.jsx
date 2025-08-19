const HeroTitle = () => {
    return (
        <>
            <div
                className={"flex flex-col text-6xl text-white text-center font-extrabold"}>
                <h1 className={"animate-fade-down animate-delay-[2000ms] animate-duration-[2000ms] animate-ease-in"}>
                    Thomas Taulo
                </h1>
                <h1 className={"animate-fade animate-delay-[4000ms] animate-ease-in"}>
                    Software Developer
                </h1>
            </div>
        </>
    )
}

export default HeroTitle