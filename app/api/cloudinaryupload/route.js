const { default: cloudinary } = require("@utils/cloudinary");

export const POST = async (req, res) => {
  try {
    const formData = await req.formData();
    const photos = formData.getAll("files[]");

    const uploadPhotosPromises = photos.map(async (photo) => {
      const bytes = await photo.arrayBuffer();
      const buffer = Buffer.from(bytes);

      return new Promise((resolve, reject) => {
        cloudinary.v2.uploader
          .upload_stream({ folder: "photos" }, (error, result) => {
            if (result) {
              resolve({ public_id: result.public_id, url: result.secure_url });
            }
            if (error) {
              reject(error);
            }
          })
          .end(buffer);
      });
    });

    const photosArray = await Promise.all(uploadPhotosPromises);

    return Response.json({ message: "success", photosArray }, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: false, message: "Error uploading file" },
      { status: 500 }
    );
  }
};
