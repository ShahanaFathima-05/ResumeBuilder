import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { Button } from "@mui/material";
import Preview from "../components/Preview";
import Edit from "../components/Edit";
import { getResumeApi,addDownloadHistoryApi,} from "../services/allApiServices";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';



function ViewResume() {
  const { rid } = useParams();

  console.log(rid);

  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    getResumeData();
  }, []);

  const getResumeData = async () => {
    const response = await getResumeApi(rid);
    console.log(response);

    if (response.status === 200) {
      setResumeData(response.data);
    }
  };


const handleDownload = async () => {
  const preview = document.getElementById("preview");

  const canvas = await html2canvas(preview);

  const imgUrl = canvas.toDataURL("image/png");

  canvas.toBlob(async (blob) => {
    const shortUrl = URL.createObjectURL(blob);

    const downloadHistory = {
      resumeid: rid,
      datetime: new Date().toLocaleString(),
      picture: shortUrl,
    };

    await addDownloadHistoryApi(downloadHistory);

    const pdf = new jsPDF();

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgUrl, "PNG", 0, 0, imgWidth, imgHeight);

    pdf.save(`${resumeData.fullname}.pdf`);
  });
};
//html->pdf->(jspdf)
    return(
        <>
        <div className="container py-4">

  <h2 className="fw-bold text-center mb-4">
    Resume Preview
  </h2>

  <div className="text-center mb-4">

    <button
      className="btn text-primary"
      onClick={handleDownload}
    >
      <FaFileDownload style={{ fontSize: "35px" }} />
    </button>

    <Edit resume={resumeData} />

    <Link
      className="btn text-primary"
      to="/history"
    >
      <FaHistory style={{ fontSize: "35px" }} />
    </Link>

    <Link
      className="btn text-primary"
      to="/form"
    >
      <FaBackward style={{ fontSize: "35px" }} />
    </Link>

  </div>

  <div className="row justify-content-center">

    <div className="col-lg-8 col-md-10 col-sm-12">

      <div id="preview">
        <Preview resume={resumeData} />
      </div>

    </div>

  </div>

</div>
        
        
        
        </>
    )


}
export default ViewResume