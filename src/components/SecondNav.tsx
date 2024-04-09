const SecondNav = () => {
  return (
    <footer className="flex flex-col gap-10 border pt-20 pb-10">
      <div className="bg-white backdrop-blur border-b border-b-slate-100/2 dark:bg-slate-800 dark:text-white h-">
        <div className="h-12 w-full flex justify-between">
          <div className="w-1/2 flex ">
            <button
              className="px-2 mr-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-700"
              type="button"
            >
              Refresh Project
            </button>
            <button
              className="px-2 bg-slate-100 rounded-lg text-slate-900"
              type="button"
            >
              Resume
            </button>
            {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg focus:outline-none focus:shadow-outline animate-pulse">
              Resume
            </button>

            

            <button className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:shadow-outline animate-pulse">
              Click Me
            </button> */}
          </div>
          <div className="h-12 w-1/2 flex justify-center items-center">
            {/* Github Icon */}
            <a
              className="h-full p-2 mr-2 flex items-center bg-slate-100 rounded-lg  text-slate-500 hover:text-slate-700"
              type="button"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <path
                    d="M84,240a23.9,23.9,0,0,0,24-24V168"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                  <path
                    d="M172,240a23.9,23.9,0,0,1-24-24V168"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                  <path
                    d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                  <path
                    d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                  <path
                    d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  ></path>
                </svg>
              </span>
            </a>
            {/* Linkdin Icon */}
            <a
              className="h-full p-2 mr-2 flex items-center bg-slate-100 rounded-lg  text-slate-500 hover:text-slate-700"
              type="button"
            >
              <span>
                <svg
                  baseProfile="tiny"
                  height="24px"
                  width="24px"
                  id="Layer_1"
                  version="1.2"
                  viewBox="0 0 24 24"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <path d="M8,19H5V9h3V19z M19,19h-3v-5.342c0-1.392-0.496-2.085-1.479-2.085c-0.779,0-1.273,0.388-1.521,1.165C13,14,13,19,13,19h-3   c0,0,0.04-9,0-10h2.368l0.183,2h0.062c0.615-1,1.598-1.678,2.946-1.678c1.025,0,1.854,0.285,2.487,1.001   C18.683,11.04,19,12.002,19,13.353V19z" />
                  </g>
                  <g>
                    <ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" />
                  </g>
                </svg>
              </span>
            </a>
            {/* Stackoverflow Icon */}
            <a
              className="h-full p-2 mr-2 flex items-center bg-slate-100 rounded-lg  text-slate-500 hover:text-slate-700"
              type="button"
            >
              <span>
                <svg
                  height="24px"
                  width="24px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="-1163 1657.697 56.693 56.693"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    height="4.1104"
                    transform="matrix(-0.8613 -0.508 0.508 -0.8613 -2964.1831 2556.6357)"
                    width="19.2465"
                    x="-1142.8167"
                    y="1680.7778"
                  />
                  <rect
                    height="4.1105"
                    transform="matrix(-0.9657 -0.2596 0.2596 -0.9657 -2672.0498 3027.386)"
                    width="19.2462"
                    x="-1145.7363"
                    y="1688.085"
                  />
                  <rect
                    height="4.1098"
                    transform="matrix(-0.9958 -0.0918 0.0918 -0.9958 -2425.5647 3282.8535)"
                    width="19.246"
                    x="-1146.9451"
                    y="1695.1263"
                  />
                  <rect
                    height="4.111"
                    width="19.2473"
                    x="-1147.2625"
                    y="1701.293"
                  />
                  <path d="M-1121.4579,1710.9474c0,0,0,0.9601-0.0323,0.9601v0.0156h-30.7953c0,0-0.9598,0-0.9598-0.0156h-0.0326v-20.03h3.2877  v16.8049h25.2446v-16.8049h3.2877V1710.9474z" />
                  <rect
                    height="4.111"
                    transform="matrix(0.5634 0.8262 -0.8262 0.5634 892.9033 1662.7915)"
                    width="19.247"
                    x="-1136.5389"
                    y="1674.2235"
                  />
                  <rect
                    height="4.1108"
                    transform="matrix(0.171 0.9853 -0.9853 0.171 720.9987 2489.031)"
                    width="19.2461"
                    x="-1128.3032"
                    y="1670.9347"
                  />
                </svg>
              </span>
            </a>
            {/* Twitter Icon */}
            <a
              className="h-full p-2 mr-2 flex items-center bg-slate-100 rounded-lg  text-slate-500 hover:text-slate-700"
              type="button"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  style={{
                    backgroundColor: "new 0 0 24 24",
                  }}
                  xmlSpace="preserve"
                >
                  <g>
                    <polygon points="12.153992,10.729553 8.088684,5.041199 5.92041,5.041199 10.956299,12.087097 11.59021,12.97345    15.900635,19.009583 18.068909,19.009583 12.785217,11.615906  " />
                    <path d="M21.15979,1H2.84021C1.823853,1,1,1.823853,1,2.84021v18.31958C1,22.176147,1.823853,23,2.84021,23h18.31958   C22.176147,23,23,22.176147,23,21.15979V2.84021C23,1.823853,22.176147,1,21.15979,1z M15.235352,20l-4.362549-6.213013   L5.411438,20H4l6.246887-7.104675L4,4h4.764648l4.130127,5.881958L18.06958,4h1.411377l-5.95697,6.775635L20,20H15.235352z" />
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SecondNav;
