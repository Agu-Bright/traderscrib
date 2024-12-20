import Image from "next/image";

const Brand = ({ ...props }) => (
  <Image
    src="/img/logo1.png"
    alt="Mailgo logo"
    {...props}
    width={110}
    height={50}
    priority
  />
);
export default Brand;
