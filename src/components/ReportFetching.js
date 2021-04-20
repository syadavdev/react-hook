import React from 'react'
import axios from 'axios'

function ReportFetching() {

    const genrateReport = async() =>{
        const response = await axios.get('http://localhost:9005/report')
        const linkSource = `data:application/pdf;base64,${response.data}`;
        const downloadLink = document.createElement("a");
        const fileName = "report.pdf";
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }

    return (
        <div>
            <button onClick={genrateReport}>Generate Report</button>
        </div>
    )
}

export default ReportFetching
