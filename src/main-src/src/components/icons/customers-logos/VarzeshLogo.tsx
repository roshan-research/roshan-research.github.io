import { IconProps } from "@/shared/types";

const VarzeshLogo: React.FC<IconProps> = ({ width, height, colors }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 65 94'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M41.2464 74.0735C40.4932 73.2844 41.3669 71.8324 42.361 72.4006C43.2346 72.8741 42.8731 74.0735 42.0296 74.3261C41.7585 74.2314 41.4874 74.1367 41.2464 74.0735ZM40.1317 74.4523C40.7945 73.6001 42.1501 74.6417 41.6982 75.5887C41.4874 76.2516 40.7041 76.22 40.192 76.0306C39.951 75.5571 39.6196 74.8627 40.1317 74.4523ZM42.4513 75.9043C41.6079 75.2099 42.6923 73.6316 43.5659 74.2945C44.0781 74.5155 44.0479 75.1468 44.1082 75.6203C43.6563 76.0622 42.9635 76.4725 42.4513 75.9043ZM48.5064 74.4208C49.0486 73.7579 50.1933 74.4208 50.0729 75.2415C50.0729 75.9675 49.139 76.4725 48.5967 75.999C48.0545 75.715 47.9943 74.768 48.5064 74.4208ZM12.3569 76.9776C13.0197 76.9776 13.6824 76.9776 14.315 76.9776C14.4054 80.2604 14.1041 83.5747 14.4656 86.826C14.8874 86.8891 15.3091 86.9522 15.7007 86.6997C15.6706 83.4485 15.7007 80.1972 15.7007 76.946C16.3936 76.946 17.0563 76.946 17.7492 77.0091C17.689 79.4712 17.7492 81.9333 17.7191 84.3954C17.7191 85.2477 17.6588 86.1 17.9601 86.9207C18.171 86.8891 18.5626 86.8575 18.7433 86.826C19.0144 85.8159 18.9241 84.7742 18.9241 83.7641C18.9241 81.4914 18.9241 79.2187 18.9241 76.946C19.5868 76.946 20.2495 76.946 20.9424 76.946C20.9424 79.7553 20.9424 82.5331 20.9424 85.3424C20.9424 85.8474 21.0629 86.3525 21.1533 86.8575C21.4545 86.826 21.7256 86.7944 22.0269 86.7628C22.1775 83.5116 22.0871 80.2288 22.0871 76.946C22.78 76.9144 23.4729 76.9144 24.1657 76.9144C24.1657 79.9131 24.1657 82.9434 24.1657 85.9421C24.1356 87.0785 23.5934 88.3727 22.5089 88.783C21.6654 89.1934 20.7014 88.9093 19.8579 88.7199C18.8337 89.1618 17.7191 89.004 16.7551 88.5305C15.52 89.2249 13.6824 89.2565 12.8389 87.8992C11.7243 85.6581 13.2305 82.7856 11.6339 80.6707C10.6398 79.0609 8.4106 78.5243 6.84412 79.5975C4.79565 80.8601 4.31366 84.1429 6.06088 85.8159C7.23574 87.1101 9.07334 87.0154 10.6699 86.9838C10.6699 87.6782 10.6699 88.3411 10.7001 89.0356C9.37458 89.0356 7.98885 89.1618 6.72362 88.6568C4.46428 87.8045 2.83756 85.374 2.98818 82.8172C2.95805 79.7238 5.66926 76.8513 8.65159 76.9776C10.0072 76.8829 11.3026 77.451 12.3569 78.3349C12.3569 77.8614 12.3569 77.4195 12.3569 76.9776ZM28.1121 77.0407C28.8049 76.9776 29.4978 76.9776 30.1906 76.9776C30.1906 79.9763 30.1605 82.975 30.1906 85.9737C30.1906 88.2464 32.4199 90.0772 34.5286 89.6353C36.3059 89.3512 37.6314 87.552 37.6615 85.6896C37.6615 82.7856 37.6615 79.8816 37.6615 76.9776C38.3544 76.9776 39.0774 76.9776 39.7703 77.0407C39.7703 80.3235 39.6498 83.5747 39.8305 86.8575C40.1317 86.826 40.7644 87.1416 40.8246 86.6366C40.915 83.4169 40.7644 80.2288 40.8849 77.0091C41.5476 77.0091 42.2405 77.0091 42.9032 77.0091C42.9032 79.9132 42.9032 82.8172 42.9032 85.7212C42.843 86.2262 43.0237 86.6681 43.2948 87.0785C43.5057 87.0154 43.8973 86.8575 44.1082 86.7944C44.1383 83.5432 44.1383 80.2604 44.1082 77.0091C44.8011 76.9776 45.4939 76.9776 46.1868 77.0091C46.1265 80.0078 46.1868 83.0381 46.1567 86.0368C46.1265 87.2048 45.5843 88.4674 44.4697 88.8777C43.6262 89.2565 42.6622 89.0356 41.8187 88.783C40.8547 89.1934 39.8004 89.1303 38.8364 88.7515C37.9628 90.3929 36.3963 91.5924 34.5888 91.7186C31.5161 92.1921 28.4133 89.5722 28.2024 86.2894C28.0819 83.2275 28.2024 80.1341 28.1121 77.0407ZM48.0846 76.946C48.7474 76.9776 49.4402 76.9776 50.1331 76.9776C50.103 81.1442 50.1331 85.3108 50.1331 89.4775C50.1632 90.9926 49.4402 92.3499 48.4762 93.4547C47.934 92.9812 47.4219 92.5077 46.9399 92.0027C47.5725 91.3083 48.0244 90.3929 48.0545 89.4143C48.0846 85.2793 47.9641 81.1126 48.0846 76.946ZM52.1213 76.9776C52.8142 76.9776 53.5372 76.9776 54.23 77.0407C54.1698 81.1758 54.23 85.3108 54.1999 89.4775C54.1999 90.961 53.5372 92.3815 52.5732 93.4231C52.0008 92.9812 51.4887 92.5077 50.9766 92.0343C51.6695 91.2767 52.1816 90.2666 52.1514 89.1618C52.1213 85.0899 52.1213 81.0495 52.1213 76.9776ZM58.6583 77.4826C60.014 76.7882 61.5503 76.9776 62.9963 77.0091C62.9662 81.2705 62.9963 85.5318 62.9662 89.7616C62.936 91.182 62.2432 92.4446 61.3394 93.4547C60.8273 92.9812 60.3152 92.5077 59.8031 92.0343C60.4959 91.2136 60.9779 90.1719 60.9478 89.0671C57.9655 89.1303 55.3446 86.2578 55.3748 83.196C55.2543 80.797 56.6701 78.5558 58.6583 77.4826ZM57.604 81.7755C56.7002 84.0798 58.5378 87.0154 60.9478 86.9522C60.9478 84.3323 60.9478 81.7124 60.9478 79.0924C59.3813 79.0293 58.1462 80.3866 57.604 81.7755Z'
        fill='white'
      />
      <path
        d='M24.9722 6.86714C30.1111 2.70157 36.648 0.224748 43.2983 0.0371094C43.4116 2.55146 43.5628 5.02829 43.6006 7.54264C40.1999 7.61769 36.8369 8.55588 33.8141 10.0195C31.1313 10.6199 28.4107 11.1078 25.9169 12.2711C23.6497 13.2468 21.4203 14.4852 19.6066 16.1365C16.8483 18.6133 14.959 21.9908 13.9766 25.5559C14.1277 24.0923 14.5056 22.7038 14.959 21.3153C16.8105 15.6861 20.3246 10.5824 24.9722 6.86714Z'
        fill={colors![0]}
      />
      <path
        d='M10.7299 5.36914C12.9215 6.68261 15.2642 7.65833 17.4935 8.89674C15.3775 12.612 14.584 17.0778 14.9241 21.3184C14.4707 22.7069 14.0928 24.0954 13.9417 25.559C12.997 29.9497 13.4127 34.7158 15.642 38.6937C16.7756 40.9829 18.5893 42.7842 20.3275 44.5855C18.287 43.2345 16.5489 41.5083 14.8863 39.7445C10.1631 34.378 7.40474 27.3979 7.2536 20.2676C7.14024 15.1263 8.3116 9.94751 10.7299 5.36914Z'
        fill={colors![1]}
      />
      <path
        d='M33.8159 10.0558C41.0707 9.15511 48.6657 10.5812 54.8248 14.5591C58.8678 17.0359 62.193 20.5635 64.7624 24.4664C62.6086 25.7799 60.4548 27.0933 58.301 28.4443C56.0339 25.0293 53.0488 22.0271 49.3836 20.1132C47.9855 18.4995 46.4363 16.9984 44.6982 15.76C41.5619 13.2081 37.6322 11.5569 33.5514 11.3317C30.9441 11.1065 28.3747 11.707 25.8809 12.3074C28.3747 11.1065 31.1331 10.6562 33.8159 10.0558Z'
        fill={colors![2]}
      />
      <path
        d='M25.8803 12.3068C28.3742 11.7064 30.9436 11.1059 33.5508 11.3311C37.6317 11.5563 41.5614 13.2075 44.6976 15.7594C45.4155 16.6225 46.209 17.3731 46.9647 18.1611C50.7433 22.6269 52.0658 28.894 50.9322 34.5607C50.5922 36.6247 49.9498 38.6137 49.2697 40.6027C47.1915 45.5563 43.9041 50.0596 39.6343 53.3996C34.1932 57.7153 27.2406 60.117 20.2502 60.042C20.2502 57.5651 20.1747 55.0508 20.288 52.574C23.991 52.4989 27.7318 51.7484 30.9814 49.9846C31.6993 49.6093 32.3795 49.159 33.0596 48.7462C28.4497 49.0089 23.9155 47.3952 20.288 44.6556C18.5121 42.8543 16.6984 41.053 15.6026 38.7638C13.3732 34.7859 12.9576 30.0199 13.9022 25.6291C14.8847 22.064 16.774 18.7241 19.5323 16.2097C21.4216 14.521 23.6132 13.2826 25.8803 12.3068ZM29.9234 19.0618C25.2002 20.1126 21.2704 24.3532 21.1193 29.2318C20.4392 35.0861 25.3891 40.7152 31.2081 41.1656C35.7046 41.691 40.3522 39.1391 42.3927 35.1236C43.8285 32.4216 44.0175 29.0817 42.9595 26.2296C41.2213 21.0508 35.289 17.7859 29.9234 19.0618Z'
        fill={colors![3]}
      />
      <path
        d='M28.5974 24.4277C28.0684 24.6154 27.5772 24.8405 27.0859 25.0657C28.1439 28.7434 28.5218 32.6088 28.4462 36.4741H30.1088C30.1466 35.1231 30.1466 33.7721 29.9576 32.4587C31.0912 32.909 32.3759 32.7589 33.0561 31.6706C33.8118 32.196 34.6431 32.8715 35.6633 32.7213C37.1369 32.6088 38.2327 31.1077 38.1194 29.6816C38.0438 27.8428 37.2503 26.154 36.419 24.5778C35.8522 24.803 35.2854 25.0657 34.7942 25.4035C35.5499 26.6043 36.0789 27.9178 36.2679 29.3063C36.3812 29.9818 36.0789 30.845 35.2854 30.8825C34.5675 30.7699 34.1141 30.1319 33.9252 29.494C33.4717 27.8803 33.2828 26.1915 32.8294 24.5403C32.3004 24.6904 31.7714 24.8781 31.2424 25.0657C31.2801 27.0171 32.7916 29.1937 31.5446 30.9951C30.8267 30.92 29.9954 30.6949 29.8821 29.8692C29.542 28.0304 29.2775 26.1915 28.5974 24.4277Z'
        fill='white'
      />
      <path
        d='M44.7383 15.7603C46.4764 16.9987 48.0256 18.4998 49.4237 20.1135C53.7313 24.9921 56.3763 31.2592 56.9053 37.7139C57.4343 43.3055 56.2252 48.9722 53.8069 54.0009C51.6153 52.9126 49.4237 51.7868 47.1944 50.8111C47.2321 50.3607 47.3077 49.9104 47.4967 49.4976C48.7058 46.7956 49.3859 43.8309 49.4237 40.8663L49.3104 40.6036C49.9905 38.6146 50.6329 36.6256 50.9729 34.5616C52.1065 28.8949 50.784 22.6653 47.0054 18.162C46.2497 17.3364 45.4184 16.5859 44.7383 15.7603Z'
        fill={colors![4]}
      />
      <path
        d='M0.376953 36.2866C2.41738 34.748 4.68453 33.5095 6.76274 32.0835C8.84096 35.2358 11.6371 37.9003 14.9245 39.7767C16.587 41.5405 18.3252 43.2667 20.3656 44.6177C23.993 47.3573 28.5273 48.9709 33.1372 48.7082C32.4571 49.1586 31.7769 49.5714 31.059 49.9467C20.5923 51.4853 9.40775 47.4323 2.68189 39.2138C1.8506 38.3131 1.17045 37.2623 0.376953 36.2866Z'
        fill={colors![5]}
      />
    </svg>
  );
};

export default VarzeshLogo;