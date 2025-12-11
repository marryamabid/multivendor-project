import styles from "../../styles/style";
import CountDown from "./CountDown";

const EventCard = ({ active }) => {
  return (
    <div
      className={`w-full ${
        active ? "unset" : "mb-12"
      } bg-white rounded-lg lg:flex p-3`}
    >
      <div className="w-full lg:w-[50%] m-auto">
        <img
          src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          alt="event"
        />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center my-3  ">
        <h2 className={`${styles.productTitle}`}>
          iPhone 14 Pro Max 256GB, 8GB RAM, Silver
        </h2>
        <p className="font-normal text-md my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          praesentium numquam pariatur amet voluptate doloremque hic aspernatur,
          ad aliquid asperiores rem rerum ratione voluptatem. Facilis a rem
          voluptate amet perspiciatis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sit molestiae corporis dolorem. Suscipit aliquam
          illum, sunt ut quas eaque officia architecto quaerat labore provident
          earum beatae dolor nihil doloribus reprehenderit.
        </p>
        <div className="flex justify-between py-2">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>
        <CountDown />
      </div>
    </div>
  );
};
export default EventCard;
