const Footer = () => {
    return (
        <footer className="w-full bg-black text-white justify-center flex gap-10 p-20 mt-20 text-lg portrait:flex-col portrait:p-8 portrait:gap-10">

            <div className="flex flex-col gap-4">
                <div className="font-bold">
                    Technology Stack Used
                </div>

                <div className="flex flex-col gap-2">
                    <div>C#</div>
                    <div>.NET Core 7</div>
                    <div>TypeScript</div>
                    <div>React</div>
                    <div>Tailwind CSS</div>
                    <div>Vercel</div>
                    <div>Azure</div>
                </div>
            </div>

            <div>
                &copy; 2023 Ramon's Todo List App
            </div>

        </footer>
    )
};

export default Footer;