import { IconProps } from "@/shared/types";
import { FC } from "react";

const VectorIcon: FC<IconProps> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 243 243'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        opacity='0.09'
        d='M186.939 102.804C183.659 103.624 182.019 107.723 183.659 111.003C187.759 120.841 189.399 131.499 189.399 142.157C189.399 191.349 149.223 230.702 100.849 230.702C52.4741 230.702 12.2986 191.349 12.2986 142.157C12.2986 92.9657 51.6542 53.6125 100.849 53.6125C109.868 53.6125 119.706 55.2522 128.725 57.7118C132.005 58.5317 135.285 56.8919 136.105 53.6125C136.924 50.3331 135.285 47.0536 132.005 46.2338C122.166 42.9543 111.507 41.3146 100.849 41.3146C45.0949 41.3146 0 86.4069 0 142.157C0 197.908 45.0949 243 100.849 243C156.602 243 201.697 197.908 201.697 142.157C201.697 129.859 199.237 117.562 195.138 106.084C194.318 103.624 190.218 101.984 186.939 102.804ZM100.849 121.661C104.128 121.661 107.408 119.201 107.408 115.102C107.408 111.003 104.948 108.543 100.849 108.543C82.8106 108.543 68.0523 123.301 68.0523 141.337C68.0523 159.374 82.8106 174.132 100.849 174.132C118.887 174.132 133.645 159.374 133.645 141.337C133.645 138.058 131.185 134.779 127.086 134.779C122.986 134.779 121.346 138.878 121.346 142.157C121.346 153.635 112.327 162.654 100.849 162.654C89.3699 162.654 80.3509 153.635 80.3509 142.157C80.3509 130.679 89.3699 121.661 100.849 121.661ZM131.185 89.6863C132.825 86.4069 131.185 83.1274 127.906 81.4877C119.706 77.3884 109.868 75.7487 100.849 75.7487C63.9528 75.7487 33.6162 105.264 33.6162 142.157C33.6162 179.051 63.9528 209.386 100.849 209.386C137.744 209.386 168.081 179.051 168.081 142.157C168.081 132.319 166.441 123.301 162.342 115.102C160.702 111.823 157.422 110.183 154.143 111.823C150.863 113.462 150.043 116.742 150.863 120.021C154.143 127.4 155.782 134.779 155.782 142.157C155.782 172.492 131.185 197.088 100.849 197.088C70.512 197.088 45.9148 172.492 45.9148 142.157C45.9148 111.823 70.512 87.2267 100.849 87.2267C109.048 87.2267 116.427 88.8664 122.986 92.1459C126.266 93.7856 129.545 92.1459 131.185 89.6863ZM242.693 48.6933C241.873 46.2338 240.233 44.594 237.773 44.594L204.157 38.855L198.418 5.24079C198.418 2.78121 196.778 1.14149 194.318 0.321635C191.858 -0.498225 189.399 0.321635 187.759 1.96135L147.583 42.1345C145.943 43.7742 145.124 45.4139 145.943 47.8735L152.503 82.3076L100.849 133.959H100.029C95.1092 133.959 91.0097 138.058 91.0097 142.977C91.0097 147.896 95.1092 151.996 100.029 151.996C104.948 151.996 109.048 147.896 109.048 142.977L161.522 90.5062L195.138 97.065H195.958C197.598 97.065 199.237 96.2452 200.057 95.4253L240.233 55.2522C242.693 53.6125 243.512 51.1529 242.693 48.6933ZM159.062 47.8735L188.579 18.3585L192.678 41.3146L163.981 70.0097L159.062 47.8735ZM195.138 83.9473L173 79.848L201.697 51.1529L223.835 55.2522L195.138 83.9473Z'
        fill='#A76CF3'
      />
    </svg>
  );
};

export default VectorIcon;
