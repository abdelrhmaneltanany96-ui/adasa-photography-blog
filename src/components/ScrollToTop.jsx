import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    return null;
}


/**
 * دا كمبوننت عشان نعمل اسموز سكرول ويطلع ل او البيدج 
 * top=0 & left=0
 * استخدم حاجات من ريأكت
 * useeffect اعتقد دي اللي بتعمل الاسكرول وبتاخد اللكويشن بتاعها من 
 * uselocation اللي متخزن جوا pathname
 */

