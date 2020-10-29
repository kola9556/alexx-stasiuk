import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const colors = {
  basic: 'rgba(244, 235, 190, 1)',
  a: 'rgba(107, 146, 195, 1)',
  b: 'rgba(92, 144, 91, 0.92)',
  c: 'rgba(143, 194, 211, 1)',
  d: 'rgba(249, 125, 163, 0.21)',
};

const StyledLogo = styled(Link)`
  :hover {
    @keyframes example {
      0% {
        fill: ${colors.d};
      }
      25% {
        fill: ${colors.a};
      }
      50% {
        fill: ${colors.b};
      }
      75% {
        fill: ${colors.c};
      }
      100% {
        fill: ${colors.d};
      }
    }

    .a {
      fill: ${colors.basic};
      animation: example 2s linear infinite;
    }
    .b {
      fill: ${colors.basic};
      animation: example 2s linear infinite;
    }
    .c {
      fill: ${colors.basic};
      animation: example 2s linear infinite;
    }
    .d {
      fill: ${colors.basic};
      animation: example 2s linear infinite;
    }
  }

  svg {
    @media (min-width: 700px) {
      height: 90px;
      width: 90px;
    }
  }
`;

const Logo = ({ path }) => {
  return (
    <>
      <StyledLogo to={path}>
        <svg
          class="mySvg"
          width="60"
          height="60"
          viewBox="0 0 143 143"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="a"
            d="M83.6838 28.2718L104 56.2178L112.141 40.1042L93.9007 21.8635L83.6838 28.2718Z"
            fill="#F4EBBE"
          />
          <path
            d="M104 58.5711C103.252 58.5711 102.541 58.213 102.098 57.6017L81.7828 29.6558C81.3991 29.128 81.251 28.4657 81.3762 27.8262C81.4974 27.1853 81.8811 26.6253 82.4344 26.2806L92.65 19.871C93.5789 19.2854 94.7852 19.4214 95.5633 20.2009L113.805 38.4416C114.524 39.1605 114.699 40.259 114.242 41.1664L106.101 57.28C105.73 58.011 105.007 58.4984 104.189 58.5643C104.127 58.5684 104.062 58.5711 104 58.5711ZM87.0683 28.9261L103.637 51.7172L109.274 40.5633L93.5614 24.8522L87.0683 28.9261Z"
            fill="#6B6869"
          />
          <path
            class="b"
            d="M93.9006 21.8635L112.141 40.1042L117.705 29.089L104.089 15.4727L93.9006 21.8635Z"
            fill="#F4EBBE"
          />
          <path
            d="M112.141 42.4575C111.522 42.4575 110.92 42.2138 110.477 41.7682L92.2367 23.5275C91.7292 23.0227 91.4801 22.3118 91.5609 21.5996C91.6443 20.8875 92.0428 20.2507 92.65 19.8724L102.84 13.4803C103.766 12.8946 104.979 13.0319 105.753 13.8087L119.37 27.4277C120.088 28.1466 120.263 29.2451 119.806 30.1525L114.24 41.1678C113.901 41.8409 113.257 42.3094 112.513 42.4292C112.389 42.4481 112.265 42.4575 112.141 42.4575ZM97.6514 22.2889L111.507 36.1435L114.838 29.5494L103.751 18.4601L97.6514 22.2889Z"
            fill="#6B6869"
          />
          <path
            class="c"
            d="M114.278 9.08197L104.089 15.4727L117.706 29.089L123.27 18.0737L114.278 9.08197Z"
            fill="#F4EBBE"
          />
          <path
            d="M117.706 31.4423C117.088 31.4423 116.486 31.1986 116.043 30.753L102.427 17.1354C101.919 16.6305 101.671 15.9197 101.751 15.2075C101.834 14.4953 102.234 13.8586 102.841 13.4802L113.029 7.08948C113.956 6.50385 115.165 6.63713 115.942 7.41931L124.935 16.4097C125.654 17.1287 125.829 18.2272 125.371 19.1346L119.806 30.1512C119.467 30.8257 118.823 31.2928 118.079 31.4126C117.955 31.4328 117.829 31.4423 117.706 31.4423ZM107.843 15.8968L117.072 25.1282L120.404 18.5315L113.94 12.0707L107.843 15.8968Z"
            fill="#6B6869"
          />
          <path
            class="d"
            d="M128.823 7.08006C130.308 4.14114 126.984 1.11202 124.196 2.86084L114.278 9.08063L123.27 18.0724L128.823 7.08006Z"
            fill="#F4EBBE"
          />
          <path
            d="M123.271 20.4257C122.653 20.4257 122.053 20.182 121.607 19.7364L112.614 10.7446C112.109 10.2398 111.859 9.53029 111.939 8.81811C112.02 8.10593 112.421 7.46914 113.028 7.08949L122.945 0.869699C125.095 -0.480615 127.816 -0.242324 129.697 1.47418C131.579 3.18799 132.073 5.86707 130.925 8.14228L125.371 19.1346C125.031 19.8078 124.387 20.2763 123.643 20.3961C123.519 20.4163 123.395 20.4257 123.271 20.4257ZM118.03 9.5074L122.637 14.1117L126.724 6.0192C126.991 5.49146 126.715 5.12258 126.526 4.95026C126.299 4.74159 125.924 4.55042 125.444 4.85467L118.03 9.5074ZM128.824 7.08007H128.847H128.824Z"
            fill="#6B6869"
          />
          <path
            d="M41.0606 29.2828C41.0606 29.2828 4.2171 38.1036 31.8494 68.4998L41.0606 29.2828Z"
            fill="#F97DA3"
            fill-opacity="0.21"
          />
          <path
            d="M31.8494 70.8518C31.1951 70.8518 30.561 70.5785 30.1073 70.0817C20.9729 60.0345 17.5587 50.9861 19.9618 43.1952C23.6722 31.1555 39.8261 27.1598 40.514 26.9942C41.3124 26.803 42.143 27.0399 42.7219 27.6148C43.2981 28.191 43.5378 29.0257 43.3507 29.82L34.1394 69.037C33.9402 69.8865 33.2859 70.5583 32.4391 70.7764C32.2452 70.8262 32.0473 70.8518 31.8494 70.8518ZM37.8094 32.8303C33.3748 34.5737 26.4011 38.2463 24.453 44.594C22.8402 49.8526 24.9148 56.176 30.6243 63.4257L37.8094 32.8303Z"
            fill="#6B6869"
          />
          <path
            d="M34.2028 49.5456C34.2028 49.5456 -2.6407 58.3678 24.9916 88.7626L34.2028 49.5456Z"
            fill="#8FC2D3"
          />
          <path
            d="M24.9917 91.1172C24.336 91.1172 23.7019 90.844 23.2496 90.3472C14.1164 80.2972 10.7023 71.2516 13.1027 63.458C16.8144 51.4183 32.9683 47.4225 33.6549 47.2569C34.4519 47.0685 35.2853 47.3027 35.8615 47.8776C36.4404 48.4538 36.68 49.2885 36.4929 50.0828L27.2817 89.3011C27.0811 90.152 26.4268 90.8224 25.5813 91.0405C25.3861 91.0917 25.1896 91.1172 24.9917 91.1172ZM30.9516 53.0957C26.517 54.8365 19.5433 58.5105 17.5979 64.8568C15.9824 70.118 18.057 76.4415 23.7665 83.6912L30.9516 53.0957Z"
            fill="#6B6869"
          />
          <path
            d="M30.4291 69.8097C30.4291 69.8097 -7.21539 90.5478 30.4291 111.287V69.8097Z"
            fill="#5C915B"
            fill-opacity="0.92"
          />
          <path
            d="M30.4292 113.64C30.0387 113.64 29.6483 113.545 29.2942 113.35C17.3838 106.787 11.3444 99.3739 11.3444 91.3165C11.3444 77.7932 28.5619 68.1538 29.2942 67.7499C30.0226 67.3501 30.9071 67.3649 31.626 67.7849C32.3436 68.2104 32.7824 68.9791 32.7824 69.8111V111.288C32.7824 112.12 32.3436 112.891 31.626 113.315C31.2571 113.53 30.8438 113.64 30.4292 113.64ZM28.0772 74.1286C23.4999 77.3866 16.0469 83.8433 16.0509 91.3259C16.0563 96.7891 20.0978 102.108 28.0772 107.17V74.1286Z"
            fill="#6B6869"
          />
          <path
            d="M29.7575 97.053C29.7575 97.053 5.94727 124.858 45.1831 137.02L29.7575 97.053Z"
            fill="#6B92C4"
          />
          <path
            d="M45.183 139.372C44.9501 139.372 44.7158 139.337 44.487 139.267C31.3285 135.188 23.4312 128.879 21.016 120.513C17.4161 108.039 27.5387 96.0271 27.9709 95.5209C28.5107 94.8949 29.3306 94.596 30.1559 94.7333C30.9717 94.8734 31.657 95.4321 31.9532 96.2035L47.3774 136.172C47.7032 137.014 47.5174 137.966 46.9022 138.625C46.4498 139.109 45.8238 139.372 45.183 139.372ZM29.1475 102.005C26.7417 105.937 23.6453 112.689 25.5435 119.227C27.2156 124.988 32.4594 129.645 41.1536 133.11L29.1475 102.005Z"
            fill="#6B6869"
          />
          <path
            class="big"
            d="M99.4446 107.676C102.199 107.473 129.425 109.948 129.425 81.7014C129.425 67.6274 118.045 56.2178 103.971 56.2178C103.971 56.2178 104.599 26.1298 64.0725 24.2868C64.0725 24.2868 53.9485 9.55046 38.29 11.3922C38.29 11.3922 29.239 18.7617 38.4502 38.1036C38.4502 38.1036 13.9601 91.5319 46.8994 140.647H129.247V138.31C129.247 132.937 126.234 127.953 121.379 125.652C115.717 122.969 107.657 117.736 99.4446 107.676Z"
            fill="white"
          />
          <path
            d="M129.247 143H46.8996C46.1161 143 45.3823 142.61 44.9461 141.957C14.1743 96.0742 32.7004 45.9012 35.8749 38.1494C26.7418 18.0791 36.3825 9.91128 36.8039 9.56933C37.1499 9.28661 37.5712 9.1089 38.0142 9.0564C52.6616 7.32643 62.6133 18.5544 65.2991 21.9968C99.8917 24.0391 105.323 46.5798 106.167 53.9506C120.476 55.0761 131.777 67.093 131.777 81.7014C131.777 90.3889 129.32 97.2468 124.477 102.081C118.379 108.168 109.919 109.589 104.507 109.918C111.404 117.37 117.901 121.402 122.387 123.527C127.983 126.177 131.599 131.981 131.599 138.311V140.647C131.599 141.947 130.548 143 129.247 143ZM48.1637 138.295H126.895C126.887 133.779 124.331 129.653 120.374 127.778C114.752 125.115 106.243 119.726 97.6218 109.164C97.0672 108.484 96.9352 107.551 97.2826 106.745C97.6299 105.938 98.3973 105.394 99.2724 105.33C99.5255 105.312 99.9469 105.314 100.534 105.31C104.045 105.312 114.557 105.335 121.153 98.7506C125.08 94.8303 127.072 89.0951 127.072 81.7014C127.072 68.9468 116.709 58.571 103.971 58.571C103.339 58.571 102.734 58.3166 102.289 57.8643C101.849 57.4132 101.605 56.802 101.619 56.1706C101.635 55.0425 101.597 28.3499 63.965 26.6387C63.2312 26.6037 62.5541 26.2281 62.1354 25.6237C62.0411 25.4917 52.9794 12.6281 39.3551 13.6526C37.8768 15.357 33.4705 22.1718 40.5748 37.0926C40.8737 37.7199 40.879 38.451 40.5882 39.0824C40.3513 39.602 17.4027 91.1697 48.1637 138.295Z"
            fill="#6B6869"
          />

          <path
            class="eye"
            d="M75.7529 71.5061C68.8694 71.5061 63.2703 65.9069 63.2703 59.0234C63.2703 57.7229 64.3217 56.6701 65.6222 56.6701C66.9227 56.6701 67.9755 57.7229 67.9755 59.0234C67.9755 63.3099 71.4664 66.8008 75.7529 66.8008C80.0435 66.8008 83.5331 63.3099 83.5331 59.0234C83.5331 57.7229 84.5858 56.6701 85.8863 56.6701C87.1868 56.6701 88.2383 57.7229 88.2383 59.0234C88.2383 65.9069 82.6364 71.5061 75.7529 71.5061Z"
            fill="#6B6869"
          />

          <path
            d="M55.4901 31.6361C54.5303 31.6361 53.6269 31.0424 53.2796 30.0866C52.1123 26.8797 50.548 24.8482 48.6268 24.0485C46.6518 23.2259 44.829 23.9906 44.8115 23.9974C43.6348 24.5493 42.2361 24.0324 41.6881 22.8517C41.1415 21.6723 41.6558 20.2736 42.8352 19.7283C43.2054 19.5547 46.5657 18.0993 50.4349 19.7027C53.6202 21.0288 56.065 23.9812 57.7007 28.4778C58.1464 29.6975 57.5176 31.0492 56.2939 31.4921C56.03 31.5904 55.7567 31.6361 55.4901 31.6361Z"
            fill="#6B6869"
          />
          <path
            d="M56.6521 135.132C56.0369 135.132 55.4539 135.073 54.9031 134.956C54.3523 134.839 53.8367 134.663 53.3562 134.429C52.8816 134.194 52.4363 133.901 52.0203 133.55L53.1365 132.179C53.6228 132.601 54.159 132.917 54.7449 133.128C55.3309 133.339 55.9666 133.444 56.6521 133.444C57.5779 133.444 58.2957 133.274 58.8055 132.935C59.3152 132.589 59.5701 132.103 59.5701 131.476V131.467C59.5701 131.021 59.4529 130.67 59.2186 130.412C58.99 130.148 58.6912 129.955 58.3221 129.832C57.9588 129.703 57.4871 129.586 56.907 129.48C56.8895 129.475 56.8689 129.472 56.8455 129.472C56.8279 129.472 56.8103 129.469 56.7928 129.463L56.6609 129.437C55.8055 129.29 55.1082 129.126 54.5691 128.944C54.0359 128.757 53.5789 128.42 53.198 127.934C52.8172 127.441 52.6268 126.744 52.6268 125.842V125.833C52.6268 125.042 52.8025 124.368 53.1541 123.812C53.5115 123.249 54.0301 122.821 54.7098 122.528C55.3895 122.235 56.2068 122.089 57.1619 122.089C57.6189 122.089 58.0672 122.139 58.5066 122.238C58.952 122.338 59.3885 122.487 59.8162 122.687C60.2498 122.88 60.6746 123.126 61.0906 123.425L60.0711 124.849C59.5848 124.491 59.0984 124.225 58.6121 124.049C58.1316 123.867 57.6482 123.776 57.1619 123.776C56.2889 123.776 55.6092 123.952 55.1228 124.304C54.6424 124.649 54.4021 125.142 54.4021 125.78V125.789C54.4021 126.229 54.5252 126.574 54.7713 126.826C55.0232 127.078 55.3338 127.266 55.7029 127.389C56.0779 127.506 56.5965 127.629 57.2586 127.758C57.282 127.764 57.3025 127.77 57.3201 127.775C57.3436 127.775 57.367 127.778 57.3904 127.784C57.4197 127.79 57.452 127.796 57.4871 127.802C57.5223 127.808 57.5545 127.813 57.5838 127.819C58.3572 127.978 59.0018 128.165 59.5174 128.382C60.0389 128.599 60.4725 128.95 60.8182 129.437C61.1697 129.917 61.3455 130.576 61.3455 131.414V131.432C61.3455 132.211 61.1609 132.879 60.7918 133.436C60.4227 133.986 59.8865 134.408 59.1834 134.701C58.4861 134.988 57.6424 135.132 56.6521 135.132ZM66.1004 135.044C65.3621 135.044 64.8201 134.842 64.4744 134.438C64.1346 134.027 63.9646 133.424 63.9646 132.627V123.223H65.7576V132.645C65.7576 132.867 65.8016 133.04 65.8895 133.163C65.9773 133.28 66.1062 133.339 66.2762 133.339H67.1375V135.044H66.1004ZM63.0242 125.877H67.1375V127.494H63.0242V125.877ZM74.7488 129.217C74.7488 128.619 74.5877 128.156 74.2654 127.828C73.949 127.494 73.4978 127.327 72.9119 127.327C72.5486 127.327 72.1912 127.383 71.8396 127.494C71.4939 127.605 71.1863 127.761 70.9168 127.96L69.6072 127.063C69.9529 126.647 70.407 126.325 70.9695 126.097C71.5379 125.862 72.1678 125.745 72.8592 125.745C73.615 125.745 74.2625 125.88 74.8016 126.149C75.3406 126.413 75.7508 126.8 76.032 127.31C76.3133 127.813 76.4539 128.423 76.4539 129.138V135H74.7488V129.217ZM72.5164 135.132C71.3914 135.132 70.5506 134.9 69.9939 134.438C69.4373 133.969 69.159 133.26 69.159 132.311C69.159 131.408 69.4139 130.731 69.9236 130.28C70.4334 129.829 71.2039 129.604 72.2352 129.604H74.8279L74.951 131.045H72.2439C71.7752 131.045 71.4236 131.15 71.1893 131.361C70.9607 131.566 70.8465 131.883 70.8465 132.311C70.8465 132.773 70.9988 133.116 71.3035 133.339C71.6141 133.562 72.0828 133.673 72.7098 133.673C73.3953 133.673 73.9051 133.6 74.2391 133.453C74.5789 133.307 74.7488 133.078 74.7488 132.768L74.9334 134.051C74.7752 134.297 74.5789 134.499 74.3445 134.657C74.116 134.815 73.8494 134.933 73.5447 135.009C73.24 135.091 72.8973 135.132 72.5164 135.132ZM82.4041 135.132C81.865 135.132 81.3582 135.079 80.8836 134.974C80.4148 134.868 79.9754 134.71 79.5652 134.499C79.1551 134.288 78.7771 134.024 78.4314 133.708L79.4949 132.398C79.9871 132.773 80.4764 133.055 80.9627 133.242C81.449 133.43 81.9295 133.523 82.4041 133.523C83.1131 133.523 83.6434 133.415 83.9949 133.198C84.3523 132.976 84.5311 132.645 84.5311 132.205C84.5311 131.912 84.4344 131.692 84.241 131.546C84.0477 131.399 83.8074 131.303 83.5203 131.256C83.2332 131.203 82.8289 131.156 82.3074 131.115C82.2605 131.115 82.2107 131.115 82.158 131.115C82.1053 131.109 82.0555 131.104 82.0086 131.098C81.9852 131.098 81.9617 131.098 81.9383 131.098C81.9148 131.092 81.8914 131.089 81.868 131.089C81.2762 131.042 80.7752 130.957 80.365 130.834C79.9549 130.705 79.6121 130.468 79.3367 130.122C79.0672 129.776 78.9324 129.281 78.9324 128.637C78.9324 127.992 79.0643 127.456 79.3279 127.028C79.5916 126.601 79.9842 126.281 80.5057 126.07C81.0271 125.854 81.6805 125.745 82.4656 125.745C82.9402 125.745 83.3914 125.789 83.8191 125.877C84.2527 125.965 84.6658 126.097 85.0584 126.272C85.451 126.442 85.8289 126.659 86.1922 126.923L85.1111 128.232C84.6541 127.939 84.2029 127.72 83.7576 127.573C83.3182 127.427 82.8875 127.354 82.4656 127.354C81.8562 127.354 81.3992 127.459 81.0945 127.67C80.7898 127.875 80.6375 128.186 80.6375 128.602C80.6375 128.848 80.7225 129.032 80.8924 129.155C81.0682 129.278 81.2879 129.36 81.5516 129.401C81.8152 129.442 82.1902 129.478 82.6766 129.507C82.7117 129.513 82.7469 129.516 82.782 129.516C82.823 129.516 82.8641 129.519 82.9051 129.524C82.9227 129.524 82.9402 129.524 82.9578 129.524C82.9754 129.524 82.993 129.527 83.0105 129.533C83.6492 129.574 84.1912 129.659 84.6365 129.788C85.0877 129.917 85.4656 130.172 85.7703 130.553C86.075 130.934 86.2273 131.484 86.2273 132.205C86.2273 132.861 86.0867 133.406 85.8055 133.84C85.5242 134.268 85.0994 134.59 84.5311 134.807C83.9686 135.023 83.2596 135.132 82.4041 135.132ZM88.5125 122.221H90.3055V124.014H88.5125V122.221ZM88.5125 125.877H90.3055V135H88.5125V125.877ZM98.532 125.877H100.316V135H98.532V125.877ZM94.823 131.423C94.823 132.062 94.9842 132.557 95.3064 132.908C95.6346 133.254 96.0945 133.427 96.6863 133.427C97.2723 133.427 97.7264 133.271 98.0486 132.961C98.3709 132.65 98.532 132.208 98.532 131.634L98.6551 133.541C98.4676 133.992 98.1629 134.37 97.741 134.675C97.3191 134.979 96.8006 135.132 96.1853 135.132C95.1775 135.132 94.3982 134.81 93.8475 134.165C93.3025 133.515 93.0301 132.601 93.0301 131.423V125.877H94.823V131.423ZM103.823 131.537L108.516 125.877H110.626L103.709 133.664L103.823 131.537ZM103.05 122.221H104.843V135H103.05V122.221ZM105.941 129.735L107.093 128.54L111.074 135H109.123L105.941 129.735Z"
            fill="#6B6869"
          />
        </svg>
      </StyledLogo>
    </>
  );
};

export default Logo;
