import { auto } from "@popperjs/core";
import bgimage from "../../images/Oraza.webp";
import cancelBtn from "../../images/cancelcross_img.png";
import twodots from "../../images/dots.png";
import { useState, useEffect } from "react";
import { func } from "prop-types";
function Oraza({ setBlock, block }) { 
    console.log(setBlock, "sadasdasd");
    const DatesOpenClose = [
        ["2024-03-31T19:41:00", "2024-04-01T05:01:00"],
        ["2024-04-01T19:42:00", "2024-04-02T04:59:00"],
        ["2024-04-02T19:43:00", "2024-04-03T04:58:00"],
        ["2024-04-03T19:44:00", "2024-04-04T04:56:00"],
        ["2024-04-04T19:45:00", "2024-04-05T04:55:00"],
        ["2024-04-05T19:46:00", "2024-04-06T04:53:00"],
        ["2024-04-06T19:47:00", "2024-04-07T04:52:00"],
        ["2024-04-07T19:48:00", "2024-04-08T04:50:00"],
        ["2024-04-08T19:49:00", "2024-04-09T04:49:00"],
        ["2024-04-09T19:50:00", "2024-03-11T05:34:00"],

        ["2024-03-10T19:21:00", "2024-03-11T05:33:00"],
        ["2024-03-11T19:22:00", "2024-03-12T05:32:00"],
        ["2024-03-12T19:23:00", "2024-03-13T05:30:00"],
        ["2024-03-13T19:24:00", "2024-03-14T05:28:00"],
        ["2024-03-14T19:25:00", "2024-03-15T05:26:00"],
        ["2024-03-15T19:26:00", "2024-03-16T05:25:00"],
        ["2024-03-16T19:27:00", "2024-03-17T05:24:00"],
        ["2024-03-17T19:28:00", "2024-03-18T05:22:00"],
        ["2024-03-18T19:29:00", "2024-03-19T05:20:00"],
        ["2024-03-19T19:30:00", "2024-03-20T05:19:00"],
        ["2024-03-20T19:31:00", "2024-03-21T05:18:00"],
        ["2024-03-21T19:32:00", "2024-03-22T05:16:00"],
        ["2024-03-22T19:33:00", "2024-03-23T05:14:00"],
        ["2024-03-23T19:34:00", "2024-03-24T05:13:00"],
        ["2024-03-24T19:35:00", "2024-03-25T05:11:00"],
        ["2024-03-25T19:36:00", "2024-03-26T05:10:00"],
        ["2024-03-26T19:37:00", "2024-03-27T05:09:00"],
        ["2024-03-27T19:37:00", "2024-03-28T05:07:00"],
        ["2024-03-28T19:38:00", "2024-03-29T05:05:00"],
        ["2024-03-29T19:39:00", "2024-03-30T05:03:00"],
        ["2024-03-30T19:40:00", "2024-03-31T05:02:00"],
        ["2024-03-31T19:41:00", "2024-04-01T05:01:00"],
    ];
    function handleChange(){
        setBlock('none')
    }
    useEffect(()=>{
        if(block == 'block'){
            document.body.style.overflow = 'hidden'
        }else if(block!='block'){
            document.body.style.overflow = 'visible'
        }
    },[block])
    
    const Today = new Date();
    const dayToday = Today.getDate();
    const [hour, setHour] = useState(null);
    const [min, setMin] = useState(null);
    const [sec, setSec] = useState(null);

    const dateOpen = new Date(DatesOpenClose[dayToday][0]);
    const HourOpen = dateOpen.getHours();
    const MinOpen = dateOpen.getMinutes();
    const SecOpen = dateOpen.getSeconds();

    const dateClose = new Date(DatesOpenClose[dayToday][1]);
    const HourClose = dateClose.getHours() + 24;
    const MinClose = dateClose.getMinutes();
    const SecClose = dateClose.getSeconds();

    var timer;
    var k, m;
    useEffect(() => {
        
        timer = setInterval(() => {
            if (
                Today < dateOpen &&
                Today > new Date(DatesOpenClose[dayToday - 1][1])
            ) {
                const dateNow = new Date();
                const HourNow = dateNow.getHours();
                const MinNow = dateNow.getMinutes();
                const SecNow = dateNow.getSeconds();

                if (SecOpen - SecNow <= 0) m = -1;
                else m = 0;
                setSec(
                    SecOpen - SecNow >= 0
                        ? SecOpen - SecNow
                        : 60 + SecOpen - SecNow,
                );
                if (MinOpen - MinNow <= 0) k = -1;
                else k = 0;
                setMin(
                    MinOpen - MinNow > 0
                        ? MinOpen - MinNow + m
                        : 60 + MinOpen - MinNow + m,
                );
                setHour(HourOpen - HourNow + k);
                if (
                    HourOpen - HourNow == 0 &&
                    MinOpen - MinNow == 0 &&
                    SecOpen - SecNow == 0
                ){
                setBlock("none");
                    location.reload()}
            } else {
                const dateNow = new Date();
                const HourNow = dateNow.getHours();
                const MinNow = dateNow.getMinutes();
                const SecNow = dateNow.getSeconds();
                if (SecClose - SecNow <= 0) m = -1;
                else m = 0;
                setSec(
                    SecClose - SecNow >= 0
                        ? SecClose - SecNow
                        : 60 + SecClose - SecNow,
                );
                if (MinClose - MinNow <= 0) k = -1;
                else k = 0;
                setMin(
                    MinClose - MinNow > 0
                        ? MinClose - MinNow + m
                        : 60 + MinClose - MinNow + m,
                );
                setHour((HourClose - HourNow + k) % 24);
                if (
                    HourClose - HourNow == 24 &&
                    MinClose - MinNow == 0 &&
                    SecClose - SecNow == 0
                ){
                    setBlock("none");
                    location.reload()}
            }
        }, 1000);
    });

    return (
        <div
            className="wrapper"
            style={{
                zIndex: 999,
                display: block,
                top: "0",
                position: "fixed",
                width: "100%",
                height: "100%",
                margin: 0,
                right: 0,
                left: 0,
                backgroundColor: "#00000073",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    margin: auto,
                    left: 0,
                    right: 0,
                    top: 150,
                    width: 320,
                    height: 384,
                    borderRadius: 8,
                    backgroundImage: `url(${bgimage})`,
                    backgroundPositionY: "center",
                    backgroundSize: "100% 100%",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        top: 16,
                        left: 16,
                        width: 235,
                        height: 76,
                    }}
                >
                    <p
                        style={{
                            fontSize: 34,
                            fontWeight: 900,
                            marginTop: 0,
                            letterSpacing: "-0.02em",
                            textAlign: "left",
                            color: "#fff",
                            WebkitTextStroke: "1px  #1E376C",
                        }}
                    >
                        Orazalaryňyz Kabul Bolsun!
                    </p>
                </div>
                <div
                    className="cancelBut"
                    style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        padding: 8,
                        backgroundColor: " #7171713D",
                    }}
                    onClick={() => {
                        handleChange()
                    }}
                >
                    <img src={cancelBtn} alt="" />
                </div>
                <div
                    className="clockWrapper"
                    style={{
                        position: "absolute",
                        width: 271,
                        height: 102,
                        top: 134,
                        left: 34,
                        gap: 16,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <p
                        style={{
                            margin: 0,
                            left: 0,
                            right: 0,
                            height: 24,
                            fontSize: 20,
                            fontWeight: 900,
                            color: "#1E376C",
                            letterSpacing: "-0.02em",
                            textAlign: "left",
                        }}
                    >
                        Agyz{" "}
                        {Today < dateOpen &&
                        Today > new Date(DatesOpenClose[dayToday - 1][1])
                            ? "açara"
                            : "beklemäge"}{" "}
                        galan wagt
                    </p>
                    { (
                        <div
                            className="clockBlock"
                            style={{
                                width: 253,
                                height: 62,
                                gap: 8,
                                display: "flex",
                            }}
                        >
                            <div
                                className="singleBlock"
                                style={{
                                    position: "relative",
                                    width: 69,
                                    height: 62,
                                    padding: "8px, 18px, 8px, 18px",
                                    borderRadius: 8,
                                    backgroundColor: "#fff",
                                    boxShadow: "2px 2px 5px 2px #B7CDFA",
                                }}
                            >
                                {" "}
                                {
                                    <p
                                        style={{
                                            position: "absolute",
                                            margin: 0,
                                            left: 0,
                                            right: 0,
                                            top: 5,
                                            fontSize: 32,
                                            fontWeight: 900,
                                            color: "#000",
                                            letterSpacing: "-0.02em",
                                            textAlign: "center",
                                        }}
                                    >
                                        {hour != null && min != null && sec != null && hour}
                                    </p>
                                }
                                <p
                                    style={{
                                        position: "absolute",
                                        margin: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 5,
                                        fontSize: 12,
                                        fontWeight: 900,
                                        color: "#000",
                                        letterSpacing: "-0.02em",
                                        textAlign: "center",
                                    }}
                                >
                                    sagat
                                </p>
                            </div>
                            <img
                                src={twodots}
                                height={25}
                                width={7}
                                style={{ alignSelf: "center" }}
                                alt=""
                            />
                            <div
                                className="singleBlock"
                                style={{
                                    position: "relative",
                                    width: 69,
                                    height: 62,
                                    padding: "8px, 18px, 8px, 18px",
                                    borderRadius: 8,
                                    backgroundColor: "#fff",
                                    boxShadow: "2px 2px 5px 2px #B7CDFA",
                                }}
                            >
                                <p
                                    style={{
                                        position: "absolute",
                                        margin: 0,
                                        left: 0,
                                        right: 0,
                                        top: 5,
                                        fontSize: 32,
                                        fontWeight: 900,
                                        color: "#000",
                                        letterSpacing: "-0.02em",
                                        textAlign: "center",
                                    }}
                                >
                                    {min}
                                </p>
                                <p
                                    style={{
                                        position: "absolute",
                                        margin: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 5,
                                        fontSize: 12,
                                        fontWeight: 900,
                                        color: "#000",
                                        letterSpacing: "-0.02em",
                                        textAlign: "center",
                                    }}
                                >
                                    minut
                                </p>
                            </div>
                            <img
                                src={twodots}
                                height={25}
                                width={7}
                                style={{ alignSelf: "center" }}
                                alt=""
                            />
                            <div
                                className="singleBlock"
                                style={{
                                    position: "relative",
                                    width: 69,
                                    height: 62,
                                    padding: "8px, 18px, 8px, 18px",
                                    borderRadius: 8,
                                    backgroundColor: "#fff",
                                    boxShadow: "2px 2px 5px 2px #B7CDFA",
                                }}
                            >
                                <p
                                    style={{
                                        position: "absolute",
                                        margin: 0,
                                        left: 0,
                                        right: 0,
                                        top: 5,
                                        fontSize: 32,
                                        fontWeight: 900,
                                        color: "#000",
                                        letterSpacing: "-0.02em",
                                        textAlign: "center",
                                    }}
                                >
                                    {sec}
                                </p>
                                <p
                                    style={{
                                        position: "absolute",
                                        margin: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 5,
                                        fontSize: 12,
                                        fontWeight: 900,
                                        color: "#000",
                                        letterSpacing: "-0.02em",
                                        textAlign: "center",
                                    }}
                                >
                                    sekunt
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <p
                    style={{
                        position: "absolute",
                        margin: auto,
                        left: 0,
                        right: 0,
                        bottom: 26,
                        fontSize: 20,
                        fontWeight: 900,
                        color: "#fff",
                        letterSpacing: "-0.02em",
                        textAlign: "center",
                    }}
                >
                    Pikir.biz
                </p>
            </div>
        </div>
    );
}
export default Oraza;
