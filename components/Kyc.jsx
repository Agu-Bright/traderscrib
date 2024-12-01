import { CircularProgress, Avatar } from "@mui/material";
import axios from "@node_modules/axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify"; // Import the Bounce transition if it's provided by your toast library
import "react-toastify/dist/ReactToastify.css";

const KYCPage = () => {
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!image) {
      toast.error("Image is Required", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post("/api/upload/kyc", {
        image: image,
      });
      toast.success("Deposit Successful", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setImage("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
        KYC Verification
      </h2>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col items-center">
          <label
            htmlFor="imageUpload"
            className="block text-gray-600 font-medium mb-2"
          >
            Upload Your ID
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target?.files;
              if (file) {
                try {
                  setUploading(true);
                  const { data } = await axios.post(
                    "/api/cloudinaryupload/profile",
                    file
                  );
                  setImage(data?.photosArray[0].url);
                  setUploading(false);
                } catch (error) {
                  setUploading(false);
                  toast.error("Unable to upload", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });
                }
              }
            }}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
          <div style={{ marginTop: "10px" }}>
            {uploading ? (
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  border: "0.1px solid #cacecf",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "5px",
                }}
              >
                <CircularProgress sx={{ color: "rgba(0,212,255,1)" }} />
              </div>
            ) : (
              <>
                {image && (
                  <>
                    <Avatar
                      src={image}
                      alt="screendhot"
                      sx={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "5px",
                      }}
                    />
                  </>
                )}
              </>
            )}
          </div>
        </div>
        <button
          onClick={() => (image ? handleSubmit() : undefined)}
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {loading ? (
            <CircularProgress sx={{ color: "white" }} size={15} />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
};

export default KYCPage;
