import settingBg from "../assets/settingBg.png";
import { useState } from "react";

const BasicSettingRegion = () => {

    // dummy
    const regionData = [
        {
            id: 1,
            province: "강남구",
            town: ["개포동", "논현동", "대치동", "도곡동", "삼성동", "세곡동", "수서동", "신사동", "압구정동", "역삼동", "일원동", "자곡동", "청담동"]
        },

        {
            id: 2,
            province: '강북구',
            town: ['수유1동', '우이동', '인수동', '번동', '미아동']
        },
        {
            id: 3,
            province: '서대문구',
            town: ['신촌동', '연희동', '북아현동', '홍제동', '충정로']
        },
        {
            id: 4,
            province: '종로구',
            town: ['삼청동', '청운동', '평창동', '혜화동']
        },
        {
            id: 5,
            province: '마포구',
            town: ['합정동', '서교동', '망원동', '도화동', '공덕동']
        },
        {
            id: 6,
            province: '용산구',
            town: ['이태원동', '한남동', '동빙고동', '용산2가동', '이촌동']
        },
        {
            id: 7,
            province: '중구',
            town: ['광희동', '회현동', '필동', '신당동', '을지로동']
        },
        {
            id: 8,
            province: '동대문구',
            town: ['휘경동', '이문동', '전농동', '제기동', '용두동']
        },
        {
            id: 9,
            province: '성북구',
            town: ['성북동', '삼선동', '돈암동', '안암동', '종암동']
        },
        {
            id: 10,
            province: '강서구',
            town: ['염창동', '등촌동', '화곡동', '가양동', '방화동']
        },
        {
            id: 11,
            province: '송파구',
            town: ['잠실동', '풍납동', '문정동', '가락동', '방이동']
        },
        {
            id: 12,
            province: '영등포구',
            town: ['여의도동', '영등포동', '당산동', '문래동', '양평동']
        },
        {
            id: 13,
            province: '구로구',
            town: ['신도림동', '구로동', '고척동', '개봉동', '오류동']
        },
        {
            id: 14,
            province: '노원구',
            town: ['상계동', '월계동', '하계동', '중계동', '공릉동']
        },
        {
            id: 15,
            province: '양천구',
            town: ['신월동', '신정동', '목동', '양천동', '금호동']
        }
    ];


    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedTown, setSelectedTown] = useState(null);
    const [userSelection, setUserSelection] = useState([]);

    const handleProvinceClick = (province) => {
        setSelectedProvince(province);
        setSelectedTown(null); // Reset the selected town
    };

    const handleTownClick = (town) => {
        setSelectedTown(town);
        setUserSelection((prevSelection) => [...prevSelection, { province: selectedProvince, town }]);
    };

    const CheckIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="rgba(34, 197, 94, 1)">
                <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z"></path>
            </svg>
        );
    };


    return (
        <div>
            region
        </div>
    );
};

export default BasicSettingRegion;
