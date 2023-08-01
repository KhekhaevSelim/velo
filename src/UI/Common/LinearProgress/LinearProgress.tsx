import React, { useEffect, useState } from "react";
import style from "./LinaerProgress.module.css"

const LinearProgress = () => {
    const [progressValue, setProgressValue] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setProgressValue(prevValue => (prevValue < 100 ? prevValue + 10 : 0));
        },800);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div className={style.container}>
           <div className={style.line} style={{ width: `${progressValue}%` }}>

           </div>
        </div>
    )
}
export default LinearProgress;