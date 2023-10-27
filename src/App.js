function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="app-items">
          <div className="shopping-list-container">
            <div className="shopping-list">
              <h2 className="heading">Shopping List</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="285"
                height="329"
                viewBox="0 0 285 329"
                fill="none"
                className="top-left"
              >
                <g filter="url(#filter0_f_1_5)">
                  <circle cy="44" r="85" fill="#FFECF5" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_1_5"
                    x="-285"
                    y="-241"
                    width="570"
                    height="570"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_1_5"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="313"
                height="303"
                viewBox="0 0 313 303"
                fill="none"
                className="bottom-left"
              >
                <g filter="url(#filter0_f_1_7)">
                  <circle cx="50.5" cy="262.5" r="62.5" fill="#8600FF" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_1_7"
                    x="-212"
                    y="0"
                    width="525"
                    height="525"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_1_7"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="438"
                height="370"
                viewBox="0 0 438 370"
                fill="none"
                className="bottom-center"
              >
                <g filter="url(#filter0_f_1_8)">
                  <circle cx="215" cy="314" r="114" fill="#FFC285" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_1_8"
                    x="-99"
                    y="0"
                    width="628"
                    height="628"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_1_8"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="325"
                height="283"
                viewBox="0 0 325 283"
                fill="none"
                className="bottom-right"
              >
                <g filter="url(#filter0_f_1_9)">
                  <circle cx="262.5" cy="262.5" r="62.5" fill="#FF0000" />
                </g>
                <defs>
                  <filter
                    id="filter0_f_1_9"
                    x="0"
                    y="0"
                    width="525"
                    height="525"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="100"
                      result="effect1_foregroundBlur_1_9"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="inputs">
                <input
                  className="title-input"
                  type="text"
                  placeholder="Title"
                  value="tahir"
                />
                <input className="value-input" type="number" />
                <span className="button">Add</span>
              </div>
              <ul className="items-list">
                <li className="item">
                  <p>
                    <span className="item-number">14</span>
                    <span className="item-title">Buy Banana</span>
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M22.1312 9.63126L20.3687 7.86876L15 13.2375L9.63124 7.86876L7.86874 9.63126L13.2375 15L7.86874 20.3688L9.63124 22.1313L15 16.7625L20.3687 22.1313L22.1312 20.3688L16.7625 15L22.1312 9.63126Z"
                      fill="#FFD700"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div className="side-img-container">
            <img src="/side-img.png" alt="side-igm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
