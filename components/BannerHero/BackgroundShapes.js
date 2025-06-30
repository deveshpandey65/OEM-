import Image from 'next/image';
import React from 'react';

export default function BackgroundShapes() {
    return (
        <div className="absolute inset-0 z-0">
            <Image src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-01.png" alt="shape1" width={293} height={293} className="absolute left-0 top-0"  />
            <Image src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-02.png" alt="shape2" width={620} height={490} className="absolute left-1/2 top-0 -translate-x-1/2" />
            <Image src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-03.png" alt="shape3" width={30} height={30} className="absolute bottom-4 left-1/3 animate-spin-fast" />
            <Image src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-04.png" alt="shape4" width={50} height={50} className="absolute top-[5%] left-[9%]" />
            <Image src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-05.png" alt="shape5" width={18} height={18} className="absolute bottom-[5%] left-[10%] " />
            <Image src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-06.png" alt="shape6" width={9} height={9} className="absolute top-[13%] left-[15%]" />
            <Image src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-07.png" alt="shape7" width={9} height={9} className="absolute left-1/2 top-[30%] -translate-x-1/2" />
            <Image src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-05.png" alt="shape8" width={9} height={9} className="absolute left-1/3 top-10 -translate-x-1/2" />
            <Image src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-06.png" alt="shape9" width={18} height={18} className="absolute top-[60%] left-[80%]" />
            <Image
                src="https://dreamsrent.dreamstechnologies.com/html/template/assets/img/bg/ban-bg-03.png"
                alt="shape10"
                width={50}
                height={50}
                className="absolute top-2 right-2 animate-spin-fast"
            />        
        </div>
    );
}
