import { IconProps } from "@/shared/types";

const JobinjaLogo: React.FC<IconProps> = ({ width, height, colors }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.5'
        y='0.5'
        width='199'
        height='199'
        rx='29.5'
        stroke='url(#paint0_linear_15856_2832)'
      />
      <path
        d='M87.5262 84C87.5262 84.0932 87.5327 84.1863 87.5327 84.2799C87.5327 87.0367 87.5327 89.7937 87.5327 92.5509C87.5327 92.6352 87.4919 92.7547 87.5626 92.7974C87.6494 92.8505 87.7227 92.7367 87.796 92.6897C88.6908 92.0994 89.7097 91.7293 90.771 91.6092C91.106 91.5651 91.4436 91.544 91.7815 91.5459C93.4579 91.5872 94.9678 92.1005 96.2741 93.1827C96.9288 93.725 97.4486 94.3827 97.8686 95.1231C98.4434 96.136 98.7797 97.2297 98.9159 98.3853C98.9786 98.8727 99.0047 99.3642 98.994 99.8556C98.9567 101.089 98.7771 102.296 98.2929 103.44C97.9902 104.157 97.575 104.819 97.0633 105.401C95.8528 106.78 94.3126 107.535 92.5446 107.869C91.5537 108.057 90.5528 108.089 89.551 108.042C87.657 107.957 85.7862 107.586 84.001 106.94C83.8388 106.881 83.6795 106.815 83.5177 106.756C83.4787 106.746 83.4448 106.721 83.422 106.687C83.3992 106.654 83.3891 106.613 83.3936 106.572C83.3936 106.528 83.3936 106.484 83.3936 106.441V84.1494C83.3936 84.0997 83.3936 84.0497 83.3936 84H87.5262ZM87.5331 100.211C87.5331 101.518 87.5331 102.824 87.5331 104.13C87.5331 104.428 87.5079 104.414 87.806 104.498C88.9284 104.815 90.0712 104.95 91.2335 104.828C91.9492 104.755 92.6235 104.454 93.1586 103.967C93.8093 103.386 94.2146 102.649 94.4575 101.814C94.6675 101.092 94.7339 100.349 94.7439 99.602C94.7437 99.2924 94.7237 98.9832 94.684 98.6762C94.6042 97.9819 94.4176 97.3224 94.0766 96.7125C93.5707 95.7998 92.8414 95.1609 91.8396 94.8613C91.3736 94.7224 90.8968 94.7022 90.4161 94.7176C89.9852 94.7308 89.5604 94.8239 89.1627 94.9922C88.642 95.2119 88.1843 95.5344 87.7309 95.871C87.58 95.9831 87.5283 96.1083 87.5296 96.2942C87.5361 97.5988 87.5331 98.9051 87.5331 100.211Z'
        fill={colors![0]}
      />
      <path
        d='M143.997 106.705C143.013 107.325 141.976 107.813 140.818 107.994C140.194 108.091 139.569 108.09 138.953 107.94C138.503 107.831 138.115 107.619 137.849 107.219C137.721 107.021 137.62 106.806 137.549 106.581C137.482 106.375 137.483 106.373 137.299 106.499C136.924 106.76 136.533 106.994 136.128 107.202C135.336 107.606 134.505 107.887 133.625 108.002C132.831 108.106 132.039 108.101 131.279 107.807C130.132 107.364 129.296 106.583 128.833 105.419C128.695 105.059 128.622 104.676 128.616 104.289C128.592 103.704 128.661 103.118 128.821 102.555C129.096 101.621 129.652 100.903 130.441 100.358C131.065 99.9271 131.743 99.6086 132.444 99.3335C133.472 98.9306 134.539 98.6537 135.594 98.3387C136.13 98.1787 136.668 98.0223 137.204 97.8619C137.385 97.8079 137.392 97.7991 137.392 97.6189C137.392 97.3017 137.403 96.9844 137.359 96.6685C137.315 96.3442 137.224 96.0371 137.049 95.7589C136.821 95.3982 136.496 95.1626 136.106 95.0146C135.741 94.8757 135.361 94.8164 134.972 94.7887C134.375 94.7496 133.776 94.8013 133.195 94.9421C132.409 95.1258 131.658 95.4423 130.976 95.8784C130.398 96.2475 129.869 96.6885 129.399 97.1909C129.351 97.2423 129.312 97.3091 129.234 97.3272C129.183 97.2674 129.202 97.2024 129.202 97.143C129.202 96.0353 129.202 94.9276 129.198 93.8198C129.195 93.7523 129.209 93.6852 129.24 93.6251C129.27 93.565 129.316 93.5141 129.372 93.4775C130.614 92.528 132.007 91.9396 133.54 91.6918C134.195 91.5816 134.859 91.534 135.522 91.5498C136.396 91.5753 137.263 91.6588 138.106 91.9189C138.936 92.1751 139.687 92.5719 140.302 93.202C140.95 93.8664 141.319 94.6745 141.455 95.5933C141.508 95.9752 141.532 96.3606 141.528 96.7463C141.526 99.2295 141.526 101.713 141.528 104.196C141.528 104.377 141.528 104.555 141.596 104.729C141.694 104.981 141.873 105.116 142.139 105.135C142.336 105.147 142.533 105.113 142.716 105.036C143.182 104.858 143.616 104.602 144 104.279L143.997 106.705ZM137.389 102.084V100.685C137.389 100.509 137.391 100.336 137.389 100.162C137.387 100.011 137.374 100.003 137.225 100.049C137.196 100.058 137.167 100.068 137.138 100.078C136.611 100.267 136.086 100.462 135.573 100.687C134.985 100.944 134.411 101.226 133.888 101.606C133.577 101.832 133.286 102.082 133.084 102.416C132.823 102.845 132.749 103.315 132.818 103.814C132.926 104.592 133.466 105.188 134.225 105.352C134.582 105.422 134.95 105.415 135.304 105.329C136.039 105.169 136.652 104.779 137.22 104.297C137.35 104.184 137.396 104.066 137.393 103.896C137.384 103.291 137.389 102.687 137.389 102.084Z'
        fill={colors![1]}
      />
      <path
        d='M73.6114 108.052C72.4833 108.061 71.4533 107.909 70.4515 107.582C69.4524 107.262 68.5203 106.758 67.7026 106.094C66.9995 105.525 66.4104 104.825 65.9671 104.032C65.4465 103.097 65.1463 102.094 65.0126 101.032C64.9341 100.384 64.9155 99.729 64.9571 99.0769C65.0116 97.9915 65.2907 96.9298 65.7762 95.9606C66.1864 95.1357 66.7431 94.3943 67.4184 93.7737C68.2271 93.035 69.156 92.4994 70.1786 92.1233C70.9788 91.8329 71.8137 91.652 72.6612 91.5854C74.0496 91.4699 75.4115 91.6105 76.7343 92.0569C77.8059 92.4185 78.7834 92.9568 79.6334 93.7205C80.715 94.6929 81.4395 95.8916 81.8461 97.2911C82.0109 97.8777 82.1127 98.4805 82.1498 99.0892C82.2407 100.283 82.1052 101.484 81.7506 102.626C81.4841 103.49 81.0559 104.294 80.4894 104.994C79.8544 105.775 79.0743 106.421 78.1934 106.897C77.2678 107.405 76.264 107.752 75.2245 107.921C75.0123 107.956 74.7993 107.988 74.5854 108.009C74.2361 108.039 73.8864 108.067 73.6114 108.052ZM69.2988 99.7746C69.2903 100.19 69.3178 100.606 69.3808 101.016C69.5665 102.159 69.9947 103.175 70.8559 103.97C71.1404 104.237 71.4677 104.453 71.8238 104.608C72.2389 104.781 72.6781 104.887 73.1254 104.922C73.7078 104.978 74.2954 104.921 74.857 104.755C76.0423 104.403 76.8527 103.617 77.3361 102.479C77.661 101.715 77.7842 100.904 77.8164 100.08C77.8307 99.7132 77.8223 99.3464 77.7912 98.9811C77.737 98.3505 77.6211 97.7367 77.3755 97.1531C76.8536 95.9153 75.9586 95.1169 74.657 94.7957C74.1992 94.6819 73.7337 94.6674 73.2656 94.6802C72.5794 94.6944 71.9107 94.9014 71.334 95.2782C70.5752 95.7717 70.058 96.4699 69.7148 97.3052C69.3938 98.0869 69.2814 98.9086 69.2988 99.7746Z'
        fill={colors![2]}
      />
      <path
        d='M110.823 93.9899C110.896 93.9873 110.921 93.9306 110.955 93.8911C111.493 93.2689 112.098 92.7271 112.808 92.3114C113.434 91.9496 114.123 91.7133 114.838 91.6154C115.178 91.5609 115.522 91.5371 115.866 91.5442C116.876 91.5776 117.84 91.7863 118.713 92.332C119.45 92.7934 120.02 93.4183 120.454 94.1732C120.908 94.961 121.139 95.8214 121.235 96.7217C121.266 97.0186 121.282 97.3169 121.282 97.6155C121.278 100.889 121.278 104.162 121.282 107.435C121.282 107.75 121.282 107.75 120.967 107.75H117.482C117.135 107.75 117.146 107.769 117.146 107.418C117.146 104.319 117.146 101.22 117.146 98.1217C117.146 97.6265 117.098 97.1391 116.953 96.6663C116.722 95.9163 116.298 95.3196 115.581 94.972C115.297 94.8348 114.988 94.7599 114.674 94.7523C114.26 94.7395 113.849 94.7558 113.454 94.8973C113.048 95.0434 112.67 95.2604 112.338 95.5384C111.798 95.9857 111.34 96.5121 110.906 97.0649C110.836 97.1451 110.8 97.2495 110.805 97.3562C110.809 97.4182 110.805 97.4806 110.805 97.5425C110.805 100.835 110.805 104.126 110.805 107.418C110.805 107.769 110.819 107.75 110.469 107.75H106.947C106.664 107.75 106.664 107.75 106.664 107.458V92.1308C106.664 91.8439 106.664 91.8434 106.952 91.8434H110.492C110.804 91.8434 110.804 91.8434 110.804 92.1686C110.804 92.7099 110.804 93.2513 110.804 93.7944C110.804 93.8581 110.789 93.9288 110.823 93.9899Z'
        fill={colors![3]}
      />
      <path
        d='M127.473 100.789C127.473 103.633 127.482 106.476 127.467 109.32C127.462 110.352 127.29 111.363 126.884 112.321C126.353 113.574 125.5 114.526 124.305 115.161C123.872 115.385 123.419 115.566 122.953 115.703C122.786 115.755 122.764 115.747 122.676 115.583C122.434 115.136 122.193 114.688 121.953 114.239L120.957 112.387C120.943 112.36 120.924 112.334 120.911 112.306C120.865 112.205 120.874 112.183 120.983 112.145C121.092 112.106 121.206 112.074 121.316 112.033C122.165 111.717 122.737 111.122 123.044 110.264C123.207 109.806 123.295 109.325 123.305 108.839C123.308 108.695 123.307 108.553 123.307 108.409V92.1513C123.307 91.8486 123.311 91.8438 123.601 91.8438H127.178C127.473 91.8438 127.476 91.8459 127.476 92.1456V100.789H127.473Z'
        fill={colors![4]}
      />
      <path
        d='M63.5865 100.749C63.5865 103.587 63.5947 106.425 63.5817 109.262C63.5774 110.238 63.4299 111.196 63.0789 112.114C62.6077 113.344 61.8298 114.316 60.7061 114.998C60.1964 115.3 59.6509 115.535 59.0826 115.697C58.8834 115.757 58.8795 115.75 58.781 115.566C58.2092 114.507 57.6377 113.448 57.0664 112.389C57.0603 112.378 57.0543 112.368 57.0486 112.356C56.971 112.204 56.977 112.186 57.1354 112.136C57.395 112.059 57.6459 111.955 57.8842 111.825C58.5884 111.422 59.0088 110.802 59.2292 110.031C59.3616 109.551 59.4255 109.054 59.4188 108.556C59.4162 103.111 59.4162 97.6651 59.4188 92.2194C59.4188 92.1447 59.4188 92.07 59.421 91.9953C59.421 91.9074 59.4644 91.856 59.5559 91.8516C59.611 91.8485 59.6665 91.8477 59.7216 91.8477C60.9075 91.8477 62.0934 91.8477 63.2793 91.8477C63.583 91.8477 63.583 91.8477 63.583 92.1618V100.749H63.5865Z'
        fill={colors![5]}
      />
      <path
        d='M104.49 99.7799V107.415C104.49 107.748 104.49 107.749 104.167 107.749H100.61C100.325 107.749 100.324 107.749 100.324 107.459V92.1513C100.324 91.8438 100.324 91.8438 100.634 91.8438H104.191C104.486 91.8438 104.489 91.8468 104.489 92.1461C104.49 94.6902 104.49 97.2348 104.49 99.7799Z'
        fill={colors![6]}
      />
      <path
        d='M102.413 89.275C101.198 89.3559 100.054 88.1181 100.053 86.9044C100.053 85.5467 101.242 84.5211 102.4 84.5176C103.62 84.5136 104.745 85.5577 104.753 86.8935C104.76 88.159 103.628 89.3489 102.413 89.275Z'
        fill={colors![7]}
      />
      <path
        d='M61.5048 89.2729C60.3308 89.3519 59.148 88.1546 59.1563 86.8904C59.1654 85.5049 60.3646 84.5132 61.5165 84.5176C62.7226 84.5207 63.8225 85.628 63.8216 86.9036C63.8207 88.2381 62.658 89.3506 61.5048 89.2729Z'
        fill={colors![8]}
      />
      <path
        d='M125.385 89.2732C124.775 89.2833 124.262 89.057 123.828 88.6272C123.561 88.3636 123.339 88.0718 123.201 87.7168C122.845 86.8028 123.13 85.7192 123.88 85.0984C124.232 84.8079 124.618 84.6062 125.068 84.5425C125.725 84.4498 126.314 84.6155 126.823 85.0426C127.105 85.2749 127.335 85.5665 127.495 85.8972C127.848 86.6345 127.786 87.7932 127.087 88.5222C126.73 88.8944 126.317 89.1554 125.808 89.249C125.667 89.2762 125.526 89.2688 125.385 89.2732Z'
        fill={colors![9]}
      />
      <defs>
        <linearGradient
          id='paint0_linear_15856_2832'
          x1='100'
          y1='0'
          x2='100'
          y2='200'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={colors![10]} />
          <stop offset='1' stopColor={colors![11]} stopOpacity='0' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default JobinjaLogo;