import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const IdScreen = () => {

    const navigate = useNavigate();

    const [ id , setId ] = useState("");
    console.log(id);


    const formHandler = (e) =>{
        e.preventDefault();
        if(id){
            navigate("/your-ecg-graph" , {
                state: {
                    id
                }
            })
        } else{
            alert("Enter ID TO Continue...");
        }
    }

    return (
        <Layout>    
            <div className="second-screen">
                <h1>Enter Id To Fetch ECG Graph</h1>
                <form onSubmit={formHandler}>   
                <input type="number" value={id} onChange={(e)=>setId(e.target.value)} placeholder="Enter Your Id" />
                <button className="form-btn">Check</button>
                </form>
            </div>
        </Layout>
    )
}
export default IdScreen;