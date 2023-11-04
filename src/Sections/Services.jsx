import { useState } from "react";
import { FaMapLocationDot, FaUsersLine, FaHouse, FaCloudArrowUp } from "react-icons/fa6";
export default function Services() {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHovered1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHovered1(false);
    };
    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };
    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };
    const handleMouseEnter4 = () => {
        setIsHovered4(true);
    };

    const handleMouseLeave4 = () => {
        setIsHovered4(false);
    };
    return (
        <div className="lg:flex lg:gap-5 ">

            {/* all services */}
            <div
                className={`p-5 w-[350px] rounded-md h-[300px] text-center ${isHovered1 ? "bg-[#35A29F]" : ""}`}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                style={{
                    transition: "background-color 0.8s ease ,transform 0.5s ease",
                }} >
                <div className="mt-6">
                    <FaMapLocationDot className={`h-16 w-20 pt-1 ${isHovered1 ? "transform scale-110 mx-auto h-24 text-[#46d6d1]" : "mx-auto h-24"}`} style={{
                        transition: "transform 0.4s ease",
                    }}></FaMapLocationDot>

                    <h1 className={`text-3xl font-light pt-5 ${isHovered1 ? "transform scale-110 text-[#46d6d1]" : ""}`} style={{ transition: "transform 0.3s ease" }}>
                        Find places anywhere in the world
                    </h1>
                    <p className={`text-sm pt-3 lg:w-[80%] text-center mx-auto ${isHovered1 ? "transform scale-110 text-[#46d6d1]" : ""}`} style={{ transition: "transform 0.4s ease" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam reiciendis
                    </p>
                </div>
            </div>
            {/* 2 */}
            <div
                className={`p-5 w-[350px] rounded-md h-[300px] text-center ${isHovered2 ? "bg-[#35A29F]" : ""}`}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                style={{
                    transition: "background-color 0.8s ease",
                }} >
                <div className="mt-6">
                    <FaUsersLine className={`h-16 w-20 pt-1 ${isHovered2 ? "transform scale-110 mx-auto h-24 text-[#46d6d1]" : "mx-auto h-24"}`} style={{
                        transition: "transform 0.4s ease",
                    }}></FaUsersLine>

                    <h1 className={`text-3xl font-light pt-5 ${isHovered2 ? "transform scale-110 text-[#46d6d1]" : ""}`} style={{ transition: "transform 0.3s ease" }}>
                        We have agents with exprence
                    </h1>
                    <p className={`text-sm pt-3 w-[80%] text-center mx-auto ${isHovered2 ? "transform scale-110 text-[#46d6d1]" : ""}`} style={{ transition: "transform 0.4s ease" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam reiciendis
                    </p>
                </div>
            </div>
            {/* 3 */}
            <div
                className={`p-5 w-[350px] rounded-md h-[300px] text-center ${isHovered3 ? "bg-[#35A29F]" : ""}`}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                style={{
                    transition: "background-color 0.8s ease",
                }} >
                <div className="mt-6">
                    <FaHouse className={`h-16 w-20 pt-1 ${isHovered3 ? "transform scale-110 mx-auto h-24 text-[#46d6d1]" : "mx-auto h-24"}`} style={{
                        transition: "transform 0.4s ease",
                    }}></FaHouse>

                    <h1 className={`text-3xl font-light pt-5 ${isHovered3 ? "transform scale-110 text-[#46d6d1]" : ""}`} style={{ transition: "transform 0.3s ease" }}>
                        Buy or rent beautiful room
                    </h1>
                    <p className={`text-sm pt-3 w-[80%] text-center mx-auto ${isHovered3 ? "transform scale-110 text-[#46d6d1]" : ""}`} style={{ transition: "transform 0.4s ease" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam reiciendis
                    </p>
                </div>
            </div>
            {/* 4 */}
            <div
                className={`p-5 w-[350px] rounded-md h-[300px] text-center ${isHovered4 ? "bg-[#35A29F]" : ""}`}
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
                style={{
                    transition: "background-color 0.8s ease",
                }} >
                <div className="mt-6">
                    <FaCloudArrowUp className={`h-16 w-20 pt-1 ${isHovered4 ? "transform scale-110 mx-auto h-24 text-[#46d6d1]" : "mx-auto h-24"}`} style={{
                        transition: "transform 0.4s ease",
                    }}></FaCloudArrowUp>

                    <h1 className={`text-3xl font-light pt-5 ${isHovered4 ? "transform scale-110 text-[#46d6d1]" : ""}`} style={{ transition: "transform 0.3s ease" }}>
                        With agent account you can list propertes
                    </h1>
                    <p className={`text-sm pt-3 w-[80%] text-center mx-auto ${isHovered4 ? "transform scale-110 text-[#46d6d1]" : ""}`} style={{ transition: "transform 0.4s ease" }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam reiciendis
                    </p>
                </div>
            </div>
        </div>
    )
}
