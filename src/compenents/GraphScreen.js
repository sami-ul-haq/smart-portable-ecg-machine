import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
// import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
// import { points } from "../data";

const GraphScreen = () => {
    const [ecgError, setEcgError] = useState("");
    const [ecgData, setEcgData] = useState([]);
    console.log("ECG data ", ecgData[0]);


    const { state } = useLocation();
    console.log("Id is ", state.id);

    const dbRef = ref(db, `ECG/${state.id}`);

    const getFirebaseData = async () => {
        try{   
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val()
                setEcgData(data);
            });
        } catch(error){

        }
    }

    useEffect(() => {
        getFirebaseData();
    }, [])


    return (
        <div className="third-screen">

            <div>
                {
                    ecgData[0] ?
                        ecgData[0].map((item, index) => <h6 key={index}>{item}</h6>) : <p>No Data</p>
                }

            </div>

            {/* <ResponsiveContainer width="100%" height="100%" aspect={3}>
                    <LineChart
                        width={500}
                        height={300}
                        data={points}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="y" interval="preserveStartEnd"/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="y" stroke="blue" strokeWidth={1}/>
                    </LineChart>
                </ResponsiveContainer> */}

            <div className="third-footer">
                <button className="btn-back">
                    <Link to={`/`}>
                        Back
                    </Link>
                </button>
            </div>

        </div>
    )
}

export default GraphScreen;