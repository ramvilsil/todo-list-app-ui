const Footer = () => {
    return (
        <footer className="w-full bg-black text-white flex justify-center gap-20 pt-20 pb-20 mt-20 portrait:flex-col portrait:p-8 portrait:gap-10">

            <div className="flex flex-col gap-4">
                <div className="font-bold">
                    Technology Stack Used
                </div>

                <div className="flex flex-col gap-1">
                    <div>C#</div>
                    <div>.NET Core 7</div>
                    <div>TypeScript</div>
                    <div>React</div>
                    <div>Tailwind CSS</div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div>
                    Contact
                </div>

                <div className="flex flex-col gap-2">
                    <a className="font-bold text-indigo-600 underline underline-offset-4" href="https://linkedin.com/in/ramvilsil">LinkedIn</a>
                    <a className="font-bold text-indigo-600 underline underline-offset-4" href="https://github.com/ramvilsil">GitHub</a>
                </div>
            </div>

            <div>
                &copy; 2023 Ramon's Todo List App
            </div>

        </footer>
    )
};

export default Footer;