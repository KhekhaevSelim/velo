import React, { useEffect, useState } from "react";
import style from "./LinaerProgress.module.css"

const LinearProgress = () => {
  /**
   * изначально это была линия програсса))
   */
    // const [progressValue, setProgressValue] = useState<number>(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setProgressValue(prevValue => (prevValue < 100 ? prevValue + 10 : prevValue));
    //     });
    //     if (progressValue === 100) {
    //       clearInterval(interval);
    //     }
    //     return () => clearInterval(interval);
    //   }, []);

    return (
        <div className={style.container}>
           <div className={style.line} >

           </div>
        </div>
    )
}
export default LinearProgress;