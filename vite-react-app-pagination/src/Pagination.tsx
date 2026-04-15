import { useEffect, useState } from "react";
import axios from "axios";
import { useMemo } from "react";

const Pagination = () => {
    let [apiData, setApiData] = useState([])
    let [page, setPage] = useState(1)
    let limit = 9

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
                setApiData(data?.data || [])
                return
            } catch (error) {
                console.log(error)
                return;
            }
        }
        fetchData()
    }, [])
    const getCurData = ()=>{
        const copy_arr = [...apiData]
        const start = (page-1) * limit
        return copy_arr.splice(start,limit)
    }

    const curSetApiData = useMemo(()=>getCurData(),[page,apiData])

    const NumberOfPages = apiData.length ? Math.ceil(apiData.length / limit): 0

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const eleId = event.currentTarget.id;
        if (Number(eleId) <= 0) {
            setPage(1)
            return
        }
        setPage(Number(eleId))
    }
    return (
        <div id="main">
            <div style={{
                display: "flex",
                alignItems: "center",
            }}>
                <div id="cards" style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                    {curSetApiData.map((data: any, index: number) => {
                        return (
                            <div
                                key={data.id}
                                style={{
                                    width: "300px",
                                    border: "1px solid #ddd",
                                    borderRadius: "8px",
                                    padding: "16px",
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                    background: "#fff"
                                }}
                                // hidden={!showCard(index)}
                            >
                                <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>
                                    {data.title}
                                </h3>

                                <p style={{ fontSize: "14px", color: "#555" }}>
                                    {data.body}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
            {NumberOfPages &&
                Array.from({ length: NumberOfPages }, (_, i) => {
                    const index = i + 1
                    return <span id={String(index)}><button id={String(index)} onClick={handleClick}>{index}</button></span>
                })
            }
        </div>
    );
}
export default Pagination;



