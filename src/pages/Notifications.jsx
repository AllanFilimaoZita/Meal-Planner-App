import { MdKeyboardBackspace } from "react-icons/md";
import { TiSocialGithubCircular } from "react-icons/ti";
import { MdDone } from "react-icons/md";

function Notifications() {
    return (
        <>
            <section className="min-h-screen min-w-screen flex flex-col items-center justify-start px-5 py-5 gap-5">
                <section className="flex flex-col items-start justify-around w-full h-full gap-10">
                    <section className="flex flex-col items-start justify-between w-full h-full">
                        <div className="w-full flex items-start justify-between gap-3">
                            <MdKeyboardBackspace className="size-7" />
                            <span className="text-[#8B4EEB] font-bold">skip</span>
                        </div>

                        <h2 className="text-xl font-bold text-[#8B4EEB] w-60 mt-5">Do you want to turn on notifications</h2>
                    </section>
                    <section className="flex flex-col w-full h-full flex-wrap gap-2">
                        
                    </section >
                </section>
                <div className="w-full border-2 border-solid p-3 rounded-2xl">
                    <div className="w-full flex items-center justify-between">
                        <TiSocialGithubCircular className="size-7" />

                        <span className="font-sm text-gray-400">now</span>
                    </div>
                    <div>
                        <h5>Notifications Title</h5>
                        <p className="text-xs">
                            Notifications text would be placed right here.
                            This is where the notification text would be placed.
                        </p>
                    </div>
                </div>

                <section className="w-80 flex flex-col gap-3">
                    <div className="flex items-center justify-center w-full">
                        <MdDone /> <p>New daily meal reminders</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-center w-full">
                        <MdDone /> <p>Motivations Messages</p>
                    </div>
                    <hr />
                    <div className="flex items-center justify-center w-full">
                        <MdDone /> <p>Personalized guideline</p>
                    </div>
                    <hr />
                </section>

                <section>
                    <button className="bg-[#8B4EEB] py-2 px-20 rounded text-white font-bold">Enable</button>
                </section>
            </section>
        </>
    )
}

export default Notifications;