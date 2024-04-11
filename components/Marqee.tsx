import React from 'react'

const Marqee = () => {
  const translateX = useRef<number>(0);
  const [x, setX] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      // translateX.current = translateX.current + 10;
      setX((x) => x + 10);
    }, 500);
  }, []);

  console.log("translateRef: ", x);
  
  const style: React.CSSProperties = {
    // transform: `translateX(${x}px)`,
    width: "100000px",
    marginLeft: "0px",
    animation:
      "6.48333s linear 0s infinite normal none running marqueeAnimation",
  };

  return (
    <div className="marquee-with-options border w-[600px] overflow-hidden">
      <div style={style} className="js-marquee-wrapper">
        <div className="js-marquee mr-[50px] float-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit END.
        </div>
        <div className="js-marquee mr-[50px] float-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit END.
        </div>
      </div>
    </div>
  );
}

export default Marqee